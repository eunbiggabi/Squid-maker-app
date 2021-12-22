import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/header/navbar/navbar";
import Home from "./pages/home/home";
import Maker from "./pages/maker/maker";
import Search from "./pages/search/search";
import styles from "./app.module.css";
import UseFetch from "./data/useFetch";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState([]);
  const url = "http://localhost:8000/cards";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setCards(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  const updateCard = (card) => {
    const updated = cards.map((item) => {
      if (card.id === item.id) {
        return card;
      }
      return item;
    });
    setCards(updated);
  };

  const deleteCard = (card) => {
    const updated = cards.filter((item) => item.id !== card.id);
    setCards(updated);
  };

  const onSearch = async (card) => {
    console.log(card);
    try {
      const response = await fetch(`http://localhost:8000/cards/${card}`);
      const data = await response.json();
      setSearched(data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    onSearch()
  }, [])

  // const fetchRandomFood = async () => {
  //   try {
  //     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${singleFood}`);
  //     let data = await response.json();
  //     setSingleFood(data.meals[0]);
  //   } catch (err) {
  //     setError(
  //       `Something went wrong, please visit other pages and come back later. ${err.message}`
  //     );
  //   }
  // };

  // useEffect(() => {
  //   fetchRandomFood();
  // }, [showSearchedFood]);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        {/* <button onClick={getCards}>check</button> */}
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/maker"
            element={
              <Maker
                cards={cards}
                addCard={addCard}
                updateCard={updateCard}
                deleteCard={deleteCard}
              />
            }
          />
          <Route
            path="/search"
            element={<Search cards={cards} onSearch={onSearch} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
