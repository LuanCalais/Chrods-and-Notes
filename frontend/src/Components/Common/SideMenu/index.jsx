import { useState } from "react";
import styles from "./SideMenu.module.css";

const SideMenu = ({
  items = [
    { name: "Home", icon: "cabin", action: () => {} },
    { name: "Bands", icon: "diversity_3", action: () => {} },
    { name: "Musics", icon: "nightlife", action: () => {} },
  ],
}) => {
  const [selectedItem, setSelectedItem] = useState(0);

  function handleSelected(i) {
    setSelectedItem(i);
  }

  return (
    <div className={styles.sidebarContainer}>
      <ul className={styles.sidebaritemsMenu}>
        {items.map((item, i) => {
          return (
            <li
              className={selectedItem === i ? styles.active : ""}
              key={`${item.name}_${i}`}
              onClick={() => handleSelected(i)}
            >
              <span className="material-icons">{item.icon}</span>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
