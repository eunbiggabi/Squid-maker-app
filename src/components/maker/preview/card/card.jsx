import React from 'react'
import styles from './card.module.css'

export default function Card({card}) {
  return (
    <li className={styles.card}>
      <h1>{card.id}</h1>
    </li>
  )
}
