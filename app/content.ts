/**
 * 个人主页内容配置
 *
 * 把这个文件里的示例文字替换为你的真实信息即可；页面结构和样式无需修改。
 */
export const profile = {
  nameZh: '你的名字',
  nameEn: 'Your Name',
  initials: 'N',
  roles: 'RESEARCHER · BUILDER · WRITER',
  intro: '我关注技术、知识与人的交汇，喜欢把复杂问题拆开研究，再将答案做成清晰、有用的产品与文字。',
  currentRole: '独立研究者 / 创作者',
  location: '中国 · 可远程协作',
  focus: 'AI × Knowledge × People',
  email: 'hello@example.com',
  githubUrl: 'https://github.com/',
  blogUrl: '#notes',
  aboutLead: '我的工作横跨研究、产品与写作，尤其关心技术如何真正改善人的学习、思考与创造。',
  about: [
    '我相信好的研究不仅要有新意，也要能够被解释、被复现，并最终与真实世界发生联系。我习惯从一手资料出发，在理论与实践之间来回验证。',
    '工作之外，我持续阅读、写作与构建小工具。这里收录我的阶段性工作，也记录那些尚未完成、但值得继续追问的问题。',
  ],
  contactHeading: '有一个值得一起研究的问题？',
  contactText: '欢迎交流研究想法、项目合作，或只是分享一篇有意思的文章。',
  footerMotto: '保持好奇，持续构建。',
};

export const navItems = [
  { label: '关于', href: '#about' },
  { label: '动态', href: '#news' },
  { label: '工作', href: '#work' },
  { label: '笔记', href: '#notes' },
];

export const interests = ['人工智能', '数据科学', '人机交互', '开放知识'];

export const news = [
  { date: '2026.08', text: '开始了一段新的研究与创作计划，持续记录问题、方法与阶段性答案。' },
  { date: '2026.05', text: '完成项目「知识工作流」的第一版，并将核心方法整理为公开笔记。' },
  { date: '2026.02', text: '分享了一次关于 AI 工具、研究习惯与长期积累的主题报告。' },
];

export const works = [
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

export const notes = [
  { date: '08.24', title: '研究不是寻找答案，而是逐步改善问题', category: '方法', href: '#contact' },
  { date: '07.16', title: '把日常阅读变成可复用的知识资产', category: '笔记', href: '#contact' },
  { date: '06.03', title: '我如何设计一个长期项目的反馈循环', category: '实践', href: '#contact' },
];
