import styles from "./LoggedPage.module.css";
import SideMenu from "../Common/SideMenu";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { UserModel } from "../../Model";

import { Outlet } from "react-router-dom";

const LoggedPage = () => {
  const { validateLogin } = useContext(UserContext);

  useEffect(() => {
    validateLogin();
  }, [validateLogin]);

  const [loggedUser, setLoggedUser] = useState(new UserModel());
  const { setContextUser } = useContext(UserContext);

  const logUser = (user = {}) => {
    setLoggedUser(user);
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
