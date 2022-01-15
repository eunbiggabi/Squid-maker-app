import styles from './home.module.css';

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.home_container}>
        <img src="/images/home.png" alt="Business Card" className={styles.home_image} date-testid="image"/>
        <div className={styles.info}>
          <h2 className={styles.home_title}>Make your own business cards online, in minutes</h2>
          <h3 className={styles.home_description}>squid maker is the design tool loved by non‑designers. Our easy‑to‑use tool allows you to change colors, upload a photo, and edit your card all within a few clicks.</h3>
          <a href="/maker"><button className={styles.home_maker}>Card Maker</button></a>
        </div>
      </div>
    </section>
  )
}






