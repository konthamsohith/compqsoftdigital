import styles from './NewsHero.module.css';

export default function NewsHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <div className={styles.scrollIndicator}>
          SCROLL DOWN
          <div className={styles.scrollArrow}>↓</div>
        </div>
        <h1 className={styles.title}>NEWS</h1>
      </div>
      <div className={styles.curvedBottom}></div>
    </section>
  );
}
