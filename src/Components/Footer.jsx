import React from 'react'
import "../index.css"

const Footer = () => {

  return (
    <footer className='footer'>
        <p>Powered by</p>
        <img src={process.env.PUBLIC_URL + '/images/DH.png'} alt='DH-logo' />
    </footer>
  )
}

export default Footer
