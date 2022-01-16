import styles from "./search.module.css";
import { useState } from "react";
import SearchHeader from "./search_header/search_header";
import SearchInfo from "./search_info/search_info";

export default function Search({ cards }) {
  const [searched, setSearched] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  const onSearch = (card) => {
    console.log(card);
    const index = cards.findIndex((item) =>
      item.name.toLowerCase().includes(card.toLowerCase())
    );

    const update = cards.filter((item) => {
      if (card === "") {
        return "";
      } else if (
        item.name.toLowerCase().includes(card.toLowerCase())
      ) {
        console.log(item);
        return item;
      }
    });
    setSearchTerm(update);
    try {
      setSearched(cards[index].id);
    } catch (e) {
      setError(`"${card}" is not found`);
    }
  };

  return (
    <section className={styles.search}>
      <SearchHeader onSearch={onSearch} />
      <p className={styles.notice}>Only "Kyu", "Chloe, "Mike" are searchable</p>
      {error && <div className={styles.error}>{error}</div>}
      {searched &&
        searchTerm.map((card) => <SearchInfo key={card.id} card={card} />)}
    </section>
  );
}
