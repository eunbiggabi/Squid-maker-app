import SearchCard from './search_card/search_card'
import styles from './search_info.module.css'

export default function SearchInfo({cards, onSearch}) {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {cards.map(card => (
          <SearchCard key={card.id} card={card} onSearch={onSearch}/>
        ))} 
      </ul>     
    </section>
  )
}
