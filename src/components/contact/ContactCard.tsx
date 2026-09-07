import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import styles from './ContactCard.module.css';

export default function ContactCard() {
  return (
    <section className={styles.section}>
      <div className={styles.cardContainer}>
        
        {/* Top Half: Info */}
        <div className={styles.topHalf}>
          <ContactInfo />
        </div>

        {/* Bottom Half: Form and Map */}
        <div className={styles.bottomHalf}>
          <div className={styles.formColumn}>
            <ContactForm />
          </div>
          <div className={styles.mapColumn}>
            <ContactMap />
          </div>
        </div>

      </div>
    </section>
  );
}
