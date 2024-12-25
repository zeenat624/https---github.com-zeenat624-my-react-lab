import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <img src="clothing.jpg" alt="Clothing" className="home-image" />
      <h1 className="home-header">Welcome to Our Clothing Store!</h1>
      <p className="home-description">Browse our latest collection of trendy clothing.</p>
      <button className="home-button">Shop Now</button>
      <footer className="footer">
        <p>&copy; 2024 FashionHub. All rights reserved.</p>
        <p>Follow us:</p>
        <ul className="footer-links">
          <li><a href="#" target="_blank"><i className="fa fa-facebook"></i> Facebook</a></li>
          <li><a href="#" target="_blank"><i className="fa fa-instagram"></i> Instagram</a></li>
          <li><a href="#" target="_blank"><i className="fa fa-twitter"></i> Twitter</a></li>
        </ul>
      </footer>

    </div>
    
  );
}

export default Home;
