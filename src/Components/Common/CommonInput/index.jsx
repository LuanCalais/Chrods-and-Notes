import styles from "./CommonInput.module.css";
import Form from "react-bootstrap/Form";

const CommonInput = ({ placeholder }) => {
  return (
    <Form.Control className={styles.commonInput} placeholder={placeholder} />
  );
};

export default CommonInput;
