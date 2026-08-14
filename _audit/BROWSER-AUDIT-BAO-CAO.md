# BÁO CÁO AUDIT TRÌNH DUYỆT THỰC TẾ — KHKT Phượng Hoàng V2

**Ngày:** 2026-08-13
**Phương pháp:** Playwright (Chromium headless) mở website THẬT qua Live Server `http://127.0.0.1:5500/` — không suy đoán từ source. 20 trang × 3 viewport (1280/768/390), scroll toàn bộ trang, chụp ảnh + đo DOM thực tế + console + failed requests + functional test trên trình duyệt thật.
**Bằng chứng:** `_audit/report.json` (v2, chạy 13:29), 234 ảnh screenshot, `_audit/pd_report.json` (mini-audit product-detail), phân tích pixel (PIL), node-eval products.js.

---

## 1. KẾT QUẢ TỔNG QUAN

**Điểm trung bình toàn site: 7.9/10** (mục tiêu ≥8.5). **Không có P0.** Trang mạnh nhất: phong.html 8.9. Yếu nhất: contact 7.3, surge-protection 6.7 (trang chuyển hướng), 404 7.4, leakage-detector + 7 trang policy 7.7–7.8.

Những điểm đã **kiểm chứng bằng trình duyệt thật** (không phải khen sáo):

- **0 tràn ngang (overflow)** ở cả 20 trang × 3 viewport — không có phần tử nào tràn màn hình.
- **Alignment chuẩn trên các trang đã redesign**: phong.html 10/10 section thẳng mép header (24–1256px), news, products, projects, certificates, distribution-system, about-us, news-detail đồng mép.
- **Homepage đúng spec**: header → banner (bp-section-alt, bp-reveal) hiển thị ĐẦU TIÊN → hero THỨ HAI → compare → objections → products → certifications → faq → cta → footer.
- **Functional PASS trên trình duyệt thật**: lightbox chứng chỉ (mở/đóng), chuyển ngôn ngữ VI/EN/ZH, mobile menu (5 trang test), sort sản phẩm, click card tin tức → news-detail.
- **Console sạch** trên 16/20 trang. 0 lỗi JS thật.
- **SEO nền đủ**: canonical + hreflang ×4 (vi/en/zh/x-default) + OG/Twitter + schema trên mọi trang.
- Product-detail với id hợp lệ render ĐẦY ĐỦ: 12 tính năng, 5 lợi ích, 12 dòng thông số, 8 ứng dụng, 5 bước, 4 model, 4 ảnh thumb (chiều cao 5417px nội dung dày đặc).

## 2. BẢNG ĐIỂM 20 TRANG

| # | Trang | Visual | UX | Content | SEO | Responsive | Functionality | **Overall** |
|---|-------|--------|-----|---------|-----|------------|---------------|-------------|
| 1 | phong.html (home) | 9.0 | 9.0 | 8.5 | 9.0 | 9.0 | 9.0 | **8.9** |
| 2 | products.html | 8.5 | 8.5 | 8.0 | 8.5 | 8.5 | 9.0 | **8.5** |
| 3 | product-detail.html | 8.5 | 8.0 | 8.0 | 7.5 | 8.0 | 7.5 | **7.9** |
| 4 | projects.html | 8.5 | 8.5 | 8.0 | 8.5 | 8.5 | 8.5 | **8.4** |
| 5 | about-us.html | 8.5 | 7.5 | 8.0 | 8.5 | 8.0 | 8.5 | **8.2** |
| 6 | certificates.html | 8.5 | 8.5 | 8.5 | 8.5 | 8.5 | 9.0 | **8.6** |
| 7 | distribution-system.html | 8.0 | 8.0 | 8.0 | 8.0 | 8.0 | 8.0 | **8.0** |
| 8 | leakage-detector.html | 7.5 | 7.0 | 8.0 | 8.0 | 7.5 | 8.5 | **7.7** |
| 9 | news.html | 8.5 | 8.5 | 8.5 | 8.5 | 8.5 | 8.0 | **8.4** |
| 10 | news-detail.html | 8.5 | 8.5 | 8.5 | 8.0 | 8.5 | 8.5 | **8.4** |
| 11 | contact.html | 8.0 | 6.5 | 7.5 | 8.0 | 8.0 | 6.0 | **7.3** |
| 12 | purchase-policy.html | 7.5 | 7.5 | 8.0 | 8.0 | 8.0 | 8.0 | **7.8** |
| 13 | warranty-policy.html | 7.5 | 7.5 | 8.0 | 8.0 | 8.0 | 7.5 | **7.7** |
| 14 | exchange-policy.html | 7.5 | 7.5 | 8.0 | 8.0 | 8.0 | 8.0 | **7.8** |
| 15 | shipping-policy.html | 7.5 | 7.5 | 8.0 | 8.0 | 8.0 | 8.0 | **7.8** |
| 16 | payment-policy.html | 7.5 | 7.5 | 8.0 | 8.0 | 8.0 | 8.0 | **7.8** |
| 17 | privacy-policy.html | 7.5 | 7.5 | 8.0 | 8.0 | 8.0 | 8.0 | **7.8** |
| 18 | sales-policy.html | 7.5 | 7.5 | 8.0 | 8.0 | 8.0 | 8.0 | **7.8** |
| 19 | 404.html | 8.0 | 7.5 | 7.0 | 6.5 | 7.5 | 8.0 | **7.4** |
| 20 | surge-protection.html (trang chuyển hướng) | 6.5 | 7.0 | 6.0 | 6.0 | 7.0 | 8.0 | **6.7** |

