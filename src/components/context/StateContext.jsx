import { Children, createContext, useContext, useState ,  useEffect } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const data = { isSidebarOpen, setSidebarOpen };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 900 ) {
      setSidebarOpen(false);
    }
    if (windowWidth >= 910) {
      setSidebarOpen(true);
    }
  }, [windowWidth]);
  


  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const StateContextCustom = () => useContext(StateContext);
