import styles from "./SideMenu.module.css";

const SideMenu = ({
  items = [
    { name: "Home", icon: "cabin", isActive: true, action: () => {} },
    { name: "Bands", icon: "diversity_3", isActive: false, action: () => {} },
    { name: "Musics", icon: "nightlife", isActive: false, action: () => {} },
  ],
}) => {
  return (
    <div className={styles.sidebarContainer}>
      <ul className={styles.sidebaritemsMenu}>
        {items.map((item, i) => {
          return (
            <li
              className={item.isActive ? styles.active : ""}
              key={`${item.name}_${i}`}
            >
              <span class="material-icons">{item.icon}</span>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
