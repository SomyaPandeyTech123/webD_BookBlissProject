import React from 'react'
import "./App.css"
// import Nav from "./Nav"
import Adminpg from "./Adminpg"
import Aboutpg from "./Aboutpg"
import Home from "./Home"
import Addbooks from "./Addbooks"
import Deletebooks from "./Deletebooks"
import ContactUs from "./ContactUs"
import Catrelg from "./Catrelg"
import Displaybooks from "./Displaybooks"
import UpdateBookForm from "./UpdateBookForm"
import BookList from './BookList';
import BookSearch from './BookSearch';
import SearchResult from './SearchResult';
import BookListByauthor from './BookListByAuthor';
import ImageSlider from './ImageSlider';
import Loginpg from './Loginpg';
import CartPage from './CartPage';
import ProductList from "./ProductList";
import Product from "./Product";
import AddToCartPage from "./AddToCartPage";
import AdminLogin from "./AdminLogin";
import Logout from "./Logout";
import Formpg from "./Formpg";
// import Slidebar from "./Slidebar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Sidebar from './Sidebar'
import Signup from './Signup'

function App() {
  return (
  <div id='page'>
  <BrowserRouter>
      {/* <Nav/> */}
      {/* <Slidebar/> */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Aboutpg" element={<Aboutpg/>} />
          <Route exact path="/Adminpg" element={<Adminpg/>} />
          <Route exact path="/ContactUs" element={<ContactUs/>} />
          <Route exact path="/Signup" element={<Signup/>} />
          <Route exact path="/Addbooks" element={<Addbooks/>} />
          <Route exact path="/UpdateBookForm" element={<UpdateBookForm />} />
          <Route exact path="/Displaybooks" element={<Displaybooks/>} />
          <Route exact path="/Deletebooks" element={<Deletebooks/>} />
          <Route exact path="/Catrelg" element={<Catrelg/>} />
           <Route path="/BookList" element={<BookList/>} />
           <Route path="/BookListByauthor" element={<BookListByauthor/>} />
           <Route exact path="/BookSearch" element={<BookSearch/>} />
        <Route exact path="/SearchResult" element={<SearchResult/>} />
        <Route exact path="/ImageSlider" element={<ImageSlider/>} />
        <Route exact path="/Loginpg" element={<Loginpg/>} />
        <Route exact path="/CartPage" element={<CartPage/>} />
        <Route exact path="/ProductList" element={<ProductList/>} />
        <Route exact path="/AddToCartPage" element={<AddToCartPage/>} />
        <Route exact path="/AdminLogin" element={<AdminLogin/>} />
        <Route exact path="/Logout" element={<Logout/>} />
        <Route exact path="/Product" element={<Product/>} />
        <Route exact path="/Formpg" element={<Formpg/>} />
        </Routes>
    </BrowserRouter>
  </div>
  );
}
export default App