**Ghi chú chấm điểm:** điểm giảm tập trung vào 3 nhóm — (a) lệch mép container 960 vs header 1280 (leakage, 7 policy, 404, contact hero), (b) lỗi thật trên trình duyệt (font 404, thiếu form, fallback trắng trang), (c) nợ SEO/taste kỹ thuật (em-dash, semantic, sitemap thiếu URL động).

## 3. TOP PROBLEMS (xếp theo mức độ)

1. **Lệch container 960px vs header 1280px** — 10 trang bị ảnh hưởng trực tiếp (leakage-detector, 7 trang policy, 404 toàn bộ 960px; contact hero 960px) + 4 trang có 1 CTA 960px đơn lẻ. Đây là vấn đề alignment nghiêm trọng nhất toàn site.
2. **contact.html không có form** — 0 phần tử input/textarea/select; chỉ có mailto/tel. Mất kênh chuyển đổi chính của trang Liên hệ.
3. **product-detail fallback phá vỡ toàn bộ trang** — URL id sai (vd `?id=khkt-125` — id model thay vì id product) → h1 bị xóa (h1=0), toàn bộ section trống, title tĩnh. Xác suất thấp nhưng hậu quả = trang trắng hoàn toàn.
4. **Google Fonts 404 ngắt quãng** — outfit v15 (news: 6 lỗi console/12 request fail; warranty: 3/6) và plusjakartasans v12 (contact: 9/18). Nguyên nhân gốc: version cũ bị Google xóa; chỉ subset tiếng Việt lỗi nên các trang khác không dính.
5. **Related products = 0 trên product-detail wdma-series** — sản phẩm flagship không có cross-sell vì `getRelated` chỉ dùng `category` đơn ('arc') trong khi sản phẩm có mảng `categories: ['arc','domestic']` (dom-001 bị bỏ sót).
6. **Em-dash vi phạm chuẩn taste site-wide** — 18 file HTML + ~2.030 chỗ trong news-data.json (17 bài × 3 ngôn ngữ), gồm cả title meta, JSON-LD và văn bản hiển thị.
7. **Sitemap thiếu toàn bộ URL động** — 17 URL nhưng không có product-detail.html?id=... (7 sản phẩm) và news-detail.html?id=... (17 bài). Google khó khám phá 24 trang nội dung.
8. **Nhóm SEO kỹ thuật nhỏ** — news-detail 0 thẻ `<section>`; root "/" trả directory listing (200); 404.html trả 200 trên Live Server; surge-protection dùng meta-refresh thay vì 301.

## 4. P0 — CRITICAL

**Không có P0 thật.**

Ghi chú: trong quá trình audit có 1 nghi ngờ P0 (product-detail hiển thị "Không tìm thấy sản phẩm", h1=0) — đã được chứng minh là **false alarm do URL audit dùng `?id=khkt-125` (id MODEL) trong khi site chỉ có 7 id PRODUCT** (ind-001..004, arc-004, dom-001, wdma-series). Mọi link trên site dùng id hợp lệ → người dùng bình thường không gặp lỗi. Hành vi fallback vẫn là khiếm khuyết thật → chuyển xuống P1.4.

## 5. P1 — HIGH

### P1.1 — Lệch mép container: nội dung 960px giữa header 1280px

