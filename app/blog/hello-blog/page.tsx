import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { profile } from '../../content';
import { publishedPosts } from '../posts';

const post = publishedPosts.find((item) => item.slug === 'hello-blog')!;

export const metadata: Metadata = {
  title: `${post.title}｜${profile.nameZh}`,
  description: post.description,
};

export const dynamic = 'force-static';

export default function BlogPostPage() {
  return (
    <main>
      <SiteHeader />
      <article className="shell article-page">
        <a href="/blog.html" className="back-link"><ArrowLeft size={16} /> 返回博客</a>
        <header className="article-header">
          <div className="blog-card-meta"><time dateTime={post.date}>{post.displayDate}</time><span>{post.readingTime}</span></div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div className="blog-tags">{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </header>
        <div className="article-body">
          {post.sections.map((section, index) => (
            <section key={section.heading ?? index}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </article>
      <footer className="shell footer"><p>© 2026 {profile.nameZh}</p><p>{profile.footerMotto}</p></footer>
    </main>
  );
}
