import styles from './CoreValues.module.css';

export default function CoreValues() {
  const values = [
    {
      title: 'Quality with Purpose',
      description: 'We bring the “Q” in everything we do.',
    },
    {
      title: 'Customers & Employees First.',
      description: 'We cultivate a culture of care and focus to drive excellence',
    },
    {
      title: 'Lead with Innovation.',
      description: 'We advance continuously to deliver meaningful value.',
    },
    {
      title: 'Delivery with Excellence.',
      description: 'We execute with precision to achieve exceptional outcomes',
    },
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
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={styles.image}
            >
              <source src="/7989833-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
    </section>
  );
}
