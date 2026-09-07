'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './AboutTabs.module.css';

const tabData = [
  {
    id: 'software',
    label: 'Software',
    title: 'Software Development',
    description: 'We build robust and scalable software solutions tailored to your unique business needs, leveraging the latest technologies and best practices.',
    imageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'agile',
    label: 'Agile Methodologies',
    title: 'Agile Delivery',
    description: 'Our agile approach ensures flexibility, rapid iteration, and continuous alignment with your business goals throughout the project lifecycle.',
    imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tdd',
    label: 'Test-Driven Development',
    title: 'Quality First',
    description: 'We employ test-driven development to guarantee high code quality, reduce bugs, and ensure the long-term maintainability of your applications.',
    imageSrc: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  }
];

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const activeContent = tabData.find(tab => tab.id === activeTab);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Tab Buttons */}
        <div className={styles.tabsContainer}>
          {tabData.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeContent && (
          <div className={styles.contentBox}>
            <div className={styles.imageSide}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={activeContent.imageSrc} 
                  alt={activeContent.title} 
                  fill
                  className={styles.image}
                />
                <div className={styles.playButtonOverlay}>
                  <div className={styles.playButton}>▶</div>
                </div>
              </div>
            </div>
            <div className={styles.textSide}>
              <h3 className={styles.contentTitle}>{activeContent.title}</h3>
              <p className={styles.contentDescription}>{activeContent.description}</p>
              <button className={styles.learnMoreLink}>Learn more →</button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
