import React, { useState, useEffect } from 'react';
import { Heart, Trash2, Plus, Minus, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';
import Header from '../../components/Header/Header';
import WhatsAppLogo from '../WhatsAppLogo';

const CartPage = () => {
  const navigate = useNavigate();

  // Valid coupons list
  const validCoupons = {
    'SAVE10': 10,
    'SAVE20': 20,
    'SAVE30': 30,
    'FIRSTORDER': 15,
    'WELCOME': 5
  };

  // Load cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

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

  // Update color - fixed to properly track selected color
  const updateColor = (id, newColor) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, selectedColor: newColor } : item
    ));
  };

  // Add to wishlist
  const addToWishlist = (item) => {
    const isInWishlist = wishlist.some(w => w.id === item.id);
    
    if (isInWishlist) {
      alert('Item already in wishlist!');
    } else {
      setWishlist([...wishlist, item]);
      alert(`${item.name} added to wishlist!`);
    }
  };

  // Apply coupon with validation
  const applyCoupon = () => {
    const trimmedCoupon = couponInput.trim().toUpperCase();
    
    if (!trimmedCoupon) {
      setCouponError('Please enter a coupon code');
      return;
    }

    if (validCoupons[trimmedCoupon]) {
      setAppliedCoupon({
        code: trimmedCoupon,
        discount: validCoupons[trimmedCoupon]
      });
      setCouponError('');
      setCouponInput('');
    } else {
      setCouponError('Invalid coupon code');
      setAppliedCoupon(null);
    }
  };

  // Remove coupon
  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponError('');
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedCoupon ? Math.floor(subtotal * (appliedCoupon.discount / 100)) : 0;
  const subtotalAfterDiscount = subtotal - discount;
  const shippingCharge = subtotalAfterDiscount >= 499 ? 0 : 40; // Free shipping above ₹499
  const total = subtotalAfterDiscount + shippingCharge;

  // Get cart count - unique products only
  const getCartCount = () => {
    return cartItems.length;
  };

  // Get color name from hex code
  const getColorName = (colorCode) => {
    const colorMap = {
      '#3B82F6': 'Blue', '#2196F3': 'Blue', '#0C8DC0': 'Blue', '#4169E1': 'Blue',
      '#EF4444': 'Red', '#f44336': 'Red', '#C00C0C': 'Red', '#8B0000': 'Red', '#FF0000': 'Red',
      '#10B981': 'Green', '#169E5C': 'Green',
      '#FFD700': 'Gold', '#FFA500': 'Gold', '#DAA520': 'Gold',
      '#DDA0DD': 'Purple', '#9C27B0': 'Purple', '#800080': 'Purple',
      '#FFB6C1': 'Pink', '#FF69B4': 'Pink',
      '#8B4513': 'Brown', '#A0522D': 'Brown', '#D2691E': 'Brown',
      '#000000': 'Black',
      '#FFFFFF': 'White', '#F5F5DC': 'White', '#E5E4E2': 'White',
      '#808080': 'Gray', '#C0C0C0': 'Gray',
      '#FFFF00': 'Yellow', '#FFC107': 'Yellow'
    };
    return colorMap[colorCode] || 'Color';
  };

  return (
    <div className="cart-page">
      {/* Header */}
      <Header  
        cartCount={getCartCount()} 
        wishlistCount={wishlist.length}
        activePage="cart"
      />

      <main className="cart-main">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</span>
          <ChevronRight size={18} />
          <span onClick={() => navigate('/products')} style={{ cursor: 'pointer' }}>Product</span>
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
                        {item.originalPrice && (
                          <span className="original-price">₹{item.originalPrice}</span>
                        )}
                      </p>

                      <div className="item-options">
                        {item.colors && item.colors.length > 0 && (
                          <div className="color-selector">
                            <span className="label">Color:</span>
                            <div className="colors">
                              {item.colors.slice(0, 3).map((colorCode, idx) => (
                                <button
                                  key={idx}
                                  className={`color-btn ${(item.selectedColor || item.colors[0]) === colorCode ? 'active' : ''}`}
                                  onClick={() => updateColor(item.id, colorCode)}
                                >
                                  <span 
                                    className="color-dot" 
                                    style={{ backgroundColor: colorCode }}
                                  ></span>
                                  {getColorName(colorCode)}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

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
                        onClick={() => addToWishlist(item)}
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
              <div className="empty-cart">
                <p>Your cart is empty</p>
                <button 
                  className="checkout-btn" 
                  onClick={() => navigate('/products')}
                  style={{ marginTop: '20px' }}
                >
                  Start Shopping
                </button>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          {cartItems.length > 0 && (
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

                {!appliedCoupon ? (
                  <div>
                    <div className="coupon-section">
                      <input
                        type="text"
                        placeholder="Enter Coupon Code"
                        value={couponInput}
                        onChange={(e) => {
                          setCouponInput(e.target.value.toUpperCase());
                          setCouponError('');
                        }}
                        className="coupon-input"
                      />
                      <button className="apply-coupon-btn" onClick={applyCoupon}>
                        Apply
                      </button>
                    </div>
                    {couponError && (
                      <div style={{ 
                        color: '#f44336', 
                        fontSize: '13px', 
                        marginTop: '5px',
                        marginBottom: '10px' 
                      }}>
                        {couponError}
                      </div>
                    )}
                    <div style={{ 
                      fontSize: '12px', 
                      color: '#666', 
                      marginTop: '10px',
                      marginBottom: '15px'
                    }}>
                      <strong>Valid Coupons:</strong> SAVE10, SAVE20, SAVE30, FIRSTORDER, WELCOME
                    </div>
                  </div>
                ) : (
                  <div className="coupon-applied">
                    ✓ Coupon "{appliedCoupon.code}" applied! {appliedCoupon.discount}% discount
                    <button 
                      onClick={removeCoupon}
                      style={{
                        marginLeft: '10px',
                        background: 'transparent',
                        border: 'none',
                        color: '#f44336',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}
                    >
                      ✕
                    </button>
                  </div>
                )}

                <div className="summary-divider"></div>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                {discount > 0 && (
                  <div className="summary-row discount">
                    <span>Discount ({appliedCoupon.discount}%)</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="summary-row shipping">
                  <span>Shipping</span>
                  <span>{shippingCharge === 0 ? 'Free' : `₹${shippingCharge}`}</span>
                </div>
                
                {subtotalAfterDiscount < 499 && (
                  <div style={{ 
                    fontSize: '12px', 
                    color: '#2e7d32', 
                    marginTop: '5px',
                    marginBottom: '10px'
                  }}>
                    Add ₹{499 - subtotalAfterDiscount} more for free shipping!
                  </div>
                )}

                <div className="summary-divider"></div>

                <div className="summary-total">
                  <span>Total</span>
                  <span className="total-amount">₹{total.toLocaleString('en-IN')}</span>
                </div>

                <button className="checkout-btn">Continue to Checkout</button>
              </div>
            </div>
          )}
        </div>
      </main>
      <WhatsAppLogo />
    </div>
  );
};

export default CartPage;