


// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const SearchResult = (props) => {
//   const location = useLocation();
//   const [books, setBooks] = useState([]);
//   const [error, setError] = useState(null);

  // const handleAddtocart = async (bookId, bookTitle) => {
  //   try {
  //     const response = await fetch('http://127.0.0.1:8000/cart/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         cart_id: '2', // Replace with your actual cart ID
  //         username: props.username, // Use the username from props
  //         book_title: bookTitle,
  //         book_id: bookId,
  //         quantity: '1', // You might want to adjust the quantity based on user input
  //       }),
  //     });

  //     if (response.ok) {
  //       // Successful addition to cart, you can handle accordingly
  //       alert('Book added to cart successfully!');
  //       setError('');
  //     } else {
  //       // Failed to add to cart, handle the error
  //       const errorData = await response.json();
  //       setError(errorData.message);
  //     }
  //   } catch (error) {
  //     console.error('Error adding to cart:', error);
  //   }
//   };

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const title = searchParams.get('title');

//     if (title) {
//       // Fetch books based on the provided title
//       fetch(`http://127.0.0.1:8000/books/title/${title}`)
//         .then((response) => response.json())
//         .then((data) => setBooks(data.books))
//         .catch((err) => setError('Error fetching books'));
//     }
//   }, [location.search]);

//   return (
//     <div>
//       {error && <p>{error}</p>}
//       {books.map((book) => (
//         <div id="dis_style" key={book.book_id}>
//           <h2>Book id: {book.book_id}</h2>
//           <p>{book.book_title}</p>
//           <p>Author: {book.author}</p>
//           <p>Price: {book.price}</p>
//           <p>Category: {book.category}</p>
//           <br></br>
//           <button onClick={() => handleAddtocart(book.book_id, book.book_title)}>Add to cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SearchResult;


import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchResult = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const handleAddToCart = async (bookId, bookTitle) => {
    if (!props.username) {
      // If user is not logged in, navigate to login page
      navigate('/Loginpg');
      navigate('/SearchResult');

    try {
      const response = await fetch('http://127.0.0.1:8000/cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cart_id: '2', // Replace with your actual cart ID
          username: props.username,
          book_title: bookTitle,
          book_id: bookId,
          quantity: '1',
        }),
      });

      if (response.ok) {
        // Successful addition to cart, handle accordingly
        alert('Book added to cart successfully!');
        setError('');
      } else {
        // Failed to add to cart, handle the error
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get('title');

    if (title) {
      // Fetch books based on the provided title
      fetch(`http://127.0.0.1:8000/books/title/${title}`)
        .then((response) => response.json())
        .then((data) => setBooks(data.books))
        .catch((err) => setError('Error fetching books'));
    }
  }, [location.search]);

  return (
    <div>
      {error && <p>{error}</p>}
      {books.map((book) => (
        <div id="dis_style" key={book.book_id}>
          <h2>Book id: {book.book_id}</h2>
          <p>{book.book_title}</p>
          <p>Author: {book.author}</p>
          <p>Price: {book.price}</p>
          <p>Category: {book.category}</p>
          <br />
          <button onClick={() => handleAddToCart(book.book_id, book.book_title)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
