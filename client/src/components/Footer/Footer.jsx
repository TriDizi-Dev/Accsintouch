
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
        <div className="footer-col-about">
          <img src={LOGO} alt="ACCS Logo" className="footer-logo" />
          <h3 className="footer-title-about">ACCS IN-TOUCH</h3>
          <p className="footer-text-about">One Stop for your Hair Accessories</p>
          <div className="social-links-about">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <img src={pinterestIcon} alt="Pinterest" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
        
        <div className="footer-col-about">
          <h4 className="footer-heading-about" style={{color :'rgb(156, 39, 176)',}}>Categories</h4>
          <ul className="footer-list-about">
            <li onClick={() => handleNavigation('/category/claw-clips')}>claws</li>
            <li onClick={() => handleNavigation('/category/earring')}>Earrings</li>
            <li onClick={() => handleNavigation('/category/scrunchies')}>Scrunchies</li>
            <li onClick={() => handleNavigation('/category/hair-bows')}>Hair Bows</li>
          </ul>
        </div>
        
        <div className="footer-col-about">
          <h4 className="footer-heading-about" style={{color :'rgb(156, 39, 176)',}}>Quick links</h4>
          <ul className="footer-list-about">
            <li onClick={() => handleNavigation('/')}>Home</li>
            <li onClick={() => handleNavigation('/company')}>Our Company</li>
            <li onClick={() => handleNavigation('/about')}>About Us</li>
            <li onClick={() => handleNavigation('/contact')}>Contact Us</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom-about">
        <p>© 2025 ACCS IN-TOUCH - All Rights Reserved</p>
      </div>
    </footer>
  );
}
