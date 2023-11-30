import { useEffect, useState } from "react";
import styles from "./SideMenu.module.css";
import logo from "./logoLight.svg";
import { UserModel } from "../../../Model";

const SideMenu = ({
  items = [
    { name: "Home", icon: "cabin", action: () => {} },
    { name: "Bands", icon: "diversity_3", action: () => {} },
    { name: "Musics", icon: "nightlife", action: () => {} },
  ],
  handleLogOut = () => {},
  setContent = () => {},
}) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [currentUser, setCurrentUser] = useState(new UserModel());

  useEffect(() => {
    const storageUserState = localStorage.getItem("userState");
    const userStateObject = JSON.parse(storageUserState);
    setCurrentUser(userStateObject);
  }, []);

  function handleSelected(i) {
    setSelectedItem(i);
    setContent(i);
  }

  return (
    <div className={styles.sidebarContainer}>
      <span>
        <div className={styles.logoContent}>
          <img src={logo} alt="logo" />
          <h5>
            <span>Chrods</span> and Notes
          </h5>
        </div>

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
      </span>

      <span>
        <div className={styles.personContent}>
          <span className="material-icons">account_circle</span>
          <div className={styles.personInformation}>
            <h3>{currentUser.name}</h3>
            <h5>{currentUser.email}</h5>
          </div>
        </div>
        <div className={styles.logOut} onClick={handleLogOut}>
          <span className="material-icons">directions_run</span> Log Out
        </div>
      </span>
    </div>
  );
};

export default SideMenu;
