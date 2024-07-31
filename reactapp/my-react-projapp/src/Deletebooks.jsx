import React, { useState } from 'react';
import "./Deletebooks.css"
const DeleteBook = () => {
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/books/${bookId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        // Handle success, e.g., show a success message or update UI
      } else {
        setMessage(data.message);
        // Handle errors, e.g., show an error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div id="delform">
      <h2 id="Delete_Book" >Delete Book</h2>
      
        
        <input id="cont"placeholder='Book ID:'
          type="text"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
     
      <button id="delb" onClick={handleDelete}>Delete Book</button>
      {message && <p id="msg">{message}</p>}
    </div>
  );
};

export default DeleteBook;
