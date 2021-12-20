import styles from './search.module.css'
import SearchHeader from './search_header/search_header';
import SearchInfo from './search_info/search_info';

export default function Search({cards, onSearch}) {

  return (
    <section className={styles.search}>
      <SearchHeader onSearch={onSearch}/>
      <SearchInfo cards={cards} onSearch={onSearch}/>
    </section>
  )
}