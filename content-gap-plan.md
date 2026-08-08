# V2 Homepage — Content Gap Plan

**Date:** 2026-08-07  
**V1 source of truth:** `D:\www.khktphuonghoang.com\www.khktphuonghoang.com\assets\js\phong.js`, `products.js`, `projects.html`  
**V2 target:** `D:\www.khktphuonghoang.com\www.khktphuonghoang.v2\phong.html`

---

## Part A — Investigation Findings

### 1. The "500+ công trình" Claim

**Verdict: UNVERIFIABLE. Replace immediately.**

The claim appears 5 times in V2 (meta description, hero trust bar, FAQ answer 1, objection card 4, JSON-LD schema) but has zero evidence anywhere in V1:

- `projects.html` (V1) contains only 9 project entries, ALL using `placehold.co` placeholder images. No real project photos, no location data, no client names beyond generic templates (Vinhomes, Landmark 81, VSIP).
- `phong.js` (V1) `about.vi.achievement1Title` says "Hàng trăm khách hàng tin tưởng" (hundreds) — NOT "500+".
- No project count data structure exists anywhere in V1 code.

**Recommendation:** Replace "500+ công trình" with "Hàng trăm khách hàng tin tưởng" (matched to V1 about_tte claim) AND qualify with real specificity: "từ hộ gia đình đến nhà máy quy mô lớn" (from V1 about.vi.achievement1Text).

### 2. What the Product Actually Is (Definition)

V2 homepage never defines what the product IS. A first-time visitor sees a device image and reads about "protection" but never learns what the box on the wall actually does.

V1 contains a clear, verified definition from `about_tte.vi.intro` (line 1946):

> Công ty TNHH Khoa học Kỹ thuật Phượng Hoàng có trụ sở tại trung tâm tỉnh Bắc Ninh, hoạt động chuyên sâu trong lĩnh vực nghiên cứu, ứng dụng, chuyển giao công nghệ và giải pháp kỹ thuật công nghiệp toàn diện.

And `about_tte` lists 4 product features (line 1948-1951):
1. Chống sốc điện cách ly
2. Dập hồ quang điện
3. Giải pháp an toàn điện
4. Phòng chống cháy nổ do điện

V2 mentions none of these 4 capabilities explicitly as product definitions.

### 3. Arc Fault (Hồ Quang Điện) — Critical Gap

Arc fault is a first-class product category in V1 (one of 4 main categories, with its own URL path `productArc`), but is completely absent from the V2 homepage. A buyer worried about arc-caused fires will find zero content addressing their specific fear.

V1 verified content available:
- Header label: "Thiết bị cách ly sự cố tia hồ quang" / "AFDD, dập hồ quang, giám sát"
- Product function description (from products.js): "Phát hiện và dập tắt hồ quang điện trong thời gian thực, ngăn ngừa cháy nổ"
- V1 has a dedicated news article: "Hồ quang điện là gì và vì sao cần thiết bị dập hồ quang?"

### 4. Company Identity — Missing on V2

The V2 homepage never states:
- Company legal name (Công ty TNHH Khoa Học Kỹ Thuật Phượng Hoàng)
- Founded year (2018)
- Location (Bắc Ninh)
- English brand name (Phoenix Science and Technology Co., Ltd)

These are present in the footer (loaded via JS) but absent from the page body content.

### 5. V1 Content Assets Available for Reuse

| Asset | Source | Quality |
|-------|--------|---------|
| Company definition | `about_tte.vi.intro` (line 1946) | Verified, authoritative |
| 4 product features | `about_tte.vi.prod1-4` (lines 1948-1951) | Clear, concise |
| 5 electrical risks | `risks.en` (lines 1012-1027) | Authoritative, educational |
| 10 alarm types | `alarms.vi` (lines 1962-1976) | Technical, comprehensive |
| "Hundreds of customers" | `about.vi.achievement1Title` (line 1623) | Verifiable claim |
| 4 why-choose-us pillars | `about.vi.why1-4` (lines 1613-1620) | Strong, detailed |
| Vision/mission/values | `about.vi` (lines 1633-1647) | Brand depth |
| Arc fault product desc | `products.js` | Technical accuracy |
| Company address | `contact.vi.addressValue` (line 1710) | Factual |

---

## Part B — Content Architecture (Buyer Journey Mapping)

Each buyer question maps to either a V2 section (existing or proposed). The four-phase journey:

### Phase 1: WHAT (Identity — seconds 0–5)

| Buyer Question | V2 Status | Proposed Content | Source |
|---------------|-----------|-----------------|--------|
| What is this company? | MISSING | Company name + founded 2018 + Bắc Ninh + 4 product lines (one sentence) | `about_tte.vi.intro` + `prod1-4` |
| What problem do they solve? | PARTIAL (hero mentions fire stats) | Add arc fault + shock + leakage — 3 core threats in one line | `risks` + `about_tte` |
| Quick trust signals? | EXISTS but uses unverifiable "500+" | Replace with verified "hàng trăm khách hàng" + qualified segment list | `about.vi.achievement1Text` |

