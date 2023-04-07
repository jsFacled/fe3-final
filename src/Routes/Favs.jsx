import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [users, setUsers] = useState(favorites)
 
     useEffect(() => {
setUsers(favorites)
      }, []);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        <div className="card-grid">
          {users.map((users) => (
            <Card
              key={users.id}
              id={users.id}
              name={users.name}
              username={users.username}
             
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favs;
