'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ServicesHero.module.css';

const actualImages = [
  '/ser1.png',
  '/5.png',
  '/6.png'
];
const images = [...actualImages, actualImages[0]];

export default function ServicesHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Pause the timer when hovered

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  useEffect(() => {
    if (currentIndex === actualImages.length) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 600); // matches CSS transition duration
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <section className={styles.section}>
      <div className={styles.backgroundContainer}>
        <div className={styles.imageOverlay} />
        <video 
          src="/6804123-uhd_4096_2160_25fps.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={styles.backgroundVideo} 
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Scalable Enterprise-Grade Solutions</h1>
      </div>

      <div className={styles.floatingBoxContainer}>
        <div 
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={styles.carouselInner}
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
            }}
          >
            {images.map((src, index) => (
              <div key={`${src}-${index}`} className={styles.carouselSlide}>
                <Image 
                  src={src} 
                  alt={`Slide ${index + 1}`} 
                  fill
                  className={styles.carouselImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