### Phase 2: HOW (Mechanism — seconds 5–15)

| Buyer Question | V2 Status | Proposed Content | Source |
|---------------|-----------|-----------------|--------|
| How does it work? | MISSING | A 2-3 sentence mechanism: continuous monitoring → real-time detection → instant disconnect + phone alert | `alarms.vi` descriptions |
| What does it detect? | PARTIAL (comparison lists 5 items) | Add explicit mention of 5 core detections: rò điện, quá tải, quá áp, hồ quang, nhiệt độ | `alarms.vi.alarms[]` |
| How is it different from a CB/RCD? | PARTIAL (comparison table exists) | The comparison table already covers this reasonably well | Existing V2 |

### Phase 3: WHY CHOOSE (Differentiation — seconds 15–30)

| Buyer Question | V2 Status | Proposed Content | Source |
|---------------|-----------|-----------------|--------|
| Why Phượng Hoàng specifically? | PARTIAL (certs exist) | Add "why us" mini-pillars from V1: expertise, quality control, comprehensive support, safety-first | `about.vi.why1-4Title/Text` |
| Are they real/established? | WEAK (relying on "500+") | Add founding year (2018), Bắc Ninh HQ, "hàng trăm khách hàng", real segment coverage | `about_tte.vi` + `achievement1Text` |

### Phase 4: WHICH PRODUCT + WHAT NEXT (Conversion — seconds 30–60)

| Buyer Question | V2 Status | Proposed Content | Source |
|---------------|-----------|-----------------|--------|
| Which tier do I need? | EXISTS (3-tier cards) | Good as-is | Existing V2 |
| What if I'm not sure? | EXISTS (help bar + CTA) | Good as-is | Existing V2 |
| What about arc fault specifically? | MISSING | At minimum, mention arc fault in comparison or risk section | `risks` + products.js |

---

## Part C — Three-Tier Recommendations

### TIER 1: MINIMUM CHANGES (fix the credibility crisis)

These are not optional — the "500+" claim is a liability.

**1a. Replace "500+ công trình" everywhere (6 edits)**

Locations to edit:
- Hero trust bar (line 158): change text
- Meta description (line 75): change text  
- JSON-LD WebPage description (line 39): change text
- JSON-LD FAQPage answer 1 (line 53): change text
- Objection card 4 (line 235): change text
- FAQ panel 1 (line 417): change text

Replace with: **"Hàng trăm khách hàng tin tưởng — từ hộ gia đình đến nhà máy quy mô lớn"**

Source: `about.vi.achievement1Title` ("Hàng trăm khách hàng tin tưởng") + `about.vi.achievement1Text` (segment list).

**1b. Add company identity to hero section (one <p> tag under hero badge)**

Current hero immediately launches into fire stats. Add one line establishing WHO:
```
Công ty TNHH KHKT Phượng Hoàng — thành lập 2018 tại Bắc Ninh. 
Chuyên thiết bị chống giật, chống cháy, dập hồ quang, giám sát điện thông minh.
```

Source: `about_tte.vi.intro` + `about_tte.vi.prod1-4`

**Impact:** Fixes the trust gap. Visitors know immediately who they're dealing with.

---

### TIER 2: RECOMMENDED CHANGES (complete the information architecture)

**2a. Add arc fault to comparison table (1 row)**

Current comparison lists 5 differences. Add one more row specifically for arc fault:

```
Trong cột "Có Phượng Hoàng": Phát hiện và dập tắt hồ quang điện trong thời gian thực — ngăn chặn cháy trước khi bắt lửa
Trong cột "Không có Phượng Hoàng": Không phát hiện được hồ quang điện — nguyên nhân hàng đầu gây cháy điện âm thầm
```

Source: products.js arc description + V1 news article item5Title.

**2b. Add "How It Works" mini-explanation (2-3 sentences, before comparison section)**

Between hero and comparison, add a brief mechanism section:
```
Thiết bị Phượng Hoàng giám sát liên tục 5 thông số: dòng điện, điện áp, dòng rò, 
nhiệt độ, và hồ quang điện. Khi phát hiện bất thường, hệ thống ngắt mạch trong 
chưa đến 0,1 giây và gửi cảnh báo tức thì đến điện thoại của bạn. 
Bạn biết sự cố trước khi nó thành tai nạn.
```

Source: `alarms.vi.subtitle` + `features.vi.subtitle`. The 5-parameter monitoring claim appears in features.vi.subtitle (line 1683).

**2c. Add "Why Phượng Hoàng" trust mini-section (replacing or extending the cert section)**

The current cert section has 4 certificates. This is good but insufficient. Add 4 compact trust pillars above or integrated with certs:

```
- Chuyên môn sâu: Đội ngũ kỹ sư am hiểu cả lý thuyết lẫn thực tiễn ngành điện
- Kiểm soát chất lượng: Kiểm định 3 lớp trước khi xuất kho
- Hỗ trợ toàn diện: Từ khảo sát, thiết kế, lắp đặt đến bảo trì
- An toàn là DNA: Mỗi sản phẩm được thiết kế để phòng ngừa trước khi sự cố xảy ra
```

