import Image from 'next/image';
import styles from './RealTimeData.module.css';

export default function RealTimeData() {
  return (
    <section id="real-time-data-section" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/image2.png" 
              alt="Real-Time Data Access 3D Pie Chart" 
              fill
              className={styles.graphicImage}
              priority
            />
          </div>
        </div>

        <div className={styles.textSide}>
          <div className={styles.trackContainer}>
            <div className={styles.trackThumb}></div>
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Real-Time Data Access<br />
              for Smarter Decisions
            </h2>

            <p className={styles.paragraph}>
              Empowering industries with real-time data solutions that drive accurate business decisions. From healthcare to logistics industries, our tailored digital tools enhance efficiency, reduce OpEx, and support customer and employee experiences.
            </p>

            <button className={styles.readMoreButton} aria-label="Read More">
              <span className={styles.buttonText}>Read More</span>
              <span className={styles.buttonDivider}></span>
              <span className={styles.buttonArrow}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>


    </section>
  );
}
