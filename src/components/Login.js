import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import classes from './Login.module.css'; 

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://fakestoreapi.com/users');
      const users = response.data;
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        setIsAuthenticated(true);
        navigate('/shop');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleLogin}>
        <h1>Login</h1>
        {error && <p className={classes.error}>{error}</p>}
        <div className={classes.inputGroup}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={classes.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={classes.buttonGroup}>
          <button type="submit" className={classes.button1}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;