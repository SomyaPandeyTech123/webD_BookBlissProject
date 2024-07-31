import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Loginpg.css';

const Loginpg = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    if (!username || !password) {
      setErrorMessage('Username or password cannot be empty.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Successful login, you can redirect or handle accordingly
        alert('Login successful!');
        setErrorMessage('');
      } else {
        // Login failed, handle the error
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='parentlogin'>
      <div className='login-container'>
        <form>
          <h2 id='loginn'>Login</h2>
          <label className='login-label' htmlFor='username'>
            Username:
          </label>
          <input
            className='login-input'
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className='login-label' htmlFor='password'>
            Password:
          </label>
          <input
            className='login-input'
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button id='loginbtn' className='login-button' type='submit' onClick={handleLogin}>
            Login
          </button>

          {/* Pass username as a prop to Signup component */}
          <button id='signupbtn' className='login-button'>
            <Link to={{ pathname: '/Signup', state: { username } }}>Sign-Up</Link>
          </button>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Loginpg;
