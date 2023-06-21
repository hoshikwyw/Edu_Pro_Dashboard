import { Children, createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const data = { isSidebarOpen, setSidebarOpen };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const StateContextCustom = () => useContext(StateContext);
