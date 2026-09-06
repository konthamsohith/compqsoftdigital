import Image from 'next/image';
import styles from './OurServicesGrid.module.css';

const services = [
  {
    title: "Management Consulting",
    icon: "/Management Consulting Icon 1.png",
    desc: "Leverage our Microsoft expertise to unlock greater business value through digital and AI-powered technologies. Our experts bring deep industry knowledge and Microsoft ecosystem expertise."
  },
  {
    title: "Power Platform",
    icon: "/Power Platform.png",
    desc: "Put innovation in everyone's hands. With low-code tools, anyone can build apps, automate tasks, and connect data across your systems—no coding required."
  },
  {
    title: "Cloud & Infrastructure",
    icon: "/Cloud Infrastructure 1.png",
    desc: "Cloud & Infrastructure services empower businesses with scalable, secure, and resilient IT environments. We modernize legacy systems and optimize performance through cloud migration, automation, and infrastructure management."
  },
  {
    title: "Dynamics 365 ERP",
    icon: "/Dynamics 365 ERP.png",
    desc: "Streamline operations and drive efficiency. Get real-time insights to help your business move faster and make smarter decisions."
  },
  {
    title: "AI and Machine Learning",
    icon: "/AI & Machine Learning 1.png",
    desc: "AI and Machine Learning services drive innovation through intelligent automation and predictive insights. We build custom models and integrate AI solutions that enhance efficiency, decision-making, and customer experiences."
  },
  {
    title: "Dynamics 365 CRM",
    icon: "/Dynamics CRM 1.png",
    desc: "Turn relationships into revenue. Use data-driven CRM to boost engagement, improve service, and grow customer loyalty."
  },
  {
    title: "Data & Analytics",
    icon: "/Data & Analytics 1.png",
    desc: "Data & Analytics services turn raw data into actionable insights for smarter decision-making. We help organizations harness the power of data through advanced analytics, visualization, and AI-driven intelligence."
  },
  {
    title: "Change Mgmt. & Training",
    icon: "/Change Management & Training 1.png",
    desc: "Leverage Microsoft Training across multiple workloads. Houston, TX training center opening soon."
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
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={72}
                  height={72}
                  className={styles.icon}
                />
              </div>
              
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>
              
              <div className={styles.cardBody}>
                <p className={styles.cardDesc}>{service.desc}</p>
                <a href="https://www.compqsoftdigital.com/contact" className={styles.learnMoreBtn}>Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


