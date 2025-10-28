import React, { useState } from 'react';
import { Heart, ShoppingCart, Search, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 

// Image imports from assets folder
import goldbow from '../../assets/goldbow.png';
import bands from '../../assets/bands.png';
import bow1 from '../../assets/bow1.png';
import violetclip from '../../assets/violetclip.png';
import earring1 from '../../assets/earring1.png';
import earring3 from '../../assets/earring3.png';
import earring4 from '../../assets/earring4.png';
import whiteclip from '../../assets/whiteclip.png';
import earringcategory from '../../assets/earringcategory.png';
import fluffyredband from '../../assets/fluffyredband.png';
import girlwithbun from '../../assets/girlwithbun.png';
import girlearring from '../../assets/girlearring.png';
import halfface from '../../assets/halfface.png';
import shippingandquality from '../../assets/shippingandquality.png';
import support from '../../assets/support.png';
import returnlogo from '../../assets/returnlogo.png';
import LOGO from '../../assets/LOGO.png';
import review1 from '../../assets/review1.png';
import review2 from '../../assets/review2.png';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';

export default function HomePage() {
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [currentEarringSlide, setCurrentEarringSlide] = useState(0);
  const [wishlistItems, setWishlistItems] = useState(new Set());
  const [cartItems, setCartItems] = useState(new Set());
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Organza Bow', price: '₹15', image: goldbow, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'hair-bows' },
    { id: 2, name: 'Velvet Bow', price: '₹15', image: bands, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'hair-bows' },
    { id: 3, name: 'Classic Bow', price: '₹15', image: bow1, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'hair-bows' },
    { id: 4, name: 'Claw Clip', price: '₹15', image: violetclip, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'claw-clips' },
  ];

  const earrings = [
    { id: 5, name: 'Diamond Earring', price: '₹15', image: earring1, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'earring'},
    { id: 6, name: 'Gold Earring', price: '₹15', image: earringcategory, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'earring' },
    { id: 7, name: 'Designer Earring', price: '₹15', image: earring3, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'earring' },
    { id: 8, name: 'Triangle Earring', price: '₹15', image: earring4, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'earring' },
  ];

  const reviews = [
    { name: 'Saurabh Agarwal', rating: 4.1, role: 'Rita Care', image: review2 },
    { name: 'Saurabh Agarwal', rating: 4.1, role: 'Rita Care', image: review2 },
    { name: 'Saurabh Agarwal', rating: 4.1, role: 'Rita Care', image: review2 },
    { name: 'Shruti Agarwal', rating: 4.1, role: 'Rita Care', image: review1},
  ];

  const blogs = [
    { title: 'NEW ARRIVAL OF BRANDS ECO-FRIENDLY', desc: 'Discover quality furniture that reflects your style and makes everyday living more enjoyable.', image: blog1 },
    { title: 'NEW DESIGN OF BRANDS ECO-FRIENDLY', desc: 'Discover quality furniture that reflects your style and makes everyday living more enjoyable.', image: blog2 },
    { title: 'NEW ARRIVAL OF BRANDS ECO-FRIENDLY', desc: 'Discover quality furniture that reflects your style and makes everyday living more enjoyable.', image: blog3 },
  ];

  const features = [
    {
      title: 'Free Shipping',
      description: 'Order above ₹499',
      img: shippingandquality,
    },
    {
      title: '24/7 Support',
      description: 'Ready support',
      img: support,
    },
    {
      title: 'Premium Quality',
      description: 'Premium quality',
      img: shippingandquality,
    },
    {
      title: '30 Days Return',
      description: 'Money back guarantee',
      img: returnlogo,
    }
  ];

  const toggleWishlist = (id) => {
    setWishlistItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleCart = (id) => {
    setCartItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const nextProductSlide = () => {
    setCurrentProductSlide((prev) => (prev + 1) % products.length);
  };

  const prevProductSlide = () => {
    setCurrentProductSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const nextEarringSlide = () => {
    setCurrentEarringSlide((prev) => (prev + 1) % earrings.length);
  };

  const prevEarringSlide = () => {
    setCurrentEarringSlide((prev) => (prev - 1 + earrings.length) % earrings.length);
  };

  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(products[(currentProductSlide + i) % products.length]);
    }
    return visible;
  };

  const getVisibleEarrings = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(earrings[(currentEarringSlide + i) % earrings.length]);
    }
    return visible;
  };

  // Navigation functions
  const handleNavigateToProducts = () => {
    navigate('/products');
    window.scrollTo(0, 0);
  };

  const handleNavigateToCategory = (category) => {
    navigate(`/category/${category}`);
    window.scrollTo(0, 0);
  };

  const handleProductClick = (product) => {
    // Navigate to product detail page with product ID
    navigate(`/product/${product.id}`, { state: { product } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="accs-container">
      <Header 
        cartCount={cartItems.size} 
        wishlistCount={wishlistItems.size}
        activePage="home"
        onCartClick={() => navigate('/cart')}
        onWishlistClick={() => navigate('/wishlist')}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-right">
          <img src={halfface} alt="Model with earrings" className="hero-image" />
          <div className="hero-left">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
              <h1 className="hero-title" style={{color:'black', fontSize:'80px'}}>50%</h1>
              <div className="hero-subtitle" style={{color:'black'}}>OFF</div>
            </div>
            <p className="hero-text" style={{color:'black' }}>
              Discover quality fashion that reflects your style and makes everyday living more enjoyable
            </p>
            {/* Updated Explore Product Button */}
            <button className="btn-primary" onClick={handleNavigateToProducts}>
              Explore Product
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Purple Promo Card */}
          <div className="promo-card promo-purple" style={{ display: 'flex', height:'240px', flexDirection: 'row', alignItems: 'center', gap: '0', padding: '0' }}>   
            <div className="promo-content" style={{ flex: 1 }}>
              <img src={girlwithbun} alt="Promo Offer" style={{ maxWidth: '100%', width:'100%', height: '240px', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1, padding: '30px 30px 30px 20px' }}>
              <span className="promo-label">For New Accounts</span>
              <h2 className="promo-title">EXCLUSIVE<br/>OFFER!</h2>
              <button className="btn-primary" onClick={handleNavigateToProducts}>Claim Now</button>
            </div>
          </div>

          {/* Light Purple Promo Card */}
          <div className="promo-card promo-light" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '240px' }}>
            <div className="promo-header">
              <span className="promo-label">NEW ARRIVAL</span>
              <span className="promo-year">2025</span>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={bow1} alt="Hair Bow" style={{ height: '120px', width: '120px', marginTop:'-20px' }} />
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}>
              <p className="promo-browse-text">BROWSE HAIR ACCESSORIES</p>
              {/* Updated Buy Now Button to navigate to Hair Bows category */}
              <button className="btn-primary" onClick={() => handleNavigateToCategory('hair-bows')}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Categories */}
      <section className="section">
        <h2 className="section-title">Browse Categories</h2>
        <div className="categories-grid">
          {/* Updated category cards with navigation */}
          <div className="category-card" onClick={() => handleNavigateToCategory('claw-clips')}>
            <img src={whiteclip} alt="Claw Clips" className="category-icon" />
            <p className="category-name">Claw Clips</p>
          </div>
          <div className="category-card" onClick={() => handleNavigateToCategory('earring')}>
            <img src={earringcategory} alt="Earring" className="category-icon" />
            <p className="category-name">Earring</p>
          </div>
          <div className="category-card" onClick={() => handleNavigateToCategory('hair-bows')}>
            <img src={bow1} alt="Hair Bows" className="category-icon" />
            <p className="category-name">Hair Bows</p>
          </div>
          <div className="category-card" onClick={() => handleNavigateToCategory('scrunchies')}>
            <img src={fluffyredband} alt="Scrunchies" className="category-icon" />
            <p className="category-name">Scrunchies</p>
          </div>
        </div>
      </section>

      {/* Buy Earrings Section */}
      <section className="earrings-section">
        <div className="earrings-content">
          <div className="earrings-left">
            <h2 className="earrings-title">Buy<br/>Earrings</h2>
            <p className="earrings-text">Buy new collection of earrings</p>
            {/* Updated button to navigate to earring category */}
            <button className="btn-primary" onClick={() => handleNavigateToCategory('earring')}>
              Check it Now
            </button>
          </div>
          <div className="earrings-right">
            <img src={girlearring} alt="Model with earrings" className="earrings-image" />
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <section className="section">
        <h2 className="section-title">SALE IS ON!</h2>
        <div className="sale-grid">
          <div className="sale-card">
            <div className="sale-header">
              <span className="sale-label">HOT SALE</span>
              <span className="sale-year">2025</span>
            </div>
            <h3 className="sale-title">CLEARANCE<br/>SUMMER</h3>
            <img src={bow1} alt="Sale Icon" className="sale-icon" />
            <button className="btn-primary" onClick={handleNavigateToProducts}>Buy Now</button>
          </div>
          
          <div className="sale-card">
            <div className="sale-header">
              <span className="sale-label">NEW ARRIVAL</span>
              <span className="sale-year">2025</span>
            </div>
            <h3 className="sale-title">CLEARANCE<br/>SUMMER</h3>
            <img src={bow1} alt="Sale Icon" className="sale-icon" />
            <button className="btn-primary" onClick={handleNavigateToProducts}>Buy Now</button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">NEW ARRIVALS</h2>
          <div className="nav-buttons">
            <button className="nav-btn" onClick={prevProductSlide}>
              <ChevronLeft />
            </button>
            <button className="nav-btn" onClick={nextProductSlide}>
              <ChevronRight />
            </button>
          </div>
        </div>
        
        <div className="products-grid">
          {getVisibleProducts().map(product => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => handleProductClick(product)}
              style={{ cursor: 'pointer' }}
            >
              <div className="product-image-container">
                <Heart 
                  className="product-heart" 
                  fill={wishlistItems.has(product.id) ? '#f44336' : 'none'}
                  color={wishlistItems.has(product.id) ? '#f44336' : '#999'}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  style={{ cursor: 'pointer' }}
                />
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <div className="product-header">
                  <h3 className="product-name">{product.name}</h3>
                  <ShoppingCart 
                    className="product-cart"
                    color={cartItems.has(product.id) ? '#9C27B0' : '#666'}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCart(product.id);
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className="product-footer">
                  <div className="product-colors">
                    {product.colors.map((color, idx) => (
                      <div key={idx} className="color-dot" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                  <span className="product-price">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* End of Season Sale */}
      <div className="hero-banner">
        <div className="hero-images">
          <img src={halfface} alt="Model" className="hero-image-left" />
          <img src={halfface} alt="Model" className="hero-image-right" />
        </div>
        <div className="hero-content">
          <p className="hero-subtitle">Last Chance</p>
          <h1 className="hero-title">END OF SEASON SALE UP TO</h1>
          <h2 className="hero-discount">50% OFF</h2>
          <button className="hero-button" onClick={handleNavigateToProducts}>Check It Now</button>
        </div>
      </div>

      {/* New Sale on Earrings */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">NEW SALE ON EARRING</h2>
          <div className="nav-buttons">
            <button className="nav-btn" onClick={prevEarringSlide}>
              <ChevronLeft />
            </button>
            <button className="nav-btn" onClick={nextEarringSlide}>
              <ChevronRight />
            </button>
          </div>
        </div>
        
        <div className="products-grid">
          {getVisibleEarrings().map(product => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => handleProductClick(product)}
              style={{ cursor: 'pointer' }}
            >
              <div className="product-image-container">
                <Heart 
                  className="product-heart"
                  fill={wishlistItems.has(product.id) ? '#f44336' : 'none'}
                  color={wishlistItems.has(product.id) ? '#f44336' : '#999'}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  style={{ cursor: 'pointer' }}
                />
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <div className="product-header">
                  <h3 className="product-name">{product.name}</h3>
                  <ShoppingCart 
                    className="product-cart"
                    color={cartItems.has(product.id) ? '#9C27B0' : '#666'}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCart(product.id);
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className="product-footer">
                  <div className="product-colors">
                    {product.colors.map((color, idx) => (
                      <div key={idx} className="color-dot" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                  <span className="product-price">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <div className="features-section-contact" style ={{ marginTop:'-50px',marginBottom:'10px' }}>
        <div className="features-grid-contact">
          {features.map((feature, index) => (
            <div key={index} className="feature-card-contact">
              <div className="feature-icon-contact">
                <img src={feature.img} alt={feature.title} />
              </div>
              <div className="feature-content-contact">
                <h3 className="feature-title-contact">{feature.title}</h3>
                <p className="feature-text-contact">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <section className="section">
        <h2 className="section-title-center">Reviews</h2>
        <p className="section-subtitle">What our Family say about us</p>
        
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <div key={i} className="review-card">
              {review.video ? (
                <div className="review-video">
                  <img src={review.image} alt={review.name} className="review-image" />
                  <div className="play-button">▶️</div>
                </div>
              ) : (
                <img src={review.image} alt={review.name} className="review-avatar" />
              )}
              <div className="review-rating">
                <span className="star">⭐</span>
                <span className="rating-number">{review.rating}</span>
              </div>
              <h4 className="review-name">{review.name}</h4>
              <p className="review-role">{review.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="section">
        <h2 className="section-title">BLOG</h2>
        <div className="blog-grid">
          {blogs.map((blog, i) => (
            <div key={i} className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-desc">{blog.desc}</p>
                <button className="blog-link">DETAILS →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section" style={{width:'100%',padding: '40px 60px',margin: '50px 0 0 0'}}>
        <div className="newsletter-content">
          <div className="newsletter-left">
            <h2 className="newsletter-title">SUBSCRIBE OUR<br/>NEWSLETTER</h2>
            <p className="newsletter-text">Discover quality fashion that reflects your style and makes everyday living more enjoyable.</p>
          </div>
          <div className="newsletter-right">
            <input type="email" placeholder="Your email" className="newsletter-input" />
            <button className="btn-secondary">Subscribe Now</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer /> 
    </div>
  );
}