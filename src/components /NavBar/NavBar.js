import React from 'react';
import { NavLink } from  "react-router-dom";
import './NavBar.css'
function NavBar() {
    return(
        <nav className="NavBar">
    <NavLink exact to="/">Home</NavLink>
      <NavLink to="/Cars-for-rent">Inventory</NavLink>
      <NavLink to="/Rent-with-us">Rent with us</NavLink>
      <img alt="Rent a Car" src='https://www.nicepng.com/png/detail/330-3304412_png-transparent-car-car-rental-logo-png.png'/>
        </nav>
    )
}

export default NavBar