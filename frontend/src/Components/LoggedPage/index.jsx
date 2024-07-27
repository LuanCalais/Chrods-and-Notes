import styles from "./LoggedPage.module.css";
import SideMenu from "../Common/SideMenu";

import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";

import { Outlet } from "react-router-dom";

const LoggedPage = () => {
  const { validateLogin } = useContext(UserContext);

  useEffect(() => {
    validateLogin();
  }, [validateLogin]);

  const { setContextUser } = useContext(UserContext);

  const logUser = (user = {}) => {
    setContextUser(user);
  };

  return (
    <div className={styles.componentesContainer}>
      <SideMenu loggedUser={logUser} />

      <Outlet />
    </div>
  );
};

export default LoggedPage;
