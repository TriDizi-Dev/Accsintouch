import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
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
import WhatsAppLogo from '../../components/WhatsAppLogo';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

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
      title: '10 Days Return',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      
      const response = await fetch('https://formspree.io/f/xdkbeezr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // Allows replying directly to the sender
          _subject: `New Contact Form Submission: ${formData.subject}` // Custom email subject
        })
      });

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully.' 
        });

        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: 'Failed to send message. Please try again later.' 
        });
      }

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <p className="contact-detail-text">+91 9553765409</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <img src={mail} alt="Email" />
              </div>
              <div className="contact-details">
                <p className="contact-detail-text">accsintouch@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <img src={location} alt="Location" />
              </div>
              <div className="contact-details">
                <p className="contact-detail-text">
                  Pragathi Nagar, Hyderabad - 500090
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="contact-form-section">
            <h2 className="contact-form-title">Contact Us</h2>
            
            {submitStatus.message && (
              <div className={`status-message ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <textarea
                name="message"
                placeholder="Your Message Here"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
      <Footer />
      <WhatsAppLogo />
    </div>
  );
};

export default ContactUs;