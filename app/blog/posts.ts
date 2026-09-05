export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  displayDate: string;
  readingTime: string;
  tags: string[];
  published: boolean;
  sections: BlogSection[];
};

/**
 * 新增博客文章：复制下面的一整项，修改 slug、标题、日期、摘要、标签和正文；
 * 再复制 app/blog/hello-blog 文件夹并改成同名 slug，即可生成独立文章页。
 * slug 只能使用小写英文、数字和短横线；published 设为 false 时不会在列表中公开显示。
 */
export const posts: BlogPost[] = [
  {
    slug: 'hello-blog',
    title: '你好，欢迎来到我的博客',
    description: '关于这个博客，以及我希望在这里持续记录的内容。',
    date: '2026-09-06',
    displayDate: '2026 年 9 月 6 日',
    readingTime: '1 分钟阅读',
    tags: ['随笔', '开始'],
    published: true,
    sections: [
      {
        paragraphs: [
          '这是这个博客的第一篇文章，也是一个新的开始。',
          '我希望把这里作为主页之外更自由的写作空间，记录学习中的问题、读书后的想法，以及项目实践中的收获。',
        ],
      },
      {
        heading: '为什么开始写作',
        paragraphs: [
          '写作能够帮助我把模糊的想法整理清楚，也能留下成长过程中的真实轨迹。与其等到一切成熟，不如先从一篇短文开始。',
          '之后的内容会慢慢丰富起来。感谢你来到这里。',
        ],
      },
    ],
  },
];

export const publishedPosts = posts
  .filter((post) => post.published)
  .sort((a, b) => b.date.localeCompare(a.date));
