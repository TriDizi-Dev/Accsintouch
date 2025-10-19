import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import LOGO from '../../assets/LOGO.png';
import icon from '../../assets/icon.png';
import phone from '../../assets/phone.png';
import mail from '../../assets/mail.png';
import location from '../../assets/location.png';
import shippingandquality from '../../assets/shippingandquality.png';
import support from '../../assets/support.png';
import returnlogo from '../../assets/returnlogo.png';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-page">
      <Header activePage="contact" cartCount={0} wishlistCount={0} />
      
      {/* Contact Content Section */}
      <section className="contact-content">
        <div className="contact-container">
          {/* Left Section - Contact Info */}
          <div className="contact-info-section">
            <div>
              <h1 className="contact-main-title">Contact Us</h1>
              <p className="contact-subtitle">
                Get in touch with us — email, call, or fill out the form to discover how we can solve your problem.
              </p>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <img src={phone} alt="Phone" />
              </div>
              <div className="contact-details">
                <p className="contact-detail-text">04498 27681</p>
                <p className="contact-detail-text">04498 28681 (Operations & Sales)</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <img src={mail} alt="Email" />
              </div>
              <div className="contact-details">
                <p className="contact-detail-text">accsmangalore@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <img src={location} alt="Location" />
              </div>
              <div className="contact-details">
                <p className="contact-detail-text">
                  Miracle Compound, Behind Ashoka Business Centre, Bojai Kopikad, Kottara Cross, Mangalore – 575 004
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="contact-form-section">
            <h2 className="contact-form-title">Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message Here"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section-contact">
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
      </section>

      {/* Footer */}
      <footer className="footer-contact">
        <div className="footer-content-contact">
          <div className="footer-col-contact">
            <img src={LOGO} alt="ACCS Logo" className="footer-logo" />
            <h3 className="footer-title-contact">ACCS IN-TOUCH</h3>
            <p className="footer-text-contact">One Stop for your Hair Accessories</p>
            <div className="social-links-contact">
              <span>f</span>
              <span>t</span>
              <span>p</span>
              <span>in</span>
            </div>
          </div>
          
          <div className="footer-col-contact">
            <h4 className="footer-heading-contact">Categories</h4>
            <ul className="footer-list-contact">
              <li>Claw Clips</li>
              <li>Earring</li>
              <li>Scrunchies</li>
              <li>Hair Bows</li>
            </ul>
          </div>
          
          <div className="footer-col-contact">
            <h4 className="footer-heading-contact">Quick links</h4>
            <ul className="footer-list-contact">
              <li>Home</li>
              <li>Our Company</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;