// Footer.jsx
import React from 'react';
import { Facebook, Twitter, Pin, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const categories = [
    { name: 'Claw Clips', link: '/category/claw-clips' },
    { name: 'Earring', link: '/category/earrings' },
    { name: 'Scrunchies', link: '/category/scrunchies' },
    { name: 'Hair Bows', link: '/category/hair-bows' },
  ];

  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'Our Company', link: '/company' },
    { name: 'About us', link: '/about' },
    { name: 'Contact Us', link: '/contact' },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, link: 'https://facebook.com', name: 'Facebook' },
    { icon: <Twitter size={18} />, link: 'https://twitter.com', name: 'Twitter' },
    { icon: <Pin size={18} />, link: 'https://pinterest.com', name: 'Pinterest' },
    { icon: <Linkedin size={18} />, link: 'https://linkedin.com', name: 'LinkedIn' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Column */}
        <div className="footer-col footer-about">
          <div className="footer-logo">
            <div className="logo">ACCS</div>
          </div>
          <h3 className="footer-brand">ACCS IN-TOUCH</h3>
          <p className="footer-tagline">One Stop for your Hair Accessories</p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.link} 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Categories Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Categories</h4>
          <ul className="footer-list">
            {categories.map((category, index) => (
              <li key={index}>
                <a href={category.link} className="footer-link">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick links</h4>
          <ul className="footer-list">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.link} className="footer-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-contact">
            <li className="contact-item">
              <MapPin size={16} className="contact-icon" />
              <span>123 Fashion Street, Delhi, India</span>
            </li>
            <li className="contact-item">
              <Mail size={16} className="contact-icon" />
              <a href="mailto:info@accsintouch.com">info@accsintouch.com</a>
            </li>
            <li className="contact-item">
              <Phone size={16} className="contact-icon" />
              <a href="tel:+911234567890">+91 1234567890</a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} ACCS IN-TOUCH - All Rights Reserved</p>
        <div className="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <span className="separator">•</span>
          <a href="/terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;