import Link from 'next/link';
import styles from './JoinOurTeamCTA.module.css';

export default function JoinOurTeamCTA() {
  return (
    <section className={styles.section}>
      <video
        className={styles.bgVideo}
        src="https://video.wixstatic.com/video/fbc95c_b447eadb3d874b5f8d44c6f85e887233/1080p/mp4/file.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay} />
      <div className={styles.container}>

        <div className={styles.contentBox}>
          <h2 className={styles.title}>JOIN OUR TEAM</h2>
          <p className={styles.description}>
            Join a fast-growing company that truly values your professional growth, supports your well-being, and invests in your success every step of the way.
          </p>
          <Link href="/careers" className={styles.button}>
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}
