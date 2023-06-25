import styles from "./CommonModal.module.css";
import Modal from "react-bootstrap/Modal";

const CommonModal = ({ title = "Modal Title", show = true, children }) => {
  return (
    <Modal className={styles.modalContent} show={show}>
      <Modal.Header className={styles.modalHeader}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>{children}</Modal.Body>
    </Modal>
  );
};

export default CommonModal;
