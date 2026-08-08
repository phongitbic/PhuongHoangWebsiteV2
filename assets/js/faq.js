/* ═══════════ FAQ ENGINE — Phượng Hoàng ═══════════
 * Shared JS for FAQ component.
 * Include this script on any page that has the FAQ HTML section.
 * Call initFAQ() with page-specific category filter.
 *
 * Usage:
 *   <script src="assets/js/faq.js"></script>
 *   <script>initFAQ({categories:['product','order','warranty']});</script>
 *
 * If categories is null/omitted, all 20 FAQ items are shown.
 * FAQPage JSON-LD schema is auto-injected with only visible questions.
 */

/* ═══════════ FAQ DATA — 3 Languages ═══════════ */
/* All answers based STRICTLY on website content. Nothing invented. */

var phFaqData = {
  vi: [
    {
      id: "faq-surge-what",
      category: "product",
      q: "Thiết bị chống sét lan truyền bảo vệ thiết bị điện như thế nào?",
      a: "Thiết bị chống sét lan truyền (SPD) của Phượng Hoàng hoạt động như một lá chắn bảo vệ. Khi có xung điện áp đột ngột (do sét đánh hoặc đóng cắt thiết bị), SPD sẽ nhanh chóng dẫn dòng xung xuống đất, ngăn không cho điện áp cao xâm nhập vào thiết bị điện của bạn. Điều này giúp bảo vệ TV, tủ lạnh, máy tính, máy móc công nghiệp khỏi hư hỏng do quá áp.",
      keywords: "chống sét lan truyền, SPD, bảo vệ quá áp, chống sét thiết bị điện, xung điện áp",
      intent: "Informational — người dùng muốn hiểu cách SPD bảo vệ thiết bị",
      internalLink: "products.html?category=surge",
      linkAnchor: "Xem thiết bị chống sét lan truyền"
    },
    {
      id: "faq-product-categories",
      category: "product",
      q: "Phượng Hoàng có những nhóm sản phẩm nào?",
      a: "Phượng Hoàng cung cấp 4 nhóm thiết bị điện an toàn thông minh chính: (1) Thiết bị công nghiệp — dành cho nhà máy, khu công nghiệp; (2) Thiết bị dân dụng — bảo vệ an toàn điện cho hộ gia đình; (3) Thiết bị chống sốc cách ly — ngăn chặn điện giật do chạm vào thiết bị rò điện; (4) Thiết bị dập hồ quang — phát hiện và dập tắt hồ quang điện, phòng chống cháy nổ do sự cố điện.",
      keywords: "nhóm sản phẩm Phượng Hoàng, thiết bị điện an toàn, danh mục sản phẩm, công nghiệp, dân dụng, chống sốc, dập hồ quang",
      intent: "Commercial — khách hàng muốn biết danh mục sản phẩm trước khi mua",
      internalLink: "products.html",
      linkAnchor: "Xem danh mục sản phẩm đầy đủ"
    },
    {
      id: "faq-industrial-vs-residential",
      category: "product",
      q: "Thiết bị điện an toàn dùng cho nhà máy khác gì so với hộ gia đình?",
      a: "Thiết bị công nghiệp của Phượng Hoàng được thiết kế để chịu tải lớn hơn, hoạt động liên tục trong môi trường khắc nghiệt (nhiệt độ cao, bụi, rung động) và thường tích hợp khả năng giám sát từ xa. Thiết bị dân dụng tập trung vào tính dễ lắp đặt, nhỏ gọn và bảo vệ các thiết bị gia dụng thông thường. Cả hai dòng đều đáp ứng tiêu chuẩn an toàn điện và được kiểm tra chất lượng trước khi giao đến khách hàng.",
      keywords: "thiết bị điện công nghiệp, thiết bị điện dân dụng, so sánh thiết bị điện, bảo vệ điện nhà máy, an toàn điện gia đình",
      intent: "Commercial — khách hàng phân vân chọn loại thiết bị phù hợp",
      internalLink: "products.html",
      linkAnchor: "Xem thiết bị công nghiệp và dân dụng"
    },
    {
      id: "faq-warranty-period",
      category: "warranty",
      q: "Thời gian bảo hành thiết bị điện Phượng Hoàng là bao lâu?",
      a: "Thời gian bảo hành tiêu chuẩn của Phượng Hoàng là từ 12 đến 24 tháng, tùy theo từng dòng sản phẩm cụ thể. Thời hạn bảo hành được tính từ ngày giao hàng hoặc ngày nghiệm thu công trình. Một số sản phẩm còn có gói bảo hành mở rộng theo thỏa thuận trong hợp đồng.",
      keywords: "bảo hành thiết bị điện, thời gian bảo hành, bảo hành Phượng Hoàng, 12 tháng, 24 tháng",
      intent: "Informational — khách hàng tra cứu chính sách bảo hành",
      internalLink: "warranty-policy.html",
      linkAnchor: "Xem chi tiết chính sách bảo hành"
    },
    {
      id: "faq-warranty-conditions",
      category: "warranty",
      q: "Điều kiện để được bảo hành miễn phí là gì?",
      a: "Để được bảo hành miễn phí, sản phẩm cần đáp ứng các điều kiện: (1) Còn trong thời hạn bảo hành và còn nguyên tem, phiếu bảo hành; (2) Lỗi thuộc về kỹ thuật do nhà sản xuất, không phải do tác động bên ngoài; (3) Khách hàng cung cấp được thông tin mua hàng hợp lệ. Các trường hợp hư hỏng do sử dụng sai hướng dẫn, tự ý tháo lắp, hoặc thiên tai sẽ không được áp dụng bảo hành miễn phí.",
      keywords: "điều kiện bảo hành, bảo hành miễn phí, tem bảo hành, lỗi kỹ thuật, phiếu bảo hành",
      intent: "Informational — khách hàng kiểm tra điều kiện trước khi gửi bảo hành",
      internalLink: "warranty-policy.html",
      linkAnchor: "Xem toàn bộ điều kiện bảo hành"
    },
    {
      id: "faq-warranty-process",
      category: "warranty",
      q: "Quy trình gửi bảo hành thiết bị như thế nào?",
      a: "Quy trình bảo hành của Phượng Hoàng gồm 3 bước đơn giản: Bước 1 — Liên hệ hotline 1800 888 638 hoặc Zalo 0981019381 để thông báo tình trạng lỗi; Bước 2 — Gửi sản phẩm về trung tâm bảo hành hoặc yêu cầu kỹ thuật viên kiểm tra tại chỗ (tùy theo thỏa thuận); Bước 3 — Nhận lại thiết bị sau khi hoàn tất sửa chữa hoặc thay thế linh kiện.",
      keywords: "quy trình bảo hành, gửi bảo hành, sửa chữa thiết bị điện, hotline bảo hành, bảo hành Phượng Hoàng",
      intent: "Informational + Transactional — khách cần gửi bảo hành ngay",
      internalLink: "warranty-policy.html",
      linkAnchor: "Xem quy trình bảo hành chi tiết"
    },
    {
      id: "faq-payment-methods",
      category: "order",
      q: "Có những phương thức thanh toán nào khi mua thiết bị điện Phượng Hoàng?",
      a: "Phượng Hoàng hỗ trợ các phương thức thanh toán linh hoạt: (1) Chuyển khoản ngân hàng theo thông tin trên hợp đồng; (2) Thanh toán tiền mặt trực tiếp tại showroom hoặc khi giao hàng (COD); (3) Các phương thức khác theo thỏa thuận giữa hai bên. Mọi giao dịch đều được thực hiện minh bạch và an toàn.",
      keywords: "phương thức thanh toán, chuyển khoản, COD, thanh toán thiết bị điện, mua hàng Phượng Hoàng",
      intent: "Commercial — khách hàng chuẩn bị mua, muốn biết cách thanh toán",
      internalLink: "payment-policy.html",
      linkAnchor: "Xem hướng dẫn thanh toán chi tiết"
    },
    {
      id: "faq-how-to-order",
      category: "order",
      q: "Làm sao để đặt mua thiết bị điện an toàn của Phượng Hoàng?",
      a: "Bạn có thể đặt mua thiết bị điện an toàn Phượng Hoàng qua các kênh: Gọi hotline 1800 888 638 để được tư vấn và đặt hàng trực tiếp; Nhắn tin qua Zalo 0981019381; Gửi email đến khktphuonghoang.hr@gmail.com; Đến trực tiếp văn phòng tại Tầng 3, số 30 Lý Thái Tổ, Bắc Ninh; Hoặc liên hệ nhà phân phối gần nhất trong mạng lưới toàn quốc của chúng tôi.",
      keywords: "đặt mua thiết bị điện, mua thiết bị chống rò, mua thiết bị chống sét, đặt hàng online, mua hàng Phượng Hoàng",
      intent: "Transactional — khách hàng muốn mua ngay",
      internalLink: "purchase-policy.html",
      linkAnchor: "Xem hướng dẫn mua hàng"
    },
    {
      id: "faq-shipping-time",
      category: "order",
      q: "Thời gian giao hàng thiết bị điện là bao lâu?",
      a: "Phượng Hoàng giao hàng trên toàn quốc. Thời gian giao hàng cụ thể phụ thuộc vào vị trí của bạn và loại sản phẩm đặt mua. Đối với các đơn hàng tiêu chuẩn, thời gian vận chuyển thường từ 2-5 ngày làm việc. Bạn có thể kiểm tra tình trạng hàng hóa khi nhận và có quyền từ chối nhận hàng nếu sản phẩm không đúng với đơn đặt.",
      keywords: "thời gian giao hàng, vận chuyển thiết bị điện, ship thiết bị điện, giao hàng toàn quốc",
      intent: "Commercial — khách muốn biết khi nào nhận được hàng",
      internalLink: "shipping-policy.html",
      linkAnchor: "Xem chính sách vận chuyển"
    },
    {
      id: "faq-exchange-return",
      category: "order",
      q: "Tôi có thể đổi hoặc trả thiết bị đã mua không?",
      a: "Có. Phượng Hoàng áp dụng chính sách đổi trả cho các sản phẩm gặp lỗi kỹ thuật từ nhà sản xuất hoặc không đúng với mô tả đơn hàng. Điều kiện đổi trả bao gồm: sản phẩm còn nguyên vẹn, đầy đủ phụ kiện và trong thời gian quy định. Vui lòng liên hệ hotline 1800 888 638 để được hướng dẫn quy trình đổi trả cụ thể.",
      keywords: "đổi trả thiết bị điện, hoàn tiền, trả hàng, chính sách đổi trả, quyền lợi khách hàng",
      intent: "Informational — khách cần biết quyền lợi đổi trả",
      internalLink: "exchange-policy.html",
      linkAnchor: "Xem chính sách đổi trả chi tiết"
    },
    {
      id: "faq-distributor-find",
      category: "service",
      q: "Làm sao tìm nhà phân phối Phượng Hoàng gần nhất?",
      a: "Phượng Hoàng có mạng lưới phân phối toàn quốc. Bạn có thể tra cứu nhà phân phối gần nhất trên trang Hệ thống phân phối của chúng tôi bằng cách nhập tên tỉnh/thành phố hoặc chọn khu vực, hoặc gọi hotline 1800 888 638 để được hỗ trợ.",
      keywords: "tìm nhà phân phối, đại lý thiết bị điện, nhà phân phối gần nhất, phân phối Phượng Hoàng, mạng lưới phân phối",
      intent: "Transactional — khách muốn tìm nơi mua hàng gần nhất",
      internalLink: "distribution-system.html",
      linkAnchor: "Tìm nhà phân phối gần bạn"
    },
    {
      id: "faq-become-distributor",
      category: "partner",
      q: "Tôi muốn trở thành đại lý phân phối thiết bị Phượng Hoàng, cần làm gì?",
      a: "Phượng Hoàng luôn chào đón các đối tác phân phối mới trên toàn quốc. Khi trở thành đối tác, bạn sẽ nhận được: hỗ trợ kỹ thuật từ đội ngũ kỹ sư, hỗ trợ sản phẩm mẫu, hỗ trợ marketing, chính sách hợp tác linh hoạt và đào tạo sản phẩm chuyên sâu. Để đăng ký, bạn có thể nhắn tin qua Zalo 0981019381 hoặc gọi hotline 1800 888 638 để được tư vấn chi tiết về chính sách hợp tác.",
      keywords: "trở thành đại lý, đối tác phân phối, đăng ký phân phối, hợp tác Phượng Hoàng, nhà phân phối thiết bị điện",
      intent: "Transactional — doanh nghiệp muốn trở thành đối tác",
      internalLink: "distribution-system.html",
      linkAnchor: "Đăng ký trở thành đối tác phân phối"
    },
    {
      id: "faq-team-expertise",
      category: "service",
      q: "Đội ngũ kỹ thuật của Phượng Hoàng có kinh nghiệm không?",
      a: "Đội ngũ kỹ sư và tư vấn của Phượng Hoàng có kinh nghiệm thực tế trong lĩnh vực thiết bị điện an toàn thông minh. Họ am hiểu sâu về nhu cầu vận hành thực tế của khách hàng công nghiệp và dân dụng. Công ty cam kết hỗ trợ toàn diện từ khâu tư vấn, khảo sát, lắp đặt, đào tạo sử dụng đến bảo hành và hỗ trợ sau bán hàng.",
      keywords: "đội ngũ kỹ sư, kỹ thuật viên, chuyên gia điện, kinh nghiệm thiết bị điện, Phượng Hoàng",
      intent: "Trust — khách hàng muốn xác minh năng lực đội ngũ",
      internalLink: "about-us.html",
      linkAnchor: "Tìm hiểu về đội ngũ Phượng Hoàng"
    },
    {
      id: "faq-project-experience",
      category: "service",
      q: "Phượng Hoàng đã triển khai những loại công trình nào?",
      a: "Phượng Hoàng đã triển khai giải pháp an toàn điện cho nhiều loại công trình trên toàn quốc, bao gồm nhà máy sản xuất, khu công nghiệp, tòa nhà thương mại và công trình dân dụng. Các giải pháp được vận hành ổn định và được khách hàng đánh giá cao về độ tin cậy. Bạn có thể xem một số dự án tiêu biểu trên trang Dự án & Công trình của chúng tôi.",
      keywords: "dự án an toàn điện, công trình Phượng Hoàng, kinh nghiệm triển khai, nhà máy, khu công nghiệp",
      intent: "Trust + Commercial — khách B2B đánh giá năng lực nhà thầu",
      internalLink: "projects.html",
      linkAnchor: "Xem các dự án tiêu biểu"
    },
    {
      id: "faq-certificates",
      category: "service",
      q: "Thiết bị Phượng Hoàng có chứng nhận chất lượng không?",
      a: "Có. Thiết bị điện an toàn của Phượng Hoàng được kiểm tra kỹ lưỡng trước khi giao tới khách hàng và đáp ứng các tiêu chuẩn an toàn điện. Quy trình kiểm định được thực hiện rõ ràng và minh bạch. Bạn có thể xem các chứng nhận chất lượng của chúng tôi trên trang Chứng nhận.",
      keywords: "chứng nhận chất lượng, chứng chỉ an toàn điện, tiêu chuẩn thiết bị điện, kiểm định chất lượng",
      intent: "Trust — khách B2B xác minh chất lượng sản phẩm",
      internalLink: "certificates.html",
      linkAnchor: "Xem chứng nhận chất lượng"
    },
    {
      id: "faq-technical-support",
      category: "service",
      q: "Phượng Hoàng có hỗ trợ kỹ thuật sau khi mua hàng không?",
      a: "Có. Phượng Hoàng cung cấp hỗ trợ kỹ thuật toàn diện sau bán hàng: đội ngũ kỹ sư luôn sẵn sàng hỗ trợ trong suốt quá trình sử dụng; dịch vụ tư vấn lắp đặt và đào tạo vận hành cho khách hàng doanh nghiệp; phản hồi nhanh chóng khi có vấn đề phát sinh. Bạn có thể liên hệ qua hotline 1800 888 638, Zalo 0981019381 hoặc email khktphuonghoang.hr@gmail.com.",
      keywords: "hỗ trợ kỹ thuật, hỗ trợ sau bán hàng, tư vấn lắp đặt, đào tạo vận hành, bảo trì thiết bị điện",
      intent: "Informational + Commercial — khách đã mua cần hỗ trợ, hoặc khách mới muốn biết dịch vụ hậu mãi",
      internalLink: "contact.html",
      linkAnchor: "Liên hệ hỗ trợ kỹ thuật"
    },
    {
      id: "faq-working-hours",
      category: "service",
      q: "Phượng Hoàng làm việc vào giờ nào? Tôi có thể đến trực tiếp không?",
      a: "Phượng Hoàng làm việc từ Thứ 2 đến Thứ 7, từ 8:00 đến 17:30. Bạn có thể đến trực tiếp văn phòng tại Tầng 3, số 30, đường Lý Thái Tổ, Phường Kinh Bắc, Tỉnh Bắc Ninh trong giờ làm việc. Để được phục vụ tốt nhất, bạn nên gọi điện trước qua hotline 1800 888 638 để đặt lịch hẹn.",
      keywords: "giờ làm việc, địa chỉ Phượng Hoàng, văn phòng Bắc Ninh, đến trực tiếp",
      intent: "Navigational — khách muốn đến văn phòng",
      internalLink: "contact.html",
      linkAnchor: "Xem thông tin liên hệ và bản đồ"
    },
    {
      id: "faq-consulting-service",
      category: "service",
      q: "Phượng Hoàng có tư vấn miễn phí về giải pháp an toàn điện không?",
      a: "Có. Đội ngũ chuyên gia của Phượng Hoàng sẵn sàng tư vấn miễn phí để giúp bạn lựa chọn giải pháp an toàn điện phù hợp nhất cho nhu cầu cụ thể — dù bạn là hộ gia đình, doanh nghiệp hay nhà máy. Chúng tôi cung cấp giải pháp điện thông minh phù hợp cho từng nhu cầu và mỗi sản phẩm đều được kiểm tra kỹ lưỡng trước khi giao. Liên hệ ngay để được tư vấn.",
      keywords: "tư vấn an toàn điện, tư vấn miễn phí, giải pháp điện, tư vấn chống rò, tư vấn chống sét",
      intent: "Transactional — khách muốn nhận tư vấn ngay",
      internalLink: "contact.html",
      linkAnchor: "Gửi yêu cầu tư vấn miễn phí"
    },
    {
      id: "faq-data-privacy",
      category: "service",
      q: "Thông tin cá nhân của tôi có được bảo mật khi liên hệ Phượng Hoàng không?",
      a: "Có. Phượng Hoàng cam kết bảo vệ thông tin cá nhân của khách hàng. Chúng tôi chỉ thu thập thông tin cần thiết cho giao dịch mua bán và hỗ trợ kỹ thuật, không chia sẻ với bên thứ ba khi chưa có sự đồng ý của bạn. Thông tin bạn cung cấp qua form liên hệ được bảo mật và chỉ dùng cho mục đích tư vấn.",
      keywords: "bảo mật thông tin, bảo vệ dữ liệu, quyền riêng tư, an toàn thông tin",
      intent: "Trust — khách muốn yên tâm trước khi cung cấp thông tin",
      internalLink: "privacy-policy.html",
      linkAnchor: "Xem chính sách bảo mật"
    }
  ],

  en: [
    {
      id: "faq-surge-what",
      category: "product",
      q: "How does a surge protective device protect my equipment?",
      a: "Phuong Hoang's Surge Protective Devices (SPDs) act as a protective shield. When a sudden voltage spike occurs (from lightning strikes or equipment switching), the SPD rapidly diverts the surge current to ground, preventing high voltage from entering your electrical equipment. This protects TVs, refrigerators, computers, and industrial machinery from overvoltage damage.",
      keywords: "surge protection, SPD, overvoltage protection, surge arrester, voltage spike",
      intent: "Informational — user wants to understand SPD protection",
      internalLink: "products.html?category=surge",
      linkAnchor: "View surge protective devices"
    },
    {
      id: "faq-product-categories",
      category: "product",
      q: "What product categories does Phuong Hoang offer?",
      a: "Phuong Hoang provides 4 main categories of smart electrical safety equipment: (1) Industrial equipment — for factories and industrial zones; (2) Residential equipment — electrical safety protection for households; (3) Isolation surge protection — preventing electric shock from contact with leaking equipment; (4) Arc fault protection — detecting and extinguishing electrical arcs to prevent fire hazards from electrical faults.",
      keywords: "Phuong Hoang product categories, electrical safety equipment, product catalog, industrial, residential, surge, arc fault",
      intent: "Commercial — customer wants to know product range before buying",
      internalLink: "products.html",
      linkAnchor: "View full product catalog"
    },
    {
      id: "faq-industrial-vs-residential",
      category: "product",
      q: "How do industrial safety devices differ from residential ones?",
      a: "Phuong Hoang's industrial equipment is designed for higher load capacity, continuous operation in harsh environments (high temperature, dust, vibration), and often includes remote monitoring capabilities. Residential devices focus on easy installation, compact design, and protecting standard household appliances. Both lines meet electrical safety standards and are quality-tested before delivery.",
      keywords: "industrial electrical equipment, residential electrical safety, factory protection, home electrical safety, equipment comparison",
      intent: "Commercial — customer deciding which type to purchase",
      internalLink: "products.html",
      linkAnchor: "Browse industrial and residential equipment"
    },
    {
      id: "faq-warranty-period",
      category: "warranty",
      q: "How long is the warranty on Phuong Hoang equipment?",
      a: "Phuong Hoang's standard warranty period ranges from 12 to 24 months, depending on the specific product line. The warranty period begins from the delivery date or project acceptance date. Some product lines also offer extended warranty packages as agreed in the contract.",
      keywords: "electrical equipment warranty, warranty period, Phuong Hoang warranty, 12 months, 24 months",
      intent: "Informational — customer researching warranty terms",
      internalLink: "warranty-policy.html",
      linkAnchor: "View full warranty policy"
    },
    {
      id: "faq-warranty-conditions",
      category: "warranty",
      q: "What are the conditions for free warranty coverage?",
      a: "To qualify for free warranty service, your product must meet these conditions: (1) Still within the warranty period with intact warranty seal and card; (2) The fault is a manufacturing defect, not caused by external factors; (3) You can provide valid purchase information. Damage resulting from improper use, unauthorized repairs, or natural disasters is not covered under free warranty.",
      keywords: "warranty conditions, free warranty, warranty seal, manufacturing defect, warranty card",
      intent: "Informational — customer checking coverage before submitting a claim",
      internalLink: "warranty-policy.html",
      linkAnchor: "View all warranty conditions"
    },
    {
      id: "faq-warranty-process",
      category: "warranty",
      q: "What is the warranty claim process?",
      a: "Phuong Hoang's warranty process involves 3 simple steps: Step 1 — Contact our hotline at +84 1800 888 638 or Zalo at 0981019381 to report the issue; Step 2 — Send the product to our service center or request an on-site inspection by a technician (as agreed); Step 3 — Receive your device back after repair or component replacement is complete.",
      keywords: "warranty process, warranty claim, equipment repair, warranty hotline, Phuong Hoang warranty",
      intent: "Informational + Transactional — customer needs to file a warranty claim",
      internalLink: "warranty-policy.html",
      linkAnchor: "View detailed warranty process"
    },
    {
      id: "faq-payment-methods",
      category: "order",
      q: "What payment methods are accepted for purchasing equipment?",
      a: "Phuong Hoang offers flexible payment options: (1) Bank transfer using the details provided in your contract; (2) Cash payment at our showroom or upon delivery (COD); (3) Other methods as mutually agreed. All transactions are conducted transparently and securely.",
      keywords: "payment methods, bank transfer, COD, equipment payment, purchasing from Phuong Hoang",
      intent: "Commercial — customer ready to buy, wants to know payment options",
      internalLink: "payment-policy.html",
      linkAnchor: "View payment guide"
    },
    {
      id: "faq-how-to-order",
      category: "order",
      q: "How can I order Phuong Hoang electrical safety equipment?",
      a: "You can order Phuong Hoang electrical safety equipment through multiple channels: Call the hotline at +84 1800 888 638 for consultation and direct ordering; Message us on Zalo at 0981019381; Email khktphuonghoang.hr@gmail.com; Visit our office at 3rd Floor, 30 Ly Thai To, Bac Ninh; Or contact the nearest distributor in our nationwide network.",
      keywords: "order electrical equipment, buy leakage detector, buy surge arrester, place order, Phuong Hoang purchase",
      intent: "Transactional — customer wants to buy now",
      internalLink: "purchase-policy.html",
      linkAnchor: "View purchase guide"
    },
    {
      id: "faq-shipping-time",
      category: "order",
      q: "How long does delivery take?",
      a: "Phuong Hoang delivers nationwide. Actual delivery time depends on your location and the type of products ordered. For standard orders, shipping typically takes 2-5 business days. You can inspect the goods upon receipt and have the right to refuse delivery if the products don't match your order.",
      keywords: "delivery time, equipment shipping, electrical equipment delivery, nationwide shipping",
      intent: "Commercial — customer wants to know when they'll receive their order",
      internalLink: "shipping-policy.html",
      linkAnchor: "View shipping policy"
    },
    {
      id: "faq-exchange-return",
      category: "order",
      q: "Can I exchange or return purchased equipment?",
      a: "Yes. Phuong Hoang has an exchange and return policy for products with manufacturer defects or that do not match the order description. Return conditions include: the product must be intact with all accessories and within the specified time period. Please contact our hotline at +84 1800 888 638 for guidance on the specific return process.",
      keywords: "equipment exchange, product return, refund, exchange policy, customer rights",
      intent: "Informational — customer needs to know return rights",
      internalLink: "exchange-policy.html",
      linkAnchor: "View exchange and return policy"
    },
    {
      id: "faq-distributor-find",
      category: "service",
      q: "How do I find the nearest Phuong Hoang distributor?",
      a: "Phuong Hoang has a nationwide distribution network. You can find the nearest distributor on our Distribution System page by entering your province/city or selecting your region, or call the hotline at +84 1800 888 638 for assistance.",
      keywords: "find distributor, electrical equipment dealer, nearest distributor, Phuong Hoang distribution, distribution network",
      intent: "Transactional — customer wants to find the nearest purchase location",
      internalLink: "distribution-system.html",
      linkAnchor: "Find a distributor near you"
    },
    {
      id: "faq-become-distributor",
      category: "partner",
      q: "I want to become a Phuong Hoang distributor. What should I do?",
      a: "Phuong Hoang welcomes new distribution partners nationwide. As a partner, you'll receive: technical support from our engineering team, sample product support, marketing support, flexible cooperation policies, and in-depth product training. To register, message us on Zalo at 0981019381 or call the hotline at +84 1800 888 638 for detailed consultation on partnership terms.",
      keywords: "become a distributor, distribution partner, register as distributor, Phuong Hoang partnership, electrical equipment dealer",
      intent: "Transactional — business wants to become a partner",
      internalLink: "distribution-system.html",
      linkAnchor: "Register as a distribution partner"
    },
    {
      id: "faq-team-expertise",
      category: "service",
      q: "Is Phuong Hoang's technical team experienced?",
      a: "Phuong Hoang's engineers and consultants have practical, hands-on experience in smart electrical safety equipment. They deeply understand the real-world operational needs of both industrial and residential customers. The company is committed to comprehensive support — from consultation, site survey, and installation to user training, warranty, and after-sales support.",
      keywords: "engineering team, technicians, electrical experts, equipment experience, Phuong Hoang",
      intent: "Trust — customer wants to verify team competence",
      internalLink: "about-us.html",
      linkAnchor: "Learn about the Phuong Hoang team"
    },
    {
      id: "faq-project-experience",
      category: "service",
      q: "What types of projects has Phuong Hoang completed?",
      a: "Phuong Hoang has deployed electrical safety solutions for a wide range of projects nationwide, including manufacturing plants, industrial zones, commercial buildings, and residential facilities. The solutions operate reliably and are highly rated by customers for their dependability. You can view featured projects on our Projects page.",
      keywords: "electrical safety projects, Phuong Hoang installations, deployment experience, factories, industrial zones",
      intent: "Trust + Commercial — B2B customer evaluating contractor capability",
      internalLink: "projects.html",
      linkAnchor: "View featured projects"
    },
    {
      id: "faq-certificates",
      category: "service",
      q: "Does Phuong Hoang equipment have quality certifications?",
      a: "Yes. Phuong Hoang's electrical safety equipment is thoroughly tested before delivery to customers and meets electrical safety standards. The quality assurance process is conducted transparently. You can view our certifications on the Certificates page.",
      keywords: "quality certification, electrical safety certificate, equipment standards, quality assurance",
      intent: "Trust — B2B customer verifying product quality",
      internalLink: "certificates.html",
      linkAnchor: "View quality certifications"
    },
    {
      id: "faq-technical-support",
      category: "service",
      q: "Does Phuong Hoang provide after-sales technical support?",
      a: "Yes. Phuong Hoang provides comprehensive after-sales technical support: our engineering team is always ready to assist throughout your usage period; we offer installation consultation and operational training for business clients; and we respond quickly to any issues that arise. Contact us via hotline +84 1800 888 638, Zalo 0981019381, or email khktphuonghoang.hr@gmail.com.",
      keywords: "technical support, after-sales service, installation consultation, operational training, equipment maintenance",
      intent: "Informational + Commercial — existing customer needs help, or new customer checking after-sales quality",
      internalLink: "contact.html",
      linkAnchor: "Contact technical support"
    },
    {
      id: "faq-working-hours",
      category: "service",
      q: "What are Phuong Hoang's business hours? Can I visit in person?",
      a: "Phuong Hoang operates Monday through Saturday, from 8:00 AM to 5:30 PM. You are welcome to visit our office at 3rd Floor, 30 Ly Thai To Street, Kinh Bac Ward, Bac Ninh Province during business hours. For the best service, we recommend calling ahead at +84 1800 888 638 to schedule an appointment.",
      keywords: "business hours, Phuong Hoang address, Bac Ninh office, visit in person",
      intent: "Navigational — customer wants to visit the office",
      internalLink: "contact.html",
      linkAnchor: "View contact info and map"
    },
    {
      id: "faq-consulting-service",
      category: "service",
      q: "Does Phuong Hoang offer free electrical safety consultation?",
      a: "Yes. Phuong Hoang's expert team is ready to provide free consultation to help you choose the most suitable electrical safety solution for your specific needs — whether you're a household, business, or factory. We provide smart electrical solutions tailored to each need, and every product is thoroughly tested before delivery. Contact us today for a consultation.",
      keywords: "electrical safety consultation, free consultation, electrical solutions, leakage protection advice, surge protection advice",
      intent: "Transactional — customer wants a consultation now",
      internalLink: "contact.html",
      linkAnchor: "Request a free consultation"
    },
    {
      id: "faq-data-privacy",
      category: "service",
      q: "Is my personal information protected when I contact Phuong Hoang?",
      a: "Yes. Phuong Hoang is committed to protecting customer personal information. We only collect information necessary for transactions and technical support, and we do not share it with third parties without your consent. Information you provide through our contact form is kept confidential and used solely for consultation purposes.",
      keywords: "data privacy, information protection, personal data, privacy policy, data security",
      intent: "Trust — customer wants assurance before sharing information",
      internalLink: "privacy-policy.html",
      linkAnchor: "View privacy policy"
    }
  ],

  zh: [
    {
      id: "faq-surge-what",
      category: "product",
      q: "电涌保护器如何保护我的电气设备？",
      a: "凤凰科技的电涌保护器（SPD）如同防护盾牌。当出现突然的电压尖峰（由雷击或设备开关引起）时，SPD会迅速将电涌电流导向大地，阻止高电压进入您的电气设备。这样可以保护电视、冰箱、电脑和工业机械免受过压损坏。",
      keywords: "电涌保护, SPD, 过压保护, 电涌保护器, 电压尖峰",
      intent: "信息型 — 用户想了解SPD的保护原理",
      internalLink: "products.html?category=surge",
      linkAnchor: "查看电涌保护器"
    },
    {
      id: "faq-product-categories",
      category: "product",
      q: "凤凰科技有哪些产品类别？",
      a: "凤凰科技提供四大类智能用电安全设备：（1）工业设备——适用于工厂和工业园区；（2）民用设备——为家庭提供用电安全保护；（3）隔离电涌保护——防止因接触漏电设备而触电；（4）电弧故障保护——检测并熄灭电弧，防止电气故障引发的火灾危险。",
      keywords: "凤凰科技产品类别, 用电安全设备, 产品目录, 工业, 民用, 电涌, 电弧",
      intent: "商业型 — 客户在购买前想了解产品范围",
      internalLink: "products.html",
      linkAnchor: "查看完整产品目录"
    },
    {
      id: "faq-industrial-vs-residential",
      category: "product",
      q: "工业用电安全设备与家用设备有什么不同？",
      a: "凤凰科技的工业设备设计用于承受更大负载，在恶劣环境（高温、粉尘、振动）下连续运行，通常还集成远程监控功能。民用设备注重安装简便、结构紧凑，保护标准家用电器。两类产品均符合电气安全标准，在交付前经过质量检测。",
      keywords: "工业电气设备, 民用电气安全, 工厂保护, 家庭用电安全, 设备对比",
      intent: "商业型 — 客户在决定购买哪种类型",
      internalLink: "products.html",
      linkAnchor: "浏览工业与民用设备"
    },
    {
      id: "faq-warranty-period",
      category: "warranty",
      q: "凤凰科技设备的保修期是多长？",
      a: "凤凰科技的标准保修期为12至24个月，具体取决于产品线。保修期从交货日期或项目验收日期开始计算。部分产品线还可根据合同约定提供延长保修服务。",
      keywords: "电气设备保修, 保修期限, 凤凰科技保修, 12个月, 24个月",
      intent: "信息型 — 客户在查询保修条款",
      internalLink: "warranty-policy.html",
      linkAnchor: "查看完整保修政策"
    },
    {
      id: "faq-warranty-conditions",
      category: "warranty",
      q: "免费保修需要满足哪些条件？",
      a: "享受免费保修服务需满足以下条件：（1）产品仍在保修期内，保修标签和保修卡完好无损；（2）故障属于制造缺陷，非外部因素造成；（3）您能提供有效的购买信息。因使用不当、未经授权的维修或自然灾害造成的损坏不在免费保修范围内。",
      keywords: "保修条件, 免费保修, 保修标签, 制造缺陷, 保修卡",
      intent: "信息型 — 客户在提交保修前查看条件",
      internalLink: "warranty-policy.html",
      linkAnchor: "查看全部保修条件"
    },
    {
      id: "faq-warranty-process",
      category: "warranty",
      q: "保修流程是怎样的？",
      a: "凤凰科技的保修流程包含3个简单步骤：第一步——拨打热线 1800 888 638 或通过 Zalo 0981019381 报告故障情况；第二步——将产品送至服务中心，或根据约定要求技术人员上门检查；第三步——维修或更换部件完成后收回设备。",
      keywords: "保修流程, 保修申请, 设备维修, 保修热线, 凤凰科技保修",
      intent: "信息型 + 交易型 — 客户需要提交保修申请",
      internalLink: "warranty-policy.html",
      linkAnchor: "查看详细保修流程"
    },
    {
      id: "faq-payment-methods",
      category: "order",
      q: "购买凤凰科技设备有哪些付款方式？",
      a: "凤凰科技提供灵活的付款方式：（1）根据合同信息进行银行转账；（2）在展厅直接支付现金或货到付款（COD）；（3）双方协商的其他方式。所有交易均透明、安全地进行。",
      keywords: "付款方式, 银行转账, 货到付款, 设备付款, 凤凰科技购买",
      intent: "商业型 — 客户准备购买，想了解付款选项",
      internalLink: "payment-policy.html",
      linkAnchor: "查看付款指南"
    },
    {
      id: "faq-how-to-order",
      category: "order",
      q: "如何订购凤凰科技的用电安全设备？",
      a: "您可以通过多种渠道订购凤凰科技用电安全设备：拨打热线 1800 888 638 进行咨询并直接下单；通过 Zalo 0981019381 发送消息；发送邮件至 khktphuonghoang.hr@gmail.com；前往越南北宁市李太祖街30号三楼办公室；或联系我们在全国网络中最近的经销商。",
      keywords: "订购电气设备, 购买漏电检测器, 购买电涌保护器, 下单, 凤凰科技购买",
      intent: "交易型 — 客户想立即购买",
      internalLink: "purchase-policy.html",
      linkAnchor: "查看购买指南"
    },
    {
      id: "faq-shipping-time",
      category: "order",
      q: "配送需要多长时间？",
      a: "凤凰科技提供全国配送服务。实际配送时间取决于您的位置和订购的产品类型。标准订单通常需要2-5个工作日。您可以在收货时检查货物，如产品与订单不符，有权拒绝签收。",
      keywords: "配送时间, 设备运输, 电气设备配送, 全国配送",
      intent: "商业型 — 客户想知道何时收到货物",
      internalLink: "shipping-policy.html",
      linkAnchor: "查看配送政策"
    },
    {
      id: "faq-exchange-return",
      category: "order",
      q: "购买后可以退换设备吗？",
      a: "可以。凤凰科技对存在制造缺陷或与订单描述不符的产品实行退换政策。退换条件包括：产品完好无损、配件齐全且在规定时间内。请拨打热线 1800 888 638 获取具体退换流程指导。",
      keywords: "设备退换, 产品退货, 退款, 退换政策, 客户权益",
      intent: "信息型 — 客户需要了解退换权益",
      internalLink: "exchange-policy.html",
      linkAnchor: "查看退换政策"
    },
    {
      id: "faq-distributor-find",
      category: "service",
      q: "如何找到最近的凤凰科技经销商？",
      a: "凤凰科技拥有全国性的分销网络。您可以在我们的分销系统页面输入省市或选择区域来查找最近的经销商，或拨打热线 1800 888 638 获取帮助。",
      keywords: "查找经销商, 电气设备代理商, 最近经销商, 凤凰科技分销, 分销网络",
      intent: "交易型 — 客户想找到最近的购买地点",
      internalLink: "distribution-system.html",
      linkAnchor: "查找您附近的经销商"
    },
    {
      id: "faq-become-distributor",
      category: "partner",
      q: "我想成为凤凰科技的经销商，应该怎么做？",
      a: "凤凰科技欢迎全国各地的新分销合作伙伴。成为合作伙伴后，您将获得：工程团队的技术支持、样品产品支持、营销支持、灵活的合作政策以及深入的产品培训。如需注册，请通过 Zalo 0981019381 发送消息或拨打热线 1800 888 638 获取合作条款的详细咨询。",
      keywords: "成为经销商, 分销合作伙伴, 注册经销商, 凤凰科技合作, 电气设备代理商",
      intent: "交易型 — 企业想成为合作伙伴",
      internalLink: "distribution-system.html",
      linkAnchor: "注册成为分销合作伙伴"
    },
    {
      id: "faq-team-expertise",
      category: "service",
      q: "凤凰科技的技术团队经验丰富吗？",
      a: "凤凰科技的工程师和顾问在智能用电安全设备领域拥有实际动手经验。他们深入了解工业和民用客户的实际运营需求。公司致力于提供全方位支持——从咨询、现场勘察、安装到用户培训、保修和售后支持。",
      keywords: "工程团队, 技术人员, 电气专家, 设备经验, 凤凰科技",
      intent: "信任型 — 客户想验证团队能力",
      internalLink: "about-us.html",
      linkAnchor: "了解凤凰科技团队"
    },
    {
      id: "faq-project-experience",
      category: "service",
      q: "凤凰科技完成过哪些类型的项目？",
      a: "凤凰科技已为全国各类项目部署用电安全解决方案，包括制造工厂、工业园区、商业建筑和住宅设施。解决方案运行稳定，客户对其可靠性评价很高。您可以在我们的项目页面查看代表性项目。",
      keywords: "用电安全项目, 凤凰科技工程, 部署经验, 工厂, 工业园区",
      intent: "信任型 + 商业型 — B2B客户在评估承包商能力",
      internalLink: "projects.html",
      linkAnchor: "查看代表性项目"
    },
    {
      id: "faq-certificates",
      category: "service",
      q: "凤凰科技的设备有质量认证吗？",
      a: "有。凤凰科技的用电安全设备在交付客户前经过全面检测，符合电气安全标准。质量保证流程公开透明。您可以在认证页面查看我们的认证。",
      keywords: "质量认证, 电气安全证书, 设备标准, 质量保证",
      intent: "信任型 — B2B客户在验证产品质量",
      internalLink: "certificates.html",
      linkAnchor: "查看质量认证"
    },
    {
      id: "faq-technical-support",
      category: "service",
      q: "凤凰科技提供售后技术支持吗？",
      a: "提供。凤凰科技提供全面的售后技术支持：我们的工程团队随时准备在使用过程中为您提供帮助；我们为企业客户提供安装咨询和操作培训；我们对出现的任何问题都能快速响应。请通过热线 1800 888 638、Zalo 0981019381 或邮箱 khktphuonghoang.hr@gmail.com 联系我们。",
      keywords: "技术支持, 售后服务, 安装咨询, 操作培训, 设备维护",
      intent: "信息型 + 商业型 — 现有客户需要帮助，或新客户在检查售后质量",
      internalLink: "contact.html",
      linkAnchor: "联系技术支持"
    },
    {
      id: "faq-working-hours",
      category: "service",
      q: "凤凰科技的营业时间是怎样的？可以亲自到访吗？",
      a: "凤凰科技的营业时间为周一至周六，上午8:00至下午5:30。欢迎您在营业时间内到访我们的办公室，地址为越南北宁市李太祖街30号京北坊三楼。为获得最佳服务，建议您提前拨打热线 1800 888 638 预约。",
      keywords: "营业时间, 凤凰科技地址, 北宁办公室, 亲自到访",
      intent: "导航型 — 客户想到访办公室",
      internalLink: "contact.html",
      linkAnchor: "查看联系方式和地图"
    },
    {
      id: "faq-consulting-service",
      category: "service",
      q: "凤凰科技提供免费的用电安全咨询吗？",
      a: "提供。凤凰科技的专家团队随时准备提供免费咨询，帮助您选择最适合您具体需求的用电安全解决方案——无论您是家庭、企业还是工厂。我们为每个需求提供量身定制的智能电气解决方案，每件产品在交付前都经过全面检测。立即联系我们获取咨询。",
      keywords: "用电安全咨询, 免费咨询, 电气解决方案, 漏电保护建议, 电涌保护建议",
      intent: "交易型 — 客户现在想要咨询",
      internalLink: "contact.html",
      linkAnchor: "申请免费咨询"
    },
    {
      id: "faq-data-privacy",
      category: "service",
      q: "联系凤凰科技时我的个人信息会受到保护吗？",
      a: "会的。凤凰科技致力于保护客户个人信息。我们仅收集交易和技术支持所需的信息，未经您的同意不会与第三方共享。您通过联系表单提供的信息将保密，仅用于咨询目的。",
      keywords: "数据隐私, 信息保护, 个人数据, 隐私政策, 数据安全",
      intent: "信任型 — 客户在分享信息前需要获得保障",
      internalLink: "privacy-policy.html",
      linkAnchor: "查看隐私政策"
    }
  ]
};

