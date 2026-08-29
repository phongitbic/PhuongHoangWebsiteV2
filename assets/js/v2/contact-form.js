/* ═══════════════════════════════════════════════════════════════
   PHForm - Gửi yêu cầu khách hàng về Google Apps Script
   (form liên hệ contact.html + form báo giá product-detail)

   CẤU HÌNH DUY NHẤT TOÀN WEBSITE: dán URL Web App vào
   PH_FORM_ENDPOINT bên dưới (xem google-apps-script/README.md).

   BẢO MẬT: KHÔNG đặt Telegram Bot Token / Chat ID ở đây.
   Token chỉ nằm trong Script Properties của Google Apps Script.
   Website chỉ biết mỗi URL Web App.
   ═══════════════════════════════════════════════════════════════ */
var PH_FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyRbMoM-_cnS0X9dzsv0IGbYtNVZFRt-Fwmdh64faQZY3rs90Dk8MbAafp07nKeU_L_/exec'; /* ← TODO: dán Web App URL của bạn vào đây */

(function (global) {
  'use strict';

  var TIMEOUT_MS = 10000;

  function isConfigured() {
    return typeof PH_FORM_ENDPOINT === 'string' && PH_FORM_ENDPOINT.length > 10;
  }

  /**
   * Gửi payload dạng object tới Apps Script.
   * Trả về Promise resolve {success:true, message, requestId}
   * hoặc reject Error(message) với message thân thiện để hiển thị.
   * Dùng Content-Type text/plain để không kích hoạt CORS preflight
   * (Google Apps Script tự trả Access-Control-Allow-Origin: *).
   */
  function submit(payload) {
    if (!isConfigured()) {
      return Promise.reject(new Error('PH_FORM_ENDPOINT chưa được cấu hình.'));
    }
    var controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    var timer = controller ? setTimeout(function () { controller.abort(); }, TIMEOUT_MS) : null;
    return fetch(PH_FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      body: JSON.stringify(payload),
      signal: controller ? controller.signal : undefined
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (data) {
        return { ok: res.ok, data: data };
      });
    }).then(function (r) {
      if (!r.ok || !r.data || r.data.success !== true) {
        var msg = (r.data && r.data.message) ? r.data.message : 'Không thể gửi yêu cầu lúc này.';
        throw new Error(msg);
      }
      return r.data;
    }).catch(function (err) {
      if (err && err.name === 'AbortError') {
        throw new Error('Kết nối quá chậm, vui lòng thử lại.');
      }
      throw err;
    }).finally(function () {
      if (timer) clearTimeout(timer);
    });
  }

  global.PHForm = {
    endpoint: PH_FORM_ENDPOINT,
    isConfigured: isConfigured,
    submit: submit
  };
})(window);
