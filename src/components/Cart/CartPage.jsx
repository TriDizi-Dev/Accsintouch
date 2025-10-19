import React, { useState } from 'react';
import { Heart, Trash2, Plus, Minus, ChevronRight } from 'lucide-react';
import './CartPage.css';
import bow1 from '../../assets/bow1.png'; 
import Header from '../../components/Header/Header';
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Hair Bows',
      price: 150,
      originalPrice: 250,
      quantity: 1,
      color: 'Blue',
      image: bow1,
      colors: ['Blue', 'Red', 'Yellow']
    },
    {
      id: 2,
      name: 'Hair Bows',
      price: 150,
      originalPrice: 250,
      quantity: 1,
      color: 'Blue',
      image:  bow1,
      colors: ['Blue', 'Red', 'Yellow']
    },
    {
      id: 3,
      name: 'Hair Bows',
      price: 150,
      originalPrice: 250,
      quantity: 1,
      color: 'Blue',
      image:  bow1,
      colors: ['Blue', 'Red', 'Yellow']
    }
  ]);

  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [couponInput, setCouponInput] = useState('');

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Update color
  const updateColor = (id, newColor) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, color: newColor } : item
    ));
  };

  // Add to wishlist
  const addToWishlist = (id) => {
    alert(`Item ${id} added to wishlist!`);
  };

  // Apply coupon
  const applyCoupon = () => {
    if (couponInput.trim()) {
      setAppliedCoupon(couponInput);
      setCouponInput('');
    }
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedCoupon ? Math.floor(subtotal * 0.1) : 0;
  const total = subtotal - discount;

  return (
    <div className="cart-page">
      {/* Header */}
     <Header  cartCount={cartItems.length} 
  wishlistCount={0}
  activePage="cart"/>

      <main className="cart-main">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span>Home</span>
          <ChevronRight size={18} />
          <span>Product</span>
          <ChevronRight size={18} />
          <span>Product detail</span>
          <ChevronRight size={18} />
          <span>Cart</span>
        </div>

        <div className="cart-container">
          {/* Left Column - Cart Items */}
          <div className="cart-items-section">
            <h2 className="section-title">Your Cart ({cartItems.length} items)</h2>

            {cartItems.length > 0 ? (
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-price">
                        ₹{item.price}
                        <span className="original-price">₹{item.originalPrice}</span>
                      </p>

                      <div className="item-options">
                        <div className="color-selector">
                          <span className="label">Color:</span>
                          <div className="colors">
                            {item.colors.map(color => (
                              <button
                                key={color}
                                className={`color-btn ${item.color === color ? 'active' : ''}`}
                                onClick={() => updateColor(item.id, color)}
                              >
                                <span className={`color-dot color-${color.toLowerCase()}`}></span>
                                {color}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="quantity-selector">
                          <span className="label">Quantity:</span>
                          <div className="quantity-control">
                            <button
                              className="qty-btn"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="qty-value">{item.quantity}</span>
                            <button
                              className="qty-btn"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-actions">
                      <button
                        className="wishlist-btn"
                        onClick={() => addToWishlist(item.id)}
                      >
                        <Heart size={20} />
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    <div className="item-total">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-cart">Your cart is empty</p>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="order-summary-section">
            <div className="order-summary">
              <h3 className="summary-title">Order Summary</h3>

              <div className="summary-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="summary-item">
                    <span>{item.name} x {item.quantity}</span>
                    <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              <div className="coupon-section">
                <input
                  type="text"
                  placeholder="Apply Coupon"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  className="coupon-input"
                />
                <button className="apply-coupon-btn" onClick={applyCoupon}>
                  Apply
                </button>
              </div>

              {appliedCoupon && (
                <div className="coupon-applied">
                  ✓ Coupon "{appliedCoupon}" applied! 10% discount
                </div>
              )}

              <div className="summary-divider"></div>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              {discount > 0 && (
                <div className="summary-row discount">
                  <span>Discount (10%)</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="summary-row shipping">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Total</span>
                <span className="total-amount">₹{total.toLocaleString('en-IN')}</span>
              </div>

              <button className="checkout-btn">Continue</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;