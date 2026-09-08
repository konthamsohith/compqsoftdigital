import NewsArticle from './NewsArticle';
import styles from './NewsList.module.css';

const mockNews = [
  {
    id: 1,
    indexNumber: '01',
    title: 'CompQsoft Digital Appoints Jim Sheehan to Board of Directors',
    subtitle: 'Seasoned Microsoft Ecosystem Leader to Drive Strategic Growth and Culture-First Initiatives',
    personName: 'Jim Sheehan',
    personRole: 'Board Member',
    paragraphs: [
      'Houston, TX – June 16, 2025 – CompQsoft Digital, a global Microsoft solutions and services provider, today announced the appointment of Jim Sheehan to its Board of Directors. With a distinguished career in technology and a deep-rooted history of success in the Microsoft partner ecosystem, Jim joins the board to help shape the company\'s strategic vision, advisory direction, and culture-first priorities.',
      'Jim Sheehan is a highly respected technology executive who comes out of retirement to help propel CompQsoft Digital to new heights. A former executive at PowerObjects, an HCL Technologies company, Jim played a pivotal role in transforming the firm from a small local Microsoft partner into one of North America\'s leading Microsoft Dynamics partners. Under his leadership, PowerObjects experienced rapid growth and was successfully acquired by HCL, a milestone that cemented Jim\'s reputation as a transformational leader within the Microsoft ecosystem.',
      'Jim\'s deep expertise and insight into Microsoft technologies and partner collaboration will support CompQsoft Digital\'s mission to become the go-to technology partner for enterprises seeking to modernize and elevate their customer experience journeys.',
      '"I am very pleased to congratulate and welcome Jim to CompQsoft Digital\'s Board of Directors," said Madina Shaikh, CEO of CompQsoft Digital. "Jim is a highly accomplished executive with extensive experience scaling Microsoft-focused businesses. I am confident his leadership and strategic foresight will bring significant value to our board and our continued growth."',
      '"Jim brings a wealth of leadership experience and an impressive record of execution at the forefront of Microsoft Dynamics 365 solutions," added Greg Moser, President and Board Member of CompQsoft Digital. "His ability to envision the future and deliver results aligns perfectly with our customer-centric innovation goals."',
      'Reflecting on his appointment, Jim Sheehan shared, "I am honored to join the Board of Directors at CompQsoft Digital. The company stands out with its unmatched Microsoft expertise, bold vision, and commitment to its customers. I look forward to collaborating with this dynamic team to build on its momentum and deliver measurable impact."',
      'About CompQsoft Digital',
      'CompQsoft Digital is a global Microsoft service provider and a trusted partner helping our customers bring balance to their global digital transformation initiatives. Backed by 25+ years of experience, we deliver innovative management consulting services that drive balance within your strategic programs driving business value.',
      'We empower businesses to build agile, customer-centric solutions by harnessing the power of Microsoft technologies. Our service offerings span Cloud Modernization, Data & Analytics, Business Applications (CRM/ERP), Automation, and next-gen innovations like Generative AI and Copilots.',
      'As an ISO-certified and CMMI Level 3 organization, CompQsoft Digital is committed to delivering excellence, accelerating growth, and transforming your digital future.'
    ],
    imageSrc: 'https://static.wixstatic.com/media/9199c4_c43eedb321b24084b74a0cb4f7833831~mv2.jpg/v1/fill/w_544,h_560,al_c,lg_1,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-06-18%20at%2003_41_54_2c40baaf.jpg'
  },
  {
    id: 2,
    indexNumber: '02',
    title: '',
    subtitle: '',
    paragraphs: [
      'Coming Soon...',
      'Exciting news will be shared soon. Stay tuned!'
    ]
  },
  {
    id: 3,
    indexNumber: '03',
    title: '',
    subtitle: '',
    paragraphs: [
      'Coming Soon...',
      'Exciting news will be shared soon. Stay tuned!'
    ]
  }
];

export default function NewsList() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {mockNews.map((news) => (
          <NewsArticle
            key={news.id}
            indexNumber={news.indexNumber}
            title={news.title}
            subtitle={news.subtitle}
            paragraphs={news.paragraphs}
            imageSrc={news.imageSrc}
            personName={news.personName}
            personRole={news.personRole}
          />
        ))}
      </div>
    </section>
  );
}
