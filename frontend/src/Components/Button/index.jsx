import styles from "./Button.module.css";

const Button = ({ label, action, style }) => {
  return (
    <button
      className={styles.button}
      style={{ ...style }}
      onClick={() => action()}
    >
      {label}
    </button>
  );
};

export default Button;
