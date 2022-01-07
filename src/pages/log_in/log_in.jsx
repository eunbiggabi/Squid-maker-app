import { useGlobalState } from "../../utils/stateContext";
import { logIn } from "../../services/authServices";
import { useState } from "react";
import styles from "./log_in.module.css";

export default function LogIn() {
  const { dispatch } = useGlobalState();

  console.log();
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
      .then(({ username, jwt }) => {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("token", jwt);
        dispatch({
          type: "setLoggedInUser",
          data: username,
        });
        dispatch({
          type: "setToken",
          data: jwt,
        });
      })
      .catch((error) => console.log(error));

    return;
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
