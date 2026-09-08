import styles from './WhyCompQsoft.module.css';

export default function WhyCompQsoft() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Why CompQsoft Digital ?</h2>
        
        <div className={styles.contentBlock}>
          <h3 className={styles.blockTitle}>Culture</h3>
          <p className={styles.blockText}>
            CompQsoft's culture is rooted in collaboration, innovation, and continuous learning. We foster an environment where every team member is given the autonomy and resources to thrive. We are highly collaborative across various departments. We operate transparently and have regular townhalls and yearly planning offsites.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.blockTitle}>Benefits for you</h3>
          <p className={styles.blockText}>
            At CompQsoft, we believe in supporting every step of your journey. Our comprehensive benefits package is geared to not only fuel your professional growth but also ensure your personal well-being. With perks tailored to your specific goals, we go to great lengths to provide you with a rewarding career journey.
          </p>
          <ul className={styles.benefitsList}>
            <li>Medical, dental, and vision insurance</li>
            <li>Life insurance</li>
            <li>Paid Time Off (PTO)</li>
            <li>401k matching</li>
            <li>Paid IT Certifications and Training</li>
            <li>Flexible Work Hours</li>
            <li>Mentorship and Career Advancement</li>
            <li>Remote Work Options</li>
          </ul>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.blockTitle}>Diversity &amp; Inclusion</h3>
          <p className={styles.blockText}>
            CompQsoft is committed to building a diverse, equitable, and inclusive workplace where everyone is valued, respected, and empowered. We believe that a culture of inclusivity strengthens our teams and fosters an environment of belonging and creativity.
          </p>
        </div>
      </div>
    </section>
  );
}
