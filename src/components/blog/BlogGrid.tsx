import BlogCard from './BlogCard';
import styles from './BlogGrid.module.css';

const mockPosts = [
  {
    id: 1,
    imageSrc: 'https://static.wixstatic.com/media/021292_5f9fb1d76b6c4422b1f7ff6d11a9f852~mv2.jpg/v1/fill/w_1500,h_856,fp_0.50_0.50,q_90,enc_avif,quality_auto/021292_5f9fb1d76b6c4422b1f7ff6d11a9f852~mv2.jpg',
    category: 'Blog Posts',
    title: 'The Rise of Agentic CX: How AI Agents Are Redefining Customer Experience',
    excerpt: 'How AI Agents Are Redefining Customer Experience',
    date: 'Jul 30',
    readTime: '3 min read',
    href: '/blog/the-rise-of-agentic-cx-how-ai-agents-are-redefining-customer-experienc'
  },
  {
    id: 2,
    imageSrc: 'https://static.wixstatic.com/media/021292_4651ecdaf0454b8495d63010f192ec43~mv2.jpg/v1/fill/w_1816,h_1272,fp_0.50_0.50,q_90,enc_avif,quality_auto/021292_4651ecdaf0454b8495d63010f192ec43~mv2.jpg',
    category: 'Blog Posts',
    title: 'The Agentic AI Inflection Point: How CIOs Are Turning Pilots into Enterprise-Wide Impact',
    excerpt: '',
    date: 'May 25',
    readTime: '4 min read',
    href: '/blog/the-agentic-ai-inflection-point-how-cios-are-turning-pilots-into-enter'
  },
  {
    id: 3,
    imageSrc: 'https://static.wixstatic.com/media/021292_f6fb3729d53f446c93c70d0a9593bd8a~mv2.png/v1/fill/w_1816,h_1176,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_f6fb3729d53f446c93c70d0a9593bd8a~mv2.png',
    category: 'Blog Posts',
    title: 'The Agentic AI Gap: Why Most Organizations Are Not Ready and What Tech Leaders Must Do Now',
    excerpt: '',
    date: 'Apr 13',
    readTime: '5 min read',
    href: '/blog/the-agentic-ai-gap-why-most-organizations-are-not-ready-and-what-tech'
  },
  {
    id: 4,
    imageSrc: 'https://static.wixstatic.com/media/021292_ab816edf97ff4d219bac4eb7494ea1e2~mv2.png/v1/fill/w_1816,h_1120,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_ab816edf97ff4d219bac4eb7494ea1e2~mv2.png',
    category: 'Blog Posts',
    title: 'How Agentic AI Is Transforming Customer Service',
    excerpt: 'How Agentic AI is transforming customer service by automating tasks, improving response times and personalizing experiences for better support outcomes.',
    date: 'Feb 15',
    readTime: '2 min read',
    href: '/blog/how-agentic-ai-is-transforming-customer-service'
  },
  {
    id: 5,
    imageSrc: 'https://static.wixstatic.com/media/021292_e4ecb96c62d24196acdee127bbf5f9cd~mv2.jpg/v1/fill/w_1498,h_1000,fp_0.50_0.50,q_90,enc_avif,quality_auto/021292_e4ecb96c62d24196acdee127bbf5f9cd~mv2.jpg',
    category: 'Blog Posts',
    title: 'From Dashboards to Decisions: Why Agentic AI Is the Next Evolution of Operational Intelligence in Oil & Gas and Energy',
    excerpt: '',
    date: 'Feb 4',
    readTime: '3 min read',
    href: '/blog/from-dashboards-to-decisions-why-agentic-ai-is-the-next-evolution-of-o'
  },
  {
    id: 6,
    imageSrc: 'https://static.wixstatic.com/media/021292_a2aa369642ec47b2bac8cca145a8f964~mv2.png/v1/fill/w_1816,h_1108,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_a2aa369642ec47b2bac8cca145a8f964~mv2.png',
    category: 'Blog Posts',
    title: 'Agentic AI in the Field: Enabling Self-Healing Assets and Predictive Maintenance at Scale',
    excerpt: '',
    date: 'Jan 28',
    readTime: '3 min read',
    href: '/blog/agentic-ai-in-the-field-enabling-self-healing-assets-and-predictive-ma'
  },
  {
    id: 7,
    imageSrc: 'https://static.wixstatic.com/media/021292_45b21053fe6c465a8dcce9263bdc8269~mv2.png/v1/fill/w_1816,h_1008,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_45b21053fe6c465a8dcce9263bdc8269~mv2.png',
    category: 'Blog Posts',
    title: 'Transform Your Customer Experiences with the Agentic AI-powered Dynamics 365 Contact Center',
    excerpt: '',
    date: 'Jan 21',
    readTime: '3 min read',
    href: '/blog/transform-your-customer-experiences-with-the-agentic-ai-powered-dynami'
  },
  {
    id: 8,
    imageSrc: 'https://static.wixstatic.com/media/021292_1ab37ee2f5a848fb9a7d31fec25df883~mv2.png/v1/fill/w_1816,h_1096,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_1ab37ee2f5a848fb9a7d31fec25df883~mv2.png',
    category: 'Blog Posts',
    title: 'From Reactive to Autonomous: How Agentic AI Is Redefining Field Operations in Oil & Gas and Energy',
    excerpt: '',
    date: 'Jan 15',
    readTime: '3 min read',
    href: '/blog/from-reactive-to-autonomous-how-agentic-ai-is-redefining-field-operati'
  },
  {
    id: 9,
    imageSrc: 'https://static.wixstatic.com/media/021292_52f786bbe243487a93d5b0c77d0bb687~mv2.png/v1/fill/w_1280,h_719,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_52f786bbe243487a93d5b0c77d0bb687~mv2.png',
    category: 'Blog Posts',
    title: 'How Agentic AI is Transforming Oil & Gas and Energy Field Operations',
    excerpt: 'Read this blog to learn How Agentic AI Transforms Oil & Gas and Energy Field Operations',
    date: 'Jan 9',
    readTime: '3 min read',
    href: '/blog/how-agentic-ai-is-transforming-oil-gas-and-energy-field-operations'
  },
  {
    id: 10,
    imageSrc: 'https://static.wixstatic.com/media/021292_94b3b29f34c641e1b5c3f82c6ee2e73d~mv2.png/v1/fill/w_1280,h_719,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_94b3b29f34c641e1b5c3f82c6ee2e73d~mv2.png',
    category: 'Blog Posts',
    title: 'How aligned is your AI strategy across the organization and business units?',
    excerpt: 'AI is reshaping customer experience, but not all intelligence works the same way. Generative AI creates; autonomous AI acts. The real advantage lies in knowing how—and when—to use each. Built on Microsoft Cloud, an AI-first CX strategy unites creativity with automation to deliver faster, smarter, and more human experiences.',
    date: 'Dec 13, 2025',
    readTime: '2 min read',
    href: '/blog/how-aligned-is-your-ai-strategy-across-the-organization-and-business-u'
  },
  {
    id: 11,
    imageSrc: 'https://static.wixstatic.com/media/021292_4105b932a04d4b1897d00d7844cf86db~mv2.png/v1/fill/w_1280,h_719,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_4105b932a04d4b1897d00d7844cf86db~mv2.png',
    category: 'Blog Posts',
    title: 'What Are the Top 5 Reasons AI Projects Fail to Meet Business Objectives?',
    excerpt: '',
    date: 'Dec 13, 2025',
    readTime: '2 min read',
    href: '/blog/what-are-the-top-5-reasons-ai-projects-fail-to-meet-business-objective'
  },
  {
    id: 12,
    imageSrc: 'https://static.wixstatic.com/media/021292_83dcfb45289f4c0f981a7b1fd23d340e~mv2.png/v1/fill/w_1280,h_719,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_83dcfb45289f4c0f981a7b1fd23d340e~mv2.png',
    category: 'Blog Posts',
    title: 'Driving AI Balance in Your Microsoft Frontier Journey: A Teaser for What\'s Ahead',
    excerpt: 'AI is reshaping customer experience, but not all intelligence works the same way. Generative AI creates; autonomous AI acts. The real advantage lies in knowing how—and when—to use each. Built on Microsoft Cloud, an AI-first CX strategy unites creativity with automation to deliver faster, smarter, and more human experiences.',
    date: 'Dec 7, 2025',
    readTime: '3 min read',
    href: '/blog/driving-ai-balance-in-your-microsoft-frontier-journey-a-teaser-for-wha'
  },
  {
    id: 13,
    imageSrc: 'https://static.wixstatic.com/media/021292_1c185336c0804b7e89641d0b59844a8b~mv2.png/v1/fill/w_1280,h_719,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_1c185336c0804b7e89641d0b59844a8b~mv2.png',
    category: 'Blog Posts',
    title: 'Untangling Legacy Data: How to Migrate Seamlessly into Microsoft Fabric',
    excerpt: 'AI is reshaping customer experience, but not all intelligence works the same way. Generative AI creates; autonomous AI acts. The real advantage lies in knowing how—and when—to use each. Built on Microsoft Cloud, an AI-first CX strategy unites creativity with automation to deliver faster, smarter, and more human experiences.',
    date: 'Nov 24, 2025',
    readTime: '3 min read',
    href: '/blog/untangling-legacy-data-how-to-migrate-seamlessly-into-microsoft-fabric'
  },
  {
    id: 14,
    imageSrc: 'https://static.wixstatic.com/media/021292_33a45f5167ed41b3b7a62d6f230869cf~mv2.png/v1/fill/w_1816,h_1020,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_33a45f5167ed41b3b7a62d6f230869cf~mv2.png',
    category: 'Blog Posts',
    title: 'The AI-Ready Contact Center: A Maturity Model for 2025 and Beyond',
    excerpt: 'AI is reshaping customer experience, but not all intelligence works the same way. Generative AI creates; autonomous AI acts. The real advantage lies in knowing how—and when—to use each. Built on Microsoft Cloud, an AI-first CX strategy unites creativity with automation to deliver faster, smarter, and more human experiences.',
    date: 'Nov 10, 2025',
    readTime: '2 min read',
    href: '/blog/the-ai-ready-contact-center-a-maturity-model-for-2025-and-beyond'
  },
  {
    id: 15,
    imageSrc: 'https://static.wixstatic.com/media/021292_c766ce4d5ff34e0b9aeea38f0bed0d52~mv2.png/v1/fill/w_1280,h_719,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_c766ce4d5ff34e0b9aeea38f0bed0d52~mv2.png',
    category: 'Blog Posts',
    title: 'Autonomous vs. Generative AI: What\'s the Real Fit for Customer Experience?',
    excerpt: 'AI is reshaping customer experience, but not all intelligence works the same way. Generative AI creates; autonomous AI acts. The real advantage lies in knowing how—and when—to use each. Built on Microsoft Cloud, an AI-first CX strategy unites creativity with automation to deliver faster, smarter, and more human experiences.',
    date: 'Nov 4, 2025',
    readTime: '3 min read',
    href: '/blog/autonomous-vs-generative-ai-whats-the-real-fit-for-customer-experience'
  },
  {
    id: 16,
    imageSrc: 'https://static.wixstatic.com/media/021292_0c01f40571534b078f75639ebdea7237~mv2.png/v1/fill/w_1280,h_719,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_0c01f40571534b078f75639ebdea7237~mv2.png',
    category: 'Blog Posts',
    title: 'Pilot to Production: A Practical Guide to Accelerating Microsoft Fabric Adoption',
    excerpt: 'Many organizations test Microsoft Fabric with pilots—but stopping there leaves value on the table. Moving from pilot to production unlocks scalable analytics, automation, and AI-driven insights.',
    date: 'Oct 24, 2025',
    readTime: '2 min read',
    href: '/blog/pilot-to-production-a-practical-guide-to-accelerating-microsoft-fabric'
  },
  {
    id: 17,
    imageSrc: 'https://static.wixstatic.com/media/021292_965fb86e233242da80140282a0614ebb~mv2.png/v1/fill/w_1280,h_719,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_965fb86e233242da80140282a0614ebb~mv2.png',
    category: 'Blog Posts',
    title: 'AI Foundations That Deliver Real Business Value: A CTO\'s Perspective',
    excerpt: 'During our recent webinar, "AI Foundations That Deliver Real Business Value," experts from Microsoft and industry leaders shared how enterprises are driving measurable outcomes by aligning business and IT, leveraging Microsoft\'s modern data platform, and unlocking real-time insights from Dynamics 365 (D365) business applications.',
    date: 'Oct 20, 2025',
    readTime: '2 min read',
    href: '/blog/ai-foundations-that-deliver-real-business-value-a-ctos-perspective'
  },
  {
    id: 18,
    imageSrc: 'https://static.wixstatic.com/media/021292_965fb86e233242da80140282a0614ebb~mv2.png/v1/fill/w_1280,h_719,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_965fb86e233242da80140282a0614ebb~mv2.png',
    category: 'Blog Posts',
    title: 'Why Unified Data Platforms Are the Missing Link in Your AI Strategy',
    excerpt: 'Customer experience is now the ultimate growth battleground—where 61% of customers will switch brands after one bad interaction. The real competitive edge isn\'t just adopting AI tools, but building an AI-first CX strategy on Microsoft Cloud. Unified data, connected experiences, and adaptive intelligence drive loyalty and retention.',
    date: 'Oct 16, 2025',
    readTime: '2 min read',
    href: '/blog/why-unified-data-platforms-are-the-missing-link-in-your-ai-strategy'
  },
  {
    id: 19,
    imageSrc: 'https://static.wixstatic.com/media/021292_c8532a1acce6404d911bfc86281fc3f0~mv2.png/v1/fill/w_1280,h_719,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_c8532a1acce6404d911bfc86281fc3f0~mv2.png',
    category: 'Blog Posts',
    title: 'Beyond Basic Dispatching for Service Orders and Projects: What Are the Options?',
    excerpt: '',
    date: 'Oct 14, 2025',
    readTime: '3 min read',
    href: '/blog/beyond-basic-dispatching-for-service-orders-and-projects-what-are-the'
  },
  {
    id: 20,
    imageSrc: 'https://static.wixstatic.com/media/021292_8ec1e4cc11b441bf98e0e82750df2a50~mv2.png/v1/fill/w_1280,h_719,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_8ec1e4cc11b441bf98e0e82750df2a50~mv2.png',
    category: 'Blog Posts',
    title: 'AI-First Customer Experience',
    excerpt: 'Customer experience is now the ultimate growth battleground—where 61% of customers will switch brands after one bad interaction. The real competitive edge isn\'t just adopting AI tools, but building an AI-first CX strategy on Microsoft Cloud. Unified data, connected experiences, and adaptive intelligence drive loyalty and retention.',
    date: 'Sep 10, 2025',
    readTime: '3 min read',
    href: '/blog/ai-first-customer-experience'
  },
  {
    id: 21,
    imageSrc: 'https://static.wixstatic.com/media/021292_df13142e14c44e2684054070f753608d~mv2.png/v1/fill/w_1280,h_719,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_df13142e14c44e2684054070f753608d~mv2.png',
    category: 'Blog Posts',
    title: 'Why Data Integration Is the Real Copilot Superpower (and How to Fix Yours)',
    excerpt: 'Explore how fragmented, siloed data limits AI effectiveness, why integrated and governed data fabric is essential for copilots, and how aligning integration with business goals drives measurable ROI.',
    date: 'Aug 31, 2025',
    readTime: '3 min read',
    href: '/blog/why-data-integration-is-the-real-copilot-superpower-and-how-to-fix-you'
  },
  {
    id: 22,
    imageSrc: 'https://static.wixstatic.com/media/021292_b828244e5d3d4c2f863f7e5ef475357b~mv2.png/v1/fill/w_1280,h_719,fp_0.50_0.50,q_95,enc_avif,quality_auto/021292_b828244e5d3d4c2f863f7e5ef475357b~mv2.png',
    category: 'Blog Posts',
    title: 'From Data Chaos to Clarity: How to Align Data Strategy with Business Outcomes',
    excerpt: 'A unified data estate brings all sources—CRM, finance, marketing, operations—into one connected, governed ecosystem. It creates a single source of truth that delivers clarity across the organization.',
    date: 'Aug 20, 2025',
    readTime: '3 min read',
    href: '/blog/from-data-chaos-to-clarity-how-to-align-data-strategy-with-business-ou'
  },
  {
    id: 23,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_dab25fbdab8144f4990e1f32689038a8~mv2.jpg/v1/fill/w_1280,h_719,fp_0.50_0.50,q_90,enc_avif,quality_auto/9199c4_dab25fbdab8144f4990e1f32689038a8~mv2.jpg',
    category: 'Blog Posts',
    title: 'Omnichannel Customer Service with Dynamics 365: Building a Unified Customer Experience',
    excerpt: 'Discover how Dynamics 365 Customer Service with Copilot helps companies deliver seamless, AI-driven omnichannel support—and why it\'s a game-changer for CSAT and retention.',
    date: 'May 30, 2025',
    readTime: '7 min read',
    href: '/blog/omnichannel-customer-service-with-dynamics-365-building-a-unified-cust'
  },
  {
    id: 24,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_855640be838b4c128fb334e5524ab25a~mv2.jpg/v1/fill/w_1280,h_719,fp_0.50_0.50,q_90,enc_avif,quality_auto/9199c4_855640be838b4c128fb334e5524ab25a~mv2.jpg',
    category: 'Blog Posts',
    title: 'Generative AI and Microsoft Copilot: Transforming Customer Service in 2025',
    excerpt: 'CompQsoft Digital, a trusted Microsoft partner, stands ready to help guide this journey. We specialize in Microsoft Copilot and Dynamics 365 AI solutions and have helped clients implement these technologies in their contact centers.',
    date: 'May 29, 2025',
    readTime: '7 min read',
    href: '/blog/generative-ai-and-microsoft-copilot-transforming-customer-service-in-2'
  },
  {
    id: 25,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_e90f97d5e9d14cd3a6c578d30b61096d~mv2.jpg/v1/fill/w_611,h_755,fp_0.50_0.50,q_90,enc_avif,quality_auto/9199c4_e90f97d5e9d14cd3a6c578d30b61096d~mv2.jpg',
    category: 'Blog Posts',
    title: 'Modernizing Legacy Applications for the Digital Age',
    excerpt: 'A Comprehensive Guide to Migrating Legacy Applications In the fast-paced world of technology, staying relevant and efficient is crucial...',
    date: 'Apr 22, 2025',
    readTime: '2 min read',
    href: '/blog/modernizing-legacy-applications-for-the-digital-age'
  },
  {
    id: 26,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_ac763a0c2a6a49ae9cfb9038e9cdedcc~mv2.jpg/v1/fill/w_611,h_755,fp_0.50_0.50,q_90,enc_avif,quality_auto/9199c4_ac763a0c2a6a49ae9cfb9038e9cdedcc~mv2.jpg',
    category: 'Blog Posts',
    title: 'Dynamics 365 Business Central Implementation: A Step-by-Step Guide',
    excerpt: 'In the fast-paced world of business, outdated ERP systems can significantly hinder growth and efficiency. Many businesses still rely on...',
    date: 'Apr 22, 2025',
    readTime: '4 min read',
    href: '/blog/dynamics-365-business-central-implementation-a-step-by-step-guide'
  },
  {
    id: 27,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_16157b62fcde48728271d54e60948ab6~mv2.jpg/v1/fill/w_611,h_755,fp_0.50_0.50,q_90,enc_avif,quality_auto/9199c4_16157b62fcde48728271d54e60948ab6~mv2.jpg',
    category: 'Blog Posts',
    title: 'InfoPath to Power Apps Migration: A Complete Guide',
    excerpt: 'InfoPath: A Brief Overview InfoPath has been a popular tool for creating forms within SharePoint environments for years. It was lauded...',
    date: 'Apr 22, 2025',
    readTime: '3 min read',
    href: '/blog/infopath-to-power-apps-migration-a-complete-guide'
  },
  {
    id: 28,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_311c7e4e1c554c229910f2e5b4accb65~mv2.jpg/v1/fill/w_611,h_755,fp_0.50_0.50,q_90,enc_avif,quality_auto/9199c4_311c7e4e1c554c229910f2e5b4accb65~mv2.jpg',
    category: 'Blog Posts',
    title: 'Mastering Microsoft 365 Copilot: A Beginner\'s Guide',
    excerpt: 'Microsoft 365 Copilot is an innovative tool designed to help you streamline your workflow and maximize productivity . If you\'re new to...',
    date: 'Apr 22, 2025',
    readTime: '2 min read',
    href: '/blog/mastering-microsoft-365-copilot-a-beginners-guide'
  },
  {
    id: 29,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_c9075dfff9a6447e9406329c36999da6~mv2.png/v1/fill/w_611,h_755,fp_0.50_0.50,q_95,enc_avif,quality_auto/9199c4_c9075dfff9a6447e9406329c36999da6~mv2.png',
    category: 'Blog Posts',
    title: 'Solomon to Dynamics 365 Business Central Migration: Embracing the Future',
    excerpt: 'In the dynamic world of business management software, staying current with technology is essential for maintaining a competitive edge....',
    date: 'Apr 22, 2025',
    readTime: '4 min read',
    href: '/blog/solomon-to-dynamics-365-business-central-migration-embracing-the-futur'
  },
  {
    id: 30,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_c9075dfff9a6447e9406329c36999da6~mv2.png/v1/fill/w_611,h_755,fp_0.50_0.50,q_95,enc_avif,quality_auto/9199c4_c9075dfff9a6447e9406329c36999da6~mv2.png',
    category: 'Blog Posts',
    title: 'Latest Dynamics 365 Business Central Update',
    excerpt: 'Microsoft has recently rolled out an update for Dynamics 365 Business Central, packed with new features designed to enhance your business...',
    date: 'Apr 22, 2025',
    readTime: '2 min read',
    href: '/blog/latest-dynamics-365-business-central-update'
  },
  {
    id: 31,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_21df3164440247dba09ae4f954edf111~mv2.jpg/v1/fill/w_611,h_755,fp_0.50_0.50,q_90,enc_avif,quality_auto/9199c4_21df3164440247dba09ae4f954edf111~mv2.jpg',
    category: 'Blog Posts',
    title: 'Tableau to Power BI Migration: A Comprehensive Guide for IT Decision Makers',
    excerpt: 'Migrating from Tableau to Power BI is a strategic move many organizations are considering. In this blog, we will discuss the challenges...',
    date: 'Apr 22, 2025',
    readTime: '3 min read',
    href: '/blog/tableau-to-power-bi-migration-a-comprehensive-guide-for-it-decision-ma'
  },
  {
    id: 32,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_dcfb954122f641d8bc3d4dc551d5b15a~mv2.png/v1/fill/w_611,h_755,fp_0.50_0.50,q_95,enc_avif,quality_auto/9199c4_dcfb954122f641d8bc3d4dc551d5b15a~mv2.png',
    category: 'Blog Posts',
    title: 'Box to SharePoint Migration: A Comprehensive Guide',
    excerpt: 'In today\'s fast-paced digital landscape, enterprises constantly seek more efficient ways to manage and collaborate on their documents....',
    date: 'Apr 22, 2025',
    readTime: '2 min read',
    href: '/blog/box-to-sharepoint-migration-a-comprehensive-guide'
  },
  {
    id: 33,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_66cf029103d04cab8279f328f1e8c0e6~mv2.png/v1/fill/w_611,h_755,fp_0.50_0.50,q_95,enc_avif,quality_auto/9199c4_66cf029103d04cab8279f328f1e8c0e6~mv2.png',
    category: 'Blog Posts',
    title: 'How to Maximize Dynamics 365 Potential with Microsoft Fabric',
    excerpt: 'In today\'s fast-paced digital landscape, data is the lifeblood of decision-making. Did you know that 67% of enterprises rely on...',
    date: 'Apr 22, 2025',
    readTime: '3 min read',
    href: '/blog/how-to-maximize-dynamics-365-potential-with-microsoft-fabric'
  },
  {
    id: 34,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_44ac26826f864208a47ac45d0a488660~mv2.png/v1/fill/w_611,h_755,fp_0.50_0.50,q_95,enc_avif,quality_auto/9199c4_44ac26826f864208a47ac45d0a488660~mv2.png',
    category: 'Blog Posts',
    title: 'Migrate Dynamics GP to Dynamics 365 Business Central – A Path to Future-Proof Your Business',
    excerpt: 'Small and medium-sized businesses (SMBs) have long relied on Microsoft Dynamics GP (formerly Great Plains) to manage their financial and...',
    date: 'Apr 22, 2025',
    readTime: '4 min read',
    href: '/blog/migrate-dynamics-gp-to-dynamics-365-business-central-a-path-to-future'
  },
  {
    id: 35,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_d44013d6ac0542f2889e4956eb6f761f~mv2.png/v1/fill/w_611,h_755,fp_0.50_0.50,q_95,enc_avif,quality_auto/9199c4_d44013d6ac0542f2889e4956eb6f761f~mv2.png',
    category: 'Blog Posts',
    title: 'Dynamics GP to Dynamics 365 Finance and Operations Migration: The Complete Guide',
    excerpt: 'Are you still relying on Dynamics GP to manage your financials? While Dynamics GP has been a reliable ERP solution for many years,...',
    date: 'Apr 22, 2025',
    readTime: '5 min read',
    href: '/blog/dynamics-gp-to-dynamics-365-finance-and-operations-migration-the-compl'
  },
  {
    id: 36,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_d3344f58b80249b1810c02f40e34c29b~mv2.png/v1/fill/w_611,h_755,fp_0.50_0.50,q_95,enc_avif,quality_auto/9199c4_d3344f58b80249b1810c02f40e34c29b~mv2.png',
    category: 'Blog Posts',
    title: 'How to Prepare for the End of Support for Dynamics GP?',
    excerpt: 'Microsoft recently announced that product support and updates for Microsoft Dynamics GP will end on September 30, 2029, with security...',
    date: 'Apr 22, 2025',
    readTime: '3 min read',
    href: '/blog/how-to-prepare-for-the-end-of-support-for-dynamics-gp'
  },
  {
    id: 37,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_823fe931ab8a41638486b48316b4721f~mv2.png/v1/fill/w_611,h_755,fp_0.50_0.50,q_95,enc_avif,quality_auto/9199c4_823fe931ab8a41638486b48316b4721f~mv2.png',
    category: 'Blog Posts',
    title: 'QuickBooks to Microsoft Dynamics 365 Business Central Migration: A Path to Business Growth',
    excerpt: 'As small businesses scale, they often need help in systems like QuickBooks that were initially ideal but now fall short in handling the...',
    date: 'Apr 22, 2025',
    readTime: '4 min read',
    href: '/blog/quickbooks-to-microsoft-dynamics-365-business-central-migration-a-path'
  },
  {
    id: 38,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_ec0a64b3911e45d184ffe221643752bf~mv2.png/v1/fill/w_611,h_755,fp_0.50_0.50,q_95,enc_avif,quality_auto/9199c4_ec0a64b3911e45d184ffe221643752bf~mv2.png',
    category: 'Blog Posts',
    title: 'Microsoft Dynamics 365 vs. Salesforce: Which CRM is Right for Your Business?',
    excerpt: 'Dynamics 365 vs. Salesforce: A Detailed Comparison to Help You Choose the Right CRM Customer Relationship Management (CRM) systems have...',
    date: 'Apr 22, 2025',
    readTime: '4 min read',
    href: '/blog/microsoft-dynamics-365-vs-salesforce-which-crm-is-right-for-your-busin'
  },
  {
    id: 39,
    imageSrc: 'https://static.wixstatic.com/media/9199c4_1c1b0343d4684c0b973d77a5c9fe85f5~mv2.png/v1/fill/w_611,h_755,fp_0.50_0.50,q_95,enc_avif,quality_auto/9199c4_1c1b0343d4684c0b973d77a5c9fe85f5~mv2.png',
    category: 'Blog Posts',
    title: 'Unlocking Greater Insights with Analysis Mode in Business Central',
    excerpt: 'The Power of Data Analysis for Business Decisions In today\'s fast-paced business environment, data is more valuable than ever. Companies...',
    date: 'Apr 22, 2025',
    readTime: '3 min read',
    href: '/blog/unlocking-greater-insights-with-analysis-mode-in-business-central'
  }
];
export default function BlogGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {mockPosts.map((post) => (
            <BlogCard
              key={post.id}
              imageSrc={post.imageSrc}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              href={post.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
