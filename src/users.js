
import React, { createContext, useState } from 'react';

const UserContext = createContext({});
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    // Add other user-related properties as needed
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
