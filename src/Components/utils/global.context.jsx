import { useState } from "react";
import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const[theme, setTheme]= useState("light");
  function changeTheme(){
    setTheme(theme === "light"? "dark":"light")
  }
  const value ={
    theme, changeTheme,
  }

  return (
    <ContextGlobal.Provider value={{value}}>
      {children}
    </ContextGlobal.Provider>
  );
};
