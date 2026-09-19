window.__PH_COMPONENTS__ = window.__PH_COMPONENTS__ || {};
function createZaloModal() {
  document.body.insertAdjacentHTML('beforeend',
    '<div class="zalo-modal" hidden role="dialog" aria-modal="true" aria-labelledby="zalo-modal-title">' +
      '<button class="zalo-modal-backdrop" type="button" data-zalo-close aria-label="Đóng cửa sổ Zalo"></button>' +
      '<div class="zalo-modal-panel">' +
        '<button class="zalo-modal-close" type="button" data-zalo-close aria-label="Đóng">&times;</button>' +
        '<div class="zalo-modal-badge">Zalo</div>' +
        '<h2 id="zalo-modal-title">CÔNG TY TNHH KHOA HỌC KỸ THUẬT PHƯỢNG HOÀNG</h2>' +
        '<p class="zalo-modal-intro">Quét mã QR bằng ứng dụng Zalo hoặc nhấn nút bên dưới để bắt đầu trò chuyện.</p>' +
        '<div class="zalo-modal-qr"><img src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&amp;data=https%3A%2F%2Fzalo.me%2F0981019381" alt="Mã QR Zalo Công ty Phượng Hoàng" width="240" height="240"></div>' +
        '<p class="zalo-modal-phone">Zalo: <strong>0981 019 381</strong></p>' +
        '<a class="zalo-modal-chat" href="https://zalo.me/0981019381" target="_blank" rel="noopener">Nhắn tin với Phượng Hoàng</a>' +
      '</div>' +
    '</div>'
  );
  return document.querySelector('.zalo-modal');
}
document.addEventListener('click', function (event) {
  var zaloLink = event.target.closest('.floating-zalo, a[href^="zalo://conversation"]');
  var zaloModal = document.querySelector('.zalo-modal');

  if (zaloLink) {
    event.preventDefault();
    if (!zaloModal) zaloModal = createZaloModal();
    zaloModal.hidden = false;
    document.body.classList.add('zalo-modal-open');
    zaloModal.querySelector('.zalo-modal-close').focus();
    return;
  }

  if (zaloModal && event.target.closest('[data-zalo-close]')) {
    zaloModal.hidden = true;
    document.body.classList.remove('zalo-modal-open');
  }
});
document.addEventListener('keydown', function (event) {
  var zaloModal = document.querySelector('.zalo-modal');
  if (event.key !== 'Escape' || !zaloModal || zaloModal.hidden) return;
  zaloModal.hidden = true;
  document.body.classList.remove('zalo-modal-open');
  var zaloLink = document.querySelector('.floating-zalo');
  if (zaloLink) zaloLink.focus();
});
window.__PH_COMPONENTS__.footer = '<footer class="footer">\n  <div class="footer-main">\n    <div class="footer-shell">\n    <div class="footer-brand">\n      <div class="footer-brand-row">\n        <img src="assets/logo/Logofinal.png" alt="Logo Công ty TNHH Khoa Học Kỹ Thuật Phượng Hoàng" data-i18n-alt="footer.logoAlt" width="488" height="511">\n        <h3 data-i18n="policy.footerBrand">Thiết bị điện an toàn thông minh</h3>\n      </div>\n      <h5 data-i18n="policy.footerCompany">CÔNG TY TNHH KHOA HỌC KỸ THUẬT PHƯỢNG HOÀNG</h5>\n      <p data-i18n="policy.footerDescription">Ứng dụng giám sát và điều khiển điện thông minh, giúp người dùng theo dõi thiết bị, nhận cảnh báo sớm và quản lý hệ thống an toàn từ xa.</p>\n      <div class="footer-badges">\n        <span data-i18n="policy.footerBadge1">An toàn</span>\n        <span data-i18n="policy.footerBadge2">Từ xa</span>\n        <span data-i18n="policy.footerBadge3">Hiệu quả</span>\n      </div>\n    </div>\n    <div class="footer-column">\n      <div class="footer-block">\n        <h4 data-i18n="header.contact">Liên hệ</h4>\n        <ul>\n          <li><strong data-i18n="policy.footerContactTitle">Địa chỉ</strong>: <span data-i18n="policy.footerContactAddress">Tầng 3, số 30, đường Lý Thái Tổ, Phường Kinh Bắc, Tỉnh Bắc Ninh, Việt Nam</span></li>\n          <li><strong data-i18n="policy.footerContactEmail">Email</strong>: <a href="mailto:info@khktphuonghoang.com">info@khktphuonghoang.com</a></li>\n          <li><strong data-i18n="policy.footerContactHotline">Hotline</strong>: <a href="tel:+841800888638">1800 888 638</a></li>\n          <li><strong data-i18n="policy.footerContactHotline">Hotline</strong>: <a href="tel:+84981019381">0981 019 381</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class="footer-column">\n      <div class="footer-block">\n        <h4 data-i18n="policy.footerPoliciesTitle">Chính sách và quy định</h4>\n        <ul>\n          <li><a href="purchase-policy.html" data-i18n="policy.footerPolicy1">Hướng dẫn mua hàng</a></li>\n          <li><a href="warranty-policy.html" data-i18n="policy.footerPolicy2">Chính sách bảo hành</a></li>\n          <li><a href="exchange-policy.html" data-i18n="policy.footerPolicy3">Quy định đổi hàng</a></li>\n          <li><a href="shipping-policy.html" data-i18n="policy.footerPolicy4">Chính sách vận chuyển</a></li>\n          <li><a href="payment-policy.html" data-i18n="policy.footerPolicy5">Hướng dẫn thanh toán</a></li>\n          <li><a href="sales-policy.html" data-i18n="policy.footerPolicy6">Chính sách công tác viên</a></li>\n          <li><a href="privacy-policy.html" data-i18n="policy.footerPolicy7">Bảo mật thông tin</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class="footer-qr">\n    <h4 class="footer-qr-title" data-i18n="footer.qrTitle">Tải ứng dụng Phượng Hoàng</h4>\n    <p class="footer-qr-sub" data-i18n="footer.qrSub">Giám sát và điều khiển điện an toàn từ xa qua điện thoại</p>\n    <div class="footer-qr-codes">\n      <div class="footer-qr-item">\n        <img src="assets/app_down_now.png" alt="QR tải ứng dụng Android Phượng Hoàng" data-i18n-alt="footer.qrAndroidAlt" loading="lazy" width="140" height="140">\n        <span class="footer-qr-label" data-i18n="footer.qrAndroidLabel">Android APK</span>\n        <span class="footer-qr-meta" data-i18n="footer.qrAndroidMeta">Android 6.0+</span>\n      </div>\n      <div class="footer-qr-item">\n        <img src="assets/h5.png" alt="QR dùng ứng dụng web Phượng Hoàng" data-i18n-alt="footer.qrWebAlt" loading="lazy" width="140" height="140">\n        <span class="footer-qr-label" data-i18n="footer.qrWebLabel">H5 Web App</span>\n        <span class="footer-qr-meta" data-i18n="footer.qrWebMeta">Không cần cài đặt</span>\n      </div>\n    </div>\n  </div>\n  </div>\n  <div class="footer-bottom">\n    <p data-i18n="footer.copyright">© 2026 云控用电安全. All rights reserved. | 用电可视化 安全看得见</p>\n  </div>\n</footer>\n\n<a class="floating-zalo" href="https://zalo.me/0981019381" target="_blank" rel="noopener" aria-label="Tư vấn miễn phí qua Zalo" data-i18n-aria="footer.zaloAria">\n  <span class="zalo-icon" aria-hidden="true">\n    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M12 3C6.7 3 2.4 6.8 2.4 11.5c0 2.4 1.2 4.6 3.2 6.1l-1 3.5 3.7-1.8c1 .3 2.1.5 3.2.5 5.3 0 9.6-3.8 9.6-8.5S17.3 3 12 3Z" fill="currentColor"/>\n    </svg>\n  </span>\n  <span class="zalo-text" data-i18n="footer.zaloText">Tư vấn miễn phí qua Zalo</span>\n</a>\n';
