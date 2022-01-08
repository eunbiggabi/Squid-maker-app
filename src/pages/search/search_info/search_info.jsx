import SearchCard from "./search_card/search_card";
import styles from "./search_info.module.css";

export default function SearchInfo({
  card,
  cards,
  onSearch,
  searched,
  searchedCard,
  searchTerm
}) {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        <SearchCard
          card={card}
          cards={cards}
          onSearch={onSearch}
          searched={searched}
          searchedCard={searchedCard}
          searchTerm={searchTerm}
        />
      </ul>
    </section>
  );
}
