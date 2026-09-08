import Image from 'next/image';
import styles from './DigitalTransformation.module.css';

export default function DigitalTransformation() {
  return (
    <section id="digital-transformation-section" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textSide}>
          <h2 className={styles.title}>
            Driving Microsoft Digital<br />
            Transformation with our Proven<br />
            Process
          </h2>

          <h3 className={styles.subtitle}>
            Empowering Your Digital<br />
            Transformation Journey
          </h3>

          <p className={styles.paragraph}>
            From strategy to execution, we offer end-to-end digital transformation services that enable your business to grow, adapt, and thrive in a digital-first world.
          </p>

          <button className={styles.exploreButton} aria-label="Explore More">
            <span className={styles.buttonText}>Explore More</span>
            <span className={styles.buttonDivider}></span>
            <span className={styles.buttonArrow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>

        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/image1.png" 
              alt="Digital Transformation with Crane and Laptop" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.graphicImage}
              priority
            />
          </div>
        </div>
      </div>


    </section>
  );
}
