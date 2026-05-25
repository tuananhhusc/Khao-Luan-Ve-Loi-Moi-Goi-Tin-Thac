import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tuananhhusc.github.io/Khao-Luan-Ve-Loi-Moi-Goi-Tin-Thac"),
  title: "Khảo Luận Về Lời Mời Gọi Tín Thác — Huấn Quyền Đức Lêô XIV",
  description:
    "Nghiên cứu toàn diện về thần học tín thác, thời gian, khát vọng và tiến trình chữa lành trong bức thư mục vụ của Đức Thánh Cha Lêô XIV gửi sinh viên Pietro. Phân tích nền tảng Augustinô, Chronos-Kairos, và nhân học Kitô giáo.",
  keywords: [
    "thần học",
    "tín thác",
    "Đức Lêô XIV",
    "Đức Giáo Hoàng",
    "Augustinô",
    "Chronos",
    "Kairos",
    "triết học",
    "Giáo hội",
    "Pietro",
    "Piazza San Pietro"
  ],
  authors: [{ name: "Đức Thánh Cha Lêô XIV" }],
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Khảo Luận Về Lời Mời Gọi Tín Thác",
    description:
      "Báo cáo nghiên cứu về lời mời gọi tín thác trong Huấn Quyền của Đức Lêô XIV",
    url: "/",
    siteName: "Khảo Luận Về Lời Mời Gọi Tín Thác",
    type: "article",
    locale: "vi_VN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Khảo Luận Về Lời Mời Gọi Tín Thác",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khảo Luận Về Lời Mời Gọi Tín Thác — Huấn Quyền Đức Lêô XIV",
    description:
      "Nghiên cứu toàn diện về thần học tín thác, thời gian, khát vọng và tiến trình chữa lành trong bức thư mục vụ của Đức Thánh Cha Lêô XIV.",
    images: ["/og-image.png"],
  },
};

import { UXProvider } from "@/components/UXProvider";
import UXControls from "@/components/UXControls";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased font-md" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                const fontSize = localStorage.getItem('fontSize') || 'font-md';
                if (theme === 'dark') document.documentElement.classList.add('theme-dark');
                if (theme === 'sepia') document.documentElement.classList.add('theme-sepia');
                document.documentElement.classList.remove('font-md');
                document.documentElement.classList.add(fontSize);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <UXProvider>
          {children}
          <UXControls />
          <ScrollToTop />
        </UXProvider>
      </body>
    </html>
  );
}
