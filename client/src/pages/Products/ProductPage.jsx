import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Heart } from 'lucide-react';
import './ProductPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import halfface from '../../assets/halfface.png';
import WhatsAppLogo from '../../components/WhatsAppLogo';

const API_BASE_URL = 'https://acc-in-touch-1.onrender.com/api';

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = useParams();
  
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  // Filter state
  const [selectedFilters, setSelectedFilters] = useState({
    products: [],
    discounts: [],
    ratings: [],
    priceRanges: [],
    colors: []
  });

  const [showAllTrending, setShowAllTrending] = useState(false);

  // Helper function to create URL-friendly slug
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const normalizeCategoryName = (category) => {
    if (!category) return '';
    
    const normalized = category.toLowerCase().trim();
    
    const categoryMapping = {
      'claw': 'Claws',
      'claws': 'Claws',
      'claw clip': 'Claws',
      'claw clips': 'Claws',
      'claw-clips': 'Claws',
      'earring': 'Earrings',
      'earrings': 'Earrings',
      'scrunchie': 'Scrunchies',
      'scrunchies': 'Scrunchies',
      'bow': 'Hair bow',
      'bows': 'Hair bow',
      'hair bow': 'Hair bow',
      'hair bows': 'Hair bow',
      'hairbow': 'Hair bow',
      'hairbows': 'Hair bow',
      'hair-bow': 'Hair bow',
      'hair-bows': 'Hair bow',
      'hair_bow': 'Hair bow',
      'hair_bows': 'Hair bow'
    };
    
    return categoryMapping[normalized] || category;
  };

  // Helper function to transform product data from backend
  const transformProduct = (product) => {
    let imageUrl = halfface;
    
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
      price: finalPrice,
      priceDisplay: `₹${Math.round(finalPrice)}`,
      originalPrice: discountPercent > 0 ? basePrice : null,
      originalPriceDisplay: discountPercent > 0 ? `₹${Math.round(basePrice)}` : null,
      discount: discountPercent > 0 ? `${discountPercent}%` : null,
      discountPercent: discountPercent,
      image: imageUrl,
      colors: ['#C00C0C', '#0C8DC0', '#169E5C'],
      category: normalizeCategoryName(product.productCategory),
      stock: product.productStatus,
      description: product.productDescription,
      rating: 4,
      createdAt: product.createdAt
    };
  };

  useEffect(() => {
    const fetchProducts = async () => {
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
        const transformed = data.map(transformProduct);
        
        setAllProducts(transformed);
        
        const trending = [...transformed]
          .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
          .slice(0, 4);
        setTrendingProducts(trending);
        
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getDominantColor = (colorCode) => {
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
    return colorMap[colorCode] || 'Other';
  };

  const getHeroTitle = () => {
    if (selectedFilters.products.length === 4) {
      return 'All Products';
    }
    if (selectedFilters.products.length > 0) {
      const niceNames = selectedFilters.products.map(category => {
        switch(category) {
          case 'Hair bow': return 'Beautiful Hair Bows';
          case 'Earrings': return 'Elegant Earrings';
          case 'Scrunchies': return 'Soft Scrunchies';
          case 'Claws': return 'Trendy Claws';
          default: return category;
        }
      });
      return niceNames.join(' & ');
    }
    switch (category) {
      case 'hair-bows': return 'Beautiful Hair Bows';
      case 'earring': return 'Elegant Earrings';
      case 'scrunchies': return 'Soft Scrunchies';
      case 'claw-clips': return 'Trendy Claws';
      default: return 'End Of Season Sale Up To';
    }
  };

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (category) {
      const categoryMap = {
        'claw-clips': 'Claws',
        'earring': 'Earrings',
        'hair-bows': 'Hair bow',
        'scrunchies': 'Scrunchies'
      };
      
      const categoryName = categoryMap[category];
      if (categoryName && !selectedFilters.products.includes(categoryName)) {
        setSelectedFilters(prev => ({
          ...prev,
          products: [categoryName]
        }));
      }
    }
  }, [category]);

  useEffect(() => {
    let filtered = [...allProducts];
    
    if (location.state?.searchQuery) {
      const query = location.state.searchQuery.toLowerCase();
      setSearchQuery(query);
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    if (selectedFilters.products.length > 0) {
      filtered = filtered.filter(p => selectedFilters.products.includes(p.category));
    }

    if (selectedFilters.ratings.length > 0) {
      filtered = filtered.filter(p => selectedFilters.ratings.includes(p.rating));
    }

    if (selectedFilters.discounts.length > 0) {
      filtered = filtered.filter(p => {
        const discount = p.discountPercent;
        return selectedFilters.discounts.some(filterDiscount => {
          if (filterDiscount === 'No Discount') return discount === 0 || !discount;
          if (filterDiscount === '10% Off') return discount >= 10 && discount < 25;
          if (filterDiscount === '25% Off') return discount >= 25 && discount < 35;
          if (filterDiscount === '35% Off') return discount >= 35 && discount < 50;
          if (filterDiscount === '50% Off') return discount >= 50 && discount < 60;
          if (filterDiscount === 'Above 50%') return discount >= 60;
          return false;
        });
      });
    }

    if (selectedFilters.priceRanges.length > 0) {
      filtered = filtered.filter(p => {
        const price = p.price;
        return selectedFilters.priceRanges.some(range => {
          if (range === '₹0 - ₹100') return price >= 0 && price <= 100;
          if (range === '₹100 - ₹200') return price > 100 && price <= 200;
          if (range === '₹200 - ₹300') return price > 200 && price <= 300;
          if (range === 'Above ₹300') return price > 300;
          return false;
        });
      });
    }

    if (selectedFilters.colors.length > 0) {
      filtered = filtered.filter(p => {
        return p.colors.some(colorCode => {
          const colorName = getDominantColor(colorCode);
          return selectedFilters.colors.includes(colorName);
        });
      });
    }

    setFilteredProducts(filtered);
  }, [category, location.state, selectedFilters, allProducts]);

  useEffect(() => {
    if (!category && !loading) {
      setFilteredProducts(allProducts);
    }
  }, [category, allProducts, loading]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    const categoryMap = {
      'earrings': 'earring',
      'earring': 'earring',
      'scrunchies': 'scrunchies',
      'scrunchie': 'scrunchies',
      'claws': 'claw-clips',
      'claw clips': 'claw-clips',
      'claw': 'claw-clips',
      'hair bows': 'hair-bows',
      'hair bow': 'hair-bows',
      'bows': 'hair-bows',
      'bow': 'hair-bows'
    };
    
    const lowerQuery = query.toLowerCase().trim();
    const matchedCategory = categoryMap[lowerQuery];
    
    if (matchedCategory) {
      navigate(`/category/${matchedCategory}`);
      window.scrollTo(0, 0);
    } else {
      const filtered = allProducts.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

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

  const getCartCount = () => {
    return cart.length;
  };

  // ✅ FIXED: Pass entire product object and create slug from name
  const handleProductClick = (product) => {
    const slug = createSlug(product.name);
    navigate(`/product/${slug}`, { state: { product } });
    window.scrollTo(0, 0);
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => {
      const currentValues = prev[filterType];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      
      return { ...prev, [filterType]: newValues };
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      products: [],
      discounts: [],
      ratings: [],
      priceRanges: [],
      colors: []
    });
    setSearchQuery('');
    if (category) {
      navigate('/products');
    }
  };

  const getPageTitle = () => {
    if (loading) return 'Loading Products...';
    if (searchQuery) {
      return `Search Results for "${searchQuery}" (${filteredProducts.length} items)`;
    }
    
    if (selectedFilters.products.length === 4 || (selectedFilters.products.length === 0 && !category)) {
      return `All Products (${filteredProducts.length} items)`;
    }
    if (selectedFilters.products.length > 0) {
      const niceNames = selectedFilters.products.map(category => {
        switch(category) {
          case 'Hair bow': return 'Beautiful Hair Bows';
          case 'Earrings': return 'Elegant Earrings';
          case 'Scrunchies': return 'Soft Scrunchies';
          case 'Claws': return 'Trendy Claws';
          default: return category;
        }
      });
      return `${niceNames.join(' & ')} (${filteredProducts.length} items)`;
    }
    
    if (category) {
      const categoryMap = {
        'claw-clips': 'All Products',
        'earring': 'All Products',
        'hair-bows': 'All Products',
        'scrunchies': 'All Products'
      };
      return `${categoryMap[category] || 'All Products'} (${filteredProducts.length} items)`;
    }
    
    return `All Products (${filteredProducts.length} items)`;
  };

  return (
    <div className="page-container">
      <Header 
        activePage="products" 
        cartCount={getCartCount()} 
        wishlistCount={wishlist.length}
        onSearch={handleSearch}
      />

      <div className="hero-banner">
        <div className="hero-images">
          <img src={halfface} alt="Model" className="hero-image-left" />
          <img src={halfface} alt="Model" className="hero-image-right" />
        </div>
        <div className="hero-content">
          <p className="hero-subtitle">Last Chance</p>
          <h1 className="hero-title">{getHeroTitle()}</h1>
          <h2 className="hero-discount">50% OFF</h2>
        </div>
      </div>

      <div className="main-content">
        <div className="content-wrapper">
          <aside className="filters-sidebar">
            <div className="filters-container">
              <h3 className="filters-title">All Filters</h3>
              
              <div className="filter-section">
                <h4 className="filter-section-title">Product</h4>
                <div className="filter-options">
                  {['Hair bow', 'Earrings', 'Scrunchies', 'Claws'].map(item => (
                    <label key={item} className="filter-option">
                      <input 
                        type="checkbox"
                        checked={selectedFilters.products.includes(item)}
                        onChange={() => handleFilterChange('products', item)}
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h4 className="filter-section-title">Discount Offer</h4>
                <div className="filter-options">
                  {['No Discount', '10% Off', '25% Off', '35% Off', '50% Off', 'Above 50%'].map(item => (
                    <label key={item} className="filter-option">
                      <input 
                        type="checkbox"
                        checked={selectedFilters.discounts.includes(item)}
                        onChange={() => handleFilterChange('discounts', item)}
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h4 className="filter-section-title">Rating</h4>
                <div className="filter-options">
                  {[4, 3, 2, 1].map(stars => (
                    <label key={stars} className="filter-option">
                      <input 
                        type="checkbox"
                        checked={selectedFilters.ratings.includes(stars)}
                        onChange={() => handleFilterChange('ratings', stars)}
                      />
                      <div className="rating-stars">
                        {[...Array(stars)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h4 className="filter-section-title">Price</h4>
                <div className="filter-options">
                  {['₹0 - ₹100', '₹100 - ₹200', '₹200 - ₹300', 'Above ₹300'].map(range => (
                    <label key={range} className="filter-option">
                      <input 
                        type="checkbox"
                        checked={selectedFilters.priceRanges.includes(range)}
                        onChange={() => handleFilterChange('priceRanges', range)}
                      />
                      <span>{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h4 className="filter-section-title">Color</h4>
                <div className="filter-options">
                  {[
                    { name: 'Blue', color: '#3B82F6' },
                    { name: 'Red', color: '#EF4444' },
                    { name: 'Green', color: '#10B981' },
                    { name: 'Gold', color: '#FFD700' },
                    { name: 'Pink', color: '#FFB6C1' },
                    { name: 'Purple', color: '#9C27B0' },
                    { name: 'Brown', color: '#8B4513' },
                    { name: 'Black', color: '#000000' },
                    { name: 'White', color: '#FFFFFF' }
                  ].map(item => (
                    <label key={item.name} className="filter-option">
                      <input 
                        type="checkbox"
                        checked={selectedFilters.colors.includes(item.name)}
                        onChange={() => handleFilterChange('colors', item.name)}
                      />
                      <div className="color-circle" style={{ backgroundColor: item.color }}></div>
                      <span>{item.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="products-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', marginRight: '-13rem' }}>
              <h2 className="section-title" style={{ color: 'rgb(156, 39, 176)', marginBottom: 0 }}>{getPageTitle()}</h2>
              {(selectedFilters.products.length > 0 || 
                selectedFilters.ratings.length > 0 || 
                selectedFilters.discounts.length > 0 || 
                selectedFilters.priceRanges.length > 0 || 
                selectedFilters.colors.length > 0) && (
                <button 
                  onClick={clearAllFilters}
                  style={{
                    padding: '8px 16px',
                    background: '#f44336',
                    color: 'white',
                    marginRight: '10.5rem',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  Clear All Filters
                </button>
              )}
            </div>
            
            {loading ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <p style={{ fontSize: '18px', color: '#666' }}>Loading products...</p>
              </div>
            ) : error ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '60px 20px',
                backgroundColor: '#fff3f3',
                borderRadius: '15px',
                margin: '20px 0'
              }}>
                <p style={{ fontSize: '18px', color: '#f44336', marginBottom: '10px' }}>⚠️ Error loading products from backend</p>
                <p style={{ fontSize: '14px', color: '#666' }}>Error: {error}</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="no-results">
                <p>No products found matching your criteria.</p>
                <button 
                  className="hero-button" 
                  onClick={clearAllFilters}
                  style={{ marginTop: '20px' }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    className="product-card"
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {product.originalPriceDisplay && (
                            <span style={{
                              fontSize: '14px',
                              color: '#999',
                              textDecoration: 'line-through'
                            }}>
                              {product.originalPriceDisplay}
                            </span>
                          )}
                          <span className="product-price">{product.priceDisplay}</span>
                        </div>
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
            )}

            
            {/* Trending Products */}
            {!category && !searchQuery && trendingProducts.length > 0 && (
              <div className="trending-section">
                <div className="trending-header">
                  <h2 className="section-title">Trending Product</h2>
                  <button 
                    className="trending-button" 
                    onClick={() => setShowAllTrending(!showAllTrending)}
                  >
                    {showAllTrending ? 'Show Less' : 'See All Trending Products'}
                  </button>
                </div>
                <div className="products-grid">
                  {(showAllTrending ? trendingProducts : trendingProducts.slice(0, 2)).map(product => (
                    <div 
                      key={product.id} 
                      className="product-card"
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
                            {product.colors.slice(0, 3).map((color, idx) => (
                              <div key={idx} className="color-dot" style={{ backgroundColor: color }}></div>
                            ))}
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {product.originalPriceDisplay && (
                              <span style={{
                                fontSize: '14px',
                                color: '#999',
                                textDecoration: 'line-through'
                              }}>
                                {product.originalPriceDisplay}
                              </span>
                            )}
                            <span className="product-price">{product.priceDisplay}</span>
                          </div>
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
            )}
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="newsletter-wrapper">
          <div className="newsletter-section">
            <div className="newsletter-container">
              <div className="newsletter-heading">
                <h2>Subscribe Our</h2>
                <h2>Newsletter</h2>
              </div>
              <div className="newsletter-form-container">
                <p className="newsletter-description">
                  Discover quality fashion that reflects your style and makes everyday living more enjoyable.
                </p>
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="newsletter-input"
                  />
                  <button className="newsletter-submit">Subscribe Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppLogo />
    </div>
  );
};

export default ProductPage;