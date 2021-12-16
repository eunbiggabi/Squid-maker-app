import styles from './navbar.module.css';

export default function Navber() {
  return (
    <header className={styles.header}>
      <div className={styles.navbar_logo_container}>
        <img className={styles.logo} src="/images/squid.png" alt="logo" />
        <a href="/home">Squid Maker</a>
      </div>
      <ul className={styles.navbar_menu}>
        <li className={styles.menu}><a href="/home">Home</a></li>
        <li className={styles.menu}><a href="/maker">Maker</a></li>
        <li className={styles.menu}><a href="/search">Search</a></li>
        <li className={styles.menu}><a href="/log_in">LogIn</a></li>
        <li className={styles.menu}><a href="/sign_up">SignUp</a></li>
      </ul>
    </header>
  );
};
