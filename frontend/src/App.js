import React, { useEffect, useState} from 'react';
import './styles/global.css';

function App(){
	const [customers,setCustomers] = useState([]);
	
	useEffect(() => {
		fetch('http://localhost:3000')
		.then((response) => response.json())
		.then((data) => setCustomers(data));
	},[]);

	return (
		<div class="container">
		   <h1>Welcome to Beauty CRM</h1>                                               <a href="/customers/add" class="buttontop">Nuevo cliente</a>
		        <a href="/customers" class="buttontop">Ver Clientes</a>
		         <div class="button-container">                                                         <a href="/info/rips" class="button">Ver Rips</a>                                     <a href="info/facturas" class="button">Ver facturas</a>
		           <a href="/appointments" class="button">Agendar</a>
		        </div>                                                                               </div>
	);
}

export default App;
