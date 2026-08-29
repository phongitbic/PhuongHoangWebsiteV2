/**
 * ═══════════════════════════════════════════════════════════════════
 *  KHKT PHƯỢNG HOÀNG - HỆ THỐNG NHẬN YÊU CẦU KHÁCH HÀNG
 *  Google Apps Script Web App: nhận dữ liệu từ website,
 *  lưu vào Google Sheets, đồng thời gửi thông báo Telegram Bot.
 *
 *  CÁCH TRIỂN KHAI (đầy đủ 9 bước trong google-apps-script/README.md):
 *    1. Tạo Google Sheets + ghi lại ID bảng tính.
 *    2. Extensions → Apps Script, dán toàn bộ file này vào Code.gs.
 *    3. Cấu hình Script Properties: SPREADSHEET_ID,
 *       TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID (KHÔNG để token
 *       ở bất kỳ file nào của website - chỉ nằm ở đây).
 *    4. Deploy → New deployment → Web app.
 *    5. Execute as: Me | Who has access: Anyone.
 *    6. Copy Web app URL, dán vào PH_FORM_ENDPOINT trong
 *       assets/js/v2/contact-form.js của website.
 *
 *  CHÚ Ý BẢO MẬT: TELEGRAM_BOT_TOKEN và TELEGRAM_CHAT_ID tuyệt đối
 *  KHÔNG được đưa vào JavaScript/HTML phía client hoặc repository
 *  công khai. Website chỉ biết mỗi URL Web App (được phép công khai).
 * ═══════════════════════════════════════════════════════════════════
 */

/** Tên sheet lưu dữ liệu (tự tạo nếu chưa có). */
var SHEET_NAME = 'YeuCauKhachHang';

/** Dòng tiêu đề 14 cột - đúng thứ tự cột đã thống nhất. */
var HEADERS = [
  'ID yêu cầu',
  'Thời gian gửi',
  'Loại yêu cầu',
  'Họ tên khách hàng',
  'Số điện thoại',
  'Email',
  'Công ty',
  'Sản phẩm quan tâm',
  'Mã sản phẩm',
  'Model đã chọn',
  'Số lượng',
  'Nội dung yêu cầu',
  'Trang nguồn',
  'Trạng thái'
];

/**
 * doGet: trang kiểm tra nhanh khi mở URL Web App bằng trình duyệt.
 * Dùng để xác nhận Web App hoạt động (bước kiểm tra trong README).
 */
function doGet() {
  return json_({
    success: true,
    message: 'Phuong Hoang lead system is running. Use POST to submit a request.',
    service: 'KHKT Phuong Hoang - Lead Request Web App',
    time: Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm:ss')
  });
}

/**
 * doPost: điểm nhận duy nhất mọi yêu cầu từ website.
 * Frontend gửi Content-Type: text/plain nên KHÔNG có CORS preflight;
 * body là chuỗi JSON (e.postData.contents).
 */
function doPost(e) {
  try {
    var payload = parseBody_(e);
    var validationError = validate_(payload);
    if (validationError) {
      return json_({ success: false, message: validationError });
    }

    // Khóa để tránh trùng ID khi 2 yêu cầu gửi cùng lúc.
    var lock = LockService.getScriptLock();
    lock.waitLock(15000);

    var sheet = getSheet_();
    var requestId = nextRequestId_(sheet);
    var timeStr = Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm:ss');

    // Ghi dòng dữ liệu vào Sheets (14 cột đúng thứ tự HEADERS).
    sheet.appendRow([
      requestId,
      timeStr,
      sanitizeCell_(payload.type),
      sanitizeCell_(payload.name),
      sanitizeCell_(payload.phone),
      sanitizeCell_(payload.email),
      sanitizeCell_(payload.company),
      sanitizeCell_(payload.productName),
      sanitizeCell_(payload.productId),
      sanitizeCell_(payload.model),
      sanitizeCell_(payload.quantity),
      sanitizeCell_(payload.message),
      sanitizeCell_(payload.source),
      'Mới'
    ]);

    lock.releaseLock();

    // Telegram chỉ là THÔNG BÁO: gửi SAU khi đã lưu Sheets thành công,
    // bọc try/catch để lỗi Telegram KHÔNG BAO GIỜ làm hỏng yêu cầu của khách.
    try {
      sendTelegram_(buildTelegramText_(payload, requestId, timeStr));
    } catch (tgErr) {
      console.error('Telegram notification failed (lead still saved): ' + tgErr);
    }

    return json_({
      success: true,
      message: 'Yêu cầu đã được gửi thành công. Phượng Hoàng sẽ liên hệ với bạn sớm nhất.',
      requestId: requestId
    });
  } catch (err) {
    console.error('doPost error: ' + err + ' | ' + (err && err.stack));
    return json_({ success: false, message: 'Hệ thống đang bận, vui lòng thử lại sau ít phút.' });
  }
}

/* ─────────────────────────── Helpers ─────────────────────────── */

/** Đọc body JSON từ e.postData.contents (frontend gửi text/plain). */
function parseBody_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('No post data');
  }
  var data = JSON.parse(e.postData.contents);
  if (typeof data !== 'object' || data === null) {
    throw new Error('Invalid payload');
  }
  return data;
}

