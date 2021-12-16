import { useRef, useState } from 'react'
import styles from './search.module.css'

export default function Search({cards}) {

  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    // onSearch(value)
    console.log(value)
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
    <div className={styles.search}>
      <div className={styles.logo_container}>
        <h2 className={styles.title}>Search by Name</h2>
      </div>
      <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress}/>
      <button className={styles.button} type="submit" onClick={onClick}>Search</button>
      <div className={styles.card_container}>
      </div>
    </div>
  )
}

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}