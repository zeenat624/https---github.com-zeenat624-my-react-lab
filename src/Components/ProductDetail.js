import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { productId } = useParams();

  return (
    <div className="product-container">
      <h1 className="product-id">Product Id: {productId}</h1>
      <div className="product-details">

        <h2 className="product-name">Women's PureWalk Sneakers</h2>
        <p className="product-style">Style: WP001</p>
        <p className="product-color">Color: White</p>
        <p className="product-size">Size: 6-10</p>
        <p className="product-description">
          Step into comfort and style with our Women's PureWalk Sneakers. 
          Designed for the modern woman on-the-go, these sleek and versatile sneakers feature:
        </p>
        <ul className="product-features">
          <li>Premium white leather upper for a clean and crisp look</li>
          <li>Breathable mesh panels for added ventilation and comfort</li>
          <li>Cushioned insole and soft, padded collar for superior support</li>
          <li>Durable rubber outsole for traction and durability</li>
          <li>Classic lace-up closure for a secure fit</li>
        </ul>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
