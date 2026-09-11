import Image from 'next/image';
import styles from './WebinarsHero.module.css';

export default function WebinarsHero() {
  return (
    <section className={styles.heroSection}>
      <Image
        src="https://static.wixstatic.com/media/ecafcf_6a8bb9fdfb0342aca64710c4b5848063~mv2.png/v1/fill/w_1905,h_167,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ecafcf_6a8bb9fdfb0342aca64710c4b5848063~mv2.png"
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
