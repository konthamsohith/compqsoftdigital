"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollIndicator.module.css";

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState(0);
  const [sections, setSections] = useState<HTMLElement[]>([]);

  useEffect(() => {
    // Find all section elements on the page after mount
    const sectionElements = Array.from(document.querySelectorAll("section"));
    setSections(sectionElements);

    const handleScroll = () => {
      let current = 0;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionElements.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          current = index;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    if (sections[index]) {
      const yOffset = -80; // Account for fixed navbar
      const y = sections[index].getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Use 9 dots as SSR fallback since we know there are 9 sections
  const dotCount = sections.length > 0 ? sections.length : 9;

  return (
    <div className={styles.scrollIndicator}>
      {Array.from({ length: dotCount }).map((_, index) => (
        <span
          key={index}
          className={`${styles.dot} ${activeSection === index ? styles.activeDot : ""}`}
          onClick={() => scrollToSection(index)}
          title={`Scroll to section ${index + 1}`}
        />
      ))}
    </div>
  );
}
