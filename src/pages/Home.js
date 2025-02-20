import React from "react";
import "../styles/Home.css";

const products = [
  { id: 1, name: "Minimal Desk Lamp", price: 89.99, image: "lamp.png" },
  { id: 2, name: "Ceramic Coffee Mug", price: 24.99, image: "mug.png" },
  { id: 3, name: "Leather Notebook", price: 34.99, image: "notebook.png" },
  { id: 4, name: "Bamboo Plant Stand", price: 49.99, image: "plant.png" },
  { id: 5, name: "Abstract Wall Art", price: 129.99, image: "wall_art.png" },
  { id: 6, name: "Bookends Set", price: 39.99, image: "bookends.png" },
];

const Home = ({ addToCart }) => {
  return (
    <div className="home-container">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