Source: `about.vi.why1-4Text` (lines 1613-1620) — condensed from paragraphs to single lines.

---

### TIER 3: OPTIONAL (enrichment without overload)

**3a. Risk education callout (sidebar-style, between certs and FAQ)**

Briefly name the 5 risks from V1 with one-line descriptions:
- Chập mạch — dây dẫn đứt/chạm, dòng tăng đột biến gây cháy
- Quá tải — dùng quá nhiều thiết bị công suất cao cùng lúc
- Rò điện ra vỏ — cách điện xuống cấp, nguy cơ điện giật khi chạm
- Hệ thống cũ — dây mòn, nứt, lỏng kết nối sau nhiều năm
- Môi trường ẩm — nước và độ ẩm cao làm giảm cách điện

Source: `risks.vi` section (corresponding to `risks.en` at lines 1012-1027).

**3b. Coverage footprint (one sentence in offer/footer)**

The CTA says "Có mặt tại 63 tỉnh thành." This could be strengthened by adding service specifics from V1:

```
Khảo sát miễn phí tận nơi tại tất cả 63 tỉnh thành. 
Kỹ thuật viên đến khảo sát, lắp đặt trong 30–60 phút.
```

---

## Part D — Content for Product-Detail Pages (NOT homepage)

These items from V1 should stay on product pages, not the homepage:

- Full product specifications (amp ratings, dimensions, weight, wiring type) → product detail pages
- Individual product model numbers (KHKT-SD4R-400, MB-2KW, etc.) → product pages
- Complete 10-alarm list with full descriptions → product feature page
- Warranty policy details (6 sections from V1 policy page) → warranty page
- Distribution network addresses → distribution page
- Vision/mission/values full text → about page
- Contact form fields → contact page

---

## Part E — FAQ Audit: Duplicate Content

The 4 FAQ questions (section 6) largely duplicate the 5 objection cards (section 3):

| FAQ Question | Duplicates Objection Card |
|-------------|--------------------------|
| Sản phẩm có thật sự an toàn? | "Có thật sự an toàn không?" (card 4) |
| Lắp đặt có phức tạp không? | "Lắp đặt có phức tạp không?" (card 2) |
| Thời gian bảo hành? | "Tôi được bảo hành như thế nào?" (card 3) |
| Dùng thử/khảo sát trước? | No direct duplicate — unique value |

The objection cards are more persuasive (they include CTAs, pricing, specifics). The FAQ is purely informational.

**Recommendation:** If FAQ must stay, differentiate it from objections:
- FAQ question 1 → ask about standards/compliance (not "an toàn" again)
- FAQ question 2 → ask about remote monitoring/app features (unique angle)
- FAQ question 3 → ask about warranty claim process (not duration)
- FAQ question 4 → keep as-is (it's unique)

---

## Part F — Summary: What Changes, Where, Source

| # | Change | Location | Words Added | Source |
|---|--------|----------|-------------|--------|
| M1 | Replace "500+" → "hàng trăm" | 6 locations (meta, hero, FAQ, objection, 2x JSON-LD) | 0 (replacement) | `about.vi.achievement1Title+Text` |
| M2 | Add company identity line | Hero, under badge | ~25 words | `about_tte.vi.intro+prod1-4` |
| R1 | Add arc fault to comparison | Comparison table, 1 row | ~30 words | products.js + news item5 |
| R2 | Add "how it works" mechanism | After hero, before comparison | ~40 words | `features.vi.subtitle` + `alarms.vi` |
| R3 | Add 4 trust pillars | Cert section or new mini-section | ~60 words | `about.vi.why1-4Text` (condensed) |
| O1 | 5 risk callouts | Between certs and FAQ | ~80 words | `risks.en` (condensed) |
| O2 | Strengthen coverage claim | CTA section | ~20 words | `about.vi.achievement1Text` + contact info |
| O3 | Differentiate FAQ from objections | FAQ section | 0 (rewrite 3 questions) | new angles |

**Total new word count (Tier 1+2): ~155 words in Vietnamese.**
**V2 homepage current word count: ~650 words (body content).**
**Post-change: ~800 words — still compact.**

---

## Part G — Implementation Order

1. **Fix credibility first:** Replace all "500+" instances (M1) — 20 minutes, 6 edits
2. **Add identity:** One paragraph establishing who (M2) — 5 minutes
3. **Add arc fault:** One comparison row (R1) — 10 minutes
4. **Add mechanism:** How-it-works paragraph (R2) — 10 minutes
5. **Add trust pillars:** 4-line compact section (R3) — 15 minutes
6. **Review and re-read:** Ensure flow remains tight, no bloat — 10 minutes
7. **Optional enrichments (O1-O3):** Only after steps 1-6 are approved

**Total implementation time (Tier 1+2): ~70 minutes.**
