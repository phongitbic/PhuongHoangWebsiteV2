# Hệ thống nhận yêu cầu khách hàng - KHKT Phượng Hoàng

Luồng hoạt động:

```
Khách gửi form trên website
        │
        ▼
assets/js/v2/contact-form.js  (PH_FORM_ENDPOINT - URL Web App duy nhất)
        │  fetch POST (text/plain, không CORS preflight)
        ▼
Google Apps Script  (google-apps-script/Code.gs)
        ├── Lưu dòng mới vào Google Sheets (14 cột, tự sinh ID + thời gian)
        └── Gửi thông báo Telegram Bot (sau khi lưu xong, lỗi Telegram không ảnh hưởng dữ liệu)
```

Form áp dụng:

- `contact.html#contactForm` - form "Gửi yêu cầu tư vấn" (thay luồng cũ mở ứng dụng email bằng mailto).
- `product-detail.html` - modal thanh toán giỏ hàng (nút "Gửi yêu cầu báo giá", kèm tự động tên sản phẩm, mã sản phẩm, model, số lượng, trang nguồn).

---

## HƯỚNG DẪN TRIỂN KHAI (9 bước)

### Bước 1: Tạo Google Sheets

1. Mở <https://sheets.google.com>, chọn **Blank spreadsheet**.
2. Đặt tên file tùy ý, ví dụ `Yeu cau khach hang - Phuong Hoang`.
3. Copy **ID bảng tính** từ URL trên thanh địa chỉ:
   `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit` - phần giữa `/d/` và `/edit`.
4. Sheet con tên `YeuCauKhachHang` sẽ được script **tự tạo kèm 14 cột tiêu đề** ở lần đầu tiên nhận yêu cầu - bạn không cần tạo tay, nhưng nếu muốn tạo trước thì để sheet trống (script sẽ điền tiêu đề vào dòng 1).

14 cột (đúng thứ tự): ID yêu cầu | Thời gian gửi | Loại yêu cầu | Họ tên khách hàng | Số điện thoại | Email | Công ty | Sản phẩm quan tâm | Mã sản phẩm | Model đã chọn | Số lượng | Nội dung yêu cầu | Trang nguồn | Trạng thái.

### Bước 2: Mở Google Apps Script

Trong bảng tính vừa tạo: menu **Extensions → Apps Script**. Một tab mới mở ra với file `Code.gs` trống.

### Bước 3: Dán code

1. Xóa hết nội dung `Code.gs` mặc định.
2. Copy **toàn bộ nội dung file `google-apps-script/Code.gs`** trong dự án này, dán vào.
3. Nhấn biểu tượng đĩa mềm (hoặc Ctrl+S) để lưu.

### Bước 4: Cấu hình Script Properties (3 biến)

Trong editor Apps Script, nhấn biểu tượng **bánh răng (Project Settings)** ở menu trái, cuộn xuống mục **Script Properties**, chọn **Add script property** và thêm:

| Tên property | Giá trị | Cách lấy |
|---|---|---|
| `SPREADSHEET_ID` | ID bảng tính ở Bước 1 | URL của Google Sheets |
| `TELEGRAM_BOT_TOKEN` | Token bot Telegram | Mở Telegram, chat với <https://t.me/BotFather>, gửi `/newbot`, làm theo hướng dẫn, copy token dạng `1234567890:AA...` |
| `TELEGRAM_CHAT_ID` | ID chat nhận thông báo | Chat với bot vừa tạo một tin bất kỳ (ví dụ "hello"), rồi mở `https://api.telegram.org/bot<TOKEN>/getUpdates` trong trình duyệt - tìm trường `chat.id` trong phần `message`. Đưa ID nhóm nếu muốn cả đội nhận thông báo. |

**Bảo mật quan trọng:** `TELEGRAM_BOT_TOKEN` và `TELEGRAM_CHAT_ID` chỉ được lưu tại đây (Script Properties), tuyệt đối KHÔNG đưa vào bất kỳ file JavaScript/HTML nào của website hay repository công khai. Website chỉ biết URL Web App ở Bước 7.

### Bước 5: Deploy Web App

Trong editor Apps Script: nút **Deploy → New deployment**:

1. Nhấn biểu tượng bánh răng cạnh "Select type", chọn **Web app**.
2. Điền Description tùy ý, ví dụ `Lead form production`.
3. **Execute as: Me** (script chạy với quyền Google của bạn - được ghi vào Sheets của bạn).
4. **Who has access: Anyone** (khách truy cập website không đăng nhập Google vẫn gửi được).
5. Nhấn **Deploy**.
6. Google hỏi cấp quyền (authorization): chọn tài khoản của bạn → **Advanced → Go to ... (unsafe)** → **Allow**. Đây là bước bình thường với script tự tạo, cần để script được quyền ghi Sheets và gọi Telegram.

### Bước 6: Copy URL Web App

Sau khi deploy, copy **Web app URL** dạng:

```
https://script.google.com/macros/s/AKfycb.../exec
```

### Bước 7: Dán URL vào website

Mở `assets/js/v2/contact-form.js`, tìm dòng:

```js
var PH_FORM_ENDPOINT = '';
```

Dán URL vào giữa hai dấu nháy:

```js
var PH_FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycb.../exec';
```

**Đây là nơi cấu hình DUY NHẤT** cho toàn bộ website (cả form liên hệ lẫn form báo giá đều đọc từ đây).

### Bước 8: Kiểm tra Web App

Mở URL Web App bằng trình duyệt - nếu thấy JSON `{"success":true,...}` là Web App hoạt động.

### Bước 9: Kiểm tra toàn luồng

1. Mở website (Live Server), vào trang Liên hệ, điền form và gửi.
2. Kiểm tra Google Sheets: dòng mới xuất hiện với ID `REQ-YYYYMMDD-NNN`, thời gian GMT+7, trạng thái `Mới`.
3. Kiểm tra Telegram: nhận được tin nhắn thông báo với các trường đã điền.
4. Vào trang chi tiết sản phẩm, thêm sản phẩm vào giỏ, mở giỏ → Thanh toán → gửi yêu cầu báo giá: Sheets nhận dòng với cột Sản phẩm/Mã sản phẩm/Model/Số lượng tự điền.

---

## Ghi chú kỹ thuật

- **CORS:** frontend gửi `Content-Type: text/plain` (simple request, không preflight); Google Apps Script tự trả `Access-Control-Allow-Origin: *`.
- **Khi sửa Code.gs sau này:** Deploy → Manage deployments → biểu tượng bút chì → Version: New version → Deploy. URL Web App KHÔNG đổi.
- **Telegram không cấu hình:** script vẫn lưu Sheets bình thường, chỉ bỏ qua thông báo (có log cảnh báo trong Apps Script).
- **Lỗi Telegram:** không bao giờ làm mất yêu cầu của khách (gửi Telegram nằm trong try/catch SAU khi đã lưu Sheets).
- **Chống chèn công thức:** mọi ô nhập bắt đầu bằng `= + - @` được thêm dấu nháy đơn phía trước.
- **Trùng ID:** LockService đảm bảo 2 yêu cầu cùng lúc không trùng ID; số thứ tự đếm theo số dòng hiện có trong ngày.
- **Giới hạn hạn mức:** Web App chạy với hạn mức miễn phí của Google (đủ cho nhu cầu nhận yêu cầu khách hàng thông thường).
- **Không nên dùng SpreadsheetApp.getActiveSpreadsheet()** nếu bạn dán code vào script standalone (không bound với Sheets) - khi đó bắt buộc phải có `SPREADSHEET_ID` trong Script Properties (code đã xử lý cả 2 trường hợp).
