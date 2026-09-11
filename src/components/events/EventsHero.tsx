import Image from 'next/image';
import styles from './EventsHero.module.css';

export default function EventsHero() {
  return (
    <section className={styles.heroSection}>
      <Image
        src="https://static.wixstatic.com/media/ecafcf_bdeb8fe63e5d4330beacaa2571fe0406~mv2.jpg/v1/fill/w_1905,h_210,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ecafcf_bdeb8fe63e5d4330beacaa2571fe0406~mv2.jpg"
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
