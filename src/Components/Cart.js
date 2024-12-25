import React, { useState } from 'react';


function Cart() {
  const [itemCount1, setItemCount1] = useState(0);
  const [itemCount2, setItemCount2] = useState(0);

  const addItem1 = () => {
    setItemCount1(itemCount1 + 1);
  };

  const removeItem1 = () => {
    if (itemCount1 > 0) {
      setItemCount1(itemCount1 - 1);
    }
  };

  const addItem2 = () => {
    setItemCount2(itemCount2 + 1);
  };

  const removeItem2 = () => {
    if (itemCount2 > 0) {
      setItemCount2(itemCount2 - 1);
    }
  };

  const calculateTotal1 = (price) => {
    return (itemCount1 * price).toFixed(2);
  };

  const calculateTotal2 = (price) => {
    return (itemCount2 * price).toFixed(2);
  };



  return (
    <div className="cart-container">
    <h1 className="cart-header">Shopping Cart</h1>
    <div className="item-cards">
      <div className="item-card">
        <div className="item-details">
          <h3>Item: White Shirt</h3>
          <img src='white shirt.webp' alt="White Shirt" />
          <p>Price: $19.99</p>
        </div>
        <div className="quantity-controls">
          <button onClick={addItem1}>+</button>
          <span className="quantity">Quantity: {itemCount1}</span>
          <button onClick={removeItem1}>-</button>
        </div>
        <div className="total">
          Total: ${calculateTotal1(19.99)}
        </div>
      </div>
    
      <div className="item-card">
          <div className="item-details">
            <h3>Item: Hoodie</h3>
            <img src='black hoodie.png' alt="Black Hoodie" />
            <p>Price: $29.99</p>
          </div>
          <div className="quantity-controls">
            <button onClick={addItem2}>+</button>
            <span className="quantity">Quantity: {itemCount2}</span>
            <button onClick={removeItem2}>-</button>
          </div>
          <div className="total">
            Total: ${calculateTotal2(29.99)}
          </div>
        </div>
      </div>
    </div>

  );
}



export default Cart;
