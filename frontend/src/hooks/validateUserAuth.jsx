import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const storageUserState = localStorage.getItem("userState");
    const userStateObject = JSON.parse(storageUserState);

    const stateObjectExists = userStateObject || userStateObject?.isLogged;

    // TODO: Colocar isso no if depois && location.pathname !== "/"
    if (!stateObjectExists) {
      //TODO: Bora relogar assim que tiver aquele role do tempo de logado no backend
      console.log(location);
      navigate("/");
    }
  }, []);
};

export default useAuth;
