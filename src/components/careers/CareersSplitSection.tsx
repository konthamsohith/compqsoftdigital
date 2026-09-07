import Image from 'next/image';
import styles from './CareersSplitSection.module.css';

interface CareersSplitSectionProps {
  title: React.ReactNode;
  paragraphs: string[];
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  imageOnRight?: boolean;
  showLeftBorder?: boolean;
}

export default function CareersSplitSection({ 
  title, 
  paragraphs, 
  bullets,
  imageSrc, 
  imageAlt, 
  videoSrc,
  imageOnRight = true,
  showLeftBorder = false
}: CareersSplitSectionProps) {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${imageOnRight ? '' : styles.reverse}`}>
        
        <div className={styles.textContent}>
          <div className={`${styles.textWrapper} ${showLeftBorder ? styles.withLeftBorder : ''}`}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.paragraphsContainer}>
              {paragraphs.map((para, index) => (
                <p key={index} className={styles.paragraph}>{para}</p>
              ))}
            </div>
            {bullets && bullets.length > 0 && (
              <ul className={styles.bulletList}>
                {bullets.map((bullet, index) => (
                  <li key={index} className={styles.bulletItem}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            {videoSrc ? (
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className={styles.image} // reuse image class for styling
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              imageSrc && imageAlt && (
                <Image 
                  src={imageSrc} 
                  alt={imageAlt} 
                  fill
                  className={styles.image}
                />
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
