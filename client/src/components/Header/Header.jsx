import React, { useState, useEffect, useRef } from 'react';
import { Heart, ShoppingCart, Menu, X, User, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LOGO from '../../assets/LOGO.png';

const Header = ({ cartCount = 0, wishlistCount = 0, activePage = 'home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const categories = [
    { name: 'Earrings', value: 'earring' },
    { name: 'Scrunchies', value: 'scrunchies' },
    { name: 'Claws', value: 'claw-clips' },
    { name: 'Hair Bows', value: 'hair-bows' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowSuggestions(query.length > 0);
  };

  // In Header.js, replace the handleSearchSubmit function with this:

const handleSearchSubmit = (e) => {
  e.preventDefault();
  if (searchQuery.trim()) {
    // Check if query matches a category first
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
    
    const lowerQuery = searchQuery.toLowerCase().trim();
    const matchedCategory = categoryMap[lowerQuery];
    
    if (matchedCategory) {
      navigate(`/category/${matchedCategory}`);
    } else {
      // Navigate to products page with search query
      navigate('/products', { state: { searchQuery: searchQuery } });
    }
    
    setShowSuggestions(false);
    setSearchQuery('');
    window.scrollTo(0, 0);
  }
};

  const handleSuggestionClick = (category) => {
    navigate(`/category/${category.value}`);
    setShowSuggestions(false);
    setSearchQuery('');
  };

  // Filter categories based on search query
  const getSuggestions = () => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    
    return categories.filter(category =>
      category.name.toLowerCase().includes(query)
    );
  };

  const suggestions = getSuggestions();

  const getResponsiveStyles = () => {
    const width = window.innerWidth;
    
    return {
      header: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        height: '65px',
        background: '#ffffffff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      },
      headerContainer: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: width <= 480 ? '10px 15px' : width <= 768 ? '12px 20px' : '12px 60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: width <= 768 ? '15px' : '40px',
        flexWrap: width <= 768 ? 'wrap' : 'nowrap',
      },
      logoContainer: {
        flexShrink: 0,
        order: width <= 768 ? 1 : 0,
        flex: width <= 768 ? 1 : 'initial',
      },
      logoLink: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
      },
      logoImage: {
        width: width <= 480 ? '40px' : '50px',
        height: width <= 480 ? '40px' : '50px',
        objectFit: 'contain',
      },
      mobileMenuToggle: {
        display: width <= 768 ? 'block' : 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '5px',
        color: '#666',
        order: 3,
        zIndex: 110,
      },
      nav: {
        display: width <= 768 ? 'none' : 'flex',
        alignItems: 'center',
        gap: width <= 1024 ? '30px' : '40px',
        flex: 1,
        justifyContent: 'center',
      },
      navMobile: {
        display: isMobileMenuOpen && width <= 768 ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'flex-start',
        background: '#ffffff',
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        padding: '20px',
        margin: 0,
        width: '100%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        order: 4,
        gap: 0,
      },
      navLink: {
        textDecoration: 'none',
        color: '#666',
        fontWeight: 500,
        fontSize: width <= 768 ? '14px' : '15px',
        transition: 'color 0.3s ease',
        position: 'relative',
        padding: width <= 768 ? '12px 0' : '5px 0',
        width: width <= 768 ? '100%' : 'auto',
        borderBottom: width <= 768 ? '1px solid #f0f0f0' : 'none',
      },
      navLinkActive: {
        color: '#9C27B0',
        fontWeight: 600,
      },
      headerRight: {
        display: 'flex',
        alignItems: 'center',
        gap: width <= 480 ? '10px' : width <= 768 ? '12px' : '20px',
        flexShrink: 0,
        order: width <= 768 ? 2 : 0,
      },
      searchContainer: {
        position: 'relative',
        zIndex: 10000,
      },
      searchBox: {
        display: 'flex',
        alignItems: 'center',
        background: '#F1F2F7',
        borderRadius: '25px',
        padding: width <= 480 ? '8px 12px' : width <= 768 ? '10px 16px' : '12px 20px',
        width: width <= 480 ? '180px' : width <= 768 ? '220px' : width <= 1024 ? '280px' : '350px',
        border: '2px solid transparent',
        transition: 'all 0.3s ease',
      },
      searchBoxFocused: {
        borderColor: '#9C27B0',
        boxShadow: '0 2px 8px rgba(156, 39, 176, 0.1)',
      },
      searchInput: {
        border: 'none',
        outline: 'none',
        fontSize: width <= 480 ? '11px' : width <= 768 ? '12px' : width <= 1024 ? '13px' : '14px',
        background: 'transparent',
        color: '#333',
        width: '100%',
        marginLeft: '8px',
      },
      suggestionsDropdown: {
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: 0,
        right: 0,
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        maxHeight: '400px',
        overflowY: 'auto',
        zIndex: 1001,
      },
      suggestionItem: {
        padding: '12px 16px',
        cursor: 'pointer',
        borderBottom: '1px solid #f0f0f0',
        transition: 'background 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      },
      suggestionItemHover: {
        background: '#f8f9fa',
      },
      suggestionIcon: {
        width: '20px',
        height: '20px',
        color: '#9C27B0',
      },
      suggestionText: {
        flex: 1,
      },
      suggestionName: {
        fontSize: '14px',
        color: '#333',
        fontWeight: 500,
      },
      suggestionCategory: {
        fontSize: '12px',
        color: '#999',
        marginTop: '2px',
      },
      noResults: {
        padding: '20px',
        textAlign: 'center',
        color: '#999',
        fontSize: '14px',
      },
      icon: {
        color: '#666',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        width: width <= 480 ? '20px' : width <= 768 ? '22px' : '24px',
        height: width <= 480 ? '20px' : width <= 768 ? '22px' : '24px',
      },
      iconLink: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        padding: '5px',
        cursor: 'pointer',
      },
      badge: {
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        background: '#f44336',
        color: 'white',
        fontSize: width <= 480 ? '9px' : '10px',
        fontWeight: 'bold',
        padding: width <= 480 ? '2px 5px' : '2px 6px',
        borderRadius: '10px',
        minWidth: width <= 480 ? '16px' : '18px',
        textAlign: 'center',
      },
    };
  };

  const styles = getResponsiveStyles();

  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <a href="/" style={styles.logoLink}>
            <img src={LOGO} alt="Logo" style={styles.logoImage} />
          </a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          style={styles.mobileMenuToggle} 
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation - Desktop */}
        {!isMobile && (
          <nav style={styles.nav}>
            <a href="/" style={{ ...styles.navLink, ...(activePage === 'home' ? styles.navLinkActive : {}) }}>Home</a>
            <a href="/products" style={{ ...styles.navLink, ...(activePage === 'products' ? styles.navLinkActive : {}) }}>Products</a>
            <a href="/about" style={{ ...styles.navLink, ...(activePage === 'about' ? styles.navLinkActive : {}) }}>About Us</a>
            <a href="/contact" style={{ ...styles.navLink, ...(activePage === 'contact' ? styles.navLinkActive : {}) }}>Contact Us</a>
          </nav>
        )}

        {/* Header Right Section */}
        <div style={styles.headerRight}>
          {/* Search Box with Suggestions */}
          <div style={styles.searchContainer} ref={searchRef}>
            <form onSubmit={handleSearchSubmit}>
              <div style={{
                ...styles.searchBox,
                ...(showSuggestions ? styles.searchBoxFocused : {})
              }}>
                <Search size={18} style={{ color: '#666' }} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchQuery && setShowSuggestions(true)}
                  style={styles.searchInput}
                />
              </div>
            </form>

            {/* Suggestions Dropdown */}
            {showSuggestions && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                right: 0,
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                maxHeight: '400px',
                overflowY: 'auto',
                zIndex: 10001,
              }}>
                {suggestions.length > 0 ? (
                  suggestions.map((category, index) => (
                    <div
                      key={index}
                      style={{
                        padding: '12px 16px',
                        cursor: 'pointer',
                        borderBottom: '1px solid #f0f0f0',
                        transition: 'background 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                      onClick={() => handleSuggestionClick(category)}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                    >
                      <Search style={{
                        width: '20px',
                        height: '20px',
                        color: '#9C27B0',
                      }} size={18} />
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '14px',
                          color: '#333',
                          fontWeight: 500,
                        }}>
                          {category.name}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{
                    padding: '20px',
                    textAlign: 'center',
                    color: '#999',
                    fontSize: '14px',
                  }}>
                    No categories found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Wishlist Icon */}
          <div style={styles.iconLink} onClick={() => navigate('/wishlist')}>
            <Heart style={styles.icon} />
            {wishlistCount > 0 && (
              <span style={styles.badge}>{wishlistCount}</span>
            )}
          </div>

          {/* Cart Icon */}
          <div style={styles.iconLink} onClick={() => navigate('/cart')}>
            <ShoppingCart style={styles.icon} />
            {cartCount > 0 && (
              <span style={styles.badge}>{cartCount}</span>
            )}
          </div>
        </div> 

        {/* Navigation - Mobile */}
        {isMobile && isMobileMenuOpen && (
          <nav style={styles.navMobile}>
            <a href="/" style={{ ...styles.navLink, ...(activePage === 'home' ? styles.navLinkActive : {}) }}>Home</a>
            <a href="/products" style={{ ...styles.navLink, ...(activePage === 'products' ? styles.navLinkActive : {}) }}>Products</a>
            <a href="/about" style={{ ...styles.navLink, ...(activePage === 'about' ? styles.navLinkActive : {}) }}>About Us</a>
            <a href="/contact" style={{ ...styles.navLink, ...(activePage === 'contact' ? styles.navLinkActive : {}) }}>Contact Us</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;