import Link from 'next/link';
import styles from './CareersHero.module.css';

export default function CareersHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageOverlay} />
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.heroVideo}
      >
        <source src="/6805175-uhd_4096_2160_25fps.mp4" type="video/mp4" />
      </video>
      <div className={styles.contentContainer}>
        <h1 className={styles.heroTitle}>Life at CompQsoft Digital</h1>
        <p className={styles.heroSubtitle}>Empower Your Future. Transform With Us.</p>
        <Link
          href="https://recruiting.paylocity.com/recruiting/jobs/All/4eabb44b-61e0-48b0-9c14-33fce62d2a29/CompQsoft-Digital"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Explore Job Openings
        </Link>
      </div>
    </section>
  );
}
