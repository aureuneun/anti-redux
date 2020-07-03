import React, { useState, useContext } from "react";

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "nico",
    loggedIn: false,
  });
  const userLoggedIn = () => setUser({ ...user, loggedIn: true });
  const userLoggedOut = () => setUser({ ...user, loggedIn: false });
  return (
    <UserContext.Provider value={{ user, userLoggedIn, userLoggedOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useUserLoggedIn = () => {
  const { userLoggedIn } = useContext(UserContext);
  return userLoggedIn;
};

export const useUserLoggedOut = () => {
  const { userLoggedOut } = useContext(UserContext);
  return userLoggedOut;
};

export default UserContextProvider;
