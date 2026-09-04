import styles from './OurServicesGrid.module.css';

const services = [
  {
    title: "Management Consulting",
    desc: "Leverage our in-depth experience to align your business values, through digital and advanced technologies. Our experts bring data security innovations for Microsoft execution initiatives."
  },
  {
    title: "Cloud & Infrastructure",
    desc: "Design & modern cloud architecture using seamless and scalable, secure and robust IT environments. We modernize legacy systems and optimize infrastructures through absolutely agile architecture and communication engagement."
  },
  {
    title: "AI and Machine Learning",
    desc: "AI and Machine Learning accelerates innovation through intelligence. Automate complex processes to gather actionable data insights. From developing chatbots to machine vision algorithms, we empower enterprises to make highly smart informed decisions."
  },
  {
    title: "Data & Analytics",
    desc: "Unlock the true potential of data with actionable analytics. We transform complex data into clear, concise, actionable insights to empower highly smart and informed decisions."
  },
  {
    title: "Power Platform",
    desc: "Deliver resilient, empowered solutions. With low-code tools, anyone can build apps, automate workflows and securely connect your systems. Drive lasting impact."
  },
  {
    title: "Dynamics 365 ERP",
    desc: "Streamline operations and drive efficiency. Our experts leverage CRM to help business move faster and more smartly to optimize operations."
  },
  {
    title: "Dynamics 365 CRM",
    desc: "Turn data leads into revenue. Use data-driven CRM to boost engagement, improve services and scale operations faster."
  },
  {
    title: "Change Mgmt. & Training",
    desc: "Leverage in-depth training and consultation management to ease the working course, helping users."
  }
];

export default function OurServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {/* Placeholder icon */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>
              
              <div className={styles.cardBody}>
                <p className={styles.cardDesc}>{service.desc}</p>
                <button className={styles.learnMoreBtn}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
