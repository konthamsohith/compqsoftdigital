import CaseStudyCard from './CaseStudyCard';
import styles from './CaseStudiesGrid.module.css';

const mockCaseStudies = [
  {
    id: 1,
    imageSrc: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800',
    date: 'April 15, 2024',
    readTime: '3 min read',
    category: 'CASE STUDIES',
    title: 'Transforming Retail Operations: Boosting Efficiency and Customer Experience',
    excerpt: 'Customer: A leading retail chain experiencing rapid growth. Challenge: Legacy systems were slowing down checkouts and limiting inventory visibility...',
    views: '120',
    likes: 8,
    href: '/case-studies/retail-operations'
  },
  {
    id: 2,
    imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    date: 'April 10, 2024',
    readTime: '4 min read',
    category: 'CASE STUDIES',
    title: 'Leading Industrial Tooling Supplier Transforms Operations with Dynamics 365',
    excerpt: 'Customer: A global supplier of industrial tools. Challenge: Managing a complex supply chain with outdated, siloed software that caused frequent delays...',
    views: '85',
    likes: 5,
    href: '/case-studies/industrial-tooling'
  },
  {
    id: 3,
    imageSrc: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800',
    date: 'April 5, 2024',
    readTime: '3 min read',
    category: 'CASE STUDIES',
    title: 'Empowering Decision-Making with Tableau to Power BI Migration',
    excerpt: 'Customer: A leading transportation and logistics company. Challenge: High licensing costs and limited integration capabilities with their existing data stack...',
    views: '210',
    likes: 12,
    href: '/case-studies/tableau-powerbi'
  },
  {
    id: 4,
    imageSrc: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800',
    date: 'April 2, 2024',
    readTime: '5 min read',
    category: 'CASE STUDIES',
    title: 'CompQsoft transforms the legacy ERP system of a leading food manufacturing company',
    excerpt: 'Customer: A major food manufacturer and distributor. Challenge: Their legacy ERP system could no longer handle their transaction volume, causing severe bottlenecks...',
    views: '340',
    likes: 18,
    href: '/case-studies/erp-transformation'
  },
  {
    id: 5,
    imageSrc: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800',
    date: 'March 28, 2024',
    readTime: '4 min read',
    category: 'CASE STUDIES',
    title: 'CompQsoft helps a leading retailer launch its e-Store, and leverages Salesforce',
    excerpt: 'Customer: An established brick-and-mortar retailer. Challenge: Transitioning to e-commerce while maintaining a unified view of customer interactions...',
    views: '155',
    likes: 7,
    href: '/case-studies/retailer-estore-salesforce'
  },
  {
    id: 6,
    imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    date: 'March 20, 2024',
    readTime: '3 min read',
    category: 'CASE STUDIES',
    title: 'CompQsoft helped a leading manufacturing company migrate Dynamics NAV to Business Central',
    excerpt: 'Customer: A global manufacturing corporation. Challenge: Their older Dynamics NAV environment lacked the cloud capabilities needed for remote workforce collaboration...',
    views: '92',
    likes: 4,
    href: '/case-studies/migrate-nav-bc'
  }
];

export default function CaseStudiesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {mockCaseStudies.map((study) => (
            <CaseStudyCard 
              key={study.id}
              imageSrc={study.imageSrc}
              date={study.date}
              readTime={study.readTime}
              category={study.category}
              title={study.title}
              excerpt={study.excerpt}
              views={study.views}
              likes={study.likes}
              href={study.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
