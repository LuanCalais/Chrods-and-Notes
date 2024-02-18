import styles from "./Card.module.css";

const Card = ({
  name = "Band",
  gender = "Rock",
  backgroundColor = "var(--light-green)",
}) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className={styles.cardContainer}
    >
      <h1>Component works</h1>
    </div>
  );
};

export default Card;
