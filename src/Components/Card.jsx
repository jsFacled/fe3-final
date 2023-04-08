import React, { useEffect, useState, useContext } from "react";
import "../index.css";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const { theme } = useContext(ContextGlobal);

  const [isFavorite, setIsFavorite] = useState();

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const handleFav = () => {
    const favoriteIndex = favorites.findIndex((fav) => fav.id === id);
    if (favoriteIndex === -1) {
      // La Card no está en favoritos
      favorites.push({ name, username, id });
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    } else {
      // La Card está en favoritos
      favorites.splice(favoriteIndex, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    if (favorites.some((fav) => fav.id === id)) {
      setIsFavorite(true);
    }
  }, [favorites, id]);

  return (
    <div className={`card ${theme}`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <Link to={`/dentist/${id}`}>
        {/* <img src="/images/doctor.jpg"
          alt="doctor placeholder"/>
       */}
        <h1>{name}</h1>
        <h2>{username}</h2>
        <h3>{id}</h3>
      </Link>
      <button
        onClick={handleFav}
        className={`favButton ${isFavorite ? "favorite" : ""}`}
      >
        {isFavorite ? "Added to favorites ⭐" : "Add to favorites"}
      </button>
    </div>
  );
};

export default Card;
