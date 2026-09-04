import Image from 'next/image';
import styles from './PartnersSection.module.css';

export default function PartnersSection() {
  return (
    <section id="partners-section" className={styles.section}>
      {/* Left Black Half */}
      <div className={styles.leftSide}>
        <div className={styles.leftContentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.headline}>
              Our Partners
            </h2>

            <div className={styles.paragraphWrapper}>
              <div className={styles.trackContainer}>
                <div className={styles.trackThumb}></div>
              </div>
              <p className={styles.paragraph}>
                We partner with top technology providers<br />
                to deliver cutting-edge digital solutions,<br />
                integrating the latest innovations to meet<br />
                the evolving needs of businesses<br />
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right White Half */}
      <div className={styles.rightSide}>
        <div className={styles.partnersList}>
          {/* Real Logos */}
          <div className={`${styles.partnerLogo} ${styles.logo1}`}>
            <Image 
              src="/Microsoft-Logo.png" 
              alt="Microsoft" 
              width={550} 
              height={160} 
              className={styles.realLogo}
            />
          </div>

          <div className={`${styles.partnerLogo} ${styles.logo2}`}>
            <Image 
              src="/databricks-logo.png" 
              alt="Databricks" 
              width={450} 
              height={120} 
              className={styles.realLogo}
            />
          </div>

          <div className={`${styles.partnerLogo} ${styles.logo3}`}>
            <Image 
              src="/Mangobytes.png" 
              alt="MangoBytes" 
              width={450} 
              height={120} 
              className={styles.realLogo}
            />
          </div>

          <div className={`${styles.partnerLogo} ${styles.logo4}`}>
            <Image 
              src="/xxl_Profisee_Logo-1400x1000.png" 
              alt="Profisee" 
              width={620} 
              height={180} 
              className={styles.realLogo}
            />
          </div>
        </div>


      </div>
    </section>
  );
}
