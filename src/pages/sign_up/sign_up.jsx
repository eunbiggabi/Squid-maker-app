import React from "react";
import styles from "./sign_up.module.css";

export default function SignUp() {
  const onChange = () => {};

  return (
    <form className={styles.form}>
      <div className={styles.form_container}>
        <h2 className={styles.title}>Sign Up</h2>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="email"
          onChange={onChange}
        />
        <input
          className={styles.input}
          type="passward"
          name="passward"
          placeholder="passward"
          onChange={onChange}
        />
        <input
          className={styles.input}
          type="passward_confirmation"
          name="passward_confirmation"
          placeholder="passward confirmation"
          onChange={onChange}
        />
        <button className={styles.btn}>Sign Up</button>
      </div>
      
    </form>
  );
}
