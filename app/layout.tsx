import type { Metadata } from 'next';
import './globals.css';
import { profile } from './content';

export const metadata: Metadata = {
  title: `${profile.nameZh}｜个人主页`,
  description: `中国人民大学本科三年级学生${profile.nameZh}的个人主页。`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
