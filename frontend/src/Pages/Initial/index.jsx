import "./Initial.module.css";
import Header from "../../Components/Header";
import CenterContent from "../../Components/CenterContent";
import { useState, useEffect } from "react";

const Initial = () => {
  const [userState, setUserState] = useState();
  const [isUserLogged, setIsUserLogged] = useState(false);

  useEffect(() => {
    const storageUserState = localStorage.getItem("userState");
    if (!storageUserState || !userState.isLogged) {
      localStorage.removeItem("userState");
      setIsUserLogged(false);
      return;
    }

    const userStateObject = JSON.parse(storageUserState);
    setIsUserLogged(userStateObject.isLogged);
  }, [userState]);

  const handleSetUserState = (user) => {
    setUserState(user);
  };

  return (
    <main>
      <header style={{ display: isUserLogged ? "none" : "block" }}>
        <Header changeState={handleSetUserState} isLogged={isUserLogged} />
      </header>
      <CenterContent changeState={handleSetUserState} isLogged={isUserLogged} />
    </main>
  );
};

export default Initial;
