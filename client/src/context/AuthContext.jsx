import { createContext, useState, useContext, useEffect } from "react";
import API from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("adminInfo");
    if (stored) setAdmin(JSON.parse(stored));
  }, []);

  const login = async (email, password) => {
    const { data } = await API.post("/auth/login", { email, password });
    localStorage.setItem("adminInfo", JSON.stringify(data));
    setAdmin(data);
    return data;
  };

  const logout = () => {
    localStorage.removeItem("adminInfo");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
