# Checklist audit giao diện

Base URL: `http://127.0.0.1:5500/`

Viewports áp dụng cho mọi URL: `1440x900`, `1280x720`, `1024x768`, `768x1024`, `390x844`, `360x800`.

Ngôn ngữ: `vi`, `zh`, `en`. Theme: sáng, tối. Trạng thái ban đầu: chưa kiểm tra.

| Trang / trạng thái | URL local | Trạng thái |
|---|---|---|
| Trang chủ | `index.html` | Đã kiểm tra |
| Sản phẩm - tất cả | `products.html` | Đã kiểm tra |
| Sản phẩm - công nghiệp | `products.html?category=industrial` | Đã kiểm tra |
| Sản phẩm - dân dụng | `products.html?category=domestic` | Đã kiểm tra |
| Sản phẩm - chống sốc cách ly | `products.html?category=surge` | Đã kiểm tra |
| Sản phẩm - hồ quang | `products.html?category=arc` | Đã kiểm tra |
| Chi tiết sản phẩm công nghiệp | `product-detail.html?id=ind-001` | Đã kiểm tra |
| Chi tiết sản phẩm công nghiệp (model khác) | `product-detail.html?id=ind-003` | Đã kiểm tra |
| Chi tiết sản phẩm chống sốc/hồ quang | `product-detail.html?id=arc-004` | Đã kiểm tra |
| Chi tiết sản phẩm dân dụng | `product-detail.html?id=dom-001` | Đã kiểm tra |
| Chi tiết sản phẩm dân dụng (model khác) | `product-detail.html?id=dom-002` | Đã kiểm tra |
| Về chúng tôi | `about-us.html` | Đã kiểm tra |
| Hệ thống phân phối | `distribution-system.html` | Đã kiểm tra |
| Chứng chỉ | `certificates.html` | Đã kiểm tra |
| Công trình | `projects.html` | Đã kiểm tra |
| Tin tức - trang 1 | `news.html` | Đã kiểm tra |
| Tin tức - trang 2 | `news.html?page=2` | Đã kiểm tra |
| Tin tức - trang 3 | `news.html?page=3` | Đã kiểm tra |
| Tin tức - danh mục kiến thức | `news.html?category=electrical-knowledge` | Đã kiểm tra |
| Tin tức - danh mục an toàn | `news.html?category=electrical-safety` | Đã kiểm tra |
| Tin tức - danh mục công nghệ | `news.html?category=tech` | Đã kiểm tra |
| Chi tiết tin đầu danh sách | `news-detail.html?id=news-011` | Đã kiểm tra |
| Chi tiết tin giữa danh sách | `news-detail.html?id=news-003` | Đã kiểm tra |
| Chi tiết tin cuối danh sách | `news-detail.html?id=news-010` | Đã kiểm tra |
| Liên hệ | `contact.html` | Đã kiểm tra |
| Hướng dẫn mua hàng | `purchase-policy.html` | Đã kiểm tra |
| Hướng dẫn thanh toán | `payment-policy.html` | Đã kiểm tra |
| Chính sách vận chuyển | `shipping-policy.html` | Đã kiểm tra |
| Chính sách bảo hành | `warranty-policy.html` | Đã kiểm tra |
| Chính sách đổi trả | `exchange-policy.html` | Đã kiểm tra |
| Chính sách cộng tác viên | `sales-policy.html` | Đã kiểm tra |
| Chính sách bảo mật | `privacy-policy.html` | Đã kiểm tra |
| Trang chuyển hướng chống sốc | `surge-protection.html` | Đã kiểm tra |
| Trang chuyển hướng chống rò | `leakage-detector.html` | Đã kiểm tra |
| Trang 404 | `404.html` | Đã kiểm tra |

## Tương tác bắt buộc

- Header desktop: menu, hover dropdown sản phẩm, mọi liên kết điều hướng.
- Header mobile: mở/đóng menu, submenu sản phẩm, ngôn ngữ.
- Chuyển ngôn ngữ bằng UI: Việt, Trung, Anh; ưu tiên kiểm tra nội dung dài trên mobile.
- Chuyển sáng/tối bằng UI và xác nhận trạng thái tồn tại khi điều hướng trang.
- Product detail: model selector, gallery, CTA và liên kết sản phẩm liên quan.
- Products: tab/bộ lọc danh mục và card sản phẩm.
- News: bộ lọc danh mục, phân trang, card và liên kết chi tiết.
- Contact: validation/form và CTA (không gửi dữ liệu thật).
- Mọi trang: overflow ngang, bố cục, typography, ảnh, console, JavaScript và request lỗi.

## Kết quả cuối

- Đã kiểm tra 34 URL/trạng thái đại diện ở cả 6 viewport (204 lượt sau sửa; trang chuyển hướng `surge-protection.html` được xác nhận chuyển đúng tới `products.html?category=surge`, trạng thái đích đã nằm trong ma trận kiểm tra).
- Đã kiểm tra trực quan đủ 20 file HTML, với ảnh full-page desktop và mobile trong `before`; ảnh tương ứng sau sửa nằm trong `after`.
- Đã kiểm tra 41 liên kết nội bộ duy nhất: không có HTTP 4xx/5xx.
- Không phát hiện console/JavaScript error của website hoặc tài nguyên ảnh hỏng. Cảnh báo WebSocket rời rạc thuộc Live Server khi chạy dồn nhiều lượt điều hướng, không phải mã website.
- Dropdown desktop, menu/submenu mobile, chuyển ngôn ngữ bằng UI, theme sáng/tối và khả năng lưu trạng thái qua điều hướng đều hoạt động.
- Bộ lọc/danh mục sản phẩm, phân trang tin tức, model selector, gallery sản phẩm và validation form liên hệ đều hoạt động.
- Đã sửa overflow ngang tại 1024 px, breakpoint hero tại đúng 1024 px và cơ chế ẩn panel menu mobile.
