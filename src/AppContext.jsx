import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [siteStatus, setSiteStatus] = useState("development");

  const toggleStatus = () => {
    setSiteStatus(siteStatus === "development" ? "live" : "development");
  };

  return (
    <AppContext.Provider
      value={{
        siteStatus,
        setSiteStatus,
        toggleStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
