"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const slides = [
  { 
    image: '/slide1.png',
    heading: 'Leading AI Microsoft Frontier Transformation Partner',
    paragraph: 'Unifying Microsoft Cloud, Azure AI, and Copilot to unlock intelligent, future-ready enterpris',
    buttonText: 'Explore Our Services'
  },
  { 
    image: '/slide2.png',
    subheading: 'Live Webinar | Sep 24, 2026 | 10AM CST',
    heading: 'A Practical Roadmap for Modernizing Enterprise RPA & BPM',
    buttonText: 'Register Now'
  },
  { 
    image: '/slide3.png',
    subheading: 'On-demand Webinar',
    heading: 'How Agentic AI Agents Are Providing High Performance Customer Experiences',
    buttonText: 'Watch Recording'
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const nextSlide = () => {
    if (activeIndex >= extendedSlides.length - 1) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (activeIndex <= 0) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (activeIndex === 0) {
      setIsTransitioning(false);
      setActiveIndex(slides.length);
    } else if (activeIndex === extendedSlides.length - 1) {
      setIsTransitioning(false);
      setActiveIndex(1);
    }
  };

  const currentDotIndex = 
    activeIndex === 0 ? slides.length - 1 : 
    activeIndex === extendedSlides.length - 1 ? 0 : 
    activeIndex - 1;

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setActiveIndex(index + 1);
  };

  return (
    <section className={styles.hero}>
      <div 
        className={styles.sliderTrack} 
        style={{ 
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.content}>
              <div className={styles.textContent}>
                {slide.subheading && (
                  <p className={styles.subheading}>{slide.subheading}</p>
                )}
                <h1>{slide.heading}</h1>
                {slide.paragraph && (
                  <p className={styles.paragraph}>{slide.paragraph}</p>
                )}
                <button className={styles.ctaButton}>{slide.buttonText}</button>
              </div>
            </div>
            
            <div className={styles.imageContainer}>
              <Image 
                src={slide.image} 
                alt={`Hero Graphic ${index}`} 
                fill
                className={styles.graphicImage}
                style={{ 
                  objectPosition: 'right center',
                  objectFit: 'cover'
                }}
                priority={index === 1}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Carousel Controls */}
      <div className={styles.controlsLeft}>
        <button className={styles.navArrow} onClick={prevSlide} aria-label="Previous slide">
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="miter">
            <polyline points="15 19 8 12 15 5"></polyline>
          </svg>
        </button>
      </div>
      <div className={styles.controlsRight}>
        <button className={styles.navArrow} onClick={nextSlide} aria-label="Next slide">
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="miter">
            <polyline points="9 19 16 12 9 5"></polyline>
          </svg>
        </button>

      </div>
    </section>
  );
}
