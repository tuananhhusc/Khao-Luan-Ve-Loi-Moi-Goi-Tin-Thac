"use client";

import { type ReactNode } from "react";

interface FootnoteProps {
  id: number;
  children: ReactNode;
}

export default function Footnote({ id, children }: FootnoteProps) {
  return (
    <a
      href={`#fn-${id}`}
      id={`fnref-${id}`}
      className="footnote-ref"
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById(`fn-${id}`);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          // Flash effect
          target.style.backgroundColor = "rgba(244, 162, 97, 0.18)";
          setTimeout(() => {
            target.style.backgroundColor = "";
          }, 2000);
        }
      }}
    >
      {id}
      <span className="footnote-tooltip">{children}</span>
    </a>
  );
}
