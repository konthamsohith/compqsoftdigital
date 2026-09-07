import Image from 'next/image';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <Image 
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200" 
              alt="Professional working" 
              fill
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.contentSide}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Why US?</h2>
            
            <p className={styles.paragraph}>
              <strong>CompQsoft Expertise:</strong> We bring extensive domain knowledge and deep functional proficiency to address complex challenges. Our team has decades of collective experience navigating modern enterprise landscapes and solving complex technology problems for global businesses.
            </p>
            
            <p className={styles.paragraph}>
              We empower our clients to build sustainable, future-ready organizations by transforming their strategies into actionable results. Through our end-to-end consulting, we help you overcome immediate hurdles and position your business for long-term growth and success. Our approach is collaborative—we listen closely to your needs, understand your context, and co-create solutions that drive meaningful outcomes.
            </p>
            
            <p className={styles.paragraph}>
              From implementing advanced Microsoft technologies to providing ongoing support and optimization, CompQsoft is dedicated to being your reliable partner on your digital transformation journey. Let us help you unlock the full potential of your enterprise.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
