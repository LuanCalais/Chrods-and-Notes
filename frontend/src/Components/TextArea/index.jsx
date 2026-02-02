import styles from "./TextArea.module.css";

const TextArea = ({
  name = "text-area",
  id = Math.random(),
  placeholder = "Placeholder",
  width = "auto",
  currentValue = "",
  handleValue,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      value={currentValue}
      className={styles.textArea}
      onChange={(e) => {
        handleValue(e.target.value);
      }}
      name={name}
      id={id}
      style={{
        width: width,
      }}
    />
  );
};

export default TextArea;
