import "./Initial.module.css";
import Header from "../../Components/Header";
import CenterContent from "../../Components/CenterContent";
import { useState, useEffect } from "react";

const Initial = () => {
  const [userState] = useState();
  const [isUserLogged, setIsUserLogged] = useState(false);

  useEffect(() => {
    const key = "userState";
    const exists = localStorage.getItem(key) !== null;

    if (!exists) return;

    const storageUserState = localStorage.getItem(key);

    if (!storageUserState || (userState && !userState.isLogged)) {
      localStorage.removeItem("userState");
      setIsUserLogged(false);
      return;
    }

    const userStateObject = JSON.parse(storageUserState);
    setIsUserLogged(userStateObject.isLogged);
  }, [userState]);

  return (
    <main>
      <header style={{ display: isUserLogged ? "none" : "block" }}>
        <Header isLogged={isUserLogged} />
      </header>
      <CenterContent isLogged={isUserLogged} />
    </main>
  );
};

export default Initial;
