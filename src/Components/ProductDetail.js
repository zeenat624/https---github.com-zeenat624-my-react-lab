import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', imageUrl: },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', description: 'Description of Product 4', imageUrl: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', description: 'Description of Product 5', imageUrl: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', description: 'Description of Product 6', imageUrl: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Product 7', description: 'Description of Product 7', imageUrl: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Product 8', description: 'Description of Product 8', imageUrl: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Product 9', description: 'Description of Product 9', imageUrl: 'https://via.placeholder.com/150' },
  { id: 10, name: 'Product 10', description: 'Description of Product 10', imageUrl: 'https://via.placeholder.com/150' },
];

function Product() {
  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`} className="view-details">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
