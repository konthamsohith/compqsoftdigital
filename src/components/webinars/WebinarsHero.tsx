import Image from 'next/image';
import styles from './WebinarsHero.module.css';

export default function WebinarsHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageOverlay} />
      <Image 
        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1920" 
        alt="Webinars Banner" 
        fill
        className={styles.heroImage}
        priority
      />
      <div className={styles.contentContainer}>
        <h1 className={styles.heroTitle}>Webinars</h1>
      </div>
    </section>
  );
}
