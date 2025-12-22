import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="container">
      <section className={styles.hero}>
        <h1 className={styles.title}>Murphy Tech Educational Society</h1>
        <p className={styles.subtitle}>[NUMBER] Alberta Society</p>
        <div className={styles.missionCard}>
          <h2>Our Mission</h2>
          <p className={styles.missionStatement}>
            "To publish, maintain, and promote free educational, recreational, and socially beneficial software applications and games for the general public, and to make such applications freely available without charge through digital distribution platforms."
          </p>
        </div>
        <div className={styles.cta}>
          <Link href="/contact" className={styles.button}>Get in Touch</Link>
          <Link href="/about" className={styles.secondaryButton}>Learn More About Us</Link>
        </div>
      </section>

      <section className={styles.overview}>
        <h2>What We Do</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Educational Software</h3>
            <p>We develop applications designed to enhance learning and provide educational value to users of all ages.</p>
          </div>
          <div className={styles.card}>
            <h3>Social Benefit</h3>
            <p>Our projects are focused on providing positive social impact and beneficial tools for the general public.</p>
          </div>
          <div className={styles.card}>
            <h3>Always Free</h3>
            <p>All our applications and games are provided completely free of charge, with no monetization, ads, or in-app purchases.</p>
          </div>
        </div>
      </section>
    </div>
  );
}