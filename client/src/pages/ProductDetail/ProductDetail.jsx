import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom'; // ✅ Added useLocation
import './ProductDetail.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WhatsAppLogo from '../../components/WhatsAppLogo';
import { Heart, ArrowLeft } from 'lucide-react';

// Import fallback images
import halfFace from '../../assets/halfface.png';
import premiumQuality from '../../assets/premiumquality.png';
import tenDayReturn from '../../assets/10dayreturn.png';
import cod from '../../assets/COD.png';
import freeDelivery from '../../assets/freedelivery.png';

// Import similar product images
import goldbow from '../../assets/goldbow.png';
import bowred from '../../assets/bowred.png';
import bow1 from '../../assets/bow1.png';
import violetclip from '../../assets/violetclip.png';

const API_BASE_URL = 'https://acc-in-touch-1.onrender.com/api';

const ProductDetail = () => {
  const { productName } = useParams();
  const location = useLocation(); // ✅ Now properly imported
  const navigate = useNavigate();
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [product, setProduct] = useState(location.state?.product || null);
  const [loading, setLoading] = useState(!location.state?.product);
  const [error, setError] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loadingSimilar, setLoadingSimilar] = useState(false);
  const descriptionRef = useRef(null);

  const FREE_DELIVERY_THRESHOLD = 499;

  // State for wishlist and cart
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Helper function to create URL-friendly slug
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  // Helper function to transform product data
  const transformProduct = (product) => {
    let imageUrl = halfFace;
    
    if (product.image_url) {
      try {
        let imageData = product.image_url;
        
        if (typeof imageData === 'string') {
          const trimmed = imageData.trim();
          
          if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
            imageUrl = trimmed;
          } else if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
            try {
              imageData = JSON.parse(trimmed);
            } catch (parseError) {
              if (trimmed !== '' && trimmed !== 'null' && trimmed !== 'undefined') {
                imageUrl = trimmed;
              }
            }
          } else if (trimmed !== '' && trimmed !== 'null' && trimmed !== 'undefined') {
            imageUrl = trimmed;
          }
        }
        
        if (typeof imageData === 'object' && imageData !== null) {
          if (Array.isArray(imageData)) {
            if (imageData.length > 0) {
              const firstImage = imageData[0];
              if (typeof firstImage === 'object' && firstImage.url) {
                imageUrl = firstImage.url;
              } else if (typeof firstImage === 'string') {
                imageUrl = firstImage;
              }
            }
          } else {
            if (imageData.url) {
              imageUrl = imageData.url;
            } else if (imageData.path) {
              imageUrl = imageData.path;
            } else if (imageData.src) {
              imageUrl = imageData.src;
            }
          }
        }
      } catch (error) {
        console.error('Error processing image_url:', error);
      }
    }
  
    const basePrice = parseFloat(product.basicPricing) || 150;
    const discountPercent = product.discountType ? 
      parseInt(product.discountType.toString().replace('%', '')) : 0;
    const finalPrice = basePrice - (basePrice * discountPercent / 100);
  
    return {
      id: product.id || product._id,
      name: product.productName || 'Unnamed Product',
      price: Math.round(finalPrice),
      originalPrice: discountPercent > 0 ? Math.round(basePrice) : null,
      discount: discountPercent,
      image: imageUrl,
      colors: ['#C00C0C', '#0C8DC0', '#169E5C'],
      category: product.productCategory,
      stock: product.productStatus,
      description: product.productDescription || 'No description available',
      keyFeatures: product.keyFeatures || null,
      additionalInfo: product.additionalInfo || null,
      reviews: product.reviews || null,
      rating: 4
    };
  };

  // Helper function to normalize category for comparison
  const normalizeCategoryForComparison = (category) => {
    if (!category) return '';
    
    const normalized = category.toLowerCase().trim();
    
    const categoryMapping = {
      'claw': 'claws',
      'claws': 'claws',
      'claw clip': 'claws',
      'claw clips': 'claws',
      'claw-clips': 'claws',
      'earring': 'earrings',
      'earrings': 'earrings',
      'scrunchie': 'scrunchies',
      'scrunchies': 'scrunchies',
      'bow': 'hair bow',
      'bows': 'hair bow',
      'hair bow': 'hair bow',
      'hair bows': 'hair bow',
      'hairbow': 'hair bow',
      'hairbows': 'hair bow',
      'hair-bow': 'hair bow',
      'hair-bows': 'hair bow',
      'hair_bow': 'hair bow',
      'hair_bows': 'hair bow'
    };
    
    return categoryMapping[normalized] || normalized;
  };

  // Fetch similar products based on category
  const fetchSimilarProducts = async (currentProduct) => {
    try {
      setLoadingSimilar(true);
      
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
      
      // Normalize current product category
      const currentCategoryNormalized = normalizeCategoryForComparison(currentProduct.category);
      
      // Filter products by same category, exclude current product, limit to 4
      const similar = data
        .filter(p => {
          const productCategoryNormalized = normalizeCategoryForComparison(p.productCategory);
          const isDifferentProduct = (p.id || p._id) !== currentProduct.id;
          const isSameCategory = productCategoryNormalized === currentCategoryNormalized;
          
          return isDifferentProduct && isSameCategory;
        })
        .slice(0, 4)
        .map(p => transformProduct(p));
      
      setSimilarProducts(similar);
    } catch (err) {
      console.error('Error fetching similar products:', err);
      setSimilarProducts([]);
    } finally {
      setLoadingSimilar(false);
    }
  };

  // Fetch product data from backend if not passed via state
  useEffect(() => {
    const fetchProduct = async () => {
      // If product data was passed via navigation state, use it
      if (location.state?.product) {
        setProduct(location.state.product);
        setLoading(false);
        return;
      }

      // Otherwise fetch from API
      try {
        setLoading(true);
        
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
        
        // Find product by matching slug or ID with product name
        const foundProduct = data.find(p => {
          const slug = createSlug(p.productName || '');
          const id = (p.id || p._id || '').toString();
          return slug === productName || id === productName;
        });
        
        if (!foundProduct) {
          throw new Error('Product not found');
        }
        
        const transformed = transformProduct(foundProduct);
        setProduct(transformed);
        setError(null);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productName, location.state]);

  // Fetch similar products when product is loaded
  useEffect(() => {
    if (product && product.category) {
      fetchSimilarProducts(product);
    }
  }, [product]);

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
  const handleProductClick = (product) => {
    const slug = createSlug(product.name);
    navigate(`/product/${slug}`, { state: { product } });
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

  // Add to cart handler for main product
  const handleAddToCart = () => {
    if (!product) return;

    const currentProduct = {
      ...product,
      quantity: quantity
    };

    const existingItem = cart.find(item => item.id === currentProduct.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === currentProduct.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, currentProduct]);
    }
  };

  if (loading) {
    return (
      <div className="product-detail-container">
        <Header 
          activePage="products" 
          cartCount={cart.length} 
          wishlistCount={wishlist.length}
        />
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <p style={{ fontSize: '18px', color: '#666' }}>Loading product...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-detail-container">
        <Header 
          activePage="products" 
          cartCount={cart.length} 
          wishlistCount={wishlist.length}
        />
        <div style={{ 
          textAlign: 'center', 
          padding: '60px 20px',
          backgroundColor: '#fff3f3',
          borderRadius: '15px',
          margin: '20px'
        }}>
          <p style={{ fontSize: '18px', color: '#f44336', marginBottom: '10px' }}>⚠️ Product not found</p>
          <button 
            onClick={() => navigate('/products')}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#9C27B0',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            Back to Products
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <Header 
        activePage="products" 
        cartCount={cart.length} 
        wishlistCount={wishlist.length}
      />

      {/* Back Arrow */}
      <div 
        onClick={() => navigate('/products')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          marginBottom: '20px',
          color: '#666',
          fontSize: '14px',
          fontWeight: '500'
        }}
      >
        <ArrowLeft size={20} />
        <span>Back to Products</span>
      </div>

      <div className="product-main-section">
        <div className="product-images">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>

          <div className="price-section">
            <span className="current-price">₹ {product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="original-price">₹ {product.originalPrice.toLocaleString()}</span>
                <span className="discount">{product.discount}% OFF</span>
              </>
            )}
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
            <button 
              className="add-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart 
            </button>
          </div>

          <div className="features">
            {product.price >= FREE_DELIVERY_THRESHOLD && (
              <div className="feature">
                <img src={freeDelivery} alt="Free Delivery" />
                <span>Free Delivery</span>
              </div>
            )}
            
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
              <p>{product.description || 'This is a beautiful accessory crafted with care and attention to detail. Perfect for adding a touch of elegance to your style.'}</p>
            </div>
          )}
          {activeTab === 'features' && (
            <div className="description-content">
              {product.keyFeatures ? (
                <p>{product.keyFeatures}</p>
              ) : (
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                  <li>High-quality materials for durability</li>
                  <li>Elegant design suitable for various occasions</li>
                  <li>Comfortable to wear throughout the day</li>
                  <li>Easy to maintain and clean</li>
                  <li>Available in multiple color options</li>
                </ul>
              )}
            </div>
          )}
          {activeTab === 'info' && (
            <div className="description-content">
              {product.additionalInfo ? (
                <p>{product.additionalInfo}</p>
              ) : (
                <div style={{ lineHeight: '1.8' }}>
                  <p><strong>Material:</strong> Premium quality materials</p>
                  <p><strong>Care Instructions:</strong> Handle with care, store in a dry place</p>
                  <p><strong>Delivery:</strong> Ships within 2-3 business days</p>
                  <p><strong>Return Policy:</strong> 10-day hassle-free returns</p>
                  <p><strong>Warranty:</strong> Manufacturer warranty included</p>
                </div>
              )}
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="description-content">
              {product.reviews ? (
                <p>{product.reviews}</p>
              ) : (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>⭐⭐⭐⭐ {product.rating}/5</p>
                  <p style={{ fontSize: '14px', color: '#999' }}>No reviews yet. Be the first to review this product!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="similar-products-section" style={{marginRight:'-100px',maxWidth: '150%', overflow: 'hidden'}}>
        <h2 className="section-title">Similar Products</h2>
        {loadingSimilar ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ color: '#666' }}>Loading similar products...</p>
          </div>
        ) : similarProducts.length > 0 ? (
          <div className="products-grid" style={{gap:'20px'}}>
            {similarProducts.map((product) => (
              <div 
                key={product.id} 
                className="product-card"
                style={{cursor: 'pointer'}}
                onClick={() => handleProductClick(product)}
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
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ color: '#666' }}>No similar products available at the moment.</p>
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppLogo />
    </div>
  );
};

export default ProductDetail;