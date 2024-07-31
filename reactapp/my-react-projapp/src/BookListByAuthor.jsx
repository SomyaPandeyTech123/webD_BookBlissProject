
import React, { useState } from 'react';
import "./searchcat.css"
import { IoMdSearch } from "react-icons/io";
const BookListByauthor = () => {
  const [author, setauthor] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const fetchBooksByauthor = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/books/author/${author}`);
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
      
      <input  className="catsearch-input"placeholder='Book aurthor'
        type="text"
        id="aurthor"
        value={author}
        onChange={(e) => setauthor(e.target.value)}
      />
     
      <button id="catsearch-button"onClick={fetchBooksByauthor}><IoMdSearch size={30}/></button>
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

export default BookListByauthor;
// import React, { useState } from 'react';

// const BookListByAuthor = () => {
//   const [author, setAuthor] = useState('');
//   const [books, setBooks] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchBooksByAuthor = async () => {
//     try {
//       const response = await fetch(`/books/author/${author}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch books');
//       }
//       const data = await response.json();
//       setBooks(data.books);
//       setError(null);
//     } catch (err) {
//       setBooks([]);
//       setError('No books found by this author');
//     }
//   };

//   return (
//     <div>
//       <label htmlFor="author">Author:</label>
//       <input
//         type="text"
//         id="author"
//         value={author}
//         onChange={(e) => setAuthor(e.target.value)}
//       />
//       <button onClick={fetchBooksByAuthor}>Search</button>

//       {error && <p>{error}</p>}

//       <ul>
//         {books.map((book) => (
//           <li key={book.book_id}>{book.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BookListByAuthor;
