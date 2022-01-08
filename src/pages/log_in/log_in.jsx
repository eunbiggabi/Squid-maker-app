import { useGlobalState } from "../../utils/stateContext";
import { logIn } from "../../services/authServices";
import { useState } from "react";
import styles from "./log_in.module.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function LogIn({ history }) {
  const { store, userDispatch } = useGlobalState();
  const { loggedInUser } = store;
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log(history);
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    logIn(formData)
      .then((user) => {
        if (user.error) {
          setError(user.error);
        } else {
          sessionStorage.setItem("username", user.username);
          sessionStorage.setItem("token", user.jwt);
          userDispatch({
            type: "setLoggedInUser",
            data: user.username,
          });
          userDispatch({
            type: "setToken",
            data: user.jwt,
          });
          if (!loggedInUser) {
            return navigate("/maker");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <form className={styles.form} onClick={handleSubmit}>
      <div className={styles.form_container}>
        <h2 className={styles.title}>Log In</h2>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="email"
          onChange={handleFormData}
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          id="password"
          value={formData.password}
          placeholder="passward"
          onChange={handleFormData}
        />
        <button className={styles.btn}>Log In</button>
      </div>
    </form>
  );
}
