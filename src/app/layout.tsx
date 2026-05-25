import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khảo Luận Về Lời Mời Gọi Tín Thác — Huấn Quyền Đức Lêô XIV",
  description:
    "Nghiên cứu toàn diện về thần học tín thác, thời gian, khát vọng và tiến trình chữa lành trong bức thư mục vụ của Đức Thánh Cha Lêô XIV gửi sinh viên Pietro. Phân tích nền tảng Augustinô, Chronos-Kairos, và nhân học Kitô giáo.",
  openGraph: {
    title: "Khảo Luận Về Lời Mời Gọi Tín Thác",
    description:
      "Báo cáo nghiên cứu về lời mời gọi tín thác trong Huấn Quyền của Đức Lêô XIV",
    type: "article",
    locale: "vi_VN",
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
