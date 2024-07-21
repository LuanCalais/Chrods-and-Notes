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
      localStorage.removeItem("userState");
      navigate("/");
    }
  };

  return (
    <UserContext.Provider
      value={{
        contextUser,
        setContextUser,
        validateLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
