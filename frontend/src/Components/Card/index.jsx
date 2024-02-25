import { useEffect, useState } from "react";
import styles from "./Card.module.css";

const Card = ({
  name = "Band",
  gender = "Rock",
  color = "var(--light-green)",
  banner = null,
  deleteFunction = () => {},
}) => {
  const [localBanner, setLocalBanner] = useState();
  const [isMouseOn, setIsMouseOn] = useState(false);

  useEffect(() => {
    if (banner) {
      const url = banner.replace(/\\/g, "/");
      setLocalBanner(url);
    }
  }, []);


  return (
    <div
      onMouseEnter={() => {
        setIsMouseOn(true);
      }}
      onMouseLeave={() => {
        setIsMouseOn(false);
      }}
      style={{ backgroundColor: color }}
      className={styles.cardContainer}
    >
      {isMouseOn && (
        <div onClick={() => deleteFunction()} className={styles.icon}>
          <i className="bx bx-trash"></i>
        </div>
      )}

      <div>
        <h1>{name}</h1>
        <h2>{gender}</h2>
      </div>
      {banner && (
        <div>
          <img src={localBanner} alt={name} />
        </div>
      )}
    </div>
  );
};

export default Card;
