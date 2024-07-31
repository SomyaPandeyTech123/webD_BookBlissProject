// // BookDetails.js
// import React from 'react';

// const BookList = ({ books }) => {
//   // Ensure that books is always an array
//   const booksArray = Array.isArray(books) ? books : [];

//   return (
//     <div >
//       <h2>Book Details:</h2>
//      {books && (
//         <div id="search_res">
//           <h2>Book Details:</h2>
//           <p>Book ID: {books.book_id}</p>
//           <p>Title: {books.book_title}</p>
//           <p>Title: {books.price}</p>
//           <p>Title: {books.author}</p>
//           {/* Add other relevant fields as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookList;

// BookDetails.js

import React from 'react';

const BookList = ({ books }) => {
  // Ensure that books is always an array
  const booksArray = Array.isArray(books) ? books : [];

  return (
    <div>
      <h2>Book Details:</h2>
      {booksArray.map(book => (
        <div key={book.book_id}>
          <p>Book ID: {book.book_id}</p>
          <p>Title: {book.book_title}</p>
          {/* Add other relevant fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default BookList;

