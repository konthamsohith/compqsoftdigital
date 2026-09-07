import Image from 'next/image';
import styles from './CoreValues.module.css';

export default function CoreValues() {
  const values = [
    "Quality with respect",
    "Honesty and integrity in all our business transactions",
    "Reliability in all our actions",
    "Social Responsibility",
    "Constant Innovation",
    "Uncompromising on the code of ethics",
    "Value our people",
    "Deliver with Excellence",
    "Continuous Learning and Improvement",
    "Customer-Centricity"
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.contentSide}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Our Core Values</h2>
            <ul className={styles.valuesList}>
              {values.map((value, index) => (
                <li key={index} className={styles.valueItem}>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Team collaborating" 
              fill
              className={styles.image}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
