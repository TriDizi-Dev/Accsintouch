import React, { useState, useEffect } from 'react';
import { Trash2, ShoppingCart, ChevronRight, Heart, X } from 'lucide-react';
import './WishlistPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const WishlistPage = () => {
  const navigate = useNavigate();
  const [showClearModal, setShowClearModal] = useState(false);
  
  // Load wishlist and cart from localStorage
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Remove from wishlist
  const handleRemove = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  // Add to cart
  const handleAddToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      // If already in cart, increase quantity
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
      
    } else {
      // Add new item to cart
      setCart([...cart, { ...item, quantity: 1 }]);
      
    }
  };

  // Move to cart (add to cart and remove from wishlist)
  const handleMoveToCart = (item) => {
    handleAddToCart(item);
    handleRemove(item.id);
  };

  // Navigate to product detail
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  // Clear all wishlist items
  const handleClearAll = () => {
    setWishlist([]);
    setShowClearModal(false);
  };

  return (
    <div className="wishlist-page">
      <Header  
        cartCount={cart.length} 
        wishlistCount={wishlist.length}
        activePage="wishlist"
      />

      {/* Clear Confirmation Modal */}
      {showClearModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowClearModal(false)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '40px',
              maxWidth: '450px',
              width: '90%',
              textAlign: 'center',
              position: 'relative',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowClearModal(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#666',
                padding: '5px',
              }}
            >
              <X size={24} />
            </button>

            <div style={{ marginBottom: '20px' }}>
              <Heart 
                size={64} 
                style={{ 
                  color: '#f44336', 
                  strokeWidth: 1.5 
                }} 
              />
            </div>

            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              marginBottom: '15px',
              color: '#333'
            }}>
              Clear Entire Wishlist?
            </h2>

            <p style={{ 
              fontSize: '15px', 
              color: '#666', 
              marginBottom: '30px',
              lineHeight: '1.6'
            }}>
              Are you sure you want to remove all {wishlist.length} items from your wishlist? This action cannot be undone.
            </p>

            <div style={{ 
              display: 'flex', 
              gap: '12px',
              justifyContent: 'center'
            }}>
              <button
                onClick={() => setShowClearModal(false)}
                style={{
                  padding: '12px 30px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '25px',
                  background: 'white',
                  color: '#333',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#333';
                  e.target.style.background = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.background = 'white';
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleClearAll}
                style={{
                  padding: '12px 30px',
                  border: 'none',
                  borderRadius: '25px',
                  background: '#f44336',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#d32f2f';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#f44336';
                }}
              >
                Yes, Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="wishlist-main">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</span>
          <ChevronRight size={18} />
          <span>Wishlist</span>
        </div>

        <div className="wishlist-container">
          <div className="wishlist-header">
            <h2 className="section-title">
              <Heart size={28} style={{ marginRight: '10px', color: '#f44336' }} />
              Your Wishlist ({wishlist.length} items)
            </h2>
            {wishlist.length > 0 && (
              <button 
                className="clear-wishlist-btn"
                onClick={() => setShowClearModal(true)}
              >
                Clear All
              </button>
            )}
          </div>

          {wishlist.length > 0 ? (
            <div className="wishlist-grid">
              {wishlist.map((item) => (
                <div key={item.id} className="wishlist-card">
                  <div 
                    className="wishlist-image"
                    onClick={() => handleProductClick(item.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={item.image} alt={item.name} />
                    <button 
                      className="remove-wishlist-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(item.id);
                      }}
                      title="Remove from wishlist"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="wishlist-info">
                    <h3 
                      className="wishlist-item-name"
                      onClick={() => handleProductClick(item.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      {item.name}
                    </h3>
                    <p className="wishlist-category">{item.category}</p>
                    
                    <div className="wishlist-price-section">
                      <span className="wishlist-price">₹{item.price}</span>
                      {item.originalPrice && (
                        <>
                          <span className="wishlist-original-price">₹{item.originalPrice}</span>
                          <span className="wishlist-discount">
                            {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                          </span>
                        </>
                      )}
                    </div>

                    {item.colors && (
                      <div className="wishlist-colors">
                        <span className="colors-label">Available Colors:</span>
                        {item.colors.slice(0, 5).map((color, idx) => (
                          <div 
                            key={idx} 
                            className="wishlist-color-dot" 
                            style={{ backgroundColor: color }}
                            title={color}
                          ></div>
                        ))}
                        {item.colors.length > 5 && (
                          <span className="more-colors">+{item.colors.length - 5}</span>
                        )}
                      </div>
                    )}

                    {item.rating && (
                      <div className="wishlist-rating">
                        <span className="star">★</span>
                        <span>{item.rating}</span>
                        <span className="rating-text">({item.rating}/5)</span>
                      </div>
                    )}

                    <div className="wishlist-actions">
                      <button 
                        className="add-to-cart-btn"
                        onClick={() => handleMoveToCart(item)}
                      >
                        <ShoppingCart size={18} style={{ marginRight: '8px' }} />
                        Move to Cart
                      </button>
                      <button 
                        className="add-to-cart-btn-outline"
                        onClick={() => handleAddToCart(item)}
                      >
                        <ShoppingCart size={18} style={{ marginRight: '8px' }} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-wishlist">
              <Heart size={64} style={{ color: '#ddd', marginBottom: '20px' }} />
              <h3>Your wishlist is empty</h3>
              <p>Save items you love by clicking the heart icon on products</p>
              <button 
                className="btn-primary" 
                onClick={() => navigate('/products')}
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>

        {/* You may also like section */}
        {wishlist.length > 0 && (
          <div className="suggested-section">
            <h3 className="suggested-title">Continue Shopping</h3>
            <div className="suggested-actions">
              <button 
                className="suggested-btn"
                onClick={() => navigate('/products')}
              >
                Browse All Products
              </button>
              <button 
                className="suggested-btn-outline"
                onClick={() => navigate('/cart')}
              >
                View Cart
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default WishlistPage;