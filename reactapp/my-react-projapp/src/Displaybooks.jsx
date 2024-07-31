// App.js (ReactJS frontend)
import React, { useEffect, useState } from 'react';
import "./Displaybooks.css"
const Displaybooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/books')
      .then(response => response.json())
      .then(data => setBooks(data.books))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div >
      {/* Display the books */}
      {books.map(book => (
        <div id="dis_style" key={book.book_id}>
          <h2>Book id: {book.book_id}</h2>
          <p>{book.book_title}</p>
          <p>Author: {book.author}</p>
          <p>Price: Rs{book.price}</p>
          <p>Category: {book.category}</p>
        </div>
      ))}
    </div>
  );
};
export default Displaybooks;