import styles from "./CommonInput.module.css";
import Form from "react-bootstrap/Form";

const CommonInput = ({ placeholder, handleValue, type = "text" }) => {
  return (
    <Form.Control
      className={styles.commonInput}
      onChange={(e) => handleValue(e.target.value)}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default CommonInput;
