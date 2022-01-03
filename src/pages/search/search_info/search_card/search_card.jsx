import styles from './search_card.module.css'

export default function SearchCard({cards, searchedCard}) {
  const DEFAULT_IMAGE = "/images/defualt.jpg"
  const {name, company, title, email, message, theme, fileName, fileURL} = searchedCard;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card}`}>
      <img className={styles.avatar} src={url} alt="profile" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  )
}