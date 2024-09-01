import { createContext, useState } from "react";
import { UserModel } from "../Model";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

UserContext.displayName = "userContext";

export function UserProvider({ children }) {
  const [contextUser, setContextUser] = useState(new UserModel());
  const navigate = useNavigate();

  const validateLogin = () => {
    const storageUserState = localStorage.getItem("userState");
    if (storageUserState) {
      const userState = JSON.parse(storageUserState);
      if (!userState.id || !userState.isLogged) {
        localStorage.removeItem("userState");
        navigate("/");
      }
    }
  };

  const changePicture = (code = "NON") => {
    const storageUserState = localStorage.getItem("userState");
    if (storageUserState) {
      const userState = JSON.parse(storageUserState);
      userState.profilePicture = code;
      localStorage.setItem("userState", JSON.stringify(userState));
      window.location.reload();
    }
  };

  return (
    <UserContext.Provider
      value={{
        contextUser,
        setContextUser,
        validateLogin,
        changePicture,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
