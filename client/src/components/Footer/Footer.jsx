// src/components/Footer/Footer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import LOGO from '../../assets/LOGO.png';
import facebookIcon from '../../assets/fb.png';
import twitterIcon from '../../assets/twitter.png';
import pinterestIcon from '../../assets/pin.png';
import instagramIcon from '../../assets/ig.png';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer-about">
      <div className="footer-content-about">
        {/* ---- LOGO + DESCRIPTION ---- */}
        <div className="footer-col-about">
          <img src={LOGO} alt="ACCS Logo" className="footer-logo" />
          <h3 className="footer-title-about">ACCS IN-TOUCH</h3>
          <p className="footer-text-about">One Stop for your Hair Accessories</p>
          <div className="social-links-about">
            <a href="https://www.facebook.com/share/17KwHu2unu/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <img src={pinterestIcon} alt="Pinterest" />
            </a>
            <a href="https://www.instagram.com/accs.in_touch?igsh=MTU5MTY1YXNiejl4MA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>

        {/* ---- CATEGORIES ---- */}
        <div className="footer-col-about">
          <h4 className="footer-heading-about" style={{ color: 'rgb(156, 39, 176)' }}>
            Categories
          </h4>
          <ul className="footer-list-about">
            <li onClick={() => handleNavigation('/category/claw-clips')}>claws</li>
            <li onClick={() => handleNavigation('/category/earring')}>Earrings</li>
            <li onClick={() => handleNavigation('/category/scrunchies')}>Scrunchies</li>
            <li onClick={() => handleNavigation('/category/hair-bows')}>Hair Bows</li>
          </ul>
        </div>

        {/* ---- QUICK LINKS + LEGAL (wrapped together) ---- */}
        <div className="footer-quick-legal-wrapper" style={{marginLeft:'-110px'}}>
          {/* Quick links */}
          <div className="footer-col-about" style={{marginLeft:'-400px'}}>
            <h4 className="footer-heading-about" style={{ color: 'rgb(156, 39, 176)' }}>
              Quick links
            </h4>
            <ul className="footer-list-about">
              <li onClick={() => handleNavigation('/')}>Home</li>
              <li onClick={() => handleNavigation('/company')}>Our Company</li>
              <li onClick={() => handleNavigation('/about')}>About Us</li>
              <li onClick={() => handleNavigation('/contact')}>Contact Us</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-col-about" style={{marginLeft:'-400px'}}>
            <h4 className="footer-heading-about" style={{ color: 'rgb(156, 39, 176)' }}>
              Legal
            </h4>
            <ul className="footer-list-about">
              <li onClick={() => handleNavigation('/privacy-policy')}>Privacy Policy</li>
              <li onClick={() => handleNavigation('/terms-conditions')}>Terms & Conditions</li>
              <li onClick={() => handleNavigation('/refund-policy')}>Refund Policy</li>
              <li onClick={() => handleNavigation('/return-policy')}>Return Policy</li>
              <li onClick={() => handleNavigation('/shipping-policy')}>Shipping Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom-about">
        <p>© 2025 ACCS IN-TOUCH - All Rights Reserved</p>
      </div>
    </footer>
  );
}