import Button from '../../../../components/button/button';
import ImageFileInput from '../../../../components/image_file_input/image_file_input';
import styles from './card_edit_form.module.css'

export default function CardEditForm({card}) {

  const { name, company, title, email, message, theme, fileName } = card;

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input className={styles.input} type="text" name="company" value={company} />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">light</option>
        <option value="light">dark</option>
        <option value="light">colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea className={styles.textarea} name="message" value={message}></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
}
