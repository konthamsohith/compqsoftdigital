import Image from 'next/image';
import Link from 'next/link';
import styles from './ContactSplitSection.module.css';

export default function ContactSplitSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.contentSide}>
          <div className={styles.floatingBox}>
            <h2 className={styles.boxTitle}>
              Didn't find the role<br />
              you're looking for? Get<br />
              in touch with us!
            </h2>
            <Link href="mailto:info@compqsoftdigital.com" className={styles.submitButton}>
              <span className={styles.buttonText}>Submit</span>
              <span className={styles.buttonIcon}>→</span>
            </Link>
          </div>
        </div>

        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className={styles.image}
            >
              <source src="/6804114-uhd_4096_2160_25fps.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
    </section>
  );
}
