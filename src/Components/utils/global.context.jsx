import { useEffect, useState } from "react";
import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const[theme, setTheme]= useState("light");

  

   //En un estado guardo resultado Fetch
   const [data, setData] = useState();
   //Guardo error posible
   const [errorFetch, setErrorFetch] = useState();
   //Muestro un loading..
   const [loading, setLoading] = useState(true);
 
   //Funcion Fetch
   const url = "https://jsonplaceholder.typicode.com/users";
 
   async function handleFetchDataDentist() {
     setLoading(true);
     try {
       const dentistFetch = await (await fetch(url)).json();
       console.log("d...", dentistFetch);
       setData(dentistFetch);
     } catch (error) {
       setErrorFetch(error.message);
       console.log("Error en Fetching...", error.message);
     }
     setLoading(false);
   }
 

  function changeTheme(){
    
    setTheme(theme === "light"? "dark":"light")
    console.log("se ha cambiado el tema")
  
  }

  //Implemento mantener el Tema en toda la app
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);


  
  const value ={
    theme, changeTheme, data,errorFetch, loading, handleFetchDataDentist
  }

  
  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
