import React, { useState } from 'react';
import { Heart, ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LOGO from '../../assets/LOGO.png';

const Header = ({ cartCount = 0, wishlistCount = 0, activePage = 'home' }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

        {/* Navigation */}
        <nav style={{
          ...styles.nav,
          ...(isMobileMenuOpen ? styles.navOpen : {})
        }}>
          <a 
            href="/" 
            style={{
              ...styles.navLink,
              ...(activePage === 'home' ? styles.navLinkActive : {})
            }}
          >
            Home
          </a>
          <a 
            href="/products" 
            style={{
              ...styles.navLink,
              ...(activePage === 'products' ? styles.navLinkActive : {})
            }}
          >
            Products
          </a>
          <a 
            href="/blog" 
            style={{
              ...styles.navLink,
              ...(activePage === 'blog' ? styles.navLinkActive : {})
            }}
          >
            Blog
          </a>
          <a 
            href="/contact" 
            style={{
              ...styles.navLink,
              ...(activePage === 'contact' ? styles.navLinkActive : {})
            }}
          >
            Contact Us
          </a>
          <a 
            href="/about" 
            style={{
              ...styles.navLink,
              ...(activePage === 'about' ? styles.navLinkActive : {})
            }}
          >
            About Us
          </a>
        </nav>

        {/* Header Right Section */}
        <div style={styles.headerRight}>
          {/* Search Box */}
          <form style={styles.searchBox} onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search" 
              style={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" style={styles.searchButton}>
              <Search style={styles.icon} size={20} />
            </button>
          </form>

          {/* Wishlist Icon */}
          <div style={styles.iconLink} onClick={() => navigate('/wishlist')}>
            <Heart style={styles.icon} size={24} />
            {wishlistCount > 0 && (
              <span style={styles.badge}>{wishlistCount}</span>
            )}
          </div>

          {/* Cart Icon */}
          <div style={styles.iconLink} onClick={() => navigate('/cart')}>
            <ShoppingCart style={styles.icon} size={24} />
            {cartCount > 0 && (
              <span style={styles.badge}>{cartCount}</span>
            )}
          </div>

          {/* User Icon */}
          <div style={styles.iconLink} onClick={() => navigate('/profile')}>
            <User style={styles.icon} size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: '#ffffffff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  headerContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '12px 60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '40px',
  },
  logoContainer: {
    flexShrink: 0,
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  logoImage: {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
  },
  logo: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'white',
    border: '2px solid #9C27B0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#9C27B0',
  },
  mobileMenuToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
    color: '#666',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    flex: 1,
    justifyContent: 'center',
  },
  navOpen: {
    display: 'flex',
  },
  navLink: {
    textDecoration: 'none',
    color: '#666',
    fontWeight: 500,
    fontSize: '15px',
    transition: 'color 0.3s ease',
    position: 'relative',
    padding: '5px 0',
  },
  navLinkActive: {
    color: '#9C27B0',
    fontWeight: 600,
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexShrink: 0,
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    background: '#F1F2F7',
    borderRadius: '25px',
    padding: '10px 20px',
    width: '250px',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    flex: 1,
    fontSize: '14px',
    background: 'transparent',
    color: '#333',
  },
  searchButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#666',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
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
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '2px 6px',
    borderRadius: '10px',
    minWidth: '18px',
    textAlign: 'center',
  },
};

export default Header;