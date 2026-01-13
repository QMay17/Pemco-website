import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.column} style={{ flex: '2', textAlign: 'center' }}>
          <p className={styles.address}>
            <strong>ADDRESS:</strong> #1404, 1405, 1406, YUZANA TOWER, SHWE GON TAING JUNCTION, BAHAN TOWNSHIP, YANGON, MYANMAR. 11201
          </p>
          <p className={styles.contact}>
            <strong>CONTACT US:</strong> +95-1-9559751, +95-1-9559678, +95-9-454241563
          </p>
        </div>
      </div>
    </footer>
  );
}
