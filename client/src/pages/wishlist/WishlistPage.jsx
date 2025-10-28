import React, { useState, useEffect } from 'react';
import { Trash2, ShoppingCart, ChevronRight, Heart } from 'lucide-react';
import './WishlistPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const WishlistPage = () => {
  const navigate = useNavigate();
  
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

  // Get cart count
 

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

  return (
    <div className="wishlist-page">
      <Header  
         cartCount={0} 
        wishlistCount={wishlist.length}
        activePage="wishlist"
      />

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
                onClick={() => {
                  if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
                    setWishlist([]);
                  }
                }}
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