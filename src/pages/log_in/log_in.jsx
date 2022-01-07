import React from "react";
import styles from "./log_in.module.css";

export default function LogIn() {
  const onChange = () => {};

  return (
    <form className={styles.form}>
      <div className={styles.form_container}>
        <h2 className={styles.title}>Log In</h2>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="email"
          onChange={onChange}
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="passward"
          onChange={onChange}
        />
        <button className={styles.btn}>Log In</button>
      </div>
      
    </form>
  );
}
