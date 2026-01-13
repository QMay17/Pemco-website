import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>
          Engineering Excellence <br />
          <span className={styles.subtitle}>Building the Future of Myanmar</span>
        </h1>
        <p className={styles.description}>
          Specializing in M&E Installation, Construction, and Engineering Services.
          Delivering quality solutions with precision and integrity.
        </p>
        <div className={styles.actions}>
          <a href="#services" className="btn btn-primary">Our Services</a>
          <a href="#contact" className="btn btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
