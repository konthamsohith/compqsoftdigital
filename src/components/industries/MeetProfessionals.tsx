import styles from './MeetProfessionals.module.css';

const EXPERTISE_ITEMS = [
  {
    title: 'Customer Experience:',
    text: "Deliver personalized, connected customer experiences that adapt to shifting market dynamics and evolving consumer behaviors. Our Customer Experience solutions leverage data and AI to anticipate needs, optimize sales, and build lasting customer relationships—turning every interaction into a growth opportunity.",
  },
  {
    title: 'Workplace Transformation:',
    text: 'Empower your workforce with employee-centric solutions that automate repetitive tasks, foster creativity, and accelerate innovation. Our Workplace Transformation services are designed to enhance productivity, streamline workflows, and create a more agile, collaborative, and future-ready workplace.',
  },
  {
    title: 'Digital IT Operations :',
    text: 'Transform your IT operations with enhanced security, agility, and efficiency. Our services span infrastructure management, managed services, and automation—driving end-to-end operational excellence and business agility.',
  },
  {
    title: 'Enterprise Platform Services:',
    text: 'Our Enterprise Platform Services help organizations maximize ROI, enhance efficiency, and drive innovation. We ensure businesses get the most value from their technology investments by streamlining processes and optimizing platform performance.',
  },
  {
    title: 'Data, Analytics and AI:',
    text: 'Our Data and Analytics services help build a strong data foundation with a focus on Data Strategy, Data Estate Modernization, Advanced Analytics, and Customer Analytics. We turn data into actionable insights that fuel innovation, improve efficiency, and deliver measurable results.',
  },
];

export default function MeetProfessionals() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.mainTitle}>
            <span className={styles.titlePill}>Our Horizontal Expertise</span>
          </h2>
        </div>

        <div className={styles.itemsContainer}>
          {EXPERTISE_ITEMS.map((item) => (
            <div key={item.title} className={styles.item}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
