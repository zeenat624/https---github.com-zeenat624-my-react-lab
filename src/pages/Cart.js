import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0).toFixed(2);

  // Handle Checkout
  const handleCheckout = () => {
    setCart([]); // Clear the cart
    navigate("/thankyou"); // Navigate to Thank You page
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p className="empty-cart-message">YOUR CART IS EMPTY</p>}

      <div className="cart-list">
        {cart.map((product) => (
          <div key={product.id} className="cart-card">
            <img src={product.image} alt={product.name} className="cart-image" />
            <div className="cart-details">
              <h3 className="cart-name">{product.name}</h3>
              <p className="cart-price">${product.price.toFixed(2)}</p>
            </div>
            <span className="remove-text" onClick={() => setCart(cart.filter(item => item.id !== product.id))}>
              Remove
            </span>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart-summary">
          <span className="total-label">Total:</span>
          <span className="total-price">${totalPrice}</span>
        </div>
      )}

      {cart.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
