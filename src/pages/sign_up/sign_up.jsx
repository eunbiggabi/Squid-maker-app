import React, { useState } from "react";
import { useGlobalState } from "../../utils/stateContext";
import { signUp } from "../../services/authServices";
import styles from "./sign_up.module.css";

export default function SignUp({ history }) {
  const { store, userDispatch } = useGlobalState();
  const [error, setError] = useState("");

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
    signUp(formData)
      .then(({ username, jwt }) => {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("token", jwt);
        userDispatch({
          type: "setLoggedInUser",
          data: username,
        });
        userDispatch({
          type: "setToken",
          data: jwt,
        });
        return history;
      })
      .catch((error) => {
        setError("user exists or password mismatch");
      });
  }

  return (
    <>
      {error && <p> {error} </p>}
      <form className={styles.form} onClick={handleSubmit}>
        <div className={styles.form_container}>
          <h2 className={styles.title}>Sign Up</h2>
          <input
            className={styles.input}
            type="text"
            name="username"
            id="username"
            value={formData.username}
            placeholder="username"
            onChange={handleFormData}
          />
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
          <input
            className={styles.input}
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            value={formData.password_confirmation}
            placeholder="password confirmation"
            onChange={handleFormData}
          />
          <button className={styles.btn}>Sign Up</button>
        </div>
      </form>
    </>
  );
}
