import Image from 'next/image';
import styles from './Methodology.module.css';

export default function Methodology() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Methodology</h2>
          <p className={styles.subtitle}>Our “Q” Delivery Methodology</p>
        </div>

        <div className={styles.diagramWrapper}>
          <Image 
            src="/methodology-diagram.jpg" 
            alt="Methodology Diagram" 
            fill
            className={styles.diagramImage}
          />
        </div>

        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            At CompQsoft, we are committed to pioneering innovative approaches to service delivery, guided by our proprietary “Q Methodology.” Our hybrid implementation methodology is designed specifically for digital transformation programs. It takes the best of Waterfall & Agile to provide a stable foundation that drives the highest possible customer satisfaction & success. Our core tenants are based on the following principles.
          </p>
          <ul className={styles.bulletList}>
            <li>Easy to Learn &amp; Execute</li>
            <li>Defines Clear Outcomes</li>
            <li>Scalable &amp; Adaptable</li>
            <li>Sustained Customer Engagement</li>
            <li>Proven, Practical, &amp; Cost Effective</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
