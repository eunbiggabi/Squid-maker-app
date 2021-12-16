
import styles from './search.module.css'

export default function Search() {
  return (
    <div className={styles.search}>
      <div className={styles.logo_container}>
        <h2 className={styles.title}>Search by Name</h2>
      </div>
      <input className={styles.input} type="search" placeholder="Search..." />
      <button className={styles.button} type="submit">Search</button>
    </div>
  )
}
