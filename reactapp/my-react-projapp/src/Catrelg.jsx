
import React, { useState } from 'react';
import "./searchcat.css"
import { IoMdSearch } from "react-icons/io";
const BookListByCategory = () => {
  const [category, setCategory] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const fetchBooksByCategory = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/books/category/${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data.books);
      setError(null);
    } catch (err) {
      setBooks([]);
      setError('No books found in this category');
    }
  };

  return (
    <div >
      <div className='catsearchcont'>
      
      <input  className="catsearch-input"placeholder='Book category'
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
     
      <button id="catsearch-button"onClick={fetchBooksByCategory}><IoMdSearch size={30}/></button>
      </div>
      {error && <p>{error}</p>}

      <ul>
      {books.map(book => (
        <div id="dis_style" key={book.book_id}>
          <h2>Book id: {book.book_id}</h2>
          <p>{book.book_title}</p>
          <p>Author: {book.author}</p>
          <p>Price: {book.price}</p>
          <p>Category: {book.category}</p>
        </div>
      ))}
      </ul>
      
    </div>
  );
};

export default BookListByCategory;
