import styles from './NewsHero.module.css';

export default function NewsHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>SCROLL DOWN</span>
          <div className={styles.scrollLineWrapper}>
            <div className={styles.scrollLine}></div>
            <div className={styles.scrollArrow}></div>
          </div>
        </div>
        <h1 className={styles.title}>NEWS</h1>
      </div>
    </section>
  );
}
