import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <Image 
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920" 
        alt="About CompQsoft Digital" 
        fill
        className={styles.heroImage}
        priority
      />
      <div className={styles.overlay} />
      
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Who We Are</h1>
        
        <div className={styles.whiteBox}>
          <p className={styles.description}>
            CompQsoft Digital is a globally recognized provider of Microsoft enterprise software consulting services and solutions. We assist enterprises in maximizing their investment in Microsoft technologies such as Dynamics 365, Azure, Power Platform, and Microsoft 365. With a proven track record, we have supported 1500+ global enterprises through strategic Microsoft implementations. Our "Customer-First" approach sets us apart. Partnering with CompQsoft guarantees access to an exclusive blend of certified experts, innovative IP, and proven methodologies to drive your digital transformation initiatives forward.
          </p>
          <Link href="#more" className={styles.button}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
