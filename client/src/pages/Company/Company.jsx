import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import company1 from '../../assets/about1.png'; // you can use a different banner if available
import company2 from '../../assets/about2.png';
import './Company.css';
import WhatsAppLogo from '../../components/WhatsAppLogo';

const Company = () => {
  return (
    <div className="company-page">
      <Header activePage="company" cartCount={0} wishlistCount={0} />

      {/* Hero Section */}
      <section className="company-hero">
        <img src={company1} alt="Our Company Banner" className="company-hero-image" />
        <div className="company-hero-text">
          <h1>Our Company</h1>
          <p>Crafting accessories with passion, precision, and purpose.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="company-section">
        <div className="company-content">
          <h2>Our Mission</h2>
          <p>
            To empower individuals to express their unique style through thoughtfully designed, handcrafted accessories.
            Every bow, clip, and earring is made with care, ensuring it complements your personality and confidence.
          </p>
        </div>

        <div className="company-content">
          <h2>Our Vision</h2>
          <p>
            We envision a world where sustainable craftsmanship and creativity coexist — bringing timeless beauty to
            modern fashion while supporting skilled artisans and local craftsmanship.
          </p>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="company-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3> Craftsmanship</h3>
            <p>Every product is handmade with detail and precision to ensure lasting beauty.</p>
          </div>
          <div className="value-card">
            <h3> Sustainability</h3>
            <p>We choose eco-friendly materials and reduce waste wherever possible.</p>
          </div>
          <div className="value-card">
            <h3> Customer Commitment</h3>
            <p>We strive to deliver not just products, but delightful experiences.</p>
          </div>
          <div className="value-card">
            <h3> Integrity</h3>
            <p>Transparency, honesty, and respect define every decision we make.</p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="company-closing">
        <img src={company2} alt="Our Team" className="company-closing-image" />
        <div className="company-closing-text">
          <h2>Building Connections</h2>
          <p>
            Accs In Touch isn’t just a brand; it’s a community built on creativity and trust.
            We’re committed to bringing you accessories that make every day special.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppLogo />
    </div>
  );
};

export default Company;
