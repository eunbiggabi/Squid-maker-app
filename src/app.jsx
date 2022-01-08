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
  const [cards, setCards] = useState([ {
    "id": 1,
    "name": "Kyu",
    "company": "Google",
    "theme": "light",
    "title": "Software developer",
    "email": "kyu@email.com",
    "message": "go for it",
    "fileName": "kyu",
    "fileURL": "https://i.imgur.com/LIRHSsi.jpg"
  },
  {
    "id": 2,
    "name": "Chloe",
    "company": "Samsung",
    "theme": "dark",
    "title": "Admin",
    "email": "chloe@email.com",
    "message": "let's go",
    "fileName": "chloe",
    "fileURL": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    "id": 3,
    "name": "Mike",
    "company": "Coles",
    "theme": "colorful",
    "title": "Sales",
    "email": "mike@email.com",
    "message": "oh no~!",
    "fileName": "mike",
    "fileURL": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const url = "http://localhost:7000/cards";

  // useEffect(() => {
  //   getdata()
  //     .then((cards) => {
  //       console.log(cards);
  //       setCards(cards);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

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
      <StateContext.Provider value={{ store, userDispatch }}>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  );
}

export default App;
