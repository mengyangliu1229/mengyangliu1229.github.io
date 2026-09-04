'use client';

import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: '关于', href: '#about' },
  { label: '动态', href: '#news' },
  { label: '工作', href: '#work' },
  { label: '笔记', href: '#notes' },
];

const interests = ['人工智能', '数据科学', '人机交互', '开放知识'];

const news = [
  { date: '2026.08', text: '开始了一段新的研究与创作计划，持续记录问题、方法与阶段性答案。' },
  { date: '2026.05', text: '完成项目「知识工作流」的第一版，并将核心方法整理为公开笔记。' },
  { date: '2026.02', text: '分享了一次关于 AI 工具、研究习惯与长期积累的主题报告。' },
];

const works = [
  {
    index: '01',
    type: 'RESEARCH · 2026',
    title: '从复杂信息到清晰洞见',
    summary: '探索如何把分散资料组织为可验证、可复用的知识结构，并在真实研究任务中评估效果。',
    tags: ['知识管理', '信息检索'],
    href: '#contact',
  },
  {
    index: '02',
    type: 'PROJECT · 2026',
    title: '面向个人研究的智能工作台',
    summary: '一个帮助研究者收集线索、梳理证据并推进写作的轻量系统，强调透明过程与人的判断。',
    tags: ['AI 工具', '产品设计'],
    href: '#contact',
  },
  {
    index: '03',
    type: 'ESSAY · 2025',
    title: '慢思考与快工具',
    summary: '讨论工具速度不断提高之后，如何保留独立判断、问题意识与长期主义。',
    tags: ['写作', '方法论'],
    href: '#notes',
  },
];

const notes = [
  { date: '08.24', title: '研究不是寻找答案，而是逐步改善问题', category: '方法' },
  { date: '07.16', title: '把日常阅读变成可复用的知识资产', category: '笔记' },
  { date: '06.03', title: '我如何设计一个长期项目的反馈循环', category: '实践' },
];

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
            <span className="brand-mark">N</span>
            <span>你的名字</span>
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
          <p className="eyebrow">RESEARCHER · BUILDER · WRITER</p>
          <h1>你的名字<span>Your Name</span></h1>
          <p className="hero-intro">我关注技术、知识与人的交汇，喜欢把复杂问题拆开研究，再将答案做成清晰、有用的产品与文字。</p>
          <div className="hero-actions">
            <a href="mailto:hello@example.com" className="primary-link"><Mail size={17} /> 与我联系</a>
            <a href="#work" className="text-link">查看精选工作 <ArrowUpRight size={16} /></a>
          </div>
        </div>

        <div className="portrait" aria-label="个人头像占位符：字母 N">
          <div className="portrait-ring portrait-ring-one" />
          <div className="portrait-ring portrait-ring-two" />
          <div className="portrait-core">N</div>
          <span className="portrait-note">PHOTO / MONOGRAM</span>
        </div>

        <div className="hero-meta">
          <div><span>现在</span><p>独立研究者 / 创作者</p></div>
          <div><span>坐标</span><p>中国 · 可远程协作</p></div>
          <div><span>关注</span><p>AI × Knowledge × People</p></div>
        </div>
      </section>

      <section id="about" className="shell section-grid scroll-mt-24">
        <div className="section-label"><span>01</span><p>关于我</p></div>
        <div className="section-content about-copy">
          <p className="lead">你好，我是 <strong>你的名字</strong>。我的工作横跨研究、产品与写作，尤其关心技术如何真正改善人的学习、思考与创造。</p>
          <div className="about-columns">
            <p>我相信好的研究不仅要有新意，也要能够被解释、被复现，并最终与真实世界发生联系。我习惯从一手资料出发，在理论与实践之间来回验证。</p>
            <p>工作之外，我持续阅读、写作与构建小工具。这里收录我的阶段性工作，也记录那些尚未完成、但值得继续追问的问题。</p>
          </div>
          <div className="interest-row" aria-label="关注领域">{interests.map((interest) => <span key={interest}>{interest}</span>)}</div>
        </div>
      </section>

      <section id="news" className="shell section-grid scroll-mt-24">
        <div className="section-label"><span>02</span><p>近期动态</p></div>
        <div className="section-content news-list">
          {news.map((item) => <article key={item.date}><time>{item.date}</time><p>{item.text}</p></article>)}
        </div>
      </section>

      <section id="work" className="shell section-grid scroll-mt-24">
        <div className="section-label"><span>03</span><p>精选工作</p></div>
        <div className="section-content work-list">
          {works.map((work) => (
            <a className="work-card" key={work.index} href={work.href}>
              <div className="work-number">{work.index}</div>
              <div>
                <p className="work-type">{work.type}</p>
                <h2>{work.title}</h2>
                <p className="work-summary">{work.summary}</p>
                <div className="work-tags">{work.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <ArrowUpRight className="work-arrow" size={21} />
            </a>
          ))}
        </div>
      </section>

      <section id="notes" className="shell section-grid scroll-mt-24">
        <div className="section-label"><span>04</span><p>近期笔记</p></div>
        <div className="section-content">
          <div className="notes-heading"><p>记录正在形成的想法</p><BookOpen size={21} /></div>
          <div className="notes-list">
            {notes.map((note) => <a href="#contact" key={note.title}><time>{note.date}</time><h3>{note.title}</h3><span>{note.category}</span></a>)}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section scroll-mt-24">
        <div className="shell contact-inner">
          <p className="eyebrow">LET&apos;S START A CONVERSATION</p>
          <h2>有一个值得一起研究的问题？</h2>
          <p>欢迎交流研究想法、项目合作，或只是分享一篇有意思的文章。</p>
          <a href="mailto:hello@example.com" className="contact-email">hello@example.com <ArrowUpRight size={25} /></a>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub</a>
            <a href="#notes"><BookOpen size={18} /> Blog</a>
          </div>
        </div>
      </section>

      <footer className="shell footer"><p>© 2026 你的名字</p><p>保持好奇，持续构建。</p></footer>
    </main>
  );
}
