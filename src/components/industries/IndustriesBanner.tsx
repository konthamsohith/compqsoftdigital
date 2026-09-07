import styles from './IndustriesBanner.module.css';

export default function IndustriesBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Explore our Extensive Experience</h2>
        <p className={styles.text}>
          At CompQsoft, we bring next-gen digital transformation to every industry we serve. Backed by deep domain expertise and a strong foundation in Microsoft technologies, we empower organizations to innovate faster, operate smarter, and deliver greater value.
        </p>
      </div>
    </section>
  );
}
