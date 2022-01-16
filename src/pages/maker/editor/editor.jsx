import styles from "./editor.module.css";
import CardAddForm from "./card_add_form/card_add_form";
import CardEditForm from "./card_edit_form/card_edit_form";

export default function Editor({ cards, addCard, updateCard, deleteCard }) {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (
        <CardEditForm
          key={card.id}
          card={card}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm onAdd={addCard} />
    </section>
  );
}