/* ═══════════ FAQ ACCORDION ENGINE ═══════════ */

var _phFaqCurrentLang = 'vi';
var _phFaqActiveCategory = 'all';
var _phFaqPageCategories = null; // null = show all, or ['product','order']

/**
 * Initialize FAQ on the current page.
 * @param {Object} options
 *   options.categories - Array of category names to show (null/omitted = all 20)
 *   options.lang       - Initial language (default 'vi')
 *
 * Example:
 *   initFAQ({categories:['product','order','warranty']});
 *   initFAQ();  // show all 20
 */
function initFAQ(options) {
  var opts = options || {};
  _phFaqPageCategories = opts.categories || null;

  // Hide filter buttons for categories not included on this page
  if (_phFaqPageCategories && _phFaqPageCategories.length > 0) {
    var allCats = ['product', 'service', 'warranty', 'order', 'partner'];
    for (var j = 0; j < allCats.length; j++) {
      if (_phFaqPageCategories.indexOf(allCats[j]) === -1) {
        var btn = document.querySelector('.ph-faq-filter-btn[data-cat="' + allCats[j] + '"]');
        if (btn) btn.style.display = 'none';
      }
    }
  }

  // Initial render
  var lang = opts.lang || 'vi';
  try { renderFAQ(lang); } catch(e) { console.warn('FAQ render failed:', e); }

  // Inject JSON-LD schema
  try { injectFAQSchema(lang); } catch(e) { console.warn('FAQ schema injection failed:', e); }

  // Hook language switcher from phong.js (guard against double-init stacking)
  if (!window.___phFaqLanguageHooked) {
    var origSetLanguage = window.setLanguage;
    if (typeof origSetLanguage === 'function') {
      window.setLanguage = function(lang) {
        origSetLanguage(lang);
        if (lang === 'vi' || lang === 'en' || lang === 'zh') {
          try { renderFAQ(lang); } catch(e) {}
          try { injectFAQSchema(lang); } catch(e) {}
        }
      };
    }
    window.___phFaqLanguageHooked = true;
  }
}

