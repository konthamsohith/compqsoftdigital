import Image from 'next/image';
import styles from './NewsArticle.module.css';

interface NewsArticleProps {
  indexNumber: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  imageSrc?: string;
}

export default function NewsArticle({
  indexNumber,
  title,
  subtitle,
  paragraphs,
  imageSrc
}: NewsArticleProps) {
  return (
    <article className={styles.article}>
      
      {/* Index Number column */}
      <div className={styles.numberColumn}>
        {imageSrc && (
          <div className={styles.imageWrapper}>
            <Image 
              src={imageSrc} 
              alt={title} 
              fill
              className={styles.image}
            />
          </div>
        )}
        <span className={styles.indexNumber}>{indexNumber}</span>
      </div>

      {/* Content column */}
      <div className={styles.contentColumn}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        
        <div className={styles.bodyText}>
          {paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>

    </article>
  );
}
