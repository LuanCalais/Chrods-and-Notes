import { useEffect, useState } from "react";
import styles from "./Card.module.css";

const Card = ({
  name = "Band",
  gender = "Rock",
  color = "var(--light-green)",
  banner = null,
}) => {
  const [localBanner, setLocalBanner] = useState();

  useEffect(() => {
    if (banner) {
      const url = banner.replace(/\\/g, "/");
      setLocalBanner(url);
    }
  }, []);

  return (
    <div style={{ backgroundColor: color }} className={styles.cardContainer}>
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
