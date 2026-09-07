import Link from 'next/link';
import styles from './CareersCTA.module.css';

export default function CareersCTA() {
  return (
    <section className={styles.ctaSection} id="openings">
      <div className={styles.imageOverlay} />
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.backgroundVideo}
      >
        <source src="/6803583-uhd_4096_2160_25fps.mp4" type="video/mp4" />
      </video>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>Job Openings</h2>
        <p className={styles.subtitle}>Ready to choose the future with us?</p>
        <Link href="#" className={styles.button}>
          Explore Current Openings
        </Link>
      </div>
    </section>
  );
}
