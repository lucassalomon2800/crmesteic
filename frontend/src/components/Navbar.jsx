import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
   <ul>
     <li><Link to="/home">Home</Link></li>
    <li><Link to="/appointments">Agendar</Link></li>
    <li><Link to="/account">Cuenta</Link></li>
  </ul>
</nav>)
}

export default Navbar;
