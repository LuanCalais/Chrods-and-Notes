import { useEffect, useState } from "react";
import styles from "./SideMenu.module.css";
import logo from "./logoLight.svg";
import { useNavigate } from "react-router-dom";
import { UserModel } from "../../../Model";

const SideMenu = ({
  items = [
    {
      name: "Home",
      icon: "cabin",
      path: "/app",
    },
    {
      name: "Bands",
      icon: "diversity_3",
      path: "bands",
    },
    {
      name: "Musics",
      icon: "nightlife",
      path: "musics",
    },
  ],

  handleLogOut = () => {},
  loggedUser = () => {},
}) => {
  const [selectedItem, setSelectedItem] = useState("/app");
  const [currentUser, setCurrentUser] = useState(new UserModel());
  const navigate = useNavigate();

  useEffect(() => {
    const storageUserState = localStorage.getItem("userState");
    const userStateObject = JSON.parse(storageUserState);

    if (userStateObject) {
      setCurrentUser(userStateObject);
      loggedUser(userStateObject);
    }
  }, []);

  function handleNavigate(path = null) {
    if (!path || selectedItem === path) return;

    setSelectedItem(path);
    navigate(path);
  }

  function handleWithSelected(path = '/app') {
    return path === selectedItem;
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
                className={handleWithSelected(item.path) ? styles.active : ""}
                key={`${item.name}_${i}`}
                onClick={() => handleNavigate(item.path)}
              >
                <span className="material-icons">{item.icon}</span>
                {item.name}
              </li>
            );
          })}
        </ul>
      </span>
      {currentUser.id && (
        <span className={styles.bottomContent}>
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
      )}
    </div>
  );
};

export default SideMenu;
