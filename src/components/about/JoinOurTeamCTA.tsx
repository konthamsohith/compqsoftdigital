import Link from 'next/link';
import styles from './JoinOurTeamCTA.module.css';

export default function JoinOurTeamCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.contentBox}>
          <h2 className={styles.title}>JOIN OUR TEAM</h2>
          <p className={styles.description}>
            We're a fast-growing, innovative global company. Join us as we build solutions for some of the world's leading brands.
          </p>
          <Link href="/careers" className={styles.button}>
            Careers
          </Link>
        </div>

      </div>
    </section>
  );
}
