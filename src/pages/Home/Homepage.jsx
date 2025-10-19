import React, { useState } from 'react';
import { Heart, ShoppingCart, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import './homepage.css'; // Updated to match the new CSS file name
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
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
export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const products = [
    { id: 1, name: 'Organza Bow', price: '₹15', image: goldbow, colors: ['red', 'blue', 'green'] },
    { id: 2, name: 'Velvet Bow', price: '₹15', image: bands, colors: ['red', 'blue', 'green'] },
    { id: 3, name: 'Classic Bow', price: '₹15', image: bow1, colors: ['red', 'blue', 'green'] },
    { id: 4, name: 'Claw Clip', price: '₹15', image: violetclip, colors: ['red', 'blue', 'green'] },
  ];

  const earrings = [
    { id: 1, name: 'Diamond Earring', price: '₹15', image: earring1, colors: ['red', 'blue', 'green'] },
    { id: 2, name: 'Gold Earring', price: '₹15', image: earringcategory, colors: ['red', 'blue', 'green'] }, // Temporary replacement for image29
    { id: 3, name: 'Designer Earring', price: '₹15', image: earring3, colors: ['red', 'blue', 'green'] },
    { id: 4, name: 'Triangle Earring', price: '₹15', image: earring4, colors: ['red', 'blue', 'green'] },
  ];

  const reviews = [
    { name: 'Saurabh Agarwal', rating: 4.1, role: 'Web Love', image: girlwithbun },
    { name: 'Saurabh Agarwal', rating: 4.1, role: 'Web Love', image: girlwithbun },
    { name: 'Saurabh Agarwal', rating: 4.1, role: 'Web Love', image: girlwithbun },
    { name: 'Shruti Agarwal', rating: 4.1, role: 'Web Love', image: girlwithbun, video: true },
  ];

  const blogs = [
    { title: 'NEW ARRIVAL OF BRANDS ECO-FRIENDLY', desc: 'Discover quality furniture that reflects your style and makes everyday living more enjoyable.', image: girlearring },
    { title: 'NEW DESIGN OF BRANDS ECO-FRIENDLY', desc: 'Discover quality furniture that reflects your style and makes everyday living more enjoyable.', image: halfface },
    { title: 'NEW ARRIVAL OF BRANDS ECO-FRIENDLY', desc: 'Discover quality furniture that reflects your style and makes everyday living more enjoyable.', image: girlearring },
  ];

  return (
    <div className="accs-container">
      <Header cartCount={0} 
        wishlistCount={0}
        activePage="home"
        onCartClick={() => navigate('/cart')}
        onWishlistClick={() => navigate('/wishlist')}/>
   {/* Hero Section */}
<section className="hero">
  <div className="hero-right">
    <img src={halfface} alt="Model with earrings" className="hero-image" />
    <div className="hero-left">
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
        <h1 className="hero-title">50%</h1>
        <div className="hero-subtitle">OFF</div>
      </div>
      <p className="hero-text">
        Discover quality fashion that reflects your style and makes everyday living more enjoyable
      </p>
      <button className="btn-primary">Explore Product</button>
    </div>
  </div>

  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <div className="promo-card promo-purple" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', padding: '0 20px 0 0' }}>   
         <div className="promo-content" style={{ flex: 1 }}>
        <img src={girlwithbun} alt="Promo Offer" style={{ maxWidth: '100%', width:'250px',height: '230px' }} />
      </div>
      <div style={{ flex: 1 }}>
        <span className="promo-label">For New Accounts</span>
        <h2 className="promo-title">EXCLUSIVE<br/>OFFER!</h2>
        <button className="btn-primary">Claim Now</button>
      </div>
    </div>

    <div className="promo-card promo-light">
      <div className="promo-header">
        <span className="promo-label">NEW ARRIVAL</span>
        <span className="promo-year">2025</span>
      </div>
      <div className="promo-content">
        <img src={bow1} alt="Hair Bow" style={{ height: '80px', width: 'auto', margin: '20px 0' }} />
        <button className="btn-primary" style={{ fontSize: '12px', padding: '12px 20px' }}>BROWSE HAIR<br/>ACCESSORIES</button>
      </div>
    </div>
  </div>
</section>
      {/* Browse Categories */}
      <section className="section">
        <h2 className="section-title">Browse Categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <img src={whiteclip} alt="Claw Clips" className="category-icon" />
            <p className="category-name">Claw Clips</p>
          </div>
          <div className="category-card">
            <img src={earringcategory} alt="Earring" className="category-icon" />
            <p className="category-name">Earring</p>
          </div>
          <div className="category-card">
            <img src={bow1} alt="Hair Bows" className="category-icon" />
            <p className="category-name">Hair Bows</p>
          </div>
          <div className="category-card">
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
            <button className="btn-primary">Check it Now</button>
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
            <button className="btn-primary">Buy Now</button>
          </div>
          
          <div className="sale-card">
            <div className="sale-header">
              <span className="sale-label">NEW ARRIVAL</span>
              <span className="sale-year">2025</span>
            </div>
            <h3 className="sale-title">CLEARANCE<br/>SUMMER</h3>
            <img src={bow1} alt="Sale Icon" className="sale-icon" />
            <button className="btn-primary">Buy Now</button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">NEW ARRIVALS</h2>
          <div className="nav-buttons">
            <button className="nav-btn">
              <ChevronLeft />
            </button>
            <button className="nav-btn">
              <ChevronRight />
            </button>
          </div>
        </div>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <Heart className="product-heart" />
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <div className="product-header">
                  <h3 className="product-name">{product.name}</h3>
                  <ShoppingCart className="product-cart" />
                </div>
                <div className="product-footer">
                  <div className="product-colors">
                    <div className="color-dot color-red"></div>
                    <div className="color-dot color-blue"></div>
                    <div className="color-dot color-green"></div>
                  </div>
                  <span className="product-price">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* End of Season Sale */}
      <section className="banner-section">
        <div className="banner-content">
          <p className="banner-label">Last Chance</p>
          <h2 className="banner-title">END OF SEASON SALE UP TO<br/>50% OFF</h2>
          <button className="btn-secondary">Check It Now</button>
        </div>
      </section>

      {/* New Sale on Earrings */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">NEW SALE ON EARRING</h2>
          <div className="nav-buttons">
            <button className="nav-btn">
              <ChevronLeft />
            </button>
            <button className="nav-btn">
              <ChevronRight />
            </button>
          </div>
        </div>
        
        <div className="products-grid">
          {earrings.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <Heart className="product-heart" />
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <div className="product-header">
                  <h3 className="product-name">{product.name}</h3>
                  <ShoppingCart className="product-cart" />
                </div>
                <div className="product-footer">
                  <div className="product-colors">
                    <div className="color-dot color-red"></div>
                    <div className="color-dot color-blue"></div>
                    <div className="color-dot color-green"></div>
                  </div>
                  <span className="product-price">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <img src={shippingandquality} alt="Shipping" className="feature-icon" />
            <h3 className="feature-title">Free Shipping</h3>
            <p className="feature-text">Order above ₹499</p>
          </div>
          <div className="feature-card">
            <img src={support} alt="Support" className="feature-icon" />
            <h3 className="feature-title">24/7 Support</h3>
            <p className="feature-text">Ready support</p>
          </div>
          <div className="feature-card">
            <img src={shippingandquality} alt="Quality" className="feature-icon" />
            <h3 className="feature-title">Premium Quality</h3>
            <p className="feature-text">Premium quality</p>
          </div>
          <div className="feature-card">
            <img src={returnlogo} alt="Return" className="feature-icon" />
            <h3 className="feature-title">30 Days Return</h3>
            <p className="feature-text">Money back guarantee</p>
          </div>
        </div>
      </section>

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
      <section className="newsletter-section">
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
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-col">
            <div className="logo">ACCS</div>
            <h3 className="footer-title">ACCS IN-TOUCH</h3>
            <p className="footer-text">One Stop for your Hair Accessories</p>
            <div className="social-links">
              <span>f</span>
              <span>t</span>
              <span>p</span>
              <span>in</span>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-list">
              <li>Claw Clips</li>
              <li>Earring</li>
              <li>Scrunchies</li>
              <li>Hair Bows</li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Quick links</h4>
            <ul className="footer-list">
              <li>Home</li>
              <li>Our Company</li>
              <li>About us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-text">📍 Address here</p>
            <p className="footer-text">📧 email@example.com</p>
            <p className="footer-text">📞 +91 1234567890</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 TERMS - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}