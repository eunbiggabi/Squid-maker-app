import styles from './search_header.module.css'
import { useRef } from 'react'

export default function SearchHeader({onSearch}) {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value)
  }

  const onClick = () => {
    handleSearch();
  }

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <header className={styles.search}>
      <div className={styles.logo_container}>
        <h2 className={styles.title}>Search by Name</h2>
      </div>
      <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress} data-testid="searchKeyPress"/>
      <button className={styles.button} type="submit" onClick={onClick} data-testid="searchButton">Search</button>
    </header>
  )
}
