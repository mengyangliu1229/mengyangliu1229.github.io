import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { profile } from '../content';
import { publishedPosts } from './posts';

export const metadata: Metadata = {
  title: `博客｜${profile.nameZh}`,
  description: `${profile.nameZh}的博客：学习记录、阅读思考与实践笔记。`,
};

export const dynamic = 'force-static';

export default function BlogPage() {
  return (
    <main>
      <SiteHeader />
      <section className="shell blog-index">
        <a href="/" className="back-link"><ArrowLeft size={16} /> 返回主页</a>
        <p className="eyebrow">NOTES &amp; REFLECTIONS</p>
        <h1>博客</h1>
        <p className="blog-intro">记录学习中的问题、阅读后的思考，以及实践过程中的收获。</p>

        <div className="blog-list">
          {publishedPosts.map((post) => (
            <a href={`/blog/${post.slug}.html`} className="blog-card" key={post.slug}>
              <div className="blog-card-meta"><time dateTime={post.date}>{post.displayDate}</time><span>{post.readingTime}</span></div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <div className="blog-card-footer">
                <div className="blog-tags">{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <ArrowUpRight size={20} />
              </div>
            </a>
          ))}
        </div>
      </section>
      <footer className="shell footer"><p>© 2026 {profile.nameZh}</p><p>{profile.footerMotto}</p></footer>
    </main>
  );
}
