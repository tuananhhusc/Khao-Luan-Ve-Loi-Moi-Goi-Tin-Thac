"use client";

import { useState, useRef, useEffect } from "react";

const DICTIONARY: Record<string, string> = {
  "Chronos": "Thời gian vật lý, định lượng, trôi qua theo chiều tuyến tính (ví dụ: giờ, phút, giây).",
  "Kairos": "Thời điểm ân sủng, thời gian định tính, khoảnh khắc Thiên Chúa can thiệp vào lịch sử con người.",
  "Cor Inquietum": "Thuật ngữ của Thánh Augustinô: Trái tim thao thức, khao khát tìm kiếm chân lý cho đến khi được an nghỉ trong Thiên Chúa.",
  "In Illo uno unum": "Thành ngữ tiếng Latinh: 'Trong Đấng Duy nhất, chúng ta là một' - Thể hiện sự hiệp nhất trong Chúa Kitô.",
};

interface GlossaryTermProps {
  term: keyof typeof DICTIONARY | string;
  children: React.ReactNode;
}

export default function GlossaryTerm({ term, children }: GlossaryTermProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const definition = DICTIONARY[term];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 200); // Small delay to prevent flickering
  };

  if (!definition) return <span className="latin-term">{children}</span>;

  return (
    <span 
      className="relative inline-block cursor-help group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      tabIndex={0}
      aria-describedby={`tooltip-${term}`}
    >
      <span className="latin-term underline decoration-marian-blue/30 decoration-dotted underline-offset-4 group-hover:decoration-cardinal-red transition-colors">
        {children}
      </span>
      
      {showTooltip && (
        <span 
          id={`tooltip-${term}`}
          role="tooltip"
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-tooltip-bg text-tooltip-text text-sm p-3 rounded-md shadow-xl no-print animate-fade-in font-body text-left font-normal"
        >
          <span className="block font-heading font-semibold text-vatican-gold mb-1">{term}</span>
          {definition}
          {/* Arrow */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-tooltip-bg"></span>
        </span>
      )}
    </span>
  );
}
