import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Heart } from 'lucide-react';

// Import images
import girlEarring from '../../assets/girlearring.png';
import halfFace from '../../assets/halfface.png';
import premiumQuality from '../../assets/premiumquality.png';
import tenDayReturn from '../../assets/10dayreturn.png';
import cod from '../../assets/COD.png';
import freeDelivery from '../../assets/freedelivery.png';
import LOGO from '../../assets/LOGO.png';

// Import similar product images
import goldbow from '../../assets/goldbow.png';
import bowred from '../../assets/bowred.png';
import bow1 from '../../assets/bow1.png';
import violetclip from '../../assets/violetclip.png';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const descriptionRef = useRef(null);
  const navigate = useNavigate();

  // State for wishlist and cart
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Persist wishlist and cart to localStorage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Wishlist toggle function
  const toggleWishlist = (e, product) => {
    e.stopPropagation();
    const isInWishlist = wishlist.some(item => item.id === product.id);
    
    if (isInWishlist) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  // Cart toggle function
  const toggleCart = (e, product) => {
    e.stopPropagation();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  // Handle product click for navigation
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    window.scrollTo(0, 0);
  };

  // Quantity change handler
  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Similar products data
  const similarProducts = [
    {
      id: 1,
      name: 'Organza Bow',
      price: 15,
      originalPrice: 25,
      rating: 4,
      colors: ['#FFD700', '#FFA500', '#DAA520'],
      image: goldbow
    },
    {
      id: 2,
      name: 'Velvet Bow',
      price: 15,
      originalPrice: 25,
      rating: 4,
      colors: ['#EF4444', '#10B981', '#3B82F6'],
      image: bowred
    },
    {
      id: 3,
      name: 'Classic Bow',
      price: 15,
      originalPrice: 25,
      rating: 4,
      colors: ['#EF4444', '#10B981'],
      image: bow1
    },
    {
      id: 4,
      name: 'Claw Clip',
      price: 15,
      originalPrice: 25,
      rating: 4,
      colors: ['#EF4444', '#10B981', '#3B82F6'],
      image: violetclip
    }
  ];

  return (
    <div className="product-detail-container">
      {/* Header */}
      <Header 
        activePage="products" 
        cartCount={cart.length} 
        wishlistCount={wishlist.length}
      />

      <div className="breadcrumb">
        <span onClick={() => navigate("/")}>Home</span> &gt; <span onClick={() => navigate("/products")}>Product</span> &gt; <span>Product detail</span>
      </div>

      <div className="product-main-section">
        <div className="product-images">
          <div className="main-image">
            <img src={girlEarring} alt="Girl wearing earrings" />
          </div>
          <div className="thumbnail-images">
            <div className="thumbnail">
              <img src={halfFace} alt="Earring close-up" className="earring-only" />
            </div>
            <div className="thumbnail">
              <img src={halfFace} alt="Earring close-up" className="earring-only" />
            </div>
            <div className="thumbnail">
              <img src={halfFace} alt="Earring close-up" className="earring-only inverted" />
            </div>
          </div>
        </div>

        <div className="product-info">
          <h1>YouBella Jewellery Bohemian Multi-Color Earrings for Girls and Women</h1>
          
          {/* <div className="rating">
            <span className="rating-number">4.2</span>
            <span className="stars">⭐⭐⭐⭐⭐</span>
            <span className="reviews">245</span>
          </div>*/}

          <div className="price-section">
            <span className="current-price">₹ 1,500</span>
            <span className="original-price">₹ 5,500</span>
            <span className="discount">70% OFF</span>
          </div>

          <div className="quantity-section">
            <label>Quantity</label>
            <div className="quantity-control">
              <button onClick={() => handleQuantityChange('decrease')}>-</button>
              <input type="text" value={quantity} readOnly />
              <button onClick={() => handleQuantityChange('increase')}>+</button>
            </div>
          </div>

          <div className="action-buttons">
            <button 
              className="explore-btn"
              onClick={() => descriptionRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Product
            </button>
            <button className="add-cart-btn">
              Add to Cart 
            </button>
          </div>

          <div className="features">
            <div className="feature">
              <img src={freeDelivery} alt="Free Delivery" />
              <span>Free Delivery</span>
            </div>
            <div className="feature">
              <img src={cod} alt="COD" />
              <span>COD</span>
            </div>
            <div className="feature">
              <img src={tenDayReturn} alt="10 Day Return" />
              <span>10 Day Return</span>
            </div>
            <div className="feature">
              <img src={premiumQuality} alt="Premium Quality" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs-section" ref={descriptionRef}>
        <div className="tabs">
          <button 
            className={activeTab === 'description' ? 'active' : ''} 
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={activeTab === 'features' ? 'active' : ''} 
            onClick={() => setActiveTab('features')}
          >
            Key Features
          </button>
          <button 
            className={activeTab === 'info' ? 'active' : ''} 
            onClick={() => setActiveTab('info')}
          >
            Additional Info
          </button>
          <button 
            className={activeTab === 'reviews' ? 'active' : ''} 
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'description' && (
            <div className="description-content">
              <p>Elevate your look with a touch of cosmic charm. Our Celestial Sparkle Earrings are designed to capture the breathtaking beauty of a starlit sky. Each earring features a delicate cluster of shimmering, high-quality cubic zirconia stones, meticulously set to mimic the radiant glow of distant stars.</p>
              <p>Crafted from premium, hypoallergenic sterling silver, these earrings offer both elegance and comfort. The lightweight design makes them perfect for all-day wear, whether you're heading to a special event or simply adding a hint of glamour to your everyday style.</p>
              <p>With their timeless design and brilliant sparkle, the Celestial Sparkle Earrings make a perfect gift for yourself or a loved one. They are versatile enough to complement any outfit, adding a sophisticated and enchanting touch to your jewelry collection.</p>
            </div>
          )}
        </div>
      </div>

      <div className="similar-products-section">
        <h2 className="section-title">Similar Products</h2>
        <div className="products-grid" style={{maxWidth:'200%', gap:'14px'}}>
          {similarProducts.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              style={{cursor: 'pointer', width:'100%', maxWidth:'200%'}}
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-actions">
                  <button 
                    className="action-button" 
                    onClick={(e) => toggleWishlist(e, product)}
                  >
                    <Heart 
                      size={16}
                      fill={isInWishlist(product.id) ? '#f44336' : 'none'}
                      color={isInWishlist(product.id) ? '#f44336' : '#666'}
                    />
                  </button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-header">
                  <span className="product-name">{product.name}</span>
                </div>
                <div className="product-details">
                  <div className="color-options">
                    {product.colors.map((color, idx) => (
                      <div key={idx} className="color-dot" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                  <span className="product-price">₹{product.price}</span>
                </div>
                <div className="product-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                  <div className="product-rating">
                    <span>{product.rating}</span>
                    <span className="star-icon">★</span>
                  </div>
                  <button 
                    onClick={(e) => toggleCart(e, product)}
                    style={{
                      padding: '6px 16px',
                      background: isInCart(product.id) ? '#9C27B0' : '#000',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}      
      <Footer />
    </div>
  );
};

export default ProductDetail;