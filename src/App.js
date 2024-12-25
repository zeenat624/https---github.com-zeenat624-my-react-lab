import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import './styles/Navbar.css';
import Product from './Components/ProductDetail';
import User from './Components/User';
import './styles/Cart.css';
import './styles/Home.css';
import './styles/Product.css';

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

