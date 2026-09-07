import Image from 'next/image';
import styles from './IndustrySplitSection.module.css';

interface IndustrySplitSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  paragraphs: React.ReactNode[];
  imageSrc: string;
  imageAlt: string;
  imageOnRight?: boolean;
}

export default function IndustrySplitSection({
  id,
  title,
  subtitle,
  paragraphs,
  imageSrc,
  imageAlt,
  imageOnRight = true
}: IndustrySplitSectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={`${styles.container} ${imageOnRight ? '' : styles.reverse}`}>

        <div className={styles.textContent}>
          <div className={styles.textWrapper}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.title}>{title}</h2>
            </div>
            {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
            <div className={styles.paragraphsContainer}>
              {paragraphs.map((para, index) => (
                <p key={index} className={styles.paragraph}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              fill
              className={styles.image}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
