import styles from './IndustriesHero.module.css';

export default function IndustriesHero() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundContainer}>
        <div className={styles.imageOverlay} />
        <video 
          src="/10101925-hd_3840_2160_30fps.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={styles.backgroundVideo} 
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Our Industry Expertise</h1>
        <p className={styles.subtitle}>
          Reimagining Industries with AI
          <br />
          and Advanced Technologies
        </p>
      </div>
    </section>
  );
}
