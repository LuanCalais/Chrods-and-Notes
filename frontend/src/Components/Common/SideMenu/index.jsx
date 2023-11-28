import styles from "./SideMenu.module.css";

const SideMenu = ({
  items = [
    { name: "Home", icon: "", isActive: true, action: () => {} },
    { name: "Bands", icon: "", isActive: false, action: () => {} },
    { name: "Musics", icon: "", isActive: false, action: () => {} },
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
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
