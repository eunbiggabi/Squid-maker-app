import { useState } from "react";
import Editor from "./editor/editor";
import Preview from "./preview/preview";
import styles from "./maker.module.css";

export default function Maker({cards, addCard, updateCard, deleteCard}) {
  
  return (
    <section className={styles.maker}>
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={addCard}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
    </section>
  );
}
