"use client";

import { useUX } from "./UXProvider";

const SIZES = ["font-sm", "font-md", "font-lg", "font-xl"] as const;

export default function UXControls() {
  const { theme, setTheme, fontSize, setFontSize } = useUX();

  const handleDecreaseFont = () => {
    const idx = SIZES.indexOf(fontSize);
    if (idx > 0) setFontSize(SIZES[idx - 1]);
  };

  const handleIncreaseFont = () => {
    const idx = SIZES.indexOf(fontSize);
    if (idx < SIZES.length - 1) setFontSize(SIZES[idx + 1]);
  };

  return (
    <div className="fixed top-4 md:top-6 right-4 md:right-6 z-50 flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 bg-parchment/90 backdrop-blur-md border border-marian-blue/20 rounded-full shadow-[0_8px_30px_rgba(29,53,87,0.2)] no-print transition-all hover:shadow-[0_8px_40px_rgba(29,53,87,0.3)]">
      <div className="flex items-center gap-1 border-r border-marian-blue/20 pr-2">
        <button
          onClick={() => setTheme("light")}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            theme === "light" ? "bg-marian-blue text-white" : "text-marian-blue hover:bg-marian-blue/10"
          }`}
          title="Giao diện gốc"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
        <button
          onClick={() => setTheme("sepia")}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            theme === "sepia" ? "bg-marian-blue text-white" : "text-marian-blue hover:bg-marian-blue/10"
          }`}
          title="Chế độ bảo vệ mắt"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            theme === "dark" ? "bg-marian-blue text-white" : "text-marian-blue hover:bg-marian-blue/10"
          }`}
          title="Chế độ ban đêm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
      
      <div className="flex items-center gap-1 pl-1">
        <button
          onClick={handleDecreaseFont}
          disabled={fontSize === SIZES[0]}
          className="w-8 h-8 rounded-full flex items-center justify-center text-marian-blue hover:bg-marian-blue/10 disabled:opacity-30 transition-all font-semibold"
          title="Thu nhỏ chữ"
        >
          A-
        </button>
        <button
          onClick={handleIncreaseFont}
          disabled={fontSize === SIZES[SIZES.length - 1]}
          className="w-8 h-8 rounded-full flex items-center justify-center text-marian-blue hover:bg-marian-blue/10 disabled:opacity-30 transition-all font-semibold text-lg"
          title="Phóng to chữ"
        >
          A+
        </button>
      </div>
    </div>
  );
}
