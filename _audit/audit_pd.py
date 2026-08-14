#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Mini-audit v2: product-detail — 3 truong hop:
  1. valid    (id=ind-001)      : san pham binh thuong, related = 2, khong fallback
  2. model    (id=khkt-125)     : id model -> resolve ve ind-001, nut model active dung
  3. fallback (id=khong-ton-tai) : panel 404, h1 duy nhat, CTA ve products.html,
                                   canonical = products.html, schema bi go, khong em-dash
Kiem tra them: font da load, console error, broken image, overflow.
Output: _audit/pd_report.json + _audit/pd_shots/*.jpg"""
import json, re, sys, tempfile
from pathlib import Path
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
BASE = "http://127.0.0.1:5500"
OUT = Path(__file__).parent
TMP = Path(tempfile.gettempdir()) / "khkt_pd"
SHOTS = TMP / "shots"
FINAL = OUT / "pd_shots"

TARGETS = [
    ("valid",    BASE + "/product-detail.html?id=ind-001"),
    ("model",    BASE + "/product-detail.html?id=khkt-125"),
    ("fallback", BASE + "/product-detail.html?id=khong-ton-tai-xyz"),
]

METRICS = """
() => {
  const r = {};
  r.title = document.title;
  r.h1 = [...document.querySelectorAll('h1')].map(h => h.textContent.trim().slice(0,100));
  r.h1Count = r.h1.length;
  r.emDashTitle = (document.title.match(/—/g) || []).length;
  r.emDashBody = (document.body.innerText.match(/—/g) || []).length;
  r.emDashMeta = [...document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]')]
      .filter(m => (m.content || '').includes('—')).length;
  r.fallbackPanel = !!document.querySelector('.ph-fallback-panel');
  r.fallbackCat = (document.querySelector('.ph-fallback-panel .ph-info-cat') || {}).textContent || null;
  r.fallbackCtas = [...document.querySelectorAll('.ph-fallback-panel a')].map(a => a.getAttribute('href'));
  r.infoTitle = (document.getElementById('infoTitle') || {}).textContent || null;
  r.infoSku = (document.getElementById('infoSku') || {}).textContent || null;
  r.qs = ['qsVoltage','qsCurrent','qsStandard','qsProtection'].map(id => (document.getElementById(id)||{}).textContent);
  r.featureCards = document.querySelectorAll('.ph-feature-card').length;
  r.benefitCards = document.querySelectorAll('.ph-benefit-card').length;
  r.specRows = document.querySelectorAll('#specsFullBody tr').length;
  r.appCards = document.querySelectorAll('.ph-app-card').length;
  r.steps = document.querySelectorAll('.ph-step-item').length;
  r.modelBtns = document.querySelectorAll('.ph-model-btn').length;
  r.activeModel = (document.querySelector('.ph-model-btn.active') || {}).textContent || null;
  r.thumbs = document.querySelectorAll('.ph-detail-thumb').length;
  r.relatedCards = document.querySelectorAll('.related-card').length;
  r.mainImgSrc = (document.getElementById('mainImage')||{}).src || '';
  r.canonical = (document.querySelector('link[rel="canonical"]') || {}).href || null;
  r.productSchema = !!document.getElementById('product-detail-schema');
  r.fontsCheck = (function(){
    const names = ['Plus Jakarta Sans','JetBrains Mono','Noto Sans SC'];
    const used = {};
    document.querySelectorAll('h1,h2,h3,h4,h5,h6,body,p,li,span,code,.ph-sku,.sku').forEach(el => {
      const fam = getComputedStyle(el).fontFamily || '';
      names.forEach(n => { if (fam.includes(n)) used[n] = true; });
    });
    return names.map(n => {
      if (!used[n]) return n + '=UNUSED';
      return n + '=' + (document.fonts.check('16px "' + n + '"') ? 'OK' : 'MISSING');
    });
  })();
  r.overflowX = document.documentElement.scrollWidth - document.documentElement.clientWidth;
  r.brokenImgs = [...document.querySelectorAll('img')].filter(i => i.complete && i.naturalWidth === 0).length;
  return r;
}
"""

EXPECT = {
    "valid":    {"fallbackPanel": False, "h1Count": 1, "relatedCards": 2},
    "model":    {"fallbackPanel": False, "h1Count": 1},
    "fallback": {"fallbackPanel": True,  "h1Count": 1, "productSchema": False,
                 "emDashTitle": 0, "emDashBody": 0},
}

FONT_ERR = re.compile(r"fonts\.(googleapis|gstatic)\.com|assets/fonts|woff2|Failed to load resource.*font", re.I)


def judge(name, m):
    """Danh gia tung muc tieu so voi ky vong, tra ve danh sach fail."""
    fails = []
    exp = EXPECT.get(name, {})
    for k, v in exp.items():
        if m.get(k) != v:
            fails.append("%s=%r (mong doi %r)" % (k, m.get(k), v))
    if m.get("emDashTitle") or m.get("emDashBody") or m.get("emDashMeta"):
        fails.append("em-dash van con (title=%s body=%s meta=%s)" %
                     (m.get("emDashTitle"), m.get("emDashBody"), m.get("emDashMeta")))
    if name == "fallback":
        ctas = m.get("fallbackCtas") or []
        if not any("products.html" in (c or "") for c in ctas):
            fails.append("fallback khong co CTA ve products.html: %s" % ctas)
        if not (m.get("canonical") or "").endswith("products.html"):
            fails.append("fallback canonical sai: %s" % m.get("canonical"))
    if name == "model":
        if m.get("activeModel") is None and m.get("modelBtns", 0) > 0:
            fails.append("khong co model btn active")
    if m.get("brokenImgs", 0) > 0:
        fails.append("brokenImgs=%d" % m["brokenImgs"])
    if m.get("overflowX", 0) > 1:
        fails.append("overflowX=%dpx" % m["overflowX"])
    font_errs = [c for c in (m.get("console") or []) if FONT_ERR.search(c)]
    if font_errs:
        fails.append("console font error: %s" % font_errs[0][:140])
    m["_check"] = {"failures": fails, "status": "PASS" if not fails else "FAIL"}
    return fails


def main():
    print("=== PD MINI AUDIT v2 ===")
    import urllib.request
    try:
        st = urllib.request.urlopen(BASE + "/phong.html", timeout=5).status
    except Exception:
        print("[LOI] Live Server khong chay. Mo Live Server port 5500 truoc.")
        sys.exit(1)
    print("Live Server OK (%s)" % st)
    SHOTS.mkdir(parents=True, exist_ok=True)
    report = []
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True)
        ctx = browser.new_context(viewport={"width": 1280, "height": 900})
        page = ctx.new_page()
        for name, url in TARGETS:
            cons = []
            page.on("console", lambda m: cons.append(m.text[:200]) if m.type == "error" else None)
            try:
                page.goto(url, wait_until="load", timeout=30000)
                page.wait_for_timeout(2000)
                page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                page.wait_for_timeout(800)
                page.evaluate("window.scrollTo(0, 0)")
                page.wait_for_timeout(600)
                m = page.evaluate(METRICS)
                m["url"] = url
                m["console"] = list(cons)
                fails = judge(name, m)
                report.append(m)
                page.screenshot(path=str(SHOTS / (name + "_hero.jpg")), clip={"x": 0, "y": 0, "width": 1280, "height": 820}, type="jpeg", quality=88)
                page.screenshot(path=str(SHOTS / (name + "_full.jpg")), full_page=True, type="jpeg", quality=72)
                print(" %-8s h1=%d fallback=%s related=%d fonts=%s -> %s" % (
                    name, m["h1Count"], m["fallbackPanel"], m["relatedCards"],
                    ",".join(f.split("=")[1] for f in m["fontsCheck"]),
                    m["_check"]["status"]))
                if fails:
                    for f in fails:
                        print("        FAIL: %s" % f)
            except Exception as e:
                report.append({"url": url, "error": str(e)[:200]})
                print("  [ERROR] %s: %s" % (name, str(e)[:120]))
        browser.close()
    FINAL.mkdir(exist_ok=True)
    import shutil
    for f in SHOTS.glob("*.jpg"):
        shutil.copy2(f, FINAL / f.name)
    shutil.rmtree(TMP, ignore_errors=True)
    (OUT / "pd_report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print("\n=== PD XONG === -> _audit/pd_report.json + _audit/pd_shots/")


if __name__ == "__main__":
    main()
