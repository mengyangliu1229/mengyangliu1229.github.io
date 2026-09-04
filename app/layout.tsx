import type { Metadata } from 'next';
import './globals.css';
import { profile } from './content';

export const metadata: Metadata = {
  title: `${profile.nameZh}｜个人主页`,
  description: `${profile.nameZh}的个人主页：研究、项目、写作与近期动态。`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
