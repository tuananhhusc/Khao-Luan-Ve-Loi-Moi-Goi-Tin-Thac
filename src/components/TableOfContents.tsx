"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

const tocItems: TocItem[] = [
  { id: "dan-nhap", title: "Dẫn Nhập", level: 2 },
  { id: "boi-canh", title: "Bối Cảnh Hiện Sinh", level: 2 },
  { id: "noi-khac-khoai", title: "Nỗi Khắc Khoải Của Một Thế Hệ", level: 3 },
  { id: "piazza-san-pietro", title: "Tạp Chí Piazza San Pietro", level: 3 },
  { id: "goc-re-augustino", title: "Gốc Rễ Augustinô", level: 2 },
  { id: "tu-do-trong-an-sung", title: "Tự Do Trong Ân Sủng", level: 3 },
  { id: "in-illo-uno-unum", title: "In Illo Uno Unum", level: 3 },
  { id: "nhan-hoc-khat-vong", title: "Nhân Học Về Khát Vọng", level: 2 },
  { id: "bat-an-an-sung", title: "Sự Bất An Là Mảnh Đất Của Ân Sủng", level: 3 },
  { id: "thien-chua-khong-lua-doi", title: "Thiên Chúa Không Lừa Dối", level: 3 },
  { id: "chronos-kairos", title: "Chronos Và Kairos", level: 2 },
  { id: "bao-chua-chronos", title: "Sự Bạo Chúa Của Chronos", level: 3 },
  { id: "kairos-an-sung", title: "Kairos: Đột Phá Của Ân Sủng", level: 3 },
  { id: "cat-tia", title: "Sự Thấu Cảm Kitô Học & Cắt Tỉa", level: 2 },
  { id: "tinh-ban-chua-giesu", title: "Tình Bạn Của Chúa Giêsu", level: 3 },
  { id: "tien-trinh-cat-tia", title: "Tiến Trình Cắt Tỉa", level: 3 },
  { id: "bien-hinh-tinh-yeu", title: "Sự Biến Hình Của Tình Yêu", level: 3 },
  { id: "bon-tru-cot", title: "Bốn Trụ Cột Phân Định", level: 2 },
  { id: "thanh-mau", title: "Chiều Kích Thánh Mẫu Học", level: 2 },
  { id: "ket-luan", title: "Kết Luận", level: 2 },
  { id: "references", title: "Nguồn Trích Dẫn", level: 2 },
];

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const headingIds = tocItems.map((item) => item.id);
    const headingElements = headingIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Pick the one closest to the top of the viewport
          const top = visibleEntries.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr
          );
          setActiveId(top.target.id);
        }
      },
      {
        rootMargin: "-80px 0px -65% 0px",
        threshold: 0,
      }
    );

    headingElements.forEach((el) => observer.observe(el));
    observers.push(observer);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tocList = (
    <nav aria-label="Mục lục">
      <h2 className="font-heading text-sm tracking-[0.2em] uppercase text-marian-blue mb-4 font-semibold">
        Mục Lục
      </h2>
      <ul className="space-y-0.5">
        {tocItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={`toc-link w-full text-left ${
                item.level === 3 ? "toc-link-sub" : ""
              } ${activeId === item.id ? "active" : ""}`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden xl:block w-[260px] flex-shrink-0">
        <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 pb-8">
          {tocList}
        </div>
      </aside>

      {/* Mobile toggle button */}
      <button
        className="fixed bottom-4 right-4 md:right-6 z-50 w-12 h-12 rounded-full bg-marian-blue text-white shadow-lg flex items-center justify-center hover:bg-cardinal-red hover:scale-105 active:scale-95 transition-all duration-200 no-print xl:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Mở mục lục"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <>
          <div
            className="toc-mobile-overlay animate-fade-in-overlay xl:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="toc-mobile-panel animate-slide-in-right xl:hidden">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-heading text-sm tracking-[0.2em] uppercase text-marian-blue font-semibold">
                Mục Lục
              </h2>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-text-secondary hover:text-marian-blue transition-colors"
                aria-label="Đóng mục lục"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-0.5">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`toc-link w-full text-left ${
                      item.level === 3 ? "toc-link-sub" : ""
                    } ${activeId === item.id ? "active" : ""}`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
