// import React, { useState } from 'react'
// import { useGlobalState } from '../utils/stateContext'
// import { signUp } from '../services/authServices'
import styles from "./sign_up.module.css";

export default function SignUp() {
  const onChange = () => {};

  return (
    <form className={styles.form}>
      <div className={styles.form_container}>
        <h2 className={styles.title}>Sign Up</h2>
        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder="username"
          onChange={onChange}
        />
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
        <input
          className={styles.input}
          type="password"
          name="password_confirmation"
          placeholder="password confirmation"
          onChange={onChange}
        />
        <button className={styles.btn}>Sign Up</button>
      </div>
    </form>
  );
}
