import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Who We Are</h2>
          <p className={styles.subtitle}>Engineering trust through quality and performance.</p>
          <div className={styles.textBlock}>
            <p>
              PEMCO Myanmar (PEMCO Engineering Services & General Contractor) is a leading provider of 
              mechanical and electrical engineering solutions in Yangon.
            </p>
            <p>
              Established with a vision to modernize infrastructure, we specialize in comprehensive 
              M&E installation, steel structure fabrication, and general construction. Our team 
              is dedicated to delivering projects that meet international standards of safety and efficiency.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.placeholderImage}>
            <span>PEMCO Team at Work</span>
          </div>
          {/* Note: Replace with actual image later */}
        </div>
      </div>
    </section>
  );
}
