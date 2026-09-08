'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

type DropdownKey = 'industries' | 'insights' | 'careers' | 'about' | 'more';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (key: DropdownKey) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const renderToggle = (key: DropdownKey, label: string) => (
    <button
      type="button"
      className={styles.dropdownToggle}
      aria-label={`Toggle ${label} submenu`}
      aria-expanded={openDropdown === key}
      onClick={() => toggleDropdown(key)}
    >
      <span className={styles.caret} />
    </button>
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/Group 188.png"
          alt="COMPQSOFT Logo"
          width={190}
          height={48}
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      <button
        type="button"
        className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ''}`}
        onClick={closeAll}
        aria-hidden="true"
      />
      <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
        <Link href="/services" onClick={closeAll}>Services</Link>
        <Link href="https://apac.compqsoftdigital.com/" target="_blank" rel="noopener noreferrer" onClick={closeAll}>APAC</Link>
        <div className={`${styles.navItemWithDropdown} ${openDropdown === 'industries' ? styles.dropdownOpen : ''}`}>
          <Link href="/industries" onClick={closeAll}>Industries</Link>
          {renderToggle('industries', 'Industries')}
          <div className={styles.dropdown}>
            <Link href="/industries#healthcare" onClick={closeAll}>Healthcare</Link>
            <Link href="/industries#financial-services" onClick={closeAll}>Financial Services</Link>
            <Link href="/industries#oil-and-gas" onClick={closeAll}>Oil and Gas</Link>
            <Link href="/industries#retail" onClick={closeAll}>Retail</Link>
            <Link href="/industries#cpg-distribution" onClick={closeAll}>CPG &amp; Distribution</Link>
            <Link href="/industries#manufacturing" onClick={closeAll}>Manufacturing</Link>
            <Link href="/industries#logistics-and-transportation" onClick={closeAll}>Logistics and Transportation</Link>
          </div>
        </div>
        <div className={`${styles.navItemWithDropdown} ${openDropdown === 'insights' ? styles.dropdownOpen : ''}`}>
          <button type="button" className={styles.navTextTrigger} onClick={() => toggleDropdown('insights')}>Insights</button>
          {renderToggle('insights', 'Insights')}
          <div className={styles.dropdown}>
            <Link href="/blog" onClick={closeAll}>Blog</Link>
            <Link href="/case-studies" onClick={closeAll}>Case Studies</Link>
            <Link href="/events" onClick={closeAll}>Event</Link>
            <Link href="/webinars" onClick={closeAll}>Webinars</Link>
          </div>
        </div>
        <div className={`${styles.navItemWithDropdown} ${openDropdown === 'careers' ? styles.dropdownOpen : ''}`}>
          <Link href="/careers" onClick={closeAll}>Careers</Link>
          {renderToggle('careers', 'Careers')}
          <div className={styles.dropdown}>
            <Link href="/careers" onClick={closeAll}>Life at CQS</Link>
            <Link href="/careers#openings" onClick={closeAll}>Open Positions</Link>
          </div>
        </div>
        <div className={`${styles.navItemWithDropdown} ${openDropdown === 'about' ? styles.dropdownOpen : ''}`}>
          <Link href="/about" onClick={closeAll}>About</Link>
          {renderToggle('about', 'About')}
          <div className={styles.dropdown}>
            <Link href="/news" onClick={closeAll}>News</Link>
          </div>
        </div>
        <div className={`${styles.navItemWithDropdown} ${openDropdown === 'more' ? styles.dropdownOpen : ''}`}>
          <button type="button" className={styles.navTextTrigger} onClick={() => toggleDropdown('more')}>More</button>
          {renderToggle('more', 'More')}
          <div className={styles.dropdown}>
            <Link href="/contact" onClick={closeAll}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
