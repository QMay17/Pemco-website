import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Expertise</h2>
          <p className="section-subtitle">Comprehensive Mechanical, Electrical, and Civil Engineering Solutions</p>
        </div>
        
        <div className={styles.categoryGrid}>
          {/* Mechanical & Electrical Column */}
          <div className={styles.categoryCard}>
            <h3 className={styles.categoryTitle}>Mechanical & Electrical Installation</h3>
            
            <h4 className={styles.subCategory}>Fabrication & Installation</h4>
            <ul className={styles.serviceList}>
              <li>Steel Structure Fabrication & Installation Work</li>
              <li>Fuel Tank Fabrication & Installation Work</li>
              <li>Machine Setting & Installation Work</li>
              <li>Generator Installation Work</li>
            </ul>

            <h4 className={styles.subCategory}>Piping & Plumbing</h4>
            <ul className={styles.serviceList}>
              <li>Mechanical MS Hydrant Piping System (Welded Type)</li>
              <li>Plumbing & Sanitary System Installation Work</li>
            </ul>

            <h4 className={styles.subCategory}>Electrical & Power</h4>
            <ul className={styles.serviceList}>
              <li>Electrical Power Distribution & Installation Work</li>
              <li>Power Plant MEP Work</li>
              <li>Electrical Earthing & Lightning Protection System</li>
              <li>Electrical Lighting Design & Installation Work</li>
              <li>Electrical Automation & Maintenance Work</li>
            </ul>

            <h4 className={styles.subCategory}>Systems & Communication</h4>
            <ul className={styles.serviceList}>
              <li>Air conditioning & Refrigeration Work</li>
              <li>Communication & Protection System Works (PABX, Network, PA System, MATV, CCTV, Fire Alarm)</li>
            </ul>
          </div>

          {/* Civil Work Column */}
          <div className={styles.categoryCard}>
            <h3 className={styles.categoryTitle}>Civil Work</h3>
            
            <h4 className={styles.subCategory}>Construction & Management</h4>
            <ul className={styles.serviceList}>
              <li>Factory & Building Construction</li>
              <li>Construction Management and Supervision</li>
              <li>Turn Key Civil Work Contracting</li>
              <li>Road Construction</li>
              <li>Building Renovation and Maintenance</li>
            </ul>

            <h4 className={styles.subCategory}>Design & Engineering</h4>
            <ul className={styles.serviceList}>
              <li>Design and Drawings</li>
              <li>Structural Design and Calculations</li>
              <li>Interior Design and Decoration</li>
              <li>Topographic and Construction Survey</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
