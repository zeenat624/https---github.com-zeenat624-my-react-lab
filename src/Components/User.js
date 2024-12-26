import React from 'react';
import '../styles/User.css';
import { useParams } from 'react-router-dom';

function User() {
  const { username } = useParams();

  return (
    <div className="user-profile">
      <h1>Profile of user: {username}</h1>

      <section className="user-info">
        <h2>Personal Information</h2>
        <p>Email: zeenatmhanif624.com</p>
        <p>Address: H # 13B, Street No 5, Karachi, Pakistan</p>
        <button>Edit Profile</button>
      </section>

      <section className="order-history">
        <h2>Your Orders</h2>
        <ul>
          <li>Order #123 - Delivered - Total: $50</li>
          <li>Order #124 - In Transit - Total: $75</li>
        </ul>
        <button>View All Orders</button>
      </section>

      <section className="wishlist">
        <h2>Your Wishlist</h2>
        <ul>
          <li>Item 1 - $25</li>
          <li>Item 2 - $40</li>
        </ul>
        <button>View Wishlist</button>
      </section>
    </div>
  );
}

export default User;
