import React from 'react'
import logo from "../assets/mpeda-logo.png"
 import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
   <div className='header container-fluid  p-2'>
    <div className='logo_container'>
      <img src={logo} alt="logo-img" />
    </div>

   </div>
  )
}

export default Header