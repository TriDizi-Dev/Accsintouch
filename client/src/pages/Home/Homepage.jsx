import React, { useState } from 'react';
import { Heart, ShoppingCart, Search, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import './Homepage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import Carousel from '../../components/caroselbanner/Carousel';
// Image imports from assets folder
import bands2 from '../../assets/bands2.png';
import bowred from '../../assets/bowred.png';
import trending3 from '../../assets/trending3.png';
import goldbow from '../../assets/goldbow.png';
import bands from '../../assets/bands.png';
import bow1 from '../../assets/bow1.png';
import review3 from '../../assets/review3.jfif';
import review4 from '../../assets/review4.jfif';
import violetclip from '../../assets/violetclip.png';
import earring1 from '../../assets/earring1.png';
import earring3 from '../../assets/earring3.png';
import earring4 from '../../assets/earring4.png';
import whiteclip from '../../assets/whiteclip.png';
import earring2 from '../../assets/earring2.png';
import earring6 from '../../assets/earring6.png';
import earring7 from '../../assets/earring7.png';
import earring8 from '../../assets/earring8.png';
import earringcategory from '../../assets/earringcategory.png';
import fluffyredband from '../../assets/fluffyredband.png';
import girlwithbun from '../../assets/girlwithbun.png';
import girlearring from '../../assets/girlearring.png';
import halfface from '../../assets/halfface.png';
import shippingandquality from '../../assets/shippingandquality.png';
import support from '../../assets/support.png';
import returnlogo from '../../assets/returnlogo.png';
import LOGO from '../../assets/LOGO.png';
import review1 from '../../assets/review1.jfif';
import review2 from '../../assets/review2.jfif';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import earring5 from '../../assets/earring5.png';
import claw4 from '../../assets/claw4.png';
import claw5 from '../../assets/claw5.jpg';
import claw7 from '../../assets/claw7.png';
import claw8 from '../../assets/claw8.png';
import claw9 from '../../assets/claw9.png';
import bow4 from '../../assets/bow4.png';
import bow5 from '../../assets/bow5.png';
import bow6 from '../../assets/bow6.png';
import bow8 from '../../assets/bow8.png';
import bow9 from '../../assets/bow9.jpg';
import scrunchie4 from '../../assets/scrunchie4.png';
import scrunchie5 from '../../assets/scrunchie5.png';
import scrunchie6 from '../../assets/scrunchie6.png';
import scrunchie7 from '../../assets/scrunchie7.png';
import scrunchie8 from '../../assets/scrunchie8.png';
import WhatsAppLogo from '../../components/WhatsAppLogo';

const API_BASE_URL = 'https://acc-in-touch-1.onrender.com/api';

export default function HomePage() {
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [currentEarringSlide, setCurrentEarringSlide] = useState(0);
  const [wishlistItems, setWishlistItems] = useState(new Set());
  const [cartItems, setCartItems] = useState(new Set());
  const navigate = useNavigate();

  // Fallback products
  const fallbackProducts = {
    claws: [
      { id: 4, name: 'Claw Clip', price: '₹15', image: violetclip, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'claw-clips' },
      { id: 14, name: 'White Clip', price: '₹15', image: whiteclip, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'claw-clips' },
      { id: 15, name: 'Designer Clip', price: '₹15', image: trending3, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'claw-clips' },
      { id: 21, name: 'Violet Clip', price: '₹15', image: claw4, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'claw-clips' },
      { id: 22, name: 'Elegant Clip', price: '₹15', image: claw5, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'claw-clips' },
      { id: 23, name: 'Trendy Clip', price: '₹15', image: claw7, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'claw-clips' },
      { id: 24, name: 'Classic Clip', price: '₹15', image: claw9, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'claw-clips' },
      { id: 25, name: 'Modern Clip', price: '₹15', image: claw8, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'claw-clips' },
    ],
    earrings: [
      { id: 6, name: 'Gold Earring', price: '₹15', image: earring1, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'earring' },
      { id: 7, name: 'Designer Earring', price: '₹15', image: earring3, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'earring' },
      { id: 8, name: 'Triangle Earring', price: '₹15', image: earring4, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'earring' },
      { id: 26, name: 'Silver Earring', price: '₹15', image: earring5, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'earring' },
      { id: 27, name: 'Pearl Earring', price: '₹15', image: earring2, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'earring' },
      { id: 28, name: 'Diamond Earring', price: '₹15', image: earring6, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'earring' },
      { id: 29, name: 'Crystal Earring', price: '₹15', image: earring7, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'earring' },
      { id: 30, name: 'Elegant Earring', price: '₹15', image: earring8, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'earring' },
    ],
    hairBows: [
      { id: 1, name: 'Organza Bow', price: '₹15', image: goldbow, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'hair-bows' },
      { id: 2, name: 'Velvet Bow', price: '₹15', image: bowred, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'hair-bows' },
      { id: 3, name: 'Classic Bow', price: '₹15', image: bow1, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'hair-bows' },
      { id: 31, name: 'Satin Bow', price: '₹15', image: bow4, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'hair-bows' },
      { id: 32, name: 'Ribbon Bow', price: '₹15', image: bow5, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'hair-bows' },
      { id: 33, name: 'Silk Bow', price: '₹15', image: bow6, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'hair-bows' },
      { id: 34, name: 'Designer Bow', price: '₹15', image: bow8, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'hair-bows' },
      { id: 35, name: 'Premium Bow', price: '₹15', image: bow9, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'hair-bows' },
    ],
    scrunchies: [
      { id: 17, name: 'Red Scrunchie', price: '₹15', image: fluffyredband, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'scrunchies' },
      { id: 18, name: 'Fluffy Band', price: '₹15', image: bands, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'scrunchies' },
      { id: 19, name: 'Designer Band', price: '₹15', image: bands2, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'scrunchies' },
      { id: 36, name: 'Pink Scrunchie', price: '₹15', image: scrunchie4, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'scrunchies' },
      { id: 37, name: 'Velvet Band', price: '₹15', image: scrunchie5, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'scrunchies' },
      { id: 38, name: 'Satin Band', price: '₹15', image: scrunchie6, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'scrunchies' },
      { id: 39, name: 'Classic Scrunchie', price: '₹15', image: scrunchie7, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'scrunchies' },
      { id: 40, name: 'Premium Band', price: '₹15', image: scrunchie8, colors: ['#C00C0C', '#0C8DC0', '#169E5C'], category: 'scrunchies' },
    ]
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // State for all products and categories
  const [newArrivals, setNewArrivals] = useState([]);
  const [clawProducts, setClawProducts] = useState([]);
  const [earringProducts, setEarringProducts] = useState([]);
  const [hairBowProducts, setHairBowProducts] = useState([]);
  const [scrunchieProducts, setScrunchieProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper function to transform product data from backend
  const transformProduct = (product) => {
    // Extract image URL from backend's JSON format
    let imageUrl = bow1; // Default fallback
    
    if (product.image_url) {
      if (typeof product.image_url === 'string') {
        imageUrl = product.image_url;
      } else if (product.image_url.url) {
        imageUrl = product.image_url.url;
      }
    }

    // Calculate price with discount
    const basePrice = parseFloat(product.basicPricing) || 15;
    const discountPercent = product.discountType ? parseInt(product.discountType.replace('%', '')) : 0;
    const finalPrice = basePrice - (basePrice * discountPercent / 100);

    return {
      id: product.id,
      name: product.productName || 'Unnamed Product',
      price: `₹${finalPrice.toFixed(0)}`,
      originalPrice: discountPercent > 0 ? `₹${basePrice}` : null,
      discount: discountPercent > 0 ? product.discountType : null,
      image: imageUrl,
      colors: ['#C00C0C', '#0C8DC0', '#169E5C'],
      category: product.productCategory,
      stock: product.productStatus,
      description: product.productDescription,
      createdAt: product.createdAt
    };
  };

  // Fetch New Arrivals
  React.useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        setLoading(true);
        console.log('Fetching new arrivals from:', `${API_BASE_URL}/Product`);
        
        const response = await fetch(`${API_BASE_URL}/Product`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetched data:', data);
        
        const transformedProducts = data.map(transformProduct);
        
        // Get the 4 most recent products
        const trending = transformedProducts
          .sort((a, b) => {
            const dateA = new Date(b.createdAt || 0);
            const dateB = new Date(a.createdAt || 0);
            return dateA - dateB;
          })
          .slice(0, 4);

        setNewArrivals(trending);
        setError(null);
      } catch (err) {
        console.error('Error fetching new arrivals:', err);
        setError(err.message);
        setNewArrivals(fallbackProducts.hairBows.slice(0, 4));
      } finally {
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  // Fetch Category Products
  React.useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setCategoryLoading(true);
        console.log('Fetching category products from:', `${API_BASE_URL}/Product`);
        
        const response = await fetch(`${API_BASE_URL}/Product`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('All products fetched:', data);
        
        // Transform all products
        const transformedProducts = data.map(transformProduct);
        
        // Filter products by category and limit to 8 each
        const claws = transformedProducts.filter(p => p.category === 'claws').slice(0, 8);
        const earrings = transformedProducts.filter(p => p.category === 'Earrings').slice(0, 8);
        const hairBows = transformedProducts.filter(p => p.category === 'hairBows').slice(0, 8);
        const scrunchies = transformedProducts.filter(p => p.category === 'scrunchies').slice(0, 8);
        
        // Set state for each category (use fallback if empty)
        setClawProducts(claws.length > 0 ? claws : fallbackProducts.claws);
        setEarringProducts(earrings.length > 0 ? earrings : fallbackProducts.earrings);
        setHairBowProducts(hairBows.length > 0 ? hairBows : fallbackProducts.hairBows);
        setScrunchieProducts(scrunchies.length > 0 ? scrunchies : fallbackProducts.scrunchies);
        
        console.log('✅ Category Products:', {
          claws: claws.length,
          earrings: earrings.length,
          hairBows: hairBows.length,
          scrunchies: scrunchies.length
        });
        
      } catch (err) {
        console.error('Error fetching category products:', err);
        // Use fallback products
        setClawProducts(fallbackProducts.claws);
        setEarringProducts(fallbackProducts.earrings);
        setHairBowProducts(fallbackProducts.hairBows);
        setScrunchieProducts(fallbackProducts.scrunchies);
      } finally {
        setCategoryLoading(false);
      }
    };

    fetchCategoryProducts();
  }, []);

  const reviews = [
    { 
      name: 'Saurabh Agarwal', 
      image: review1,
      rating: 4.5,
      text: 'Amazing quality products! The hair accessories are beautiful and durable. Highly recommend AccsInTouch for all your accessory needs.'
    },
    { 
      name: 'Shruti', 
      image: review2,
      rating: 4.2,
      text: 'Absolutely love the earrings I purchased! They are elegant and lightweight. Perfect for daily wear and special occasions.'
    },
    { 
      name: 'Bindu Priya', 
      image: review3,
      rating: 4.1,
      text: 'Great collection of hair bows and clips. The designs are trendy and the prices are affordable. Will definitely shop again!'
    },
    { 
      name: 'Anand Bhat', 
      image: review4,
      rating: 4.8,
      text: 'Excellent customer service and fast delivery. The scrunchies are of premium quality and look exactly like the pictures.'
    },
  ];

  const [updates, setUpdates] = useState([
    { id: 1, message: " New Arrivals - Shop the Latest Collection!" },
    { id: 2, message: " Free Shipping on Orders Above ₹499" },
    { id: 4, message: " Limited Time Offer - Up to 50% Off" },
  ]);

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

  const handleNavigateToProducts = () => {
    navigate('/products');
    window.scrollTo(0, 0);
  };

  const getResponsiveGrid = () => {
    if (windowWidth <= 600) return '1fr';
    if (windowWidth <= 992) return 'repeat(2, 1fr)';
    return 'repeat(4, 1fr)';
  };

  const getCategoryGrid = () => {
    if (windowWidth <= 600) return 'repeat(2, 1fr)';
    if (windowWidth <= 992) return 'repeat(3, 1fr)';
    return 'repeat(4, 1fr)';
  };

  const handleNavigateToCategory = (category) => {
    navigate(`/category/${category}`);
    window.scrollTo(0, 0);
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
    window.scrollTo(0, 0);
  };

  // Reusable Product Card Component
  const ProductCard = ({ product }) => (
    <div 
      className="product-card"
      onClick={() => handleProductClick(product)}
      style={{ cursor: 'pointer', width: '100%', marginTop: '10px' }}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {product.originalPrice && (
              <span style={{
                fontSize: '14px',
                color: '#999',
                textDecoration: 'line-through'
              }}>
                {product.originalPrice}
              </span>
            )}
            <span className="product-price">{product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="accs-container">
      <Header 
        cartCount={cartItems.size} 
        wishlistCount={wishlistItems.size}
        activePage="home"
        onCartClick={() => navigate('/cart')}
        onWishlistClick={() => navigate('/wishlist')}
      />

      {/* Top Updates Ticker */}
      <div className="updates-ticker-container" style={{ marginTop: '0px', marginBottom: '-37px' }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          direction="horizontal"
          className="updates-swiper"
        >
          {updates.map((update) => (
            <SwiperSlide key={update.id}>
              <div className="update-slide">
                <p>{update.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Carousel
        handleNavigateToProducts={handleNavigateToProducts}
        handleNavigateToCategory={handleNavigateToCategory}
      />

      {/* Browse Categories Section */}
      <section className="section" style={{ marginTop: '-30px', paddingTop: '30px' }}>
        <h2 className="section-title">Browse Categories</h2>
        <div className="categories-grid" style={{
          display: 'grid',
          gridTemplateColumns: getCategoryGrid(),
          gap: '20px',
          marginBottom: '0'
        }}>
          <div className="category-card" onClick={() => handleNavigateToCategory('claw-clips')}>
            <img src={whiteclip} alt="Claw Clips" className="category-icon" />
            <p className="category-name">Claws</p>
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

      {/* Browse Categories - Claw Clips */}
      <section className="section">
        <h2 className="section-title">Claws</h2>
        {categoryLoading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Loading products...</p>
          </div>
        ) : null}
        <div className="products-grid" style={{
          display: 'grid',
          gridTemplateColumns: getResponsiveGrid(),
          maxWidth: '100%',
          marginBottom: '-50px',
          marginTop: '10px',
          gap: '20px'
        }}>
          {clawProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Browse Categories - Earrings */}
      <section className="section">
        <h2 className="section-title">Earrings</h2>
        {categoryLoading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Loading products...</p>
          </div>
        ) : null}
        <div className="products-grid" style={{
          display: 'grid',
          gridTemplateColumns: getResponsiveGrid(),
          marginBottom: '-50px',
          marginTop: '10px',
          maxWidth: '100%',
          gap: '20px'
        }}>
          {earringProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Browse Categories - Hair Bows */}
      <section className="section">
        <h2 className="section-title">Hair Bows</h2>
        {categoryLoading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Loading products...</p>
          </div>
        ) : null}
        <div className="products-grid" style={{
          marginBottom: '-50px',
          marginTop: '10px',
          display: 'grid',
          gridTemplateColumns: getResponsiveGrid(),
          maxWidth: '100%',
          gap: '20px'
        }}>
          {hairBowProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Browse Categories - Scrunchies */}
      <section className="section">
        <h2 className="section-title">Scrunchies</h2>
        {categoryLoading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Loading products...</p>
          </div>
        ) : null}
        <div className="products-grid" style={{
          marginBottom: '-20px',
          marginTop: '10px',
          display: 'grid',
          gridTemplateColumns: getResponsiveGrid(),
          maxWidth: '100%',
          gap: '20px'
        }}>
          {scrunchieProducts.map(product => (
            <ProductCard key={product.id} product={product} />
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

      {/* New Arrivals */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">NEW ARRIVALS</h2>
        </div>
        
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Loading new arrivals...</p>
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#f44336' }}>
            <p>Error loading products. Showing fallback products.</p>
          </div>
        ) : null}
        
        <div className="products-grid" style={{
          display: 'grid',
          gridTemplateColumns: getResponsiveGrid(),
          maxWidth: '100%',
          gap: '20px'
        }}>
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features */}
      <div className="features-section-contact" style={{ marginTop: '-10px', marginBottom: '10px' }}>
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
      <section className="section" style={{ marginBottom: '-70px' }}>
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
              <div className="review-rating" style={{ marginBottom: '10px' }}>
                <span className="rating-number">{review.rating}</span>
              </div>
              <h4 className="review-name">{review.name}</h4>
              <p className="review-role">{review.role}</p>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer /> 
      <WhatsAppLogo />
    </div>
  );
}