- **Vấn đề:** 9 trang có TOÀN BỘ section 960px (mép 160–1120) trong khi header 1280px (24–1256) → lệch 160px mỗi bên, tạo khoảng trống vô nghĩa hai mép. Trang bị: leakage-detector (8/8 section), 7 trang policy (hero + nội dung + CTA), 404.html. Thêm contact.html có hero 960px. Ngoài ra 4 trang (products, projects, certificates, distribution-system) mỗi trang có 1 section CTA 960px đơn lẻ giữa các section 1280px.
- **Nguyên nhân:** các trang này chưa qua đợt đồng bộ container-wide như products/certificates/about-us; vẫn dùng class container-default/bp-content-default (max-width 960px). Các CTA 960px đơn lẻ là chủ ý "CTA card trung tâm" từ phase trước nhưng chưa được thống nhất kiểu dáng giữa 4 trang.
- **Giải pháp:** đổi class container-default → container-wide (1280px) cho leakage-detector + 7 policy + 404 + contact hero — đúng mẫu đã làm thành công ở products.html và certificates.html. Với 4 CTA 960px: nếu giữ làm card nổi thì thống nhất 1 kiểu (nền NAVY card bo góc + glow) trên cả 4 trang; nếu không thì nâng lên 1280px.
- **File:** leakage-detector.html, purchase/warranty/exchange/shipping/payment/privacy/sales-policy.html, 404.html, contact.html + CSS tương ứng (policies.css, leakage CSS, contact CSS).
- **HTML:** đổi class container (container-default/bp-content-default → container-wide).
- **CSS:** bỏ/nới max-width 960px ở các wrapper chính.
- **JS:** không.
- **Tác động UX:** toàn bộ trang đồng mép header — hết cảm giác "khuyết mép"; bỏ 320px dead-zone mỗi màn hình.
- **Tác động SEO:** không trực tiếp.
- **Độ ưu tiên:** 1 (cao nhất P1).

### P1.2 — contact.html không có form liên hệ

- **Vấn đề:** 0 thẻ form/input/textarea/select. Người dùng chỉ có mailto/tel/Zalo — không thể để lại thông tin để được gọi lại.
- **Nguyên nhân:** thiết kế phase trước dừng ở mức liên kết trực tiếp (có thể cố ý do chưa có backend nhận dữ liệu).
- **Giải pháp:** thêm form tối giản (họ tên, SĐT, nội dung — email tùy chọn) gửi qua Zalo deep-link `https://zalo.me/0981019381` với nội dung prefill hoặc mailto prefill; KHÔNG cần backend. Nếu chủ trương không dùng form thì đổi nội dung CTA cho khớp (Gọi/Zalo là chính) — hiện tại hero hứa "tư vấn miễn phí" nhưng không có chỗ nhập thông tin.
- **File:** contact.html + CSS contact + i18n keys (3 ngôn ngữ).
- **HTML:** thêm block form; **JS:** xử lý submit (chỉ mở Zalo/mailto — không gửi HTTP khi test).
- **Tác động UX:** tăng chuyển đổi; user có lựa chọn chủ động.
- **Tác động SEO:** không trực tiếp (conversion ảnh hưởng gián tiếp).
- **Độ ưu tiên:** 2.

### P1.3 — Google Fonts 404 (outfit v15, plusjakartasans v12)

- **Vấn đề:** console + failed requests trên trình duyệt thật: news.html 6 lỗi/12 fail (outfit v15), contact.html 9/18 (plusjakartasans v12), warranty-policy 3/6 (outfit v15). Chỉ subset tiếng Việt 404 → font rơi về fallback ở một số ký tự, ngắt quãng giữa các trang.
- **Nguyên nhân:** link Google Fonts ghim version cũ (v15, v12); Google đã purge các version này khỏi fonts.gstatic.com. Trang khác không lỗi vì văn bản chỉ cần subset latin (còn tồn tại).
- **Giải pháp:** cập nhật link lên version mới nhất (outfit v17+, plusjakartasans v13+). Khuyến nghị mạnh: **tự host** 2 font dạng woff2 (subset latin + vietnamese, ~5 file, tổng <200KB) — bền vững, bỏ phụ thuộc Google, tải nhanh hơn ở VN.
- **File:** toàn bộ HTML chứa `<link>` Google Fonts + CSS `font-family`.
- **Tác động UX:** typography đồng nhất mọi trang, không nhảy font.
- **Tác động SEO:** bỏ request lỗi; ổn định LCP/CLS (font là resource render-blocking).
- **Độ ưu tiên:** 3.

