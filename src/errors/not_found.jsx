import { Link } from "react-router-dom";
import styles from "./not_found.module.css";

export default function NotFound() {
  return (
    <div className={styles.error}>
      <p> 404 Error</p>
      <Link to="/home">click here to go to homepage</Link>
    </div>
  );
}
