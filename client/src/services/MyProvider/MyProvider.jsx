import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
};

export const MyProvider = ({ children }) => {
  const [contextState, setContextState] = useState({});

  const updateContextState = (newValue) => {
    setContextState(newValue);
    localStorage.setItem("contextState", JSON.stringify(newValue));
  };

  // console.log(contextState)

  return (
    <MyContext.Provider value={{ contextState, updateContextState }}>
      {children}
    </MyContext.Provider>
  );
};