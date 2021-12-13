import styles from './home.module.css';

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.home_container}>
        <img src="/images/home.png" alt="Card Image" className={styles.home_image}/>
        <h1 className={styles.home_title}>Hello, This is a Business Card Maker</h1>
        <h3 className={styles.home_description}></h3>
        <a href="/maker"><button className={styles.home_maker}>Card Maker</button></a>
      </div>
    </section>
  )
}

