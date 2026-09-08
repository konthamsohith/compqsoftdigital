import Image from 'next/image';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <Image 
              src="https://static.wixstatic.com/media/11062b_b3b44769b7b74bf3a7c3e620b32e71e5~mv2.jpg/v1/fill/w_1512,h_1772,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_b3b44769b7b74bf3a7c3e620b32e71e5~mv2.jpg" 
              alt="Why Us" 
              fill
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.contentSide}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Why Us?</h2>
            
            <p className={styles.paragraph}>
              <strong>Deep Microsoft Expertise</strong> - As a trusted Microsoft partner with over 25 years of experience, CompQsoft Digital brings deep technical knowledge and industry-experience across the Microsoft ecosystem. From Azure and Dynamics 365 to Power Platform and Copilot, we deliver tailored solutions that help businesses maximize the value of their Microsoft investments.
            </p>
            
            <p className={styles.paragraph}>
              <strong>Customer – Employee – Centric Focus</strong> - Our clients and team members are at the heart of everything we do. We take the time to understand your business goals, challenges, and vision—crafting solutions that align with your needs and deliver lasting impact. Our collaborative approach ensures transparency, agility, and a strong partnership throughout your digital transformation journey.
            </p>
            
            <p className={styles.paragraph}>
              <strong>High-Performance Delivered</strong> - We pride ourselves on delivering results that matter. With a global delivery model, certified processes, and a relentless focus on quality, CompQsoft Digital consistently drives operational efficiency, innovation, and business growth for our clients. We don’t just meet expectations—we exceed them.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