/**
 * Get the list of FAQ items valid for this page.
 * Returns all items if no page-level category filter is set.
 */
function _phGetPageItems(lang) {
  var data = phFaqData[lang] || phFaqData.vi;
  if (!_phFaqPageCategories || _phFaqPageCategories.length === 0) {
    return data;
  }
  var filtered = [];
  for (var i = 0; i < data.length; i++) {
    if (_phFaqPageCategories.indexOf(data[i].category) !== -1) {
      filtered.push(data[i]);
    }
  }
  return filtered;
}

function renderFAQ(lang) {
  var data = _phGetPageItems(lang);
  var list = document.getElementById('faqList');
  if (!list) return;
  var h = '';

  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var display = (_phFaqActiveCategory === 'all' || item.category === _phFaqActiveCategory) ? '' : 'style="display:none"';

    h += '<div class="ph-faq-item" data-category="' + item.category + '" ' + display + '>';
    h += '<button class="ph-faq-question" onclick="toggleFAQ(this)" aria-expanded="false">';
    h += '<span class="ph-faq-q-icon">Q</span>';
    h += '<span class="ph-faq-q-text">' + item.q + '</span>';
    h += '<span class="ph-faq-arrow">▼</span>';
    h += '</button>';
    h += '<div class="ph-faq-answer">';
    h += '<div class="ph-faq-answer-inner">';
    h += '<p>' + item.a + '</p>';
    if (item.internalLink) {
      h += '<p><a href="' + item.internalLink + '">' + item.linkAnchor + ' →</a></p>';
    }
    h += '</div>';
    h += '</div>';
    h += '</div>';
  }

  list.innerHTML = h;
  _phFaqCurrentLang = lang;
}

