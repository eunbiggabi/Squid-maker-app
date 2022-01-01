import styles from "./search.module.css";
import { useEffect, useState } from "react";
import SearchHeader from "./search_header/search_header";
import SearchInfo from "./search_info/search_info";
import axios from "axios";

export default function Search({ cards }) {
  const [searched, setSearched] = useState([]);
  const [searchedCard, setSearchedCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const url = `http://localhost:8000/cards/${searched}`;

  const onSearch = (card) => {
    const index = cards.findIndex((item) =>
      item.name.toLowerCase().includes(card.toLowerCase())
    );
    try {
      setSearched(cards[index].id);
    } catch (e) {
      setError(`"${card}" is not found`);
    }
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setSearchedCard(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return (
    <section className={styles.search}>
      <SearchHeader onSearch={onSearch} />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>} 
      {searched && (
        <SearchInfo
          cards={cards}
          onSearch={onSearch}
          searchedCard={searchedCard}
        />
      )}
    </section>
  );
}
