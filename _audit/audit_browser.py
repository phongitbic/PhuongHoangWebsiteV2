#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Browser audit v2: khktphuonghoang.com (Live Server 127.0.0.1:5500)

Thay đổi so với v1 (khắc phục nhiễu do Live Server auto-reload):
  - Ảnh ghi vào thư mục TẠM ngoài docroot (v1 ghi vào _audit/ bên trong thư mục
    Live Server đang watch -> mỗi file mới = 1 lần reload -> hỏng test).
  - Cuối phiên mới copy ảnh vào _audit/screenshots/.
  - Test chức năng click qua JS evaluate (không dính stale handle).
  - Thêm phase chụp cận cảnh header (1280x260 + 390x320) mọi trang.
"""
import json
import re
import shutil
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("[LOI] Chua cai playwright. Chay: pip install playwright  roi  python -m playwright install chromium")
    sys.exit(2)

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BASE = "http://127.0.0.1:5500"
OUT = Path(__file__).parent
TMP = Path(tempfile.gettempdir()) / "khkt_audit"
SHOTS = TMP / "screenshots"
FINAL_SHOTS = OUT / "screenshots"

FULL_PAGES = [
    ("phong", "phong.html", True),
    ("products", "products.html", True),
    ("product-detail", "product-detail.html?id=ind-001", True),
    ("product-detail-fallback", "product-detail.html?id=khong-ton-tai-xyz", True),
    ("projects", "projects.html", True),
    ("about-us", "about-us.html", True),
    ("distribution-system", "distribution-system.html", True),
    ("certificates", "certificates.html", True),
    ("news", "news.html", True),
    ("contact", "contact.html", True),
    ("leakage-detector", "leakage-detector.html", True),
    ("surge-protection", "surge-protection.html", True),
]
LIGHT_PAGES = [
    ("purchase-policy", "purchase-policy.html", False),
    ("warranty-policy", "warranty-policy.html", False),
    ("exchange-policy", "exchange-policy.html", False),
    ("shipping-policy", "shipping-policy.html", False),
    ("payment-policy", "payment-policy.html", False),
    ("privacy-policy", "privacy-policy.html", False),
    ("sales-policy", "sales-policy.html", False),
    ("404", "404.html", False),
]
ALL_PAGES = FULL_PAGES + LIGHT_PAGES


def http_status(url):
    try:
        with urllib.request.urlopen(url, timeout=5) as r:
            return r.status
    except urllib.error.HTTPError as e:
        return e.code
    except Exception:
        return None


def collect_page_stats(page):
    stats = {"console": [], "failed": []}
    page.on("console", lambda m: stats["console"].append(m.text[:300]) if m.type == "error" else None)
    page.on("pageerror", lambda e: stats["console"].append("PAGEERROR: " + str(e)[:300]))
    page.on("response", lambda r: stats["failed"].append(str(r.status) + " " + r.url)
            if r.status >= 400 else None)
    page.on("requestfailed", lambda r: stats["failed"].append("FAILED " + r.url))
    return stats


def settle(page, ms=1500):
    try:
        page.evaluate("document.fonts.ready")
    except Exception:
        pass
    page.wait_for_timeout(ms)


def full_scroll(page, step=600, wait=90):
    h = page.evaluate("document.body.scrollHeight") or 4000
    y = 0
    while y < h:
        page.evaluate("window.scrollTo(0, %d)" % y)
        page.wait_for_timeout(wait)
        y += step
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(1200)


METRICS_JS = """
() => {
  const res = {};
  res.lang = document.documentElement.lang || '';
  res.title = document.title || '';
  const md = document.querySelector('meta[name="description"]');
  res.metaDescription = md ? md.content : null;
  const can = document.querySelector('link[rel="canonical"]');
  res.canonical = can ? can.href : null;
  res.og = [...document.querySelectorAll('meta[property^="og:"]')].map(m => m.getAttribute('property'));
  res.twitter = [...document.querySelectorAll('meta[name^="twitter:"]')].map(m => m.name);
  res.hreflang = document.querySelectorAll('link[rel="alternate"][hreflang]').length;
  res.h1 = [...document.querySelectorAll('h1')].map(h => h.textContent.trim().slice(0, 120));
  res.h1Count = res.h1.length;
  res.headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')]
      .map(h => h.tagName.toLowerCase() + ': ' + h.textContent.trim().slice(0, 80));
  const imgs = [...document.querySelectorAll('img')];
  res.imgsTotal = imgs.length;
  res.imgsMissingAlt = imgs.filter(i => !i.hasAttribute('alt') || i.alt.trim() === '').length;
  res.imgsBroken = imgs.filter(i => i.complete && i.naturalWidth === 0).length;
  res.imgsNoDims = imgs.filter(i => !(i.hasAttribute('width') && i.hasAttribute('height'))).length;
  const hdr = document.querySelector('header');
  let ref = null;
  if (hdr) {
    let best = null, bw = 0;
    hdr.querySelectorAll('[class]').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.width > bw && r.width <= window.innerWidth + 1) { bw = r.width; best = el; }
    });
    if (best) { const r = best.getBoundingClientRect(); ref = { left: +r.left.toFixed(1), right: +r.right.toFixed(1), width: +r.width.toFixed(1) }; }
    res.headerHeight = +hdr.getBoundingClientRect().height.toFixed(1);
    res.headerPosition = getComputedStyle(hdr).position;
  }
  res.headerEdges = ref;
  const secs = [];
  document.querySelectorAll('section, header, footer').forEach(sec => {
    const sr = sec.getBoundingClientRect();
    if (sr.height < 40) return;
    const info = { tag: sec.tagName.toLowerCase(), cls: (typeof sec.className === 'string' ? sec.className : '').slice(0, 90), id: sec.id || '' };
    let c = null, cw = 0;
    sec.querySelectorAll('[class*="container"], [class*="inner"], [class*="wrap"]').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.width > cw) { cw = r.width; c = el; }
    });
    if (c) {
      const cr = c.getBoundingClientRect();
      info.content = { left: +cr.left.toFixed(1), right: +cr.right.toFixed(1), width: +cr.width.toFixed(1) };
    }
    secs.push(info);
  });
  res.sections = secs;
  res.overflowX = document.documentElement.scrollWidth - document.documentElement.clientWidth;
  const bad = [];
  document.querySelectorAll('body *').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width > 0 && r.height > 0 && (r.right > window.innerWidth + 2 || r.left < -2)) {
      if (bad.length < 15) {
        const c0 = (typeof el.className === 'string' ? el.className : '').split(' ')[0];
        bad.push(el.tagName.toLowerCase() + (c0 ? '.' + c0 : '') + ' L' + Math.round(r.left) + ' R' + Math.round(r.right));
      }
    }
  });
  res.overflowEls = bad;
  res.bodyTextLen = (document.body.innerText || '').length;
  res.emDashTitle = (document.title.match(/[–—]/g) || []).length;
  res.emDashBody = (document.body.innerText.match(/[–—]/g) || []).length;
  res.emDashMeta = [...document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]')]
      .filter(m => /[–—]/.test(m.content || '')).length;
  res.fontsCheck = (function(){
    // Chi kiem tra font thuc su duoc DUNG tren trang (computed font-family cua phan tu).
    const names = ['Plus Jakarta Sans', 'JetBrains Mono', 'Noto Sans SC'];
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
  res.fallbackPanel = !!document.querySelector('.ph-fallback-panel');
  res.articleSem = {
    article: !!document.querySelector('article.article-wrap'),
    header: !!document.querySelector('header.article-header'),
    content: !!document.querySelector('section.article-content'),
    aside: !!document.querySelector('aside.detail-sidebar'),
    related: !!document.querySelector('section.related-articles-section[aria-labelledby]')
  };
  return res;
}
"""


def shot(page, path, full=False, q=78):
    try:
        page.screenshot(path=str(SHOTS / path), full_page=full, type="jpeg", quality=q)
        return True
    except Exception as e:
        print("    [shot fail] %s: %s" % (path, str(e)[:100]))
        return False


def page_url(spec):
    rel = spec[1]
    return rel if rel.startswith("http") else BASE + "/" + rel


def js_click(page, selector):
    return page.evaluate("""(sel) => {
        const el = document.querySelector(sel);
        if (!el) return false;
        el.click();
        return true;
    }""", selector)


def functional_tests(page, name, page_data):
    acts = []
    try:
        if name == "phong":
            # FAQ tabs (role=tablist/role=tab pattern -> dung aria-selected)
            r = page.evaluate("""() => {
                const tabs = document.querySelectorAll('button[id^="faq-tab"]');
                const out = [];
                tabs.forEach((t, i) => { if (i < 6) { t.click(); } });
                return { total: tabs.length };
            }""")
            page.wait_for_timeout(800)
            states = page.evaluate("""() => {
                return [...document.querySelectorAll('button[id^="faq-tab"]')].slice(0, 6)
                    .map(t => ({ id: t.id, ariaSelected: t.getAttribute('aria-selected'),
                                 hasControls: t.getAttribute('aria-controls'),
                                 panelVisible: (() => { const p = document.getElementById(t.getAttribute('aria-controls')); return p ? (p.classList.contains('is-active') || p.getAttribute('hidden') === null && getComputedStyle(p).display !== 'none') : false; })() }));
            }""")
            if states:
                for s in states:
                    ok = s["ariaSelected"] in ("true", "false") and s["hasControls"]
                    acts.append({"name": "faq-tab", "id": s["id"], "aria-selected": s["ariaSelected"],
                                 "status": "pass" if ok else "fail"})
            else:
                acts.append({"name": "faq-tab", "status": "skipped", "detail": "khong tim thay tab"})
            shot(page, "phong_action_faq.jpg")
            # Language switcher
            r = page.evaluate("""() => {
                const cands = [...document.querySelectorAll('header [data-lang], header [class*="lang"] button, header [class*="lang"] a, .lang-switch button, header button')];
                const en = cands.find(c => /en|english|eng/i.test(c.textContent || '') && (c.textContent || '').length < 12);
                if (en) { en.click(); return { clicked: true, text: en.textContent.trim().slice(0, 20) }; }
                return { clicked: false };
            }""")
            page.wait_for_timeout(900)
            lang = page.evaluate("document.documentElement.lang || ''")
            acts.append({"name": "language", "action": "to-EN", "clicked": r.get("clicked"),
                         "htmlLang": lang, "status": "pass" if lang == "en" else ("skipped" if not r.get("clicked") else "fail")})
            if r.get("clicked"):
                shot(page, "phong_action_lang_en.jpg")
                page.evaluate("""() => {
                    const cands = [...document.querySelectorAll('header [data-lang], header [class*="lang"] button, header [class*="lang"] a, .lang-switch button, header button')];
                    const vi = cands.find(c => /vi|vietnamese|tiếng việt|tieng viet/i.test(c.textContent || '') && (c.textContent || '').length < 12);
                    if (vi) vi.click();
                }""")
                page.wait_for_timeout(600)
        if name == "products":
            # Click vao item danh muc that su (khong phai nut toggle sidebar)
            r = page.evaluate("""() => {
                const cards0 = document.querySelectorAll('.ph-product-card').length;
                const item = document.querySelector('.ph-sidebar-item[data-cat]:not(.active)');
                if (item) item.click();
                return { before: cards0, clicked: !!item, cat: item ? item.getAttribute('data-cat') : null };
            }""")
            page.wait_for_timeout(800)
            after = page.evaluate("document.querySelectorAll('.ph-product-card').length")
            acts.append({"name": "category-filter", "cardsBefore": r.get("before"), "cardsAfter": after,
                         "cat": r.get("cat"),
                         "status": "pass" if (r.get("clicked") and after != r.get("before")) or not r.get("clicked") else "fail"})
            shot(page, "products_action_filter.jpg")
            r2 = page.evaluate("""() => {
                const sel = document.querySelector('select[id*="sort"], select[class*="sort"], [class*="sort"] select');
                if (!sel || !sel.options || sel.options.length < 2) return false;
                sel.selectedIndex = 1;
                sel.dispatchEvent(new Event('change', { bubbles: true }));
                return true;
            }""")
            page.wait_for_timeout(700)
            acts.append({"name": "sort", "status": "pass" if r2 else "skipped"})
        if name == "projects":
            # Click filter "domestic" (khong phai "all": dang active san)
            r = page.evaluate("""() => {
                const cards0 = document.querySelectorAll('.ph-proj-card').length;
                const btn = document.querySelector('.ph-proj-filter-btn[data-filter="domestic"]');
                if (btn) btn.click();
                return { before: cards0, clicked: !!btn };
            }""")
            page.wait_for_timeout(800)
            after = page.evaluate("""() => { var cs = document.querySelectorAll('.ph-proj-card'); var n = 0; cs.forEach(function(c){ if (c.offsetParent !== null || getComputedStyle(c).display !== 'none') n++; }); return n; }""")
            acts.append({"name": "sector-filter", "cardsBefore": r.get("before"), "cardsAfter": after,
                         "status": "pass" if (r.get("clicked") and after != r.get("before")) or not r.get("clicked") else "fail"})
            shot(page, "projects_action_filter.jpg")
        if name == "certificates":
            r = page.evaluate("""() => {
                const card = document.querySelector('[class*="cert-card"], [class*="certificate"] a, [class*="cert"] a, [class*="cert"] button');
                if (card) card.click();
                return !!card;
            }""")
            page.wait_for_timeout(900)
            vis = page.evaluate("""() => {
                const lb = document.querySelector('[class*="lightbox"], [class*="modal"]');
                if (!lb) return false;
                const r = lb.getBoundingClientRect();
                return r.width > 10 && r.height > 10;
            }""")
            acts.append({"name": "lightbox-open", "status": "pass" if vis else ("fail" if r else "skipped")})
            if vis:
                shot(page, "certificates_action_lightbox.jpg")
                page.evaluate("""() => {
                    const c = document.querySelector('[class*="lightbox"] [class*="close"], [class*="modal"] [class*="close"]');
                    if (c) c.click();
                }""")
                page.wait_for_timeout(500)
                vis2 = page.evaluate("""() => {
                    const lb = document.querySelector('[class*="lightbox"], [class*="modal"]');
                    if (!lb) return true;
                    const r = lb.getBoundingClientRect();
                    return r.width < 10 || r.height < 10;
                }""")
                acts.append({"name": "lightbox-close", "status": "pass" if vis2 else "fail"})
        if name == "news":
            link = page.query_selector('a[href*="news-detail.html?id="]')
            if link:
                try:
                    href = link.get_attribute("href")
                    page_data["_newsDetailHref"] = href
                    acts.append({"name": "news-card-link", "href": href, "status": "pass"})
                except Exception as e:
                    acts.append({"name": "news-card-link", "status": "fail", "detail": str(e)[:120]})
            else:
                acts.append({"name": "news-card-link", "status": "skipped"})
        if name == "contact":
            # KHONG SUBMIT THUC (quy tac an toan): chi kiem tra cau truc + validation
            r = page.evaluate("""() => {
                const out = {};
                out.formExists = !!document.getElementById('contactForm');
                out.novalidate = (document.getElementById('contactForm') || {}).hasAttribute('novalidate');
                const ids = ['cf-name','cf-phone','cf-email','cf-need','cf-msg'];
                out.fields = {};
                for (const id of ids) {
                    const el = document.getElementById(id);
                    out.fields[id] = el ? {
                        tag: el.tagName.toLowerCase(),
                        required: el.hasAttribute('required'),
                        ariaRequired: el.getAttribute('aria-required'),
                        labelFor: !!document.querySelector('label[for="' + id + '"]'),
                        hasErrorEl: !!document.getElementById(id + '-error'),
                        errorRoleAlert: (document.getElementById(id + '-error') || {}).getAttribute('role'),
                        ariaDescribedPattern: true
                    } : null;
                }
                out.submitBtn = !!document.getElementById('cf-submit');
                out.sendingEl = !!document.querySelector('.ph-form-sending');
                out.successRegion = (() => {
                    const s = document.getElementById('contactFormSuccess');
                    return s ? { role: s.getAttribute('role'), ariaLive: s.getAttribute('aria-live'), hidden: s.hidden } : null;
                })();
                out.formNote = (document.querySelector('.ph-form-note') || {}).textContent || '';
                out.mailtoNote = /mailto|email/i.test(out.formNote);
                // Validation dry-run: fill bat hop le -> goi reportValidity? Khong.
                // Kiem tra handler co mat qua kich ban an toan: dien lieu sai roi click submit
                // nhung chan truoc khi mailto (khong the chan 100%) -> thay vao do:
                // chi verify input da dien duoc + validation JS ton tai (script inline co FIELDS).
                const scriptText = [...document.querySelectorAll('script')].map(s => s.textContent).join('\\n');
                out.hasValidationJs = /FIELDS/.test(scriptText) && /showError/.test(scriptText);
                out.hasBuildMailto = /buildMailto/.test(scriptText) && /mailto:info@khktphuonghoang.com/.test(scriptText);
                return out;
            }""")
            fails = []
            if not r.get("formExists"): fails.append("form#contactForm thieu")
            if not r.get("submitBtn"): fails.append("cf-submit thieu")
            if not r.get("sendingEl"): fails.append(".ph-form-sending thieu")
            if not r.get("hasValidationJs"): fails.append("validation JS thieu")
            if not r.get("hasBuildMailto"): fails.append("buildMailto thieu")
            sr = r.get("successRegion")
            if not sr: fails.append("contactFormSuccess thieu")
            elif sr.get("role") != "status" or sr.get("ariaLive") != "polite": fails.append("success region sai role/aria-live")
            for fid, f in (r.get("fields") or {}).items():
                if not f: fails.append(fid + " thieu")
                else:
                    if not f["required"]: fails.append(fid + " thieu required")
                    if f["ariaRequired"] != "true": fails.append(fid + " thieu aria-required")
                    if not f["labelFor"]: fails.append(fid + " thieu label[for]")
                    if not f["hasErrorEl"]: fails.append(fid + " thieu element error")
                    if f["errorRoleAlert"] != "alert": fails.append(fid + "-error thieu role=alert")
            acts.append({"name": "form-fields", **r,
                         "failures": fails,
                         "status": "pass" if not fails and r.get("formExists") else "fail"})
    except Exception as e:
        acts.append({"name": "functional", "status": "error", "detail": str(e)[:200]})
    return acts


def mobile_menu_test(page, name):
    acts = []
    try:
        r = page.evaluate("""() => {
            const btn = document.querySelector('header [class*="menu"], header [class*="toggle"], header [class*="burger"], button[aria-label*="enu"], button[aria-label*="Menu"], [class*="menu-toggle"]');
            if (!btn) return { clicked: false };
            btn.click();
            return { clicked: true };
        }""")
        page.wait_for_timeout(600)
        vis = page.evaluate("""() => {
            const cands = [...document.querySelectorAll('header [class*="menu"], header nav, [class*="mobile-nav"]')];
            for (const c of cands) { const r = c.getBoundingClientRect(); if (r.width > 10 && r.height > 10) return true; }
            return false;
        }""")
        acts.append({"name": "mobile-menu", "status": "pass" if vis else ("skipped" if not r.get("clicked") else "fail")})
        shot(page, name + "_action_mobile_menu.jpg")
    except Exception as e:
        acts.append({"name": "mobile-menu", "status": "error", "detail": str(e)[:150]})
    return acts


def audit_page(pw, spec, full):
    name, rel, _ = spec
    print("[AUDIT] %s" % name)
    data = {"name": name, "url": page_url(spec), "status": None, "console_errors": [],
            "failed_requests": [], "alignment": {}, "overflow": {}, "overflowEls": {},
            "actions": [], "screenshots": [], "seo": {}, "headerStrips": []}
    browser = pw.chromium.launch(headless=True)
    ctx = browser.new_context(viewport={"width": 1280, "height": 900}, device_scale_factor=1)
    page = ctx.new_page()
    stats = collect_page_stats(page)
    try:
        resp = page.goto(data["url"], wait_until="load", timeout=30000)
        data["status"] = resp.status if resp else None
        settle(page, 1600)
        full_scroll(page)
        m = page.evaluate(METRICS_JS)
        data["seo"] = {k: m[k] for k in ("lang", "title", "metaDescription", "canonical", "og", "twitter",
                                          "hreflang", "h1", "h1Count", "headings", "imgsTotal",
                                          "imgsMissingAlt", "imgsBroken", "imgsNoDims",
                                          "headerHeight", "headerPosition", "bodyTextLen",
                                          "emDashTitle", "emDashBody", "emDashMeta",
                                          "fontsCheck", "fallbackPanel", "articleSem")}
        data["alignment"] = {"headerEdges": m.get("headerEdges"),
                             "headerHeight": m.get("headerHeight"),
                             "sections": m.get("sections", [])}
        data["overflow"]["1280"] = m.get("overflowX", 0)
        # section screenshots
        handles = page.query_selector_all("section, header, footer")
        shot_idx = 0
        for h in handles:
            try:
                bh = h.bounding_box()
                if not bh or bh["height"] < 40:
                    continue
                path = "%s_1280_s%02d.jpg" % (name, shot_idx)
                h.screenshot(path=str(SHOTS / path), type="jpeg", quality=80)
                data["screenshots"].append(path)
                shot_idx += 1
            except Exception:
                pass
        if full:
            shot(page, name + "_1280_full.jpg", full=True, q=72)
            data["screenshots"].append(name + "_1280_full.jpg")
        data["actions"] += functional_tests(page, name, data)
        # 768
        page.set_viewport_size({"width": 768, "height": 1024})
        page.goto(data["url"], wait_until="load", timeout=30000)
        settle(page, 1300)
        full_scroll(page)
        m = page.evaluate(METRICS_JS)
        data["overflow"]["768"] = m.get("overflowX", 0)
        data["overflowEls"]["768"] = m.get("overflowEls", [])
        shot(page, name + "_768_fold.jpg", q=75)
        data["screenshots"].append(name + "_768_fold.jpg")
        # 390
        page.set_viewport_size({"width": 390, "height": 844})
        page.goto(data["url"], wait_until="load", timeout=30000)
        settle(page, 1300)
        full_scroll(page)
        m = page.evaluate(METRICS_JS)
        data["overflow"]["390"] = m.get("overflowX", 0)
        data["overflowEls"]["390"] = m.get("overflowEls", [])
        shot(page, name + "_390_full.jpg", full=True, q=68)
        data["screenshots"].append(name + "_390_full.jpg")
        if name in ("phong", "products", "news", "projects", "certificates"):
            data["actions"] += mobile_menu_test(page, name)
    except Exception as e:
        data["loadError"] = str(e)[:300]
        print("  [ERROR] %s: %s" % (name, str(e)[:150]))
    data["console_errors"] = stats["console"]
    data["failed_requests"] = stats["failed"]
    browser.close()
    print("  -> %s | console errors: %d | failed req: %d | shots: %d" %
          (data["status"], len(data["console_errors"]), len(data["failed_requests"]), len(data["screenshots"])))
    return data


def header_strips(pw):
    """Chup canh canh header moi trang: 1280x260 va 390x320."""
    print("[HEADER STRIPS]")
    browser = pw.chromium.launch(headless=True)
    strips = []
    ctx = browser.new_context(viewport={"width": 1280, "height": 260})
    page = ctx.new_page()
    for spec in ALL_PAGES:
        name, rel, _ = spec
        try:
            page.goto(page_url(spec), wait_until="load", timeout=30000)
            page.wait_for_timeout(1400)
            p = name + "_header_1280.jpg"
            page.screenshot(path=str(SHOTS / p), type="jpeg", quality=88)
            strips.append(p)
        except Exception as e:
            print("  [strip fail] %s: %s" % (name, str(e)[:100]))
    ctx.close()
    ctx = browser.new_context(viewport={"width": 390, "height": 320})
    page = ctx.new_page()
    for spec in ALL_PAGES:
        name, rel, _ = spec
        try:
            page.goto(page_url(spec), wait_until="load", timeout=30000)
            page.wait_for_timeout(1400)
            p = name + "_header_390.jpg"
            page.screenshot(path=str(SHOTS / p), type="jpeg", quality=88)
            strips.append(p)
        except Exception as e:
            print("  [strip fail] %s: %s" % (name, str(e)[:100]))
    browser.close()
    return strips


def main():
    print("=== BROWSER AUDIT v2 ===")
    st = http_status(BASE + "/phong.html")
    if st is None:
        print("[LOI] Khong ket noi duoc %s" % BASE)
        print("      Hay mo Live Server (VS Code, nut Go Live, port 5500) roi chay lai.")
        sys.exit(1)
    print("Live Server OK (phong.html -> %s)" % st)
    root_status = http_status(BASE + "/")
    print("Root '/' -> %s" % (root_status if root_status else "khong phan hoi"))

    # P2.5: root phai redirect ve phong.html, khong duoc la directory listing
    root_check = {"status": root_status, "redirectOk": False, "isListing": False}
    try:
        with urllib.request.urlopen(BASE + "/", timeout=5) as r:
            body = r.read(6000).decode("utf-8", "replace")
        root_check["redirectOk"] = "phong.html" in body
        root_check["isListing"] = ("Index of" in body) or ("Directory listing" in body)
        root_check["hasCanonicalRoot"] = 'href="https://khktphuonghoang.com/"' in body
    except Exception as e:
        root_check["error"] = str(e)[:120]

    # P2.3: sitemap: 40 URL, 0 duplicate, khong co surge-protection (noindex)
    sitemap_check = {"status": None, "urlCount": 0, "dupes": [], "surgePresent": False}
    try:
        with urllib.request.urlopen(BASE + "/sitemap.xml", timeout=5) as r:
            sxml = r.read().decode("utf-8", "replace")
        sitemap_check["status"] = r.status
        locs = re.findall(r"<loc>([^<]+)</loc>", sxml)
        sitemap_check["urlCount"] = len(locs)
        seen = {}
        for u in locs:
            seen[u] = seen.get(u, 0) + 1
        sitemap_check["dupes"] = [u for u, c in seen.items() if c > 1]
        sitemap_check["surgePresent"] = any("surge-protection" in u for u in locs)
        sitemap_check["pdCount"] = sum(1 for u in locs if "product-detail" in u)
        sitemap_check["ndCount"] = sum(1 for u in locs if "news-detail" in u)
    except Exception as e:
        sitemap_check["error"] = str(e)[:120]

    report = {"generated": time.strftime("%Y-%m-%d %H:%M:%S"), "base": BASE,
              "rootStatus": root_status, "rootCheck": root_check,
              "sitemapCheck": sitemap_check, "pages": []}

    with sync_playwright() as pw:
        for spec in FULL_PAGES:
            report["pages"].append(audit_page(pw, spec, True))
        for spec in LIGHT_PAGES:
            report["pages"].append(audit_page(pw, spec, False))
        # news-detail: dung href that phat hien tu news.html
        href = None
        for p in report["pages"]:
            if p.get("_newsDetailHref"):
                href = p["_newsDetailHref"]
                break
        if href:
            report["pages"].append(audit_page(pw, ("news-detail", href, True), True))
        strips = header_strips(pw)

    # Copy ket qua tu thu muc tam ra _audit/screenshots (sau khi tat browser)
    FINAL_SHOTS.mkdir(exist_ok=True)
    copied = 0
    for f in SHOTS.glob("*.jpg"):
        shutil.copy2(f, FINAL_SHOTS / f.name)
        copied += 1
    shutil.rmtree(TMP, ignore_errors=True)
    for p in report["pages"]:
        p["headerStrips"] = [s for s in strips if s.startswith(p["name"] + "_header")]

    # P1.1: phan tich alignment: so sanh canh cua tung section voi canh header (1280px)
    # Ngoai le du kien: footer, section full-bleed, cot doc bai viet (reading column)
    for p in report["pages"]:
        al = p.get("alignment") or {}
        hedges = al.get("headerEdges")
        analysis = {"refLeft": (hedges or {}).get("left"), "refRight": (hedges or {}).get("right"),
                    "mismatches": [], "mismatchCount": 0}
        if hedges:
            for s in al.get("sections", []):
                c = s.get("content")
                if not c:
                    continue
                dl = round(c["left"] - hedges["left"], 1)
                dr = round(hedges["right"] - c["right"], 1)
                if abs(dl) > 24 or abs(dr) > 24:
                    analysis["mismatches"].append({
                        "tag": s["tag"], "cls": s["cls"][:60], "id": s["id"],
                        "deltaL": dl, "deltaR": dr})
        analysis["mismatchCount"] = len(analysis["mismatches"])
        al["analysis"] = analysis
        p["alignment"] = al

    out_json = OUT / "report.json"
    out_json.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print("\n=== XONG ===")
    print("Report: %s" % out_json)
    print("Screenshots: %s (%d files)" % (FINAL_SHOTS, copied))
    # Root + sitemap verdicts
    rc = report["rootCheck"]
    print("  ROOT '/'     status=%s redirect=%s listing=%s canonicalRoot=%s" %
          (rc.get("status"), rc.get("redirectOk"), rc.get("isListing"), rc.get("hasCanonicalRoot")))
    sc = report["sitemapCheck"]
    print("  SITEMAP      status=%s urls=%d dupes=%d surgePresent=%s pd=%d nd=%d" %
          (sc.get("status"), sc.get("urlCount"), len(sc.get("dupes", [])),
           sc.get("surgePresent"), sc.get("pdCount"), sc.get("ndCount")))
    if sc.get("error"):
        print("               ERROR: %s" % sc["error"])
    for p in report["pages"]:
        flag = []
        ov = p.get("overflow") or {}
        seo = p.get("seo") or {}
        if p.get("console_errors"):
            flag.append("console:%d" % len(p["console_errors"]))
        if p.get("failed_requests"):
            flag.append("404:%d" % len(p["failed_requests"]))
        if (ov.get("390") or 0) > 1:
            flag.append("overflow390:%dpx" % ov["390"])
        h1 = seo.get("h1Count", 0)
        if h1 not in (1, None):
            flag.append("h1:%s" % h1)
        if seo.get("emDashTitle") or seo.get("emDashBody") or seo.get("emDashMeta"):
            flag.append("emdash:t%d/b%d/m%d" % (seo.get("emDashTitle", 0),
                                                seo.get("emDashBody", 0), seo.get("emDashMeta", 0)))
        if seo.get("imgsMissingAlt"):
            flag.append("alt:%d" % seo["imgsMissingAlt"])
        if seo.get("imgsBroken"):
            flag.append("brokenImg:%d" % seo["imgsBroken"])
        badfonts = [f for f in (seo.get("fontsCheck") or []) if "MISSING" in f]
        if badfonts:
            flag.append("fonts:%s" % ",".join(badfonts))
        local_font_404 = [u for u in (p.get("failed_requests") or []) if "assets/fonts" in u]
        if local_font_404:
            flag.append("localFont404:%d" % len(local_font_404))
        gstatic_404 = [u for u in (p.get("failed_requests") or []) if "fonts.gstatic.com" in u]
        if gstatic_404:
            flag.append("gstatic404:%d (da co local fallback)" % len(gstatic_404))
        print("  %-22s status=%s  %s" % (p["name"], p.get("status"), (", ".join(flag) if flag else "OK")))


if __name__ == "__main__":
    main()
