import { useRef } from 'react';
import styles from './image_file_input.module.css'

export default function ImageFileInput({name}) {

  const inputRef = useRef();

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className={styles.container}>
      <input ref={inputRef} className={styles.input} type="file" accept="image/*" name="file" />
      <button className={styles.button} onClick={onButtonClick}>{name || 'No File'}</button>
    </div>
  )
}