### P1.4 — product-detail fallback xóa h1 + trắng trang khi id sai

- **Vấn đề:** đo bằng trình duyệt thật (pd_report.json): `?id=khkt-125` → h1=0, infoTitle/SKU rỗng, 0 feature/benefit/spec, title tĩnh "Chi Tiết Sản Phẩm — ..." không có tên sản phẩm, trang gần như trắng (ảnh fallback_full xác nhận chỉ 1 dòng thông báo).
- **Nguyên nhân:** `renderProductDetail` không tìm thấy id (khkt-* là id model của wdma-series, không phải id product) → đường fallback xóa `.ph-detail-hero` (kể cả h1 tĩnh) rồi return sớm.
- **Giải pháp:** (a) fallback GIỮ h1 tĩnh + hiển thị thông báo kèm nút "Quay lại danh sách sản phẩm" thay vì xóa hết; (b) thêm khả năng tìm theo modelId trong getById; (c) khi fallback, set title SEO hợp lệ (giữ h1 tĩnh làm tiêu đề).
- **File:** product-detail.html (inline JS dòng ~312–733).
- **Tác động UX:** link sai/cũ không dẫn tới trang trắng.
- **Tác động SEO:** tránh index trang rỗng nếu có URL id sai được chia sẻ.
- **Độ ưu tiên:** 4 (xác suất thấp vì sitemap/link nội bộ đều dùng id hợp lệ, nhưng hậu quả nặng nếu xảy ra).

## 6. P2 — POLISH

### P2.1 — Related products trống trên product-detail wdma-series

- **Vấn đề:** sản phẩm flagship (dập hồ quang 220V) hiển thị 0 sản phẩm liên quan — section bị ẩn hoàn toàn (renderRelated ẩn khi rỗng).
- **Nguyên nhân:** `getRelated` chỉ dùng `product.category` đơn ('arc') — chỉ có chính wdma-series trong category này; mảng `categories: ['arc','domestic']` bị bỏ qua nên dom-001 không được đề xuất.
- **Giải pháp:** `getRelated` lọc theo mảng `categories` (union) thay vì `category` đơn; hoặc fallback "sản phẩm nổi bật" khi không đủ.
- **File:** assets/js/v2/products.js (getRelated).
- **Tác động UX:** thêm cross-sell trên trang sản phẩm quan trọng nhất.
- **Tác động SEO:** thêm internal link đến trang sản phẩm khác.
- **Độ ưu tiên:** P2 cao.

### P2.2 — Em-dash site-wide vi phạm chuẩn nội dung

- **Vấn đề:** 18/20 file HTML chứa "—" (title meta, JSON-LD, văn bản hiển thị) + ~2.030 chỗ trong news-data.json. Chuẩn dự án: không em-dash trong nội dung hiển thị.
- **Giải pháp:** thay theo ngữ cảnh: VI/EN " — " → ", " hoặc ": "; ZH "——" → "：". Meta title trên SERP cũng là nội dung hiển thị → đổi luôn. Làm bằng script regex có review, KHÔNG đổi trong JSON-LD name thương hiệu nếu là tên đăng ký (kiểm tra từng chỗ).
- **File:** 18 HTML + assets/js/v2/news-data.json + template JS (product-detail title, modelDesc).
- **Tác động UX:** typography nhất quán với chuẩn đã áp dụng ở products.
- **Tác động SEO:** title sạch hơn, không ký tự thừa.
- **Độ ưu tiên:** P2.

### P2.3 — Sitemap thiếu 24 URL động

- **Vấn đề:** sitemap.xml chỉ 17 URL tĩnh; thiếu 7 product-detail.html?id=... và 17 news-detail.html?id=... → Google khó khám phá nội dung sâu.
- **Giải pháp:** thêm toàn bộ URL động (id lấy từ products.js và news-data.json) vào sitemap; đồng thời bỏ surge-protection.html khỏi sitemap (xem P2.5).
- **File:** sitemap.xml.
- **Tác động SEO:** tăng khả năng index nội dung; đây là khoảng trống SEO lớn nhất còn lại (hreflang/canonical đã đủ).
- **Độ ưu tiên:** P2 cao.

### P2.4 — news-detail.html thiếu cấu trúc semantic

