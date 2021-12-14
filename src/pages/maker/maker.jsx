import { useState } from "react"
import Editor from "./editor/editor"
import Preview from "./preview/preview"
import styles from "./maker.module.css"

export default function Maker() {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Kyu",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "kyu@email.com",
      message: "go for it",
      fileName: "kyu",
      fileURL: "kyu.png"
    },
    {
      id: "2",
      name: "Kyu2",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "kyu@email.com",
      message: "go for it",
      fileName: "kyu",
      fileURL: "kyu.png"
    },
    {
      id: "3",
      name: "Kyu3",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "kyu@email.com",
      message: "go for it",
      fileName: "kyu",
      fileURL: null
    }
  ])

  const addCard = card => {
    const updated = [...cards, card]
    setCards(updated);
  }

  return (
    <section className={styles.maker}>
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard}/>
        <Preview cards={cards}/>
      </div>
    </section>
  )
}
