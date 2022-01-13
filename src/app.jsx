import { useState, useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "./components/header/navbar/navbar";
import Home from "./pages/home/home";
import Maker from "./pages/maker/maker";
import Search from "./pages/search/search";
import styles from "./app.module.css";
import SignUp from "./pages/sign_up/sign_up";
import LogIn from "./pages/log_in/log_in";
import { getdata } from "./services/cardsServices";
import NotFound from "./errors/not_found";
import { StateContext } from "./utils/stateContext";
import { userReducer } from "./utils/reducer";

function App() {
  const initialstate = {
    loggedInUser: sessionStorage.getItem("username") || null,
    auth: { token: sessionStorage.getItem("token") || null },
  };

  const [store, userDispatch] = useReducer(userReducer, initialstate);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const url = "https://kyusquid-api.herokuapp.com";

  useEffect(() => {
    getdata()
      .then((cards) => {
        console.log(cards);
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       setCards(response.data);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [url]);

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
      <StateContext.Provider value={{ store, userDispatch }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  );
}

export default App;
