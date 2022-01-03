import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/header/navbar/navbar";
import Home from "./pages/home/home";
import Maker from "./pages/maker/maker";
import Search from "./pages/search/search";
import styles from "./app.module.css";
import SignUp from "./pages/sign_up/sign_up";
import LogIn from "./pages/log_in/log_in";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const url = "http://localhost:8000/cards";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
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

  return (
    <div className={styles.app}>
      <BrowserRouter>
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
          <Route path="/search" element={<Search cards={cards} />} />
          <Route path="/log_in" element={<LogIn />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
