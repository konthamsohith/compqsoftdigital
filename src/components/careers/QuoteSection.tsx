import styles from './QuoteSection.module.css';

export default function QuoteSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.quote}>
          &quot;As a President, my goal is to foster a workplace where our values, diverse talents, and ethical strategies are the foundation for creating lasting, positive impact. We are committed to empowering our people, supporting our clients, and uplifting the communities we serve. Together, we will build a culture that thrives on integrity, purpose, and shared success.&quot;
        </p>
        <p className={styles.author}>
          — Greg Moser, President &amp; Board member, CompQsoft Digital
        </p>
      </div>
    </section>
  );
}
