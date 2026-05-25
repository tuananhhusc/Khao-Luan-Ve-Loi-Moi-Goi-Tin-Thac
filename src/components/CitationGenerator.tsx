"use client";

import { useState } from "react";

const CITATIONS = {
  APA: "Đức Lêô XIV. (2024). Khảo Luận Về Lời Mời Gọi Tín Thác. Huấn Quyền Vatican.",
  MLA: "Đức Lêô XIV. \"Khảo Luận Về Lời Mời Gọi Tín Thác.\" Huấn Quyền Vatican, 2024.",
  Chicago: "Đức Lêô XIV. \"Khảo Luận Về Lời Mời Gọi Tín Thác.\" Huấn Quyền Vatican (2024)."
};

type CitationStyle = keyof typeof CITATIONS;

export default function CitationGenerator() {
  const [activeStyle, setActiveStyle] = useState<CitationStyle>("APA");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CITATIONS[activeStyle]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="bg-parchment-dark rounded-xl p-6 border border-marian-blue/20 my-10 no-print">
      <h3 className="font-heading-alt text-xl text-marian-blue font-semibold mb-4">Trích Dẫn Bài Viết (Cite this Article)</h3>
      
      <div className="flex gap-2 mb-4">
        {(Object.keys(CITATIONS) as CitationStyle[]).map((style) => (
          <button
            key={style}
            onClick={() => setActiveStyle(style)}
            className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${
              activeStyle === style 
                ? "bg-marian-blue text-white" 
                : "bg-parchment text-marian-blue hover:bg-marian-blue/10 border border-marian-blue/20"
            }`}
          >
            {style}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="bg-parchment p-4 rounded-md font-body text-text-primary border border-marian-blue/10 pr-12">
          {CITATIONS[activeStyle]}
        </div>
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 text-marian-blue hover:text-cardinal-red transition-colors"
          title="Sao chép trích dẫn"
        >
          {copied ? (
            <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
