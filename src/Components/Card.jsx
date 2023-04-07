import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const isAlreadyFav = favorites.some(fav => fav.id === id);
  

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    
    if (!isAlreadyFav) {
      favorites.push({ name, username, id });
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true)
    }
  }

  useEffect(() => {
    if(favorites.some(fav => fav.id === id)){
      setIsFavorite(true)
    };
  }, []);
  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

    {/* <img src="/images/doctor.jpg"
          alt="doctor placeholder"/>
       */}
       <h1>{name}</h1>
       <h2>{username}</h2>
       <h3>{id}</h3>
       </Link>
       <button onClick={addFav} className={`favButton ${isFavorite ? 'favorite' : ''}`}>
  {isFavorite ? 'Added to favorites ⭐' : 'Add to favorites'}
</button>
    </div>
  );
};

export default Card;