/** Kiểm tra dữ liệu bắt buộc. Trả về thông báo lỗi, hoặc null nếu hợp lệ. */
function validate_(d) {
  if (!d || typeof d !== 'object') return 'Dữ liệu yêu cầu không hợp lệ.';
  var name = String(d.name || '').trim();
  var phone = String(d.phone || '').trim();
  if (name.length < 2) return 'Vui lòng nhập họ tên đầy đủ.';
  if (!/^(0[0-9]{9,10}|(\+84)[0-9]{9,10})$/.test(phone.replace(/[\s.\-()]/g, ''))) {
    return 'Số điện thoại không hợp lệ.';
  }
  var email = String(d.email || '').trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Email không hợp lệ.';
  }
  return null;
}

/**
 * Chống chèn công thức vào Sheets: ô bắt đầu bằng = + - @ sẽ được
 * thêm dấu nháy đơn phía trước để Sheets coi là văn bản thuần.
 */
function sanitizeCell_(value) {
  if (value === undefined || value === null) return '';
  var s = String(value).trim();
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  if (s.length > 5000) s = s.substring(0, 5000);
  return s;
}

/**
 * Lấy sheet lưu trữ. SPREADSHEET_ID đọc từ Script Properties
 * (phù hợp cả Web App standalone lẫn script bound).
 * Tự tạo sheet + dòng tiêu đề nếu sheet trống.
 */
function getSheet_() {
  var props = PropertiesService.getScriptProperties();
  var spreadsheetId = props.getProperty('SPREADSHEET_ID');
  var ss;
  if (spreadsheetId) {
    ss = SpreadsheetApp.openById(spreadsheetId);
  } else {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  }
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  var firstRow = sheet.getRange(1, 1, 1, 1).getValue();
  if (firstRow === '' || firstRow === null) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/** Sinh mã yêu cầu dạng REQ-YYYYMMDD-NNN (không trùng trong cùng ngày). */
function nextRequestId_(sheet) {
  var now = new Date();
  var dateStr = Utilities.formatDate(now, 'Asia/Ho_Chi_Minh', 'yyyyMMdd');
  var prefix = 'REQ-' + dateStr + '-';
  var lastRow = sheet.getLastRow();
  var count = 0;
  if (lastRow >= 2) {
    var ids = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
    for (var i = 0; i < ids.length; i++) {
      var v = String(ids[i][0] || '');
      if (v.indexOf(prefix) === 0) count++;
    }
  }
  var num = count + 1;
  return prefix + ('00' + num).slice(-3);
}

/** Gửi tin nhắn qua Telegram Bot (token/chatId nằm trong Script Properties). */
function sendTelegram_(text) {
  var props = PropertiesService.getScriptProperties();
  var token = props.getProperty('TELEGRAM_BOT_TOKEN');
  var chatId = props.getProperty('TELEGRAM_CHAT_ID');
  if (!token || !chatId) {
    console.warn('Telegram not configured (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID missing).');
    return;
  }
  var url = 'https://api.telegram.org/bot' + token + '/sendMessage';
  var response = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
      disable_web_page_preview: true
    }),
    muteHttpExceptions: true
  });
  var code = response.getResponseCode();
  if (code !== 200) {
    throw new Error('Telegram API ' + code + ': ' + response.getContentText());
  }
}

/** Tạo nội dung tin nhắn Telegram (bỏ qua các trường trống). */
function buildTelegramText_(d, requestId, timeStr) {
  var lines = [];
  lines.push('📢 <b>YÊU CẦU MỚI TỪ WEBSITE</b>');
  lines.push('');
  lines.push('🆔 <b>ID:</b> ' + requestId);
  lines.push('🕐 <b>Thời gian:</b> ' + timeStr);
  if (d.type) lines.push('📋 <b>Loại:</b> ' + escapeHtml_(d.type));
  if (d.name) lines.push('👤 <b>Họ tên:</b> ' + escapeHtml_(d.name));
  if (d.phone) lines.push('📞 <b>Điện thoại:</b> ' + escapeHtml_(d.phone));
  if (d.email) lines.push('📧 <b>Email:</b> ' + escapeHtml_(d.email));
  if (d.company) lines.push('🏢 <b>Công ty:</b> ' + escapeHtml_(d.company));
  if (d.productName) lines.push('📦 <b>Sản phẩm:</b> ' + escapeHtml_(d.productName));
  if (d.productId) lines.push('🔧 <b>Mã sản phẩm:</b> ' + escapeHtml_(d.productId));
  if (d.model) lines.push('🔢 <b>Model:</b> ' + escapeHtml_(d.model));
  if (d.quantity) lines.push('🔢 <b>Số lượng:</b> ' + escapeHtml_(d.quantity));
  if (d.message) lines.push('💬 <b>Nội dung:</b> ' + escapeHtml_(d.message));
  if (d.source) lines.push('🌐 <b>Trang nguồn:</b> ' + escapeHtml_(d.source));
  return lines.join('\n');
}

/** Thoát ký tự HTML trong nội dung gửi Telegram (parse_mode HTML). */
function escapeHtml_(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Trả về JSON response - ContentService tự thêm CORS header. */
function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
