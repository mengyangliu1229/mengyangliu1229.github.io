import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '你的名字｜个人主页',
  description: '你的名字的个人主页：研究、项目、写作与近期动态。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
