import styles from './ContactInfo.module.css';

export default function ContactInfo() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.column}>
        <h3 className={styles.heading}>Address</h3>
        <p className={styles.text}>11445 Compaq Center W.</p>
        <p className={styles.text}>Drive Building CCA6</p>
        <p className={styles.text}>Houston, TX 77070</p>
      </div>
      <div className={styles.column}>
        <h3 className={styles.heading}>Contact</h3>
        <p className={styles.text}>571-200-3923</p>
        <p className={styles.text}>info@compqsoftdigital.com</p>
      </div>
    </div>
  );
}
