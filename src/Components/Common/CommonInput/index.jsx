import styles from "./CommonInput.module.css";
import Form from "react-bootstrap/Form";

const CommonInput = ({ placeholder, handleValue }) => {
  return (
    <Form.Control
      className={styles.commonInput}
      onChange={(e) => handleValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default CommonInput;
