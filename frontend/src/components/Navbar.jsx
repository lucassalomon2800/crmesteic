import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../images/BC.png';
import aco from '../images/aco.png';
import home from '../images/home.png';
import logout from '../images/logout.png';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [navData, setNavData] = useState({ name: '', links: [] });
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/account')
      .then(response => response.json())
      .then(data => setNavData(data));
  }, []);

  const handlogout = async () => {
 try{
    const response = await fetch('/api/login/logout',{credentials:'include' , method: 'POST'});
     if(response.ok) {
      navigate('/');
      window.location.reload();
    }else {
        alert('logout fail');
    }}
    catch(error) {
        console.error("error logout:",error);
    }   

  }

  return (
    <nav className="navbar">

<a href="/">
 <img src={logo} alt="Logo Image" className="nav-logo" />
</a>

<ul className="li-aco">

 <img src={aco} alt="Image profile" className="nav-aco" />

      {navData.name}
</ul>

<a href="/">
  <img src={home} alt="Home Image" className="nav-home" />
</a>

<button onClick={handlogout}  className="button-login">

  <img src={logout} alt="logout image" className="nav-home"/>
</button>
</nav>

  );
}

export default Navbar;
