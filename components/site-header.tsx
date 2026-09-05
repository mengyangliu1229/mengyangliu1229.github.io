'use client';

import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, profile } from '@/app/content';

export function SiteHeader() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const next = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="site-header">
      <div className="shell flex h-[72px] items-center justify-between">
        <a href="/#top" className="brand" aria-label="返回主页">
          <span className="brand-mark">{profile.initials}</span>
          <span>{profile.nameZh}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="主导航">
          {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}
          <button className="icon-button" onClick={toggleTheme} aria-label={dark ? '切换至浅色模式' : '切换至深色模式'}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button className="icon-button" onClick={toggleTheme} aria-label={dark ? '切换至浅色模式' : '切换至深色模式'}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label="打开导航菜单">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="移动端导航">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
