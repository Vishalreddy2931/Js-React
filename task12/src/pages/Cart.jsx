import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './pages.css'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useContext(CartContext)
  const totalPrice = getTotalPrice()

  if (cartItems.length === 0) {
    return (
      <div className="page-container">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <p>Your cart is empty</p>
          <p>Start adding items to your cart!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container">
      <h1>Shopping Cart</h1>

      <div className="cart-layout">
        <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id} className="cart-item">
                  <td className="product-info">
                    <div className="product-img">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <span>{item.title}</span>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="quantity-control">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        min="1"
                      />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Shipping:</span>
            <span className="free">FREE</span>
          </div>
          <div className="summary-item">
            <span>Tax (10%):</span>
            <span>${(totalPrice * 0.1).toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Total:</span>
            <span>${(totalPrice * 1.1).toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
          <button className="continue-shopping-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
