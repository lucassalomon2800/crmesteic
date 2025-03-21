import React, { useEffect, useState } from 'react';
import './styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Appointments from './components/Appointments';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddCustomers from './components/AddCustomers';

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('/api/login/check', { credentials: 'include', method: 'POST' });
        if (response.ok) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.error('Error checking session:', error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={isAuthenticated ? <Home /> : <Login />} />   
        <Route path='/appointments' element={<Appointments />} />
        <Route path='/customers/add' element={<AddCustomers />} />
        

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
