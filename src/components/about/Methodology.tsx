import Image from 'next/image';
import styles from './Methodology.module.css';

export default function Methodology() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Methodology</h2>
          <p className={styles.subtitle}>COMPQSOFT DIGITAL IT DELIVERY METHODOLOGY</p>
        </div>

        <div className={styles.diagramWrapper}>
          <Image 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
            alt="Methodology Diagram Placeholder" 
            fill
            className={styles.diagramImage}
          />
        </div>

        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            This essentially functions as an IT operations manual for our enterprise customers in the digital age. This delivery framework gives CompQsoft and our customers a comprehensive and detailed view to streamline technology operations. We aim to support IT delivery and provide value effectively, securely, and seamlessly through continuous delivery from a hybrid cloud model to end-users anywhere.
          </p>
          <ul className={styles.bulletList}>
            <li>Service Level Strategy</li>
            <li>Financial Management</li>
            <li>Portfolio Management</li>
            <li>Demand &amp; Relationship Management</li>
            <li>Capacity &amp; Availability Management</li>
            <li>IT Service Continuity Management</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
