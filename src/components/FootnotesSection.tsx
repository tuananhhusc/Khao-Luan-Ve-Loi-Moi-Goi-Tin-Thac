interface FootnoteEntry {
  id: number;
  text: string;
  url?: string;
}

const footnotes: FootnoteEntry[] = [
  { id: 1, text: "Press Release: \"Piazza San Pietro\" Magazine – May 2026", url: "https://press.vatican.va/content/salastampa/en/info/2026/05/19/260519a.html" },
  { id: 3, text: "Editoria, Piazza San Pietro. Le inquietudini dei giovani e la risposta del Papa", url: "https://press.vatican.va/content/dam/salastampa/it/bollettino/CS_Piazza%20San%20Pietro%20mag%2026.pdf" },
  { id: 4, text: "BÀI MỚI - Dòng Đức Bà Truyền Giáo", url: "https://ducbatruyengiao.org/tin-tuc/tinMoiNhat" },
  { id: 5, text: "Đức Thánh Cha Lêô nói với một người trẻ bất an: \"Thời gian chữa lành mọi vết thương\"", url: "https://dongten.net/tin-tuc/duc-thanh-cha-leo-noi-voi-mot-nguoi-tre-bat-an-thoi-gian-chua-lanh-moi-vet-thuong" },
  { id: 7, text: "Il Papa conforta un maturando \"in crisi\" – Famiglia Cristiana", url: "https://www.famigliacristiana.it/papa/il-papa-scrive-a-un-maturando-inquieto-ozqw6vj2" },
  { id: 8, text: "Il 18enne calabrese Pietro scrive al Papa e lui risponde – LaC News24", url: "https://www.lacnews24.it/attualita/il-18enne-calabrese-pietro-scrive-al-papa-e-lui-risponde-la-tua-inquietudine-non-e-negativa-gesu-ti-ama-cosi-lf607600" },
  { id: 9, text: "Đức Lêô XIV Trả Lời Chàng Trai Lo Lắng: Thời Gian Là Người Thầy…", url: "https://xuanbichvietnam.net/bai-viet/8568/duc-leo-xiv-tra-loi-chang-trai-lo-lang-thoi-gian-la-nguoi-thay-va-chua-lanh-moi-vet-thuong" },
  { id: 12, text: "Rivista - Piazza San Pietro Magazine", url: "https://www.piazzasanpietromagazine.org/" },
  { id: 14, text: "4 suggerimenti di Papa Leone per coltivare vincoli sani – Schoenstatt", url: "https://schoenstatt.com/it/4-suggerimenti-di-papa-leone-per-coltivare-vincoli-sani/" },
  { id: 15, text: "Đức Thánh Cha Được Tặng Bản Đầu Tiên Cuốn Sách – Dòng Nữ Vương Hòa Bình", url: "https://dongnuvuonghoabinh.org/chi-tiet/duc-thanh-cha-duoc-tang-ban-dau-tien-cuon-sach-gom-cac-bai-viet-khi-ngai-la-be-tren-dong-augustino" },
  { id: 16, text: "Đức Thánh Cha Leo XIV tiếp nhận bản thảo đầu tiên của cuốn sách \"Tự do trong Ân sủng\"", url: "https://www.ephatacatholic.com/duc-thanh-cha-leo-xiv-tiep-nhan-ban-thao-dau-tien-cua-cuon-sach-tu-do-trong-an-sung/" },
  { id: 17, text: "Đức Thánh Cha được tặng bản đầu tiên cuốn sách – Dòng Nữ Đa Minh Thái Bình", url: "https://dongnudaminhthaibinh.net/duc-thanh-cha-duoc-tang-ban-dau-tien-cuon-sach-gom-cac-bai-viet-khi-ngai-la-be-tren-dong-augustino" },
  { id: 19, text: "IN ILLO UNO UNUM: Thánh Augustinô, Đức Giáo Hoàng Lêô XIV Và Khát Vọng Hiệp Nhất – HĐGM Việt Nam", url: "https://hdgmvietnam.com/chi-tiet/in-illo-uno-unum-thanh-augustino-duc-giao-hoang-leo-xiv-va-khat-vong-hiep-nhat" },
  { id: 20, text: "Thánh Augustinô: Một Con Tim Thao Thức… – HĐGM Việt Nam", url: "https://hdgmvietnam.com/chi-tiet/thanh-augustino-mot-con-tim-thao-thuc" },
  { id: 21, text: "Quan Niệm Của Thánh Augustinô Về Ý Nghĩa Thực Sự Của Bình An – HĐGM Việt Nam", url: "https://hdgmvietnam.com/chi-tiet/quan-niem-cua-thanh-augustino-ve-y-nghia-thuc-su-cua-binh-an" },
  { id: 25, text: "Heavenly Avarice: The Theology of Prayer – Lectionary Central", url: "https://www.lectionarycentral.com/advent1/CrousePrayer.html" },
  { id: 26, text: "Con Người Một Huyền Nhiệm – Scribd", url: "https://www.scribd.com/document/680279640/Con-Ng%C6%B0%E1%BB%9Di-M%E1%BB%99t-Huy%E1%BB%81n-Nhi%E1%BB%87m-B%E1%BA%A3n-%C4%90%E1%BB%83-in-2013" },
  { id: 28, text: "Khát Vọng – HĐGM Việt Nam", url: "https://hdgmvietnam.com/chi-tiet/khat-vong-26234" },
  { id: 29, text: "KAIROS-Thời gian là gì? – Dòng Xitô Thiên Phước", url: "https://xitothienphuoc.net/kairos-thoi-gian-la-gi/" },
  { id: 30, text: "Kairos: Nghệ thuật cổ đại Hy Lạp về việc biết khi nào nên hành động – Tramdoc.vn", url: "https://tramdoc.vn/tin-tuc/kairos-nghe-thuat-co-dai-hy-lap-ve-viec-biet-khi-nao-nen-hanh-dong-nr8QEW.html" },
  { id: 32, text: "Thời Điểm Của Chúa – Hội Thánh Tin Lành Việt Nam", url: "https://httlvn.org/thoi-diem-cua-chua.html" },
  { id: 33, text: "Người Hy Lạp cổ dùng tới 2 loại thời gian khác nhau – CafeF", url: "https://cafef.vn/nguoi-hy-lap-co-dung-toi-2-loai-thoi-gian-khac-nhau-nguoi-thanh-cong-la-nguoi-biet-dung-ca-2-loai-nay-20170802160400594.chn" },
  { id: 35, text: "Manna: Sinh nhiều hoa trái và trở thành môn đệ (Ga 15,1-8) – Dòng Tên", url: "https://dongten.net/su-vu/suy-tu-tin-mung/manna-sinh-nhieu-hoa-trai-va-tro-thanh-mon-de-thu-tu-tuan-5-phuc-sinh-ga-151-8" },
  { id: 36, text: "Tĩnh Tâm Mùa Chay – Linh Đạo Khoa Học Về Thập Giá – Dòng Cát Minh", url: "https://dongcatminh.org/tinh-tam-mua-chay-trong-linh-dao-khoa-hoc-ve-thap-gia-phan-i-ngay-8/" },
  { id: 38, text: "Đức Giáo Hoàng – Giáo Phận Phú Cường", url: "https://giaophanphucuong.org/chuyen-de/duc-giao-hoang" },
];

export default function FootnotesSection() {
  return (
    <section id="references" className="footnotes-section">
      <h2 className="font-heading text-xl text-marian-blue font-semibold mb-6 tracking-wide">
        Nguồn Trích Dẫn
      </h2>
      <ol className="space-y-2">
        {footnotes.map((fn) => (
          <li key={fn.id} id={`fn-${fn.id}`} className="footnote-item transition-colors duration-500">
            <span className="footnote-number">[{fn.id}]</span>
            <span>
              {fn.url ? (
                <a
                  href={fn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-marian-blue hover:text-cardinal-red transition-colors underline underline-offset-2 decoration-vatican-gold/40"
                >
                  {fn.text}
                </a>
              ) : (
                fn.text
              )}
              <a href={`#fnref-${fn.id}`} className="footnote-backlink" title="Quay lại văn bản">
                ↩
              </a>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
