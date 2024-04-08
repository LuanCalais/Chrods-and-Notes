import styles from "./CommonInput.module.css";
import Form from "react-bootstrap/Form";

const CommonInput = ({
  currentValue = "",
  placeholder,
  handleValue,
  type = "text",
}) => {
  return (
    <Form.Control
      className={styles.commonInput}
      onChange={(e) => {
        handleValue(e.target.value);
      }}
      placeholder={currentValue ? currentValue : placeholder}
      type={type}
    />
  );
};

export default CommonInput;
