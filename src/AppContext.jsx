import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const siteTitel = "Site Menu with React Router V6 and UseContext";
  const [siteStatus, setSiteStatus] = useState("development");

  const toggleStatus = () => {
    setSiteStatus(siteStatus === "development" ? "live" : "development");
  };

  return (
    <AppContext.Provider
      value={{
        siteTitel,
        siteStatus,
        setSiteStatus,
        toggleStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
