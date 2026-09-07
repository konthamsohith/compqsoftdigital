import Image from 'next/image';
import styles from './EventsHero.module.css';

export default function EventsHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageOverlay} />
      <Image 
        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1920" 
        alt="Events and Conferences" 
        fill
        className={styles.heroImage}
        priority
      />
      <div className={styles.contentContainer}>
        <h1 className={styles.heroTitle}>
          Events and<br />Conferences
        </h1>
      </div>
    </section>
  );
}
