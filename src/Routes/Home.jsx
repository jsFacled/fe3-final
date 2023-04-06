import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
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

  useEffect(() => {
    handleFetchDataDentist();
  }, []);

  //Return----------
  return (
    <main className="">
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
