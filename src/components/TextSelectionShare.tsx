"use client";

import { useEffect, useState } from "react";

export default function TextSelectionShare() {
  const [selection, setSelection] = useState<{ text: string; x: number; y: number } | null>(null);

  useEffect(() => {
    const handleSelection = () => {
      const activeSelection = window.getSelection();
      
      if (!activeSelection || activeSelection.isCollapsed) {
        setSelection(null);
        return;
      }

      const text = activeSelection.toString().trim();
      if (text.length < 10) {
        setSelection(null);
        return;
      }

      // Ensure we are inside the article prose
      let node = activeSelection.anchorNode;
      let isInsideArticle = false;
      while (node) {
        if (node.nodeType === 1 && (node as Element).classList.contains("prose-theological")) {
          isInsideArticle = true;
          break;
        }
        node = node.parentNode;
      }

      if (!isInsideArticle) {
        setSelection(null);
        return;
      }

      const range = activeSelection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      setSelection({
        text,
        x: rect.left + rect.width / 2,
        y: rect.top - 10,
      });
    };

    document.addEventListener("mouseup", handleSelection);
    document.addEventListener("keyup", handleSelection);
    
    // Clear selection on scroll or mousedown elsewhere
    const clearSelection = (e: Event) => {
      if (e.type === 'mousedown' && selection) {
        // Only clear if clicking outside the tooltip
        const target = e.target as Element;
        if (!target.closest('#share-tooltip')) {
          setSelection(null);
        }
      } else if (e.type === 'scroll') {
        setSelection(null);
      }
    };
    
    document.addEventListener("mousedown", clearSelection);
    window.addEventListener("scroll", clearSelection);

    return () => {
      document.removeEventListener("mouseup", handleSelection);
      document.removeEventListener("keyup", handleSelection);
      document.removeEventListener("mousedown", clearSelection);
      window.removeEventListener("scroll", clearSelection);
    };
  }, [selection]);

  if (!selection) return null;

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `"${selection.text}" — Khảo Luận Về Lời Mời Gọi Tín Thác`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(shareText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${selection.text} (Trích từ: ${currentUrl})`);
    setSelection(null);
  };

  return (
    <div 
      id="share-tooltip"
      className="fixed z-50 animate-fade-in no-print"
      style={{
        left: `${selection.x}px`,
        top: `${selection.y}px`,
        transform: 'translate(-50%, -100%)'
      }}
    >
      <div className="bg-tooltip-bg text-tooltip-text shadow-xl rounded-lg px-3 py-2 flex items-center gap-3">
        <a 
          href={twitterUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-vatican-gold transition-colors"
          title="Chia sẻ lên X (Twitter)"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a 
          href={facebookUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-vatican-gold transition-colors"
          title="Chia sẻ lên Facebook"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <div className="w-px h-4 bg-white/30"></div>
        <button 
          onClick={handleCopy}
          className="hover:text-vatican-gold transition-colors text-sm font-semibold"
          title="Sao chép"
        >
          Copy
        </button>
      </div>
      {/* Arrow */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-tooltip-bg"></div>
    </div>
  );
}
