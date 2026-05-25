export default function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#1D3557] via-[#1D3557] to-[#264A78] text-white">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 md:py-24 text-center">
        {/* Ornamental cross */}
        <div className="animate-fade-in-up opacity-0 mb-6">
          <svg
            className="mx-auto w-8 h-8 text-[#F4A261] opacity-70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11 2h2v7h7v2h-7v9h4v2H7v-2h4v-9H4V9h7V2z" />
          </svg>
        </div>

        {/* Subtitle */}
        <p
          className="animate-fade-in-up opacity-0 animate-delay-100 text-[#F4A261] font-heading text-sm md:text-base tracking-[0.25em] uppercase mb-4"
        >
          Báo Cáo Nghiên Cứu
        </p>

        {/* Title */}
        <h1
          className="animate-fade-in-up opacity-0 animate-delay-200 font-heading text-2xl md:text-4xl lg:text-[2.65rem] font-semibold leading-tight md:leading-snug tracking-wide mb-6"
        >
          Khảo Luận
          <br />
          <span className="text-[#F4A261]">Về Lời Mời Gọi Tín Thác</span>
        </h1>

        {/* Ornamental divider */}
        <div className="hero-ornament animate-fade-in-up opacity-0 animate-delay-200">
          <svg
            className="w-5 h-5 text-[#F4A261] opacity-60"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2l2.5 5.5L18 8.5l-4 4 1 5.5L10 15.5 4.5 18l1-5.5-4-4 5.5-1z" />
          </svg>
        </div>

        {/* Subtitle line */}
        <p
          className="animate-fade-in-up opacity-0 animate-delay-300 font-heading-alt italic text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Thời Gian, Khát Vọng Và Tiến Trình Chữa Lành
          <br className="hidden md:block" />
          Trong Huấn Quyền Của Đức Lêô XIV
        </p>

        {/* Meta info */}
        <div
          className="animate-fade-in-up opacity-0 animate-delay-400 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-white/60"
        >
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            Tạp chí Piazza San Pietro
          </span>
          <span className="w-px h-4 bg-white/20" />
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v9.75" />
            </svg>
            Tháng 5, 2026
          </span>
          <span className="w-px h-4 bg-white/20" />
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            ~25 phút đọc
          </span>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z"
            fill="var(--parchment)"
          />
        </svg>
      </div>
    </header>
  );
}
