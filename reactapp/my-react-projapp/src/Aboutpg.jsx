import React from 'react';
import './Aboutpg.css';
import Footer from "./footer"
import Nav from "./Nav"
// import App2 from "./App2"
import ImageSlider from './ImageSlider';
const Aboutpg = () => {
  return (
    <div className='abt_main'>
    <Nav />
    <ImageSlider />
    
    <div id="about-us-container">
     
      <div className="about-us-content">
        <h1 className="about-us-heading">About Us</h1>
        <p>Welcome to <span className="highlight">BOOK BLISS</span>, your literary haven in the digital realm. Founded with a passion for literature, we embark on a journey to connect book enthusiasts with their next captivating read.</p>

      <p>At <span className="highlight">BOOK BLISS</span>, we believe in the magic of storytelling. Our carefully curated collection spans genres, ensuring there's a literary gem for every reader. Whether you're a seasoned bookworm or just beginning your literary voyage, our platform invites you to explore, discover, and lose yourself in the pages of a great book.We're not just selling books; we're fostering a love for reading that goes beyond the transaction.
      </p>

      <p>Thank you for choosing <span className="highlight">BOOK BLISS</span> as your literary companion. Happy reading!</p>
      <br/>
      <h2>What We Offer</h2>
<p>Extensive Book Collection: Dive into our vast collection of books spanning various genres, from timeless classics to contemporary bestsellers. We carefully curate our selection to ensure there's something for every reader.
<br/>
<br/>
Community and Discussion: Join our vibrant community of readers to share your thoughts, discover hidden gems, and engage in meaningful discussions. Connect with fellow book enthusiasts who share your passion.
<br/>
<br/>
Author Spotlights: Explore exclusive author interviews, book reviews, and spotlights on emerging literary talents. We believe in celebrating the voices behind the stories.
<br/>
<br/>
Reading Challenges: Embark on exciting reading challenges and expand your literary horizons. Our challenges are designed to inspire and motivate readers to explore new genres and authors.</p>
<br/>

<h2>Our Commitment</h2>
<p>At <span className="highlight">BOOK BLISS</span>, we are committed to promoting literacy, fostering a love for reading, and creating an inclusive space where everyone feels welcome. Whether you're a seasoned bookworm or just starting your reading journey, we invite you to be a part of our literary community.</p>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Aboutpg;