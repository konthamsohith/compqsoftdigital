import Image from 'next/image';
import styles from './StatsSection.module.css';

export default function StatsSection() {
  return (
    <section id="stats-section" className={styles.section}>
      {/* Left Blue Half */}
      <div className={styles.leftSide}>
        <div className={styles.leftContentWrapper}>
          <div className={styles.trackContainer}>
            <div className={styles.trackThumb}></div>
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.headline}>
              For over 25 years, CompQsoft Digital has been at the forefront of digital transformation, delivering solutions that make a difference.
            </h2>

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>25+</div>
                <div className={styles.statLine}></div>
                <div className={styles.statLabel}>
                  Years of<br />Delivering Excellence
                </div>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLine}></div>
                <div className={styles.statLabel}>
                  Innovators
                </div>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statNumber}>240+</div>
                <div className={styles.statLine}></div>
                <div className={styles.statLabel}>
                  Locations
                </div>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statNumber}>200+</div>
                <div className={styles.statLine}></div>
                <div className={styles.statLabel}>
                  Global Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right White Half */}
      <div className={styles.rightSide}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/4.png" 
            alt="Digital Growth 3D Bar Chart" 
            fill
            className={styles.graphicImage}
            priority
          />
        </div>


      </div>

    </section>
  );
}
