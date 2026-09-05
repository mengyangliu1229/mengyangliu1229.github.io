import { ArrowUpRight, BookOpen, GraduationCap, Mail } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { education, profile } from './content';
import { publishedPosts } from './blog/posts';

export default function Home() {
  return (
    <main>
      <SiteHeader />

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

      <section id="blog" className="shell section-grid scroll-mt-24">
        <div className="section-label"><span>03</span><p>最新文章</p></div>
        <div className="section-content">
          <div className="notes-heading"><p>记录正在形成的想法</p><BookOpen size={21} /></div>
          <div className="notes-list">
            {publishedPosts.slice(0, 3).map((post) => (
              <a href={`/blog/${post.slug}.html`} key={post.slug}>
                <time dateTime={post.date}>{post.date.slice(5).replace('-', '.')}</time>
                <h3>{post.title}</h3>
                <span>{post.readingTime}</span>
              </a>
            ))}
          </div>
          <a className="all-posts-link" href="/blog.html">查看全部文章 <ArrowUpRight size={16} /></a>
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
