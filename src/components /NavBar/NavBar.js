import React from 'react';
import { NavLink } from  "react-router-dom";
import './NavBar.css'
function NavBar() {
    return(
        <nav className="NavBar">
    <NavLink exact to="/">Home</NavLink>
      <NavLink to="/Cars-for-rent">Inventory</NavLink>
      <NavLink to="/Rent-with-us">Rent with us</NavLink>
        </nav>
    )
}

export default NavBar