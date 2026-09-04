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
        <Link href="#">Services</Link>
        <Link href="#">APAC</Link>
        <Link href="#">Industries</Link>
        <Link href="#">Insights</Link>
        <Link href="#">Careers</Link>
        <Link href="#">About</Link>
        <Link href="#">More</Link>
      </div>
    </nav>
  );
}
