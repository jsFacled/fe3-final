import React, { useEffect, useState, useContext } from "react";
import "../index.css"

import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {theme, data,handleFetchDataDentist, errorFetch, loading}= useContext(ContextGlobal)

 
  useEffect(() => {
    handleFetchDataDentist();
  }, []);

  //Return----------
  return (
    <main className={ `${theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {loading ? (
          <p>Loading...</p>
        ) : errorFetch ? (
          <p>Error: {errorFetch}</p>
        ) : (
          <div className="card-grid">
            {data.map((dentist) => (
              <Card
                key={dentist.id}
                id={dentist.id}
                name={dentist.name}
                username={dentist.username}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
