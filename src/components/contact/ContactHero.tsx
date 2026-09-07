import Image from 'next/image';
import styles from './ContactHero.module.css';

export default function ContactHero() {
  return (
    <section className={styles.heroSection}>
      <Image 
        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1920" 
        alt="Video Call Placeholder" 
        fill
        className={styles.heroImage}
        priority
      />
      <div className={styles.overlay} />
      
      <div className={styles.titleBox}>
        <h1 className={styles.title}>Contact Us</h1>
      </div>
    </section>
  );
}
