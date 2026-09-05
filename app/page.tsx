'use client';

import {
  ArrowUpRight,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { education, navItems, profile } from './content';

export default function Home() {
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
    <main>
      <header className="site-header">
        <div className="shell flex h-[72px] items-center justify-between">
          <a href="#top" className="brand" aria-label="返回首页顶部">
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

      <section id="top" className="shell hero scroll-mt-24">
        <div className="hero-copy">
          <p className="eyebrow">{profile.roles}</p>
          <h1>{profile.nameZh}<span>{profile.nameEn}</span></h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a href={`mailto:${profile.email}`} className="primary-link"><Mail size={17} /> 与我联系</a>
            <a href="#education" className="text-link">了解我的经历 <ArrowUpRight size={16} /></a>
          </div>
        </div>

        <div className="portrait" aria-label={`个人头像占位符：字母 ${profile.initials}`}>
          <div className="portrait-ring portrait-ring-one" />
          <div className="portrait-ring portrait-ring-two" />
          <div className="portrait-core">{profile.initials}</div>
          <span className="portrait-note">PHOTO / MONOGRAM</span>
        </div>

        <div className="hero-meta">
          <div><span>现在</span><p>{profile.currentRole}</p></div>
          <div><span>学校</span><p>{profile.institution}</p></div>
          <div><span>坐标</span><p>{profile.location}</p></div>
        </div>
      </section>

      <section id="about" className="shell section-grid scroll-mt-24">
        <div className="section-label"><span>01</span><p>关于我</p></div>
        <div className="section-content about-copy">
          <p className="lead">你好，我是 <strong>{profile.nameZh}</strong>。{profile.aboutLead}</p>
          <div className="about-columns">
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section id="education" className="shell section-grid scroll-mt-24">
        <div className="section-label"><span>02</span><p>教育经历</p></div>
        <div className="section-content education-list">
          {education.map((item) => (
            <article key={item.school} className="education-card">
              <div className="education-icon" aria-hidden="true"><GraduationCap size={23} /></div>
              <div>
                <time>{item.period}</time>
                <h2>{item.school}</h2>
                <p className="education-degree">{item.degree}</p>
                <p className="education-description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section scroll-mt-24">
        <div className="shell contact-inner">
          <p className="eyebrow">LET&apos;S START A CONVERSATION</p>
          <h2>{profile.contactHeading}</h2>
          <p>{profile.contactText}</p>
          <a href={`mailto:${profile.email}`} className="contact-email">{profile.email} <ArrowUpRight size={25} /></a>
        </div>
      </section>

      <footer className="shell footer"><p>© 2026 {profile.nameZh}</p><p>{profile.footerMotto}</p></footer>
    </main>
  );
}
