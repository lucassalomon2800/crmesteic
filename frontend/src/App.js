import React, { useEffect, useState } from 'react';
import './styles/global.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Appointments from './components/Appointments';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('/api/login', { credentials: 'include' });
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          
        }
      } catch (error) {
        console.error('Error checking session:', error);
        
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  });

  if (loading) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={isAuthenticated ? <Home /> : <Login />} />
        <Route path='/appointments' element={<Appointments />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
