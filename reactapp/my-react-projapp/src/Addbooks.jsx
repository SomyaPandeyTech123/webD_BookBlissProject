
import React, { useState } from 'react';
import "./Addbooks.css"

const Addbooks = () => {
  const [book_id, setBookId] = useState('');
  const [book_title, setBookTitle] = useState('');
  const [price, setPrice] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const categories = ['Spiritual','Fiction', 'Comedy', 'Thriller', 'Recipes', 'Motivational','Biography']; 

  const addBook = async (book) => {
    const res = await fetch('http://127.0.0.1:8000/addbooks/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(book),
    })
    const data = await res.json()

    if (res.status === 200) {
      console.log(data["message"])
      alert(data["message"])
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addBook({ book_id, book_title, price, author, category })
  }

  return (
    <div className='formparent'>
      <form id='insertform'>
<label className='fields' id="bid">Book id:
        <input className="contents" name="book_id" type="text" placeholder="BOOK ID" value={book_id} onChange={(e) => setBookId(e.target.value)} />
        </label>
        <br />
        <label className='fields'>Book title:
        <input className="contents" name="book_title" type="text" placeholder="BOOK TITLE" value={book_title} onChange={(e) => setBookTitle(e.target.value)} />
        </label>
        <br />
        <label className='fields'>Book price:
        <input className="contents" name="price" type="text" placeholder="PRICE (in rupees)" value={price} onChange={(e) => setPrice(e.target.value)} />
</label>
        <br />
        <label className='fields'>Book author:
        <input className="contents" name="author" type="text" placeholder="AUTHOR" value={author} onChange={(e) => setAuthor(e.target.value)} />
</label>
        <br />

        <label className='fields'>
          Category:
          <select className="contents" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled>Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>

        <br />
        <button id="button" onClick={onSubmit}>Add Book</button>
      </form>
    </div>
  );
};
export default Addbooks;

