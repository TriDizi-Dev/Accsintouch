import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Heart, Search, Lock } from 'lucide-react';
import './ProductPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import halfface from '../../assets/halfface.png';
import bands from '../../assets/bands.png';
import violetclip from '../../assets/violetclip.png';
import bow1 from '../../assets/bow1.png';
import goldbow from '../../assets/goldbow.png';
import earring1 from '../../assets/earring1.png';
import earring2 from '../../assets/earring2.png';
import earring3 from '../../assets/earring3.png';
import trending4 from '../../assets/trending4.png';
import trending3 from '../../assets/trending3.png';
import bands2 from '../../assets/bands2.png';
import bowred from '../../assets/bowred.png';
import earring4 from '../../assets/earring4.png';
import earring5 from '../../assets/earring5.png';
import fluffyredband from '../../assets/fluffyredband.png';
import whiteclip from '../../assets/whiteclip.png';

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = useParams();
  
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
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

  // Calculate discount percentage for a product
  const getDiscountPercentage = (product) => {
    if (!product.originalPrice) return 0;
    return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  };

  // Get dominant color from product colors
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
      // Map category names to nice display names
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
      default: return 'END OF SEASON SALE UP TO';
    }
  };

  // All products data
  const allProducts = [
    { id: 1, name: 'Organza Bow', price: 150, originalPrice: 250, rating: 4, colors: ['#8B4513', '#000000', '#D2691E'], image: bands, category: 'Hair bow' },
    { id: 2, name: 'Purple Claw Clip', price: 150, originalPrice: 250, rating: 4, colors: ['#DDA0DD', '#FFB6C1', '#E6E6FA'], image: violetclip, category: 'Claws' },
    { id: 3, name: 'Hair Bow Classic', price: 150, originalPrice: 250, rating: 4, colors: ['#F5F5DC', '#8B4513', '#000000'], image: bow1, category: 'Hair bow' },
    { id: 4, name: 'Gold Bow', price: 150, originalPrice: 250, rating: 4, colors: ['#FFD700', '#FFA500', '#DAA520'], image: goldbow, category: 'Hair bow' },
    { id: 5, name: 'Red Bow', price: 150, originalPrice: 250, rating: 4, colors: ['#8B0000', '#A0522D', '#800000'], image: bowred, category: 'Hair bow' },
    { id: 6, name: 'Velvet Bow', price: 150, originalPrice: 250, rating: 4, colors: ['#FFB6C1', '#808080', '#000000'], image: bands2, category: 'Hair bow' },
    { id: 7, name: 'Diamond Earring', price: 150, originalPrice: 250, rating: 4, colors: ['#FFD700', '#F5DEB3', '#B8860B'], image: earring5, category: 'Earrings' },
    { id: 8, name: 'Gold Hoop Earring', price: 150, originalPrice: 250, rating: 4, colors: ['#FFD700', '#C0C0C0', '#CD7F32'], image: earring2, category: 'Earrings' },
    { id: 9, name: 'Pearl Earring', price: 150, originalPrice: 250, rating: 3, colors: ['#FFFFFF', '#F5DEB3', '#E5E4E2'], image: earring1, category: 'Earrings' },
    { id: 10, name: 'Designer Earring', price: 150, originalPrice: 250, rating: 4, colors: ['#FFD700', '#C0C0C0', '#E5E4E2'], image: earring3, category: 'Earrings' },
    { id: 11, name: 'Triangle Earring', price: 150, originalPrice: 250, rating: 4, colors: ['#FFD700', '#FFFF00', '#DAA520'], image: earring4, category: 'Earrings' },
    { id: 12, name: 'White Claw Clip', price: 150, originalPrice: 250, rating: 4, colors: ['#FFFFFF', '#808080', '#000000'], image: whiteclip, category: 'Claws' },
    { id: 13, name: 'Fluffy Scrunchie', price: 150, originalPrice: 250, rating: 4, colors: ['#FF0000', '#FFB6C1', '#FF69B4'], image: fluffyredband, category: 'Scrunchies' },
    { id: 14, name: 'Velvet Scrunchie', price: 150, originalPrice: 250, rating: 3, colors: ['#000000', '#8B4513', '#A0522D'], image: bands2, category: 'Scrunchies' },
  ];

  const trendingProducts = [
    { id: 101, name: 'Ear Ring', price: 120, originalPrice: 220, rating: 4, colors: ['#3B82F6', '#2196F3', '#0C8DC0'], image: earring2, category: 'Earrings' },
    { id: 102, name: 'Classic Bow', price: 250, originalPrice: 350, rating: 5, colors: ['#FF0000', '#8B0000', '#C00C0C'], image: bow1, category: 'Hair bow' },
    { id: 103, name: 'Claw Clip', price: 180, originalPrice: 280, rating: 5, colors: ['#FFD700', '#FFA500', '#FF69B4'], image: trending3, category: 'Claws' },
    { id: 104, name: 'Ear Ring', price: 200, originalPrice: 300, rating: 5, colors: ['#9C27B0', '#FF69B4', '#FFD700'], image: trending4, category: 'Earrings' },
  ];
  
  const [showAllTrending, setShowAllTrending] = useState(false);

  // Load wishlist and cart from localStorage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Set initial filter based on URL category
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
    } else if (!category && !searchQuery) {
      // When on /products page (all products), check all categories
      setSelectedFilters(prev => ({
        ...prev,
        products: ['Hair bow', 'Earrings', 'Scrunchies', 'Claws']
      }));
    }
  }, [category]);

  // Handle category filtering from URL
  useEffect(() => {
    let filtered = [...allProducts];
    
    // Filter by search query first
    if (location.state?.searchQuery) {
      const query = location.state.searchQuery.toLowerCase();
      setSearchQuery(query);
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    // Apply product type filters
    if (selectedFilters.products.length > 0) {
      filtered = filtered.filter(p => selectedFilters.products.includes(p.category));
    }

    // Apply rating filters
    if (selectedFilters.ratings.length > 0) {
      filtered = filtered.filter(p => selectedFilters.ratings.includes(p.rating));
    }

    // Apply discount filters
    if (selectedFilters.discounts.length > 0) {
      filtered = filtered.filter(p => {
        const discount = getDiscountPercentage(p);
        return selectedFilters.discounts.some(filterDiscount => {
          if (filterDiscount === '10% Off') return discount >= 10 && discount < 25;
          if (filterDiscount === '25% Off') return discount >= 25 && discount < 35;
          if (filterDiscount === '35% Off') return discount >= 35 && discount < 50;
          if (filterDiscount === '50% Off') return discount >= 50 && discount < 60;
          if (filterDiscount === 'Above 50%') return discount >= 60;
          return false;
        });
      });
    }

    // Apply price range filters
    if (selectedFilters.priceRanges.length > 0) {
      filtered = filtered.filter(p => {
        return selectedFilters.priceRanges.some(range => {
          if (range === '₹0 - ₹100') return p.price >= 0 && p.price <= 100;
          if (range === '₹100 - ₹200') return p.price > 100 && p.price <= 200;
          if (range === '₹200 - ₹300') return p.price > 200 && p.price <= 300;
          if (range === 'Above ₹300') return p.price > 300;
          return false;
        });
      });
    }

    // Apply color filters
    if (selectedFilters.colors.length > 0) {
      filtered = filtered.filter(p => {
        return p.colors.some(colorCode => {
          const colorName = getDominantColor(colorCode);
          return selectedFilters.colors.includes(colorName);
        });
      });
    }

    setFilteredProducts(filtered);
  }, [category, location.state, selectedFilters]);

  // Initialize filtered products
  useEffect(() => {
    if (!category) {
      setFilteredProducts(allProducts);
    }
  }, [category]);

  // Handle search from header

const handleSearch = (query) => {
  setSearchQuery(query);
  
  // Check if the query matches a category
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
    // Navigate to category page
    navigate(`/category/${matchedCategory}`);
    window.scrollTo(0, 0);
  } else {
    // Filter products locally if no category match
    const filtered = allProducts.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  }
};

  // Wishlist functions
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

  // Cart functions - TOGGLE behavior (add/remove on click)
  const toggleCart = (e, product) => {
    e.stopPropagation();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      // Remove from cart if already exists
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      // Add to cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  const getCartCount = () => {
    return cart.length;
  };

  // Navigation
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    window.scrollTo(0, 0);
  };

  // Filter handlers
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => {
      const currentValues = prev[filterType];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      
      return { ...prev, [filterType]: newValues };
    });
  };

  // Clear all filters
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

  // Get page title based on category
  const getPageTitle = () => {
    if (searchQuery) {
      return `Search Results for "${searchQuery}" (${filteredProducts.length} items)`;
    }
    if (selectedFilters.products.length === 4) {
      return `All Products (${filteredProducts.length} items)`;
    }
    if (selectedFilters.products.length > 0) {
      // Map category names to nice display names for page title
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
        'claws': 'Trendy Claws',
        'earring': 'Elegant Earrings',
        'hair-bows': 'Beautiful Hair Bows',
        'scrunchies': 'Soft Scrunchies'
      };
      return categoryMap[category] || 'All Products';
    }
    return 'All Products';
  };

  return (
    <div className="page-container">
      {/* Header */}
      <Header 
        activePage="products" 
        cartCount={getCartCount()} 
        wishlistCount={wishlist.length}
        onSearch={handleSearch}
      />

      {/* Hero Banner */}
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

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <div className="filters-container">
              <h3 className="filters-title">All Filters</h3>
              
              {/* Product Type */}
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

              {/* Discount Offer */}
              <div className="filter-section">
                <h4 className="filter-section-title">Discount Offer</h4>
                <div className="filter-options">
                  {['10% Off', '25% Off', '35% Off', '50% Off', 'Above 50%'].map(item => (
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

              {/* Rating */}
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

              {/* Price Filter */}
              <div className="filter-section">
                <h4 className="filter-section-title">Price Filter</h4>
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

              {/* Filter By Color */}
              <div className="filter-section">
                <h4 className="filter-section-title">Filter By Color</h4>
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

          {/* Products Section */}
          <div className="products-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px',marginRight: '-13rem' }}>
              <h2 className="section-title" style={{ color:'rgb(156, 39, 176)',marginBottom: 0 }}>{getPageTitle()}</h2>
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
            
            {filteredProducts.length === 0 ? (
              <div className="no-results">
                <p>No products found matching your criteria.</p>
                <button 
                  className="hero-button" 
                  onClick={() => {
                    clearAllFilters();
                  }}
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
            )}

            {/* Trending Products */}
            {!category && !searchQuery && (
              <div className="trending-section">
                <div className="trending-header">
                  <h2 className="section-title" >Trending Product</h2>
                  <button 
                    className="trending-button " 
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
            )}
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="newsletter-wrapper">
          <div className="newsletter-section">
            <div className="newsletter-container">
              <div className="newsletter-heading">
                <h2>SUBSCRIBE OUR</h2>
                <h2>NEWSLETTER</h2>
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductPage;