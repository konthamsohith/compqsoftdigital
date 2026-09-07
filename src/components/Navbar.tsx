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
            <Link href="#">Blog</Link>
            <Link href="#">Case Studies</Link>
            <Link href="#">Event</Link>
            <Link href="#">Webinars</Link>
          </div>
        </div>
        <div className={styles.navItemWithDropdown}>
          <Link href="#">Careers</Link>
          <div className={styles.dropdown}>
            <Link href="#">Life at CQS</Link>
            <Link href="#">Open Positions</Link>
          </div>
        </div>
        <div className={styles.navItemWithDropdown}>
          <Link href="#">About</Link>
          <div className={styles.dropdown}>
            <Link href="#">News</Link>
          </div>
        </div>
        <div className={styles.navItemWithDropdown}>
          <Link href="#">More</Link>
          <div className={styles.dropdown}>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
