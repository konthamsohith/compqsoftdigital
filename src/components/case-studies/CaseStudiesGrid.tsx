/* eslint-disable @typescript-eslint/no-explicit-any */
import CaseStudyCard from './CaseStudyCard';
import { getCaseStudies } from '@/lib/cms';
import styles from './CaseStudiesGrid.module.css';

export default async function CaseStudiesGrid() {
  const caseStudiesList = getCaseStudies();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {caseStudiesList.map((study: any, index: number) => (
            <CaseStudyCard
              key={study.id || index}
              imageSrc={study.imageSrc || 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800'}
              date={study.date || ''}
              readTime={study.readTime}
              category={study.category}
              title={study.title}
              excerpt={study.excerpt}
              views={study.views}
              likes={study.likes}
              href={`/case-studies/${study.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
