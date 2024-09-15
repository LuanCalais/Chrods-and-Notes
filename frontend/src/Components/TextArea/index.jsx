import styles from "./TextArea.module.css";

const TextArea = ({
  name = "text-area",
  id = Math.random(),
  placeholder = "Placeholder",
  width = "auto",
}) => {
  return (
    <textarea
      placeholder={placeholder}
      className={styles.textArea}
      name={name}
      id={id}
      style={{
        width: width,
      }}
    />
  );
};

export default TextArea;
