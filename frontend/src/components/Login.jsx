import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.post('/api/login', { username, password });
      setMessage(res.data.message);
      navigate('/home');
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
<div class="container"> <form onSubmit={handleSubmit}> <div>
        <label>Email:</label>
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  );
}

export default Login;
