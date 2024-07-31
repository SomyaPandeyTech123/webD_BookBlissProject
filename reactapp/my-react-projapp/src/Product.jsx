// // App.js (ReactJS frontend)
// import React, { useEffect, useState } from 'react';
// import "./Displaybooks.css"
// const Product = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/books')
//       .then(response => response.json())
//       .then(data => setBooks(data.books))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div >
//       {/* Display the books */}
//       {books.map(book => (
//         <div id="dis_style" key={book.book_id}>
//           <h2>Book id: {book.book_id}</h2>
//           <p>{book.book_title}</p>
//           <p>Author: {book.author}</p>
//           <p>Price: Rs{book.price}</p>
//           <p>Category: {book.category}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Product;

import React, { useEffect, useState } from 'react';
import './Product.css';
import Nav from './Nav';

const Product = () => {
  const [books, setBooks] = useState([]);
  const [sortBy, setSortBy] = useState('default'); // 'default' indicates no sorting

  useEffect(() => {
    fetch('http://127.0.0.1:8000/books')
      .then(response => response.json())
      .then(data => {
        // Sort the books based on the selected option
        const sortedBooks = sortBooks(data.books, sortBy);
        setBooks(sortedBooks);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [sortBy]); // Re-fetch data when sortBy changes

  // Function to sort books based on the selected option
  const sortBooks = (books, sortBy) => {
    switch (sortBy) {
      case 'priceLowToHigh':
        return [...books].sort((a, b) => a.price - b.price);
      case 'priceHighToLow':
        return [...books].sort((a, b) => b.price - a.price);
      default:
        return books; // Default order (no sorting)
    }
  };

  return (
    <div>
        <Nav/>
      {/* Dropdown to select sorting option */}
      <label  id="sortDropdown"htmlFor="sortDropdown">Sort by Price:
      <select  id="sortprice"value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="default">Default</option>
        <option value="priceLowToHigh">Price Low to High</option>
        <option value="priceHighToLow">Price High to Low</option>
      </select>
      </label>

      {/* Display the books */}
      {books.map(book => (
        <div id="dis_style" key={book.book_id}>
          <h2>Book id: {book.book_id}</h2>
          <p>{book.book_title}</p>
          <p>Author: {book.author}</p>
          <p>Price: Rs{book.price}</p>
          <p>Category: {book.category}</p>
          <br/>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
