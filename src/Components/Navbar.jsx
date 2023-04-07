import React, { useContext } from 'react'
import "../index.css"
import { ContextGlobal } from './utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, changeTheme}= useContext(ContextGlobal)

  function handleChangeTheme(){
    changeTheme()
    alert("estoy en navbar  e hice click")

  }

  return (
    <nav className={`nav ${theme}`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <a  href="/home"> Home</a>
      <a  href="/contact"> Contacto</a>
      <a  href="/favs"> Favoritos</a>


      <button onClick={handleChangeTheme}>Change theme   ☀ 🌙</button>
    </nav>
  )
}

export default Navbar