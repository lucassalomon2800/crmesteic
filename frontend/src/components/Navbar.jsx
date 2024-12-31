import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../images/BC.png';
import aco from '../images/aco.png';
import home from '../images/home.png';

const Navbar = () => {
  const [navData, setNavData] = useState({ name: '', links: [] });

  useEffect(() => {
    fetch('/api/account')
      .then(response => response.json())
      .then(data => setNavData(data));
  }, []);

  return (
    <nav className="navbar">
     
         <img src={logo} alt="Logo Image" className="nav-logo" />
     <ul className="li-aco">
        <img src={aco} alt="Image profile" className="nav-aco" />
        {navData.name}
      </ul>
      
     <img src={home} alt="Home Image" className="nav-home" /> 
    </nav>
  );
}

export default Navbar;
