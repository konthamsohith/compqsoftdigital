import Image from 'next/image';
import type { CaseStudy } from './caseStudiesData';
import styles from './CaseStudyDetail.module.css';

interface CaseStudyDetailProps {
  study: CaseStudy;
}

export default function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <p className={styles.meta}>{study.date} &middot; {study.readTime}</p>
        <h1 className={styles.title}>{study.title}</h1>

        <div className={styles.imageWrapper}>
          <Image
            src={study.imageSrc}
            alt={study.title}
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.body}>
          {study.sections.map((section) => (
            <section key={section.heading} className={styles.section}>
              <h2 className={styles.sectionHeading}>{section.heading}</h2>
              {section.intro && <p className={styles.intro}>{section.intro}</p>}
              {section.items.length === 1 ? (
                <p className={styles.paragraph}>{section.items[0]}</p>
              ) : (
                <ul className={styles.list}>
                  {section.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className={styles.tagsRow}>
          <span className={styles.tagsLabel}>Tags:</span>
          <span className={styles.tag}>Case Studies</span>
          <span className={styles.tag}>{study.category}</span>
        </div>

        <div className={styles.footerRow}>
          <span className={styles.views}>{study.views} views</span>
          <span className={styles.likes}>{study.likes} like{study.likes === 1 ? '' : 's'}</span>
        </div>
      </div>
    </article>
  );
}
