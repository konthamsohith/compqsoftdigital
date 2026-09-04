import Image from 'next/image';
import styles from './ServicesSplitSection.module.css';

interface ServicesSplitSectionProps {
  title: string;
  text: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageOnRight?: boolean;
  showAccentLine?: boolean;
}

export default function ServicesSplitSection({ 
  title, 
  text, 
  imageSrc, 
  imageAlt, 
  imageOnRight = true,
  showAccentLine = false 
}: ServicesSplitSectionProps) {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${imageOnRight ? '' : styles.reverse}`}>
        
        <div className={styles.textContent}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.paragraphContainer}>
              {showAccentLine && <div className={styles.accentLine}></div>}
              <p className={styles.paragraph}>{text}</p>
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
