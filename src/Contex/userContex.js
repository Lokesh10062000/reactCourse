import React from "react";

import { useState } from "react";
import { useEffect } from "react";

export const UserContext = React.createContext();

const URL = "https://jsonplaceholder.typicode.com/users";

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const fetchUsersData = async (apiURL) => {
    const Response = await fetch(apiURL);
    const data = await Response.json();
    setUserData(data);
  };

  useEffect(() => {
    fetchUsersData(URL);
  }, []);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};
