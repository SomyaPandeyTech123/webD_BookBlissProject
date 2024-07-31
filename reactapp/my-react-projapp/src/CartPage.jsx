import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa'; // Assuming you have a library for icons
import "./CartPage.css"
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to fetch book details based on bookId
  const fetchBookDetails = async (bookId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/books/${bookId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching book details:', error);
      return null;
    }
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  // Function to handle adding a book to the cart
  const addToCart = async (bookId) => {
    const bookDetails = await fetchBookDetails(bookId);
    if (bookDetails) {
      // Update cartItems state with the new book
      setCartItems((prevCart) => [...prevCart, { ...bookDetails, quantity: 1 }]);
    }
  };

  // Function to handle removing a book from the cart
  const removeFromCart = (bookId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.bookId !== bookId));
  };
  
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.bookId}>
          <img src={item.img} alt={item.bookname} />
          <div className="cart-item-details">
            <p>{item.bookname}</p>
            <p>Author: {item.author}</p>
            <p>ISBN: {item.isbn}</p>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.quantity * item.price}</p>
          </div>
          <button className="action-button" onClick={() => removeFromCart(item.bookId)}>
            <FaTrash />
          </button>
        </div>
      ))}
      <div className="total-section">
        <div className="total-prices">
          <p>Total Price: ${calculateTotalPrice()}</p>
          <p>Shipping Cost: $10</p>
          <p>Total Cost: ${calculateTotalPrice() + 10}</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
