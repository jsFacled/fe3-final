import React from 'react'
import "../index.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className='nav'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <a  href="/home"> Home</a>
      <a  href="/contact"> Contacto</a>
      <a  href="/favs"> Favoritos</a>


      <button>Change theme   ☀ 🌙</button>
    </nav>
  )
}

export default Navbar