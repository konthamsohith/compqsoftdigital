'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './AboutTabs.module.css';

const tabData = [
  {
    id: 'partnership',
    label: 'Our Partnership',
    title: 'Our Partnership',
    description: 'We partner with leading technology providers to help our clients solve their challenges and accelerate business transformation.',
    videoSrc: 'https://video.wixstatic.com/video/fbc95c_ed94297d76df48bcb30c3efe4477b0b5/360p/mp4/file.mp4',
    partners: [
      { name: 'Microsoft', logoSrc: '/Microsoft-Logo.png' },
      { name: 'Databricks', logoSrc: '/databricks-logo.png' }
    ]
  },
  {
    id: 'awards',
    label: 'Awards and Certifications',
    title: 'Awards and Certifications',
    description: 'Content coming soon.',
    videoSrc: 'https://video.wixstatic.com/video/fbc95c_be6161954b9749d9b08dacf556ff5edc/360p/mp4/file.mp4'
  },
  {
    id: 'press',
    label: 'Press Release & Upcoming Updates',
    comingSoon: true
  }
];

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeContent = tabData.find(tab => tab.id === activeTab);

  function handleTabChange(id: string) {
    setActiveTab(id);
    setIsPlaying(false);
  }

  function handlePlay() {
    setIsPlaying(true);
    videoRef.current?.play();
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Tab Buttons */}
        <div className={styles.tabsContainer}>
          {tabData.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeContent && (
          activeContent.comingSoon ? (
            <div className={styles.comingSoonBox}>
              <p className={styles.comingSoonText}>Coming Soon....</p>
            </div>
          ) : (
            <div className={styles.contentBox}>
              <div className={styles.imageSide}>
                <div className={styles.imageWrapper}>
                  <video
                    key={activeContent.id}
                    ref={videoRef}
                    src={activeContent.videoSrc}
                    loop
                    muted
                    playsInline
                    controls={isPlaying}
                    className={styles.video}
                  />
                  {!isPlaying && (
                    <button
                      type="button"
                      className={styles.playButtonOverlay}
                      onClick={handlePlay}
                      aria-label="Play video"
                    >
                      <span className={styles.playButton}>▶</span>
                    </button>
                  )}
                </div>
              </div>
              <div className={styles.textSide}>
                <h3 className={styles.contentTitle}>{activeContent.title}</h3>
                <p className={styles.contentDescription}>{activeContent.description}</p>
                {activeContent.partners && (
                  <div className={styles.partnersRow}>
                    {activeContent.partners.map((partner) => (
                      <div key={partner.name} className={styles.partnerLogoWrapper}>
                        <Image
                          src={partner.logoSrc}
                          alt={partner.name}
                          width={140}
                          height={48}
                          className={styles.partnerLogo}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        )}

      </div>
    </section>
  );
}