- **Vấn đề:** 0 thẻ `<section>` — toàn bộ bố cục bằng div (đo từ DOM thật).
- **Giải pháp:** bọc các khối chính bằng `<section aria-labelledby>` theo cấu trúc 4-section hiện tại.
- **File:** news-detail.html.
- **Tác động SEO:** cấu trúc rõ hơn cho crawler; accessibility tốt hơn.
- **Độ ưu tiên:** P2.

### P2.5 — Root "/" trả directory listing + 404 trả 200 + surge meta-refresh

- **Vấn đề:** gõ "/" → Live Server liệt kê file (200). 404.html render đẹp nhưng trả status 200 trên Live Server. surge-protection.html là trang dùng meta-refresh (0s) → chuyển products.html?category=surge.
- **Giải pháp:** (a) kiểm tra hosting production: root phải phục vụ phong.html (hoặc index.html redirect), 404 phải trả status 404 thật; (b) đổi surge-protection thành redirect 301 server-side (htaccess/nginx) nếu hosting cho phép, nếu không thì giữ meta-refresh nhưng thêm canonical về products.html; (c) bỏ surge-protection khỏi sitemap.
- **File:** server config (production) + sitemap.xml; tùy chọn: surge-protection.html.
- **Tác động SEO:** tránh index directory listing và trang trùng nội dung.
- **Độ ưu tiên:** P2.

### P2.6 — 1 ảnh broken trên product-detail (chưa định vị)

- **Vấn đề:** pd_report: brokenImgs=1 trên trang id hợp lệ; mainImage + 4 thumb đều tồn tại trên đĩa → là 1 ảnh khác (cần xác định vị trí khi sửa).
- **Giải pháp:** mở trang, liệt kê img naturalWidth=0 khi sửa.
- **File:** product-detail.html hoặc ảnh mất tích.
- **Độ ưu tiên:** P2.

### P2.7 — about-us: s04 nửa phải trống, s07 lệch trái

- **Vấn đề:** đo DOM: s04 nội dung chỉ chiếm 24–634px (nửa phải trống 622px); s07 nội dung 304–1271 (lệch trái 280px).
- **Nguyên nhân:** có thể là chủ ý bố cục editorial (số thứ tự lớn + text trái), cần xem ảnh để xác nhận trước khi sửa.
- **Giải pháp:** nếu không phải chủ ý: cân lại grid s04 thành 2 cột đều; căn s07 về mép 24.
- **File:** about-us.html + CSS.
- **Độ ưu tiên:** P2 (xác minh trước khi sửa).

### P2.8 — 4 CTA 960px chưa thống nhất kiểu dáng

- **Vấn đề:** products (ph-prod-cta-sec), projects (s05), certificates (ph-cert-cta), distribution (S7) — mỗi trang 1 section CTA 960px giữa các section 1280px.
- **Giải pháp:** thống nhất 1 mẫu "CTA card nổi" (nền NAVY, bo góc, glow nhẹ) hoặc nâng lên container-wide — gộp vào P1.1 khi thực hiện.
- **Độ ưu tiên:** P2.

### P2.9 — Nhiễu môi trường cần xác nhận lại 1 lần

- **Vấn đề:** sales-policy (1 request fail self-URL) + sales-policy/404 bị "Execution context destroyed" ở 768/390 — nghi do Live Server auto-reload khi VS Code tự lưu file giữa lúc test, không phải lỗi trang.
- **Giải pháp:** chạy lại 2 trang này 1 lần khi Live Server ổn định để xác nhận sạch.
- **Độ ưu tiên:** P2 (thủ tục).

## 7. KẾT LUẬN & ĐỀ XUẤT

Site hiện tại **7.9/10**. Khoảng cách lên 8.5+ nằm ở 4 việc P1 (alignment 10 trang, form contact, font tự host, fallback product-detail) + 3 việc P2 cao (related products, sitemap URL động, em-dash). Ước tính sau khi xử lý: alignment + form + font → ~8.4; thêm related + sitemap + em-dash + semantic → **8.6–8.8**.

Thứ tự đề xuất: P1.1 → P1.2 → P1.3 → P1.4 → P2.1 → P2.3 → P2.2 → P2.4 → còn lại.

**Trạng thái: VÒNG 1 — CHỈ AUDIT.** Chưa sửa bất kỳ file trang nào (chỉ script audit). Chờ bạn duyệt P0/P1/P2 trước khi thực hiện.
