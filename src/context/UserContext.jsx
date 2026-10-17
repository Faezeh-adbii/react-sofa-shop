import React, { createContext, useState } from "react";
import { getUser, removeUser, saveUser } from "../services/userService";


export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(getUser());

  // تابع ورود
  const login = (userData) => {
    saveUser(userData);
    setUser(userData);
  };

  //تابع خروج
  const logout = () => {
    removeUser();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ login, logout, user }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
