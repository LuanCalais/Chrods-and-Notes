import styles from "./EmptyComponent.module.css";

const EmptyComponent = ({ message = "Cannot find any data :(" }) => {
  return (
    <div className={styles.emptyComponentContainer}>
      <h1>{message}</h1>
    </div>
  );
};

export default EmptyComponent;
