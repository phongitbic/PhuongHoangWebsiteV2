#!/usr/bin/env python3
"""B2B Product Catalog PDF for Phuong Hoang Electrical Safety Equipment"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, PageBreak,
                                 Table, TableStyle)
from reportlab.platypus.flowables import HRFlowable
from reportlab.pdfgen import canvas
import os

ACCENT   = HexColor("#1D8B2C")
GOLD     = HexColor("#C4A040")
DARK     = HexColor("#0B1929")
DARK_BG  = HexColor("#061220")
WHITE    = white
GREY     = HexColor("#64748B")
BORDER   = HexColor("#E2E8F0")

OUT = "/sessions/nice-hopeful-hawking/mnt/D:--www.khktphuonghoang.com/www.khktphuonghoang.v2/assets/phuong-hoang-catalog.pdf"
os.makedirs(os.path.dirname(OUT), exist_ok=True)

styles = getSampleStyleSheet()
S = {}

S['cover_title'] = ParagraphStyle('CoverTitle', parent=styles['Title'],
    fontSize=32, leading=38, textColor=WHITE, alignment=TA_CENTER,
    fontName='Helvetica-Bold', spaceAfter=12)
S['cover_sub'] = ParagraphStyle('CoverSub', parent=styles['Normal'],
    fontSize=14, leading=20, textColor=HexColor("#94A6BE"),
    alignment=TA_CENTER, fontName='Helvetica')
S['h1'] = ParagraphStyle('H1', parent=styles['Heading1'],
    fontSize=26, leading=32, textColor=DARK, spaceAfter=16,
    fontName='Helvetica-Bold', spaceBefore=8)
S['h2'] = ParagraphStyle('H2', parent=styles['Heading2'],
    fontSize=18, leading=24, textColor=DARK, spaceAfter=10,
    fontName='Helvetica-Bold', spaceBefore=18)
S['h3'] = ParagraphStyle('H3', parent=styles['Heading3'],
    fontSize=14, leading=18, textColor=ACCENT, spaceAfter=6,
    fontName='Helvetica-Bold', spaceBefore=12)
S['body'] = ParagraphStyle('Body', parent=styles['Normal'],
    fontSize=10, leading=15, textColor=DARK, fontName='Helvetica',
    alignment=TA_JUSTIFY, spaceAfter=8)
S['caption'] = ParagraphStyle('Caption', parent=S['body'],
    fontSize=8, leading=11, textColor=GREY)
S['stat_num'] = ParagraphStyle('StatNum', parent=styles['Normal'],
    fontSize=28, leading=32, textColor=ACCENT, fontName='Helvetica-Bold',
    alignment=TA_CENTER, spaceAfter=2)
S['stat_label'] = ParagraphStyle('StatLabel', parent=S['body'],
    fontSize=9, leading=12, textColor=GREY, alignment=TA_CENTER)
S['toc_item'] = ParagraphStyle('TOC', parent=S['body'],
    fontSize=11, leading=18, spaceAfter=4)
S['bullet'] = ParagraphStyle('Bullet', parent=S['body'],
    leftIndent=12, bulletIndent=0, spaceBefore=1, spaceAfter=2)

def hr():
    return HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=12, spaceBefore=12)
def section_hr():
    return HRFlowable(width="100%", thickness=1.5, color=ACCENT, spaceAfter=16, spaceBefore=8)
def accent_hr():
    return HRFlowable(width="100%", thickness=0.5, color=HexColor("#1D3B2C"), spaceAfter=10, spaceBefore=10)
def make_section_title(text):
    return [Paragraph(text, S['h1']), section_hr()]
def stat_card(number, label):
    return Table([
        [Paragraph(number, S['stat_num'])],
        [Paragraph(label, S['stat_label'])]
    ], colWidths=[120])

def dark_section(contents):
    data = [[c] for c in contents]
    t = Table(data, colWidths=[170*mm])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), DARK_BG),
        ('LEFTPADDING', (0,0), (-1,-1), 18*mm),
        ('RIGHTPADDING', (0,0), (-1,-1), 18*mm),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))
    return t

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        canvas.Canvas.__init__(self, *args, **kwargs)
        self._saved_page_states = []
    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()
    def save(self):
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_number()
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)
    def draw_page_number(self):
        if self._pageNumber > 1:
            self.setFont('Helvetica', 7)
            self.setFillColor(GREY)
            self.drawRightString(A4[0] - 18*mm, 12*mm,
                f"Phượng Hoàng | B2B Catalog | Trang {self._pageNumber}")

doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=18*mm, rightMargin=18*mm,
    topMargin=22*mm, bottomMargin=22*mm,
    title="Phượng Hoàng B2B Catalog",
    author="Công ty TNHH KHKT Phượng Hoàng",
    subject="B2B Product Catalog"
)

story = []

# ═══ COVER ═══
cover_items = [
    Spacer(1, 30),
    Paragraph("PHƯỢNG HOÀNG", ParagraphStyle('Brand', parent=S['cover_title'],
        fontSize=42, leading=48, textColor=ACCENT)),
    Spacer(1, 6),
    Paragraph("Thiết bị điện an toàn thông minh", S['cover_sub']),
    Spacer(1, 4),
    accent_hr(),
    Spacer(1, 12),
    Paragraph("B2B PRODUCT CATALOG", ParagraphStyle('En', parent=S['cover_title'],
        fontSize=18, leading=22, textColor=GOLD)),
    Spacer(1, 20),
    Paragraph("Giải pháp chống giật &bull; Chống cháy điện &bull; Chống sốc cách ly &bull; Dập hồ quang", S['cover_sub']),
    Spacer(1, 20),
    Paragraph("ISO 9001:2015 &bull; TCVN &bull; CE &bull; IEC", S['cover_sub']),
    Spacer(1, 28),
    Paragraph("CÔNG TY TNHH KHOA HỌC KỸ THUẬT PHƯỢNG HOÀNG",
        ParagraphStyle('Addr', parent=S['cover_sub'], fontSize=10, textColor=HexColor("#7E94AE"))),
    Paragraph("30 Lý Thái Tổ, P. Kinh Bắc, TP. Bắc Ninh, Việt Nam",
        ParagraphStyle('Addr2', parent=S['caption'], textColor=HexColor("#64748B"))),
    Paragraph("Hotline: 1800 888 638  |  info@khktphuonghoang.com  |  khktphuonghoang.com",
        ParagraphStyle('Addr3', parent=S['caption'], textColor=HexColor("#64748B"))),
]

ct = Table([[dark_section(cover_items)]], colWidths=[A4[0]])
ct.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), DARK_BG),
]))
story.append(ct)
story.append(PageBreak())

# ═══ TOC ═══
story.extend(make_section_title("Mục lục"))
story.append(Spacer(1, 8))
toc = [
    ("1.", "Giới thiệu công ty", "3"),
    ("2.", "Tại sao chọn Phượng Hoàng", "4"),
    ("3.", "Sản phẩm", "5"),
    ("4.", "Chứng nhận & Tiêu chuẩn", "8"),
    ("5.", "Dự án tiêu biểu", "9"),
    ("6.", "Nhà phân phối", "11"),
    ("7.", "Chính sách hợp tác", "11"),
    ("8.", "Liên hệ", "12"),
]
toc_data = [[Paragraph(f"<b>{n}</b> {t}", S['toc_item']), Paragraph(p, S['toc_item'])] for n, t, p in toc]
toc_table = Table(toc_data, colWidths=[140*mm, 24*mm])
toc_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LINEBELOW', (0,0), (-1,-1), 0.3, BORDER),
    ('BOTTOMPADDING', (0,0), (-1,-1), 6),
]))
story.append(toc_table)
story.append(PageBreak())

# ═══ 1. COMPANY ═══
story.extend(make_section_title("1. Giới thiệu công ty"))
story.append(Paragraph(
    "Công ty TNHH Khoa Học Kỹ Thuật <b>Phượng Hoàng</b> được thành lập năm 2018, "
    "chuyên nghiên cứu, phát triển và cung cấp các giải pháp <b>thiết bị điện an toàn thông minh</b> "
    "hàng đầu tại Việt Nam. Chúng tôi mang đến giải pháp bảo vệ toàn diện cho mọi công trình, "
    "từ hộ gia đình, chung cư, văn phòng đến nhà máy công nghiệp quy mô lớn.", S['body']))
story.append(Paragraph(
    "Với hệ thống quản lý chất lượng được chứng nhận <b>ISO 9001:2015</b>, mỗi thiết bị của Phượng Hoàng "
    "đều trải qua quy trình kiểm định nghiêm ngặt 3 lớp trước khi đến tay khách hàng. "
    "Sản phẩm đáp ứng các tiêu chuẩn quốc tế <b>TCVN, CE, IEC</b>.", S['body']))

story.append(Spacer(1, 12))
stat_data = [[
    stat_card("2018", "Thành lập"),
    stat_card("ISO 9001", "Chứng nhận"),
    stat_card("63 tỉnh", "Phủ sóng"),
    stat_card("100+", "Đối tác"),
]]
st = Table(stat_data, colWidths=[40*mm, 40*mm, 40*mm, 40*mm])
st.setStyle(TableStyle([
    ('ALIGN', (0,0), (-1,-1), 'CENTER'),
    ('TOPPADDING', (0,0), (-1,-1), 10),
    ('BOTTOMPADDING', (0,0), (-1,-1), 10),
    ('LINEABOVE', (0,0), (-1,0), 1, ACCENT),
    ('LINEBELOW', (0,0), (-1,0), 1, ACCENT),
]))
story.append(st)

story.append(Spacer(1, 16))
story.append(Paragraph("<b>Tầm nhìn:</b> Trở thành doanh nghiệp tiên phong trong lĩnh vực thiết bị điện an toàn thông minh tại Việt Nam.", S['body']))
story.append(Paragraph("<b>Sứ mệnh:</b> Nghiên cứu, phát triển và cung cấp các giải pháp an toàn điện thông minh, giúp người dùng giám sát và điều khiển hệ thống điện từ xa, ngăn chặn sự cố trước khi gây hậu quả nghiêm trọng.", S['body']))
story.append(PageBreak())

# ═══ 2. WHY ═══
story.extend(make_section_title("2. Tại sao chọn Phượng Hoàng"))
why = [
    ("Đội ngũ chuyên môn cao", "Kỹ sư am hiểu sâu cả lý thuyết lẫn thực tiễn ngành điện công nghiệp và dân dụng. Liên tục cập nhật công nghệ và tiêu chuẩn mới nhất."),
    ("Cam kết chất lượng", "Quy trình kiểm soát 3 lớp: kiểm định đầu vào, phòng thí nghiệm độc lập, trước xuất kho. Sản phẩm đạt chuẩn ISO, TCVN, CE, IEC."),
    ("Hỗ trợ toàn diện", "Đồng hành từ khảo sát, thiết kế, lắp đặt, đào tạo vận hành đến bảo trì và hỗ trợ kỹ thuật khẩn cấp."),
    ("Công nghệ giám sát từ xa", "Ứng dụng IoT cho phép giám sát và điều khiển hệ thống điện từ xa qua điện thoại. Cảnh báo sớm, ngăn chặn sự cố."),
    ("Giá trị cạnh tranh", "Sản phẩm chất lượng quốc tế với mức giá cạnh tranh. Chính sách bảo hành rõ ràng, hậu mãi tận tâm."),
]
for title, desc in why:
    story.append(Paragraph(f"<b>{title}</b>", S['h3']))
    story.append(Paragraph(desc, S['body']))
    story.append(Spacer(1, 4))
story.append(PageBreak())

# ═══ 3. PRODUCTS ═══
story.extend(make_section_title("3. Sản phẩm"))
story.append(Paragraph(
    "Phượng Hoàng cung cấp giải pháp an toàn điện toàn diện với 4 dòng sản phẩm chính, "
    "đáp ứng mọi nhu cầu từ dân dụng đến công nghiệp nặng.", S['body']))
story.append(Spacer(1, 14))

products = [
    ("3.1. Thiết bị Công nghiệp", [
        "Chống giật, chống cháy điện cho nhà máy, xí nghiệp, khu công nghiệp",
        "Đáp ứng tiêu chuẩn IEC, TCVN về an toàn điện công nghiệp",
        "Tích hợp giám sát từ xa qua ứng dụng di động",
        "Phù hợp: nhà máy sản xuất, khu chế xuất, trạm biến áp"]),
    ("3.2. Thiết bị Dân dụng", [
        "An toàn điện cho hộ gia đình, chung cư, văn phòng",
        "Dễ lắp đặt, vận hành đơn giản, bảo vệ 24/7",
        "Chống giật, bảo vệ quá tải, chống cháy do chập điện",
        "Phù hợp: căn hộ, nhà phố, văn phòng, cửa hàng"]),
    ("3.3. Chống sốc cách ly", [
        "Cách ly chống sốc điện, bảo vệ tuyệt đối cho người dùng",
        "Ứng dụng trong y tế, trường học, hồ bơi, phòng thí nghiệm",
        "Cách ly hoàn toàn nguồn điện khỏi thiết bị khi có sự cố",
        "Phù hợp: bệnh viện, trường học, khu vui chơi, phòng mổ"]),
    ("3.4. Dập hồ quang", [
        "Dập tắt hồ quang điện tức thời, ngăn chặn cháy nổ",
        "Bảo vệ hệ thống điện trung thế và hạ thế",
        "Phát hiện và dập tắt hồ quang trong mili giây",
        "Phù hợp: tủ điện công nghiệp, trạm biến áp, trung tâm dữ liệu"]),
]

for title, bullets in products:
    story.append(Paragraph(f"<b>{title}</b>", S['h3']))
    for b in bullets:
        story.append(Paragraph(f"&bull; {b}", S['bullet']))
    story.append(Spacer(1, 8))

story.append(Spacer(1, 8))
story.append(Paragraph(
    "<i>Liên hệ hotline <b>1800 888 638</b> để nhận bảng thông số kỹ thuật chi tiết "
    "và báo giá cho từng dòng sản phẩm.</i>", S['body']))
story.append(PageBreak())

# ═══ 4. CERTIFICATIONS ═══
story.extend(make_section_title("4. Chứng nhận & Tiêu chuẩn"))
story.append(Paragraph(
    "Mọi sản phẩm của Phượng Hoàng được kiểm định theo quy trình 3 lớp và đáp ứng "
    "các tiêu chuẩn chất lượng quốc tế:", S['body']))
story.append(Spacer(1, 12))

for name, desc in [
    ("ISO 9001:2015", "Hệ thống quản lý chất lượng, áp dụng cho toàn bộ quy trình thiết kế, sản xuất và phân phối."),
    ("TCVN", "Tiêu chuẩn Quốc gia Việt Nam, đáp ứng các yêu cầu kỹ thuật và an toàn theo quy định Việt Nam."),
    ("CE", "Dấu CE, tuân thủ các yêu cầu về sức khỏe, an toàn và bảo vệ môi trường của Liên minh Châu Âu."),
    ("IEC", "Tiêu chuẩn Ủy ban Kỹ thuật Điện Quốc tế, đáp ứng tiêu chuẩn quốc tế về an toàn và hiệu suất."),
]:
    story.append(Paragraph(f"<b>{name}</b>", S['h3']))
    story.append(Paragraph(desc, S['body']))
    story.append(Spacer(1, 4))

story.append(Spacer(1, 10)); story.append(hr())
story.append(Paragraph("<b>Quy trình kiểm định 3 lớp:</b>", S['body']))
story.append(Paragraph("1. Kiểm định nguyên liệu đầu vào", S['bullet']))
story.append(Paragraph("2. Kiểm định tại phòng thí nghiệm độc lập", S['bullet']))
story.append(Paragraph("3. Kiểm định trước xuất kho", S['bullet']))
story.append(PageBreak())

# ═══ 5. PROJECTS ═══
story.extend(make_section_title("5. Dự án tiêu biểu"))
story.append(Paragraph(
    "Thiết bị điện an toàn Phượng Hoàng đã được tin tưởng lắp đặt tại nhiều công trình trên toàn quốc:", S['body']))
story.append(Spacer(1, 12))

for i, (name, loc, desc) in enumerate([
    ("Nhà máy sản xuất linh kiện điện tử", "Bắc Ninh, 2025", "Hệ thống chống giật và giám sát điện thông minh cho toàn bộ phân xưởng. Bảo vệ 200+ công nhân và thiết bị."),
    ("Chung cư cao cấp", "Hà Nội, 2025", "Thiết bị chống giật cho 300 căn hộ. Tích hợp hệ thống giám sát và cảnh báo sớm qua ứng dụng di động."),
    ("Trường học liên cấp", "Bắc Ninh, 2024", "Thiết bị chống giật cách ly cho toàn bộ phòng học và khu thí nghiệm. Bảo vệ 1,000+ học sinh và giáo viên."),
    ("Bệnh viện đa khoa", "Hải Phòng, 2024", "Giải pháp chống sốc cách ly tại khu điều trị tích cực và phòng mổ. An toàn tuyệt đối cho bệnh nhân."),
    ("Nhà máy chế biến thực phẩm", "Đồng Nai, 2024", "Hệ thống chống cháy điện và dập hồ quang cho toàn bộ khu vực sản xuất và kho lạnh."),
    ("Trung tâm thương mại", "TP. HCM, 2024", "Giải pháp an toàn điện tổng thể cho trung tâm thương mại 5 tầng. Giám sát tập trung và cảnh báo thời gian thực."),
], 1):
    story.append(Paragraph(f"<b>{i}. {name}</b>, <i>{loc}</i>", S['h3']))
    story.append(Paragraph(desc, S['body']))
    story.append(Spacer(1, 4))
story.append(PageBreak())

# ═══ 6. DISTRIBUTION ═══
story.extend(make_section_title("6. Nhà phân phối"))
story.append(Paragraph(
    "Mạng lưới phân phối phủ khắp <b>63 tỉnh thành</b> với hơn <b>100 đối tác</b> trên toàn quốc:", S['body']))
story.append(Spacer(1, 10))
for n, d in [
    ("Miền Bắc", "Trụ sở chính: Bắc Ninh. Có mặt tại: Hà Nội, Hải Phòng, Hưng Yên, Hải Dương, Quảng Ninh, Thái Nguyên, Bắc Giang..."),
    ("Miền Trung", "Có mặt tại: Đà Nẵng, Nghệ An, Thanh Hóa, Hà Tĩnh, Quảng Bình, Huế, Quảng Nam..."),
    ("Miền Nam", "Có mặt tại: TP. HCM, Cần Thơ, Bình Dương, Đồng Nai, Long An, Tiền Giang, Vũng Tàu..."),
]:
    story.append(Paragraph(f"<b>{n}:</b> {d}", S['body']))

story.append(Spacer(1, 24))
story.extend(make_section_title("7. Chính sách hợp tác"))
story.append(Paragraph(
    "Phượng Hoàng luôn chào đón các đối tác mới. Quy trình trở thành đối tác:", S['body']))
story.append(Spacer(1, 8))
for s in [
    "<b>Bước 1, Đăng ký:</b> Gửi thông tin qua hotline 1800 888 638 hoặc email",
    "<b>Bước 2, Thẩm định:</b> Đánh giá năng lực và khu vực phân phối",
    "<b>Bước 3, Ký kết:</b> Ký hợp đồng, nhận chính sách hỗ trợ và đào tạo",
    "<b>Bước 4, Kinh doanh:</b> Nhận hàng và hưởng chiết khấu theo doanh số",
]:
    story.append(Paragraph(s, S['body']))
story.append(Spacer(1, 8))
story.append(Paragraph(
    "<b>Quyền lợi:</b> Chiết khấu cạnh tranh, đào tạo miễn phí, hỗ trợ marketing, "
    "thưởng doanh số, cơ hội trở thành nhà phân phối độc quyền khu vực.", S['body']))
story.append(PageBreak())

# ═══ 8. CONTACT ═══
cs = ParagraphStyle('cs1', parent=S['h1'], textColor=WHITE)
cs3 = ParagraphStyle('cs3', parent=S['h3'], textColor=GOLD)
cb = ParagraphStyle('cb', parent=S['body'], textColor=HexColor("#CBD5E1"))

contact_items = [
    Paragraph("8. Liên hệ", cs),
    section_hr(),
    Spacer(1, 10),
    Paragraph("Trụ sở chính", cs3),
    Paragraph("Tầng 3, số 30, đường Lý Thái Tổ, Phường Kinh Bắc, Tỉnh Bắc Ninh, Việt Nam", cb),
    Spacer(1, 10),
    Paragraph("Thông tin liên hệ", cs3),
    Paragraph("Hotline: 1800 888 638 (tư vấn miễn phí)", cb),
    Paragraph("Zalo: 0981 019 381", cb),
    Paragraph("Email: info@khktphuonghoang.com", cb),
    Paragraph("Website: khktphuonghoang.com", cb),
    Spacer(1, 8),
    Paragraph("Giờ làm việc: Thứ 2 đến Thứ 7, 8:00 đến 17:30", cb),
    Spacer(1, 20),
    Paragraph("<i>Liên hệ ngay để được tư vấn giải pháp và nhận báo giá chi tiết.</i>", cb),
    Spacer(1, 10),
    Paragraph("<b>Phượng Hoàng, An toàn cho mọi công trình.</b>", cb),
]

ct2 = Table([[dark_section(contact_items)]], colWidths=[A4[0]])
ct2.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), DARK_BG),
    ('TOPPADDING', (0,0), (-1,-1), 0),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
story.append(ct2)

doc.build(story, canvasmaker=NumberedCanvas)
print(f"PDF created: {OUT}")
print(f"Size: {os.path.getsize(OUT):,} bytes")
