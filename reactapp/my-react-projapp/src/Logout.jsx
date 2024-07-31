import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any necessary logout actions
    // For example, clear user session, token, or any other authentication data
    // You might want to call an API endpoint to log the user out on the server

    // Clear user session (this is just an example, you might use your authentication provider's method)
    sessionStorage.removeItem('username'); // Assuming you store a token in sessionStorage

    // Navigate to the home page after logout
    navigate('/');
  };

  return (
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
