import Link from 'next/link';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.heroVideo}
      >
        <source src="/6805176-uhd_4096_2160_25fps.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Who We Are</h1>

        <div className={styles.whiteBox}>
          <p className={styles.description}>
            CompQsoft Digital is a global Microsoft high-performance digital transformation service provider helping our customers drive balance for your strategic business initiatives. Backed by 25 +years of experience, we deliver a proven predictable, repeatable, scalable delivery operating model to ensure your success. We empower businesses to build agile, customer-centric innovative solutions by harnessing the power of Microsoft technologies. Our service offerings span Cloud Modernization, Data and Analytics, Business Applications (CRM/ERP), Automation, and next-gen innovations like Generative AI and Copilots. As an ISO-certified and CMMI Level 3 organization, we are committed to delivering excellence, accelerating growth, and transforming your digital future.
          </p>
          <Link href="/services" className={styles.button}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
