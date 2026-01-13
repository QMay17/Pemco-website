'use client';

import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoContainer}>
            <div className={styles.logoText}>
              <span className={styles.pemco}>PEMCO</span>
              <span className={styles.tagline}>Engineering Services & General Contractor</span>
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
