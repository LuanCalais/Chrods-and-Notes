import { useState } from "react";
import styles from "./Card.module.css";
import svgElement from "../../assets/img/Elements/CARD_BACKEROUND.svg";

const Card = ({
  name = "Band",
  gender = "Rock",
  color = "var(--light-green)",
  additionalContent = null,
  bandCreatedAt = null,
  deleteFunction = () => {},
  editFunction = () => {},
}) => {
  const [isMouseOn, setIsMouseOn] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsMouseOn(true)}
      onMouseLeave={() => setIsMouseOn(false)}
      style={{ backgroundColor: color }}
      className={styles.cardContainer}
    >
      <img
        src={svgElement}
        alt="background"
        className={styles.cardContainerBackground}
      />

      <div className={styles.decorativeCircle1} />
      <div className={styles.decorativeCircle2} />
      <div className={styles.decorativeLine1} />
      <div className={styles.decorativeShape2} />

      {isMouseOn && (
        <div className={styles.actionsContainer}>
          <div
            onClick={() => deleteFunction()}
            className={styles.deleteElement}
          >
            <i className="bx bx-trash" />
          </div>
          <div onClick={() => editFunction()} className={styles.editElement}>
            <i className="bx bx-edit-alt" />
          </div>
        </div>
      )}

      <div className={styles.contentWrapper}>
        <div className={styles.infoContainer}>
          <h1 className={styles.bandName}>{name}</h1>
          <h2 className={styles.bandGender}>{gender}</h2>
          {bandCreatedAt && (
            <h3 className={styles.bandYear}>{bandCreatedAt}</h3>
          )}
          {additionalContent && (
            <div className={styles.additionalContentWrapper}>
              {additionalContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
