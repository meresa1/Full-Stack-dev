import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentCompany, setCurrentCompany] = useState(
    JSON.parse(localStorage.getItem("company") || null)
  );

  const login = async (companyData) => {
    const res = await axios.post(
      "http://localhost:8888/api/auth/customers/login",
      companyData
    );
    setCurrentCompany(res.data);
  };

  const logout = async () => {
    // const res = await axios.post("http://localhost:8888/api/auth/logout");
    setCurrentCompany(null);
  };

  useEffect(() => {
    localStorage.setItem("company", JSON.stringify(currentCompany));
  }, [currentCompany]);

  const values = {
    currentCompany,
    login,
    logout,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
