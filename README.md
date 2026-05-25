# Báo Cáo Nghiên Cứu: Khảo Luận Về Lời Mời Gọi Tín Thác — Huấn Quyền Đức Lêô XIV

Ứng dụng web học thuật học thuật được xây dựng bằng **Next.js (App Router)**, **React 19**, **TypeScript** và **Tailwind CSS**, dùng để lưu trữ và hiển thị báo cáo nghiên cứu thần học toàn diện về Bức thư Mục vụ của Đức Thánh Cha Lêô XIV gửi cho sinh viên Pietro. Dự án kết hợp hài hòa giữa thẩm mỹ cổ điển của các bản thảo đan viện (monastic manuscripts) và các tính năng tương tác hiện đại.

---

## 🌟 Các Tính Năng Nổi Bật

### 1. Hệ Thống Thiết Kế & Linh Đạo (Monastic Design System)
* **Bảng màu Parchment (Da dê):** Sử dụng màu nền đặc trưng `#FAF9F6` giúp giảm mỏi mắt khi đọc các nội dung nghiên cứu dài, tự động chuyển đổi sang bảng màu Sepia dịu nhẹ hoặc giao diện Tối (Dark) có độ tương phản cao.
* **Kiểu chữ học thuật (Academic Typography):** Kết hợp phông chữ serif cổ điển [Cinzel](https://fonts.google.com/specimen/Cinzel) cho tiêu đề lớn mô phỏng chữ khắc đá La Mã, và [Lora](https://fonts.google.com/specimen/Lora) tối ưu hiển thị tiếng Việt học thuật cho phần thân bài.
* **Họa tiết & Drop Cap:** Ký tự mở đầu đoạn văn lớn (Drop Cap) màu đỏ Hồng y ([Cardinal Red](file:///d:/thoigian/blog/src/app/globals.css#L16)), các vạch ngăn mục họa tiết thánh giá cổ điển và chân sóng chuyển tiếp mềm mại ở tiêu đề.

### 2. Bộ Điều Khiển Trải Nghiệm Đọc (UX Controls)
* **Theme Switching:** Chuyển đổi linh hoạt 3 chế độ hiển thị: Sáng (Giao diện gốc), Sepia (Bảo vệ mắt), và Tối (Ban đêm).
* **Font Scaling:** Tăng/giảm kích thước phông chữ từ nhỏ đến cực lớn (`font-sm` -> `font-xl`) giúp độc giả lớn tuổi dễ dàng theo dõi.
* **DOM Hydration Sync:** Tránh giật màn hình (hydration flash) bằng cách chạy đoạn mã script đồng bộ lớp CSS ngay khi tải trang.

### 3. Mục Lục Tương Tác (Sticky & Responsive ToC)
* **Desktop Sidebar:** Cố định bên trái màn hình (`position: sticky`), tự động tô sáng (highlight) mục đang đọc nhờ sử dụng `IntersectionObserver`.
* **Mobile Drawer:** Thu gọn thành phím tắt nổi ở góc dưới bên phải trên di động, mở ra một panel mục lục dạng trượt có lớp phủ làm mờ nền (backdrop blur).
* **Zero Overlap:** Phím mở mục lục di động được đồng bộ kích thước và khoảng cách với nút cuộn lên đầu trang (`ScrollToTop`), tạo khoảng cách đều đặn `1rem` ở mọi mức thu phóng chữ.

### 4. Công Cụ Chú Thích & Từ Điển Tra Cứu (Academic Tooltips)
* **Chú thích thông minh (Academic Footnotes):** 25 chú thích khoa học dạng số lũy thừa. Khi rê chuột (hover) sẽ hiển thị nội dung trích dẫn; khi click sẽ cuộn mượt mà đến thư mục tài liệu tham khảo ở cuối bài kèm hiệu ứng nhấp nháy phát sáng (flash effect).
* **Từ điển thuật ngữ (Glossary):** Tích hợp giải nghĩa các khái niệm thần học/triết học Latinh phức tạp (như *Chronos*, *Kairos*, *Cor Inquietum*, *In Illo uno unum*) ngay tại chỗ khi tương tác.
* **Bôi đen để chia sẻ (Highlight & Share):** Cho phép độc giả chọn một đoạn văn bất kỳ trong bài viết để mở popover chia sẻ nhanh lên X (Twitter), Facebook hoặc Sao chép kèm nguồn trích dẫn tự động.

### 5. Công Cụ Trích Dẫn Học Thuật (Citation Generator)
* Tự động tạo trích dẫn bài viết theo 3 định dạng chuẩn quốc tế: **APA**, **MLA**, và **Chicago**.
* Tích hợp nút sao chép nhanh (one-click copy) vào khay nhớ tạm.

### 6. Tối Ưu Hóa In Ấn & SEO (SEO & Print Optimized)
* **SEO Semantic HTML:** Cấu trúc thẻ chuẩn SEO (`main`, `article`, `aside`, `section`), tích hợp dữ liệu cấu trúc Google JSON-LD dạng `ScholarlyArticle`.
* **Print Styles (@media print):** Loại bỏ toàn bộ các thanh công cụ điều khiển, nút bấm, hay thanh tiến trình đọc khi in. Tự động căn chỉnh lề trang in sạch sẽ, tối ưu ngắt trang (`page-break`) cho các bảng số liệu so sánh.

---

## 📂 Giao Diện & Kiến Trúc Dự Án

```
d:\thoigian\blog\
├── public/                 — Tài nguyên tĩnh
└── src/
    ├── app/
    │   ├── favicon.ico     — Icon trang web
    │   ├── globals.css    — Design system, biến màu CSS, lớp in ấn và hoạt ảnh
    │   ├── layout.tsx     — Bố cục gốc, phông chữ Google Fonts, cấu trúc Metadata SEO
    │   └── page.tsx       — Nội dung bài viết nghiên cứu thần học gồm 9 phần + schema JSON-LD
    └── components/
        ├── CitationGenerator.tsx — Tạo trích dẫn chuẩn APA/MLA/Chicago
        ├── Footnote.tsx          — Liên kết số chú thích kèm popover tra cứu nhanh
        ├── FootnotesSection.tsx  — Danh sách chi tiết nguồn tài liệu tham khảo cuối bài
        ├── GlossaryTerm.tsx      — Trích lục giải nghĩa từ điển thuật ngữ
        ├── HeroSection.tsx       — Phần tiêu đề lớn trang trọng, chân sóng mềm
        ├── ReadingProgress.tsx   — Thanh tiến trình đọc chạy dọc đầu trang
        ├── ScrollToTop.tsx       — Nút cuộn nhanh lên đầu trang
        ├── SectionDivider.tsx    — Vạch ngăn mục họa tiết thánh giá
        ├── TextSelectionShare.tsx — Popover chia sẻ nhanh khi bôi đen văn bản
        ├── UXControls.tsx        — Bảng tùy chọn giao diện (Theme, kích thước chữ)
        └── UXProvider.tsx        — Quản lý trạng thái Context giao diện đọc
```

---

## 🛠️ Công Nghệ Sử Dụng

* **Framework:** Next.js 16 (Turbopack) với React 19 & TypeScript 5
* **Styling:** Tailwind CSS 4 (Utility classes) & Vanilla CSS Custom Properties
* **Typography:** Cormorant Garamond & Lora (Google Fonts)

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

### 1. Yêu cầu hệ thống
* Đảm bảo máy tính của bạn đã cài đặt [Node.js](https://nodejs.org) (phiên bản 18.x trở lên được khuyến nghị).

### 2. Cài đặt các gói phụ thuộc
Di chuyển vào thư mục dự án và chạy lệnh sau để cài đặt dependencies:
```bash
npm install
```

### 3. Chạy môi trường phát triển (Development Mode)
Khởi động máy chủ Next.js Turbopack cục bộ:
```bash
npm run dev
```
Sau đó truy cập địa chỉ [http://localhost:3000](http://localhost:3000) trên trình duyệt của bạn.

### 4. Biên dịch ứng dụng sản xuất (Production Build)
Biên dịch ứng dụng và kiểm tra lỗi TypeScript/tĩnh hóa trang:
```bash
npm run build
```

### 5. Chạy bản build sản xuất
Chạy ứng dụng đã tối ưu hóa trên máy chủ cục bộ:
```bash
npm run start
```

---

## ✒️ Bản quyền nội dung
* Nội dung nghiên cứu dựa trên Bức thư Mục vụ của Đức Thánh Cha Lêô XIV công bố trên Tạp chí *Piazza San Pietro* tháng 5 năm 2026.
