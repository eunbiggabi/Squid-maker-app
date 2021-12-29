import styles from "./search.module.css";
import { useEffect, useState } from "react";
import SearchHeader from "./search_header/search_header";
import SearchInfo from "./search_info/search_info";
import axios from "axios";

export default function Search({ cards }) {
  const [searched, setSearched] = useState([]);
  const [searchedCard, setSearchedCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const url = `http://localhost:8000/cards/${searched}`;

  const onSearch = (card) => {
    console.log(card);
    const index = cards.findIndex((item) =>
      item.name.toLowerCase().includes(card.toLowerCase())
    );
    setSearched(cards[index].id);
    // const searched = cards[index].id;
    // console.log(searched);
    // return searched;
  };

  console.log(url);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setSearchedCard(response.data);
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
      <SearchInfo cards={cards} onSearch={onSearch} searchedCard={searchedCard} />
    </section>
  );
}