function toggleFAQ(btn) {
  var item = btn.parentElement;
  var isOpen = item.classList.contains('open');

  // Close all
  var allItems = document.querySelectorAll('.ph-faq-item.open');
  for (var i = 0; i < allItems.length; i++) {
    allItems[i].classList.remove('open');
    var btn2 = allItems[i].querySelector('.ph-faq-question');
    if (btn2) btn2.setAttribute('aria-expanded', 'false');
  }

  // Open clicked (if wasn't already open)
  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

function filterByCategory(cat, btn) {
  _phFaqActiveCategory = cat;

  // Update active button
  var btns = document.querySelectorAll('.ph-faq-filter-btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('active');
  }
  if (btn) btn.classList.add('active');

  // Show/hide items
  var items = document.querySelectorAll('.ph-faq-item');
  var visibleCount = 0;
  for (var j = 0; j < items.length; j++) {
    var itemCat = items[j].getAttribute('data-category');
    if (cat === 'all' || itemCat === cat) {
      items[j].style.display = '';
      visibleCount++;
    } else {
      items[j].style.display = 'none';
      items[j].classList.remove('open');
      var btn2 = items[j].querySelector('.ph-faq-question');
      if (btn2) btn2.setAttribute('aria-expanded', 'false');
    }
  }

  // Show/hide no-results
  var noRes = document.getElementById('faqNoResults');
  if (noRes) {
    noRes.classList.toggle('show', visibleCount === 0);
  }

  // Also re-apply search filter
  var searchVal = document.getElementById('faqSearch');
  if (searchVal && searchVal.value.trim()) {
    filterFAQ();
  }
}

function filterFAQ() {
  var searchEl = document.getElementById('faqSearch');
  if (!searchEl) return;
  var query = searchEl.value.toLowerCase().trim();
  var items = document.querySelectorAll('.ph-faq-item');
  var visibleCount = 0;

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var cat = item.getAttribute('data-category');
    var qText = (item.querySelector('.ph-faq-q-text') || {}).textContent || '';
    var aText = (item.querySelector('.ph-faq-answer-inner') || {}).textContent || '';
    var matchesSearch = !query || qText.toLowerCase().indexOf(query) !== -1 || aText.toLowerCase().indexOf(query) !== -1;
    var matchesCategory = _phFaqActiveCategory === 'all' || cat === _phFaqActiveCategory;

    if (matchesSearch && matchesCategory) {
      item.style.display = '';
      visibleCount++;
    } else {
      item.style.display = 'none';
      item.classList.remove('open');
      var btn = item.querySelector('.ph-faq-question');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  }

  var noRes = document.getElementById('faqNoResults');
  if (noRes) {
    noRes.classList.toggle('show', visibleCount === 0);
  }
}

/* ═══════════ JSON-LD FAQPage SCHEMA ═══════════ */

/**
 * Generate FAQPage JSON-LD schema ONLY for questions visible on this page.
 * If a page-level category filter is set, only those questions are included.
 */
function generateFAQSchema(lang) {
  var data = _phGetPageItems(lang);
  var mainEntity = [];

  for (var i = 0; i < data.length; i++) {
    mainEntity.push({
      "@type": "Question",
      "name": data[i].q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": data[i].a
      }
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity
  };
}

/**
 * Inject JSON-LD FAQPage schema into <head>.
 * Removes any previously injected FAQ schema before inserting new one.
 */
function injectFAQSchema(lang) {
  // Remove old FAQ schema if present
  var oldScript = document.getElementById('ph-faq-schema');
  if (oldScript) oldScript.remove();

  var schema = generateFAQSchema(lang);
  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'ph-faq-schema';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
