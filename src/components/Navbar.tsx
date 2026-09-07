import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
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
      <div className={styles.navLinks}>
        <Link href="/services">Services</Link>
        <Link href="https://apac.compqsoftdigital.com/" target="_blank" rel="noopener noreferrer">APAC</Link>
        <div className={styles.navItemWithDropdown}>
          <Link href="/industries">Industries</Link>
          <div className={styles.dropdown}>
            <Link href="/industries#healthcare">Healthcare</Link>
            <Link href="/industries#financial-services">Financial Services</Link>
            <Link href="/industries#oil-and-gas">Oil and Gas</Link>
            <Link href="/industries#retail">Retail</Link>
            <Link href="/industries#cpg-distribution">CPG &amp; Distribution</Link>
            <Link href="/industries#manufacturing">Manufacturing</Link>
            <Link href="/industries#logistics-and-transportation">Logistics and Transportation</Link>
          </div>
        </div>
        <div className={styles.navItemWithDropdown}>
          <Link href="#">Insights</Link>
          <div className={styles.dropdown}>
            <Link href="/blog">Blog</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/events">Event</Link>
            <Link href="/webinars">Webinars</Link>
          </div>
        </div>
        <div className={styles.navItemWithDropdown}>
          <Link href="/careers">Careers</Link>
          <div className={styles.dropdown}>
            <Link href="/careers">Life at CQS</Link>
            <Link href="/careers#openings">Open Positions</Link>
          </div>
        </div>
        <div className={styles.navItemWithDropdown}>
          <Link href="/about">About</Link>
          <div className={styles.dropdown}>
            <Link href="/news">News</Link>
          </div>
        </div>
        <div className={styles.navItemWithDropdown}>
          <Link href="#">More</Link>
          <div className={styles.dropdown}>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
