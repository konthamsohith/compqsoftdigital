import styles from './DeliveryModel.module.css';

export default function DeliveryModel() {
  return (
    <section id="delivery-model-section" className={styles.section}>
      {/* Background Video */}
      <video 
        className={styles.videoBackground}
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/7989675-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      <div className={styles.videoOverlay}></div>

      {/* Floating White Card */}
      <div className={styles.cardContainer}>
        <div className={styles.whiteCard}>
          <h2 className={styles.title}>
            Our Predictable,<br />
            Repeatable, Scalable<br />
            Follow-the-Sun Delivery<br />
            Model
          </h2>

          <p className={styles.quote}>
            &quot;Built Around Your Needs. Powered by Technology.&quot;
          </p>

          <div className={styles.bodyWithTrack}>
            <div className={styles.trackContainer}>
              <div className={styles.trackThumb}></div>
            </div>

            <p className={styles.paragraph}>
              At CompQsoft Digital, we go beyond technology implementation to solve complex business challenges. As a trusted Microsoft digital solutions provider, we combine deep expertise with a customer-first mindset to help you innovate with confidence.
            </p>
          </div>

          <button className={styles.discoverButton} aria-label="Discover More">
            <span className={styles.buttonText}>Discover More</span>
            <span className={styles.buttonDivider}></span>
            <span className={styles.buttonArrow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>
      </div>



    </section>
  );
}
