import CaseStudyCard from './CaseStudyCard';
import { caseStudies } from './caseStudiesData';
import styles from './CaseStudiesGrid.module.css';

export default function CaseStudiesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {caseStudies.map((study) => (
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
              href={`/case-studies/${study.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
