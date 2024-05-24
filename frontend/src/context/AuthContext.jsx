import { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext();

const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider, useAuthContext };
