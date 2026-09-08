import Image from 'next/image';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about-section" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/binary_sphere.png" 
              alt="Binary Sphere" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.graphicImage}
              priority
            />
          </div>
        </div>
        
        <div className={styles.textSide}>
          <div className={styles.trackContainer}>
            <div className={styles.trackThumb}></div>
          </div>
          <div className={styles.textDetails}>
            <h2 className={styles.title}>
              Why the <span className={styles.redQ}>Q</span>?
            </h2>
            <h3 className={styles.subtitle}>
              Transforming Businesses with<br />Scalable Digital Solutions
            </h3>
            
            <div className={styles.paragraphWrapper}>
              <p className={styles.paragraph}>
                CompQSoft Digital is a leading next-generation AI transformation partner focused on helping enterprises reinvent customer engagement and reshape business processes. With deep expertise in Microsoft AI technologies, we empower organizations to unlock the full potential of AI across their operations.
              </p>
              <p className={styles.paragraph}>
                We deliver measurable outcomes by embedding AI into the core of customers, process, technology driving balanced quality outcomes. Our solutions reduce time-to-value, enhance customer and employee satisfaction, and drive innovation through AI-first strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
