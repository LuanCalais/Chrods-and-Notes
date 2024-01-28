import { createContext, useState } from "react";
import { UserModel } from "../Model";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [contextUser, setContextUser] = useState(new UserModel());

  return (
    <UserContext.Provider
      value={{
        contextUser,
        setContextUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
