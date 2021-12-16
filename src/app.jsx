import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/navbar/navbar";
import Home from "./pages/home/home";
import Maker from "./pages/maker/maker";
import Search from "./pages/search/search";
import styles from "./app.module.css";

function App() {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Kyu",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "kyu@email.com",
      message: "go for it",
      fileName: "kyu",
      fileURL: "kyu.png",
    },
    {
      id: "2",
      name: "Kyu2",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "kyu@email.com",
      message: "go for it",
      fileName: "kyu",
      fileURL: "kyu.png",
    },
    {
      id: "3",
      name: "Kyu3",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "kyu@email.com",
      message: "go for it",
      fileName: "kyu",
      fileURL: null,
    },
  ]);

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
          <Route
            path="/search"
            element={
              <Search
                cards={cards}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
