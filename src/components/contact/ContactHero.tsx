import Image from 'next/image';
import styles from './ContactHero.module.css';

export default function ContactHero() {
  return (
    <section className={styles.heroSection}>
      <Image
        src="https://static.wixstatic.com/media/11062b_dbd545a7f91742fe80bee961a5c18707~mv2.jpeg/v1/fill/w_3024,h_726,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_dbd545a7f91742fe80bee961a5c18707~mv2.jpeg"
        alt="Contact Us"
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
