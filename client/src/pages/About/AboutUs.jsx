import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import about1 from '../../assets/about1.png';
import about7 from '../../assets/about7.webp';
import LOGO from '../../assets/LOGO.png';
import WhatsAppLogo from '../../components/WhatsAppLogo';
import icon from '../../assets/icon.png';
import './AboutUs.css';

const AboutUs = () => {
  const features = [
    {
      title: 'Free Shipping',
      description: 'Order above ₹499'
    },
    {
      title: '24/7 Support',
      description: 'Ready support'
    },
    {
      title: 'Premium Quality',
      description: 'Premium quality'
    },
    {
      title: '10 Days Return',
      description: 'Money back guarantee'
    }
  ];

  const promises = [
    {
      title: 'Quality First:',
      description: 'We use only the best materials, including hypoallergenic metals and premium fabrics, so you can wear our accessories with comfort and peace of mind.'
    },
    {
      title: 'Handmade Uniqueness:',
      description: "Because each item is handmade, no two pieces are exactly alike. You're not just buying an accessory; you're getting a one-of-a-kind creation."
    },
    {
      title: 'Supporting Artisans:',
      description: "By choosing [Your Brand Name], you're supporting a community of talented artisans and helping to keep the tradition of handmade crafts alive."
    },
    {
      title: 'Customer Love:',
      description: "We're dedicated to providing an excellent shopping experience. Your satisfaction is our top priority, and we're always here to help."
    }
  ];

  return (
    <div className="about-page">
      <Header activePage="about" cartCount={0} wishlistCount={0} />
      
      {/* Hero Banner */}
      <section className="about-hero">
        <img src={about1} alt="Hair Accessories" className="about-hero-image" />
      </section>

      {/* About Us Section */}
      <section className="about-content">
        <div className="about-section">
          <h1 className="about-title">About Us:</h1>
          <h2 className="about-subtitle" style={{color:'rgb(156, 39, 176)'}}>The Story of Accs In Touch</h2>
          <p className="about-text">
            Welcome to Accs In Touch, where every piece tells a story of passion and craftsmanship. Our journey began with a 
            simple idea: to create beautiful, high-quality hair accessories and jewelry that not only add a touch of sparkle to your 
            day but are also made with genuine care. Our tagline, "Handmade with Love," isn't just a phrase—it's the heart of 
            everything we do.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="philosophy-section">
          <img src={about7} alt="Colorful Hair Bows" className="philosophy-image" />
          <div className="philosophy-content">
            <h2 className="about-subtitle">Our Philosophy</h2>
            <p className="about-text">
              In a world of mass production, we believe in the power of the handmade. Each of our hair bows, earrings, and 
              accessories is meticulously crafted by skilled artisans who pour their heart and soul into their work. From selecting the 
              finest materials to the final stitch or clasp, every detail is considered to ensure a product that is not only stunning but 
              also durable and truly unique.
            </p>
            <p className="about-text">
              We're passionate about creating pieces that bring joy and confidence. Whether it's a vibrant hair bow to brighten a little 
              girl's day or an elegant pair of earrings for a special occasion, our goal is to help you express your individual style.
            </p>
          </div>
        </div>

        {/* Promise Section */}
        <div className="promise-section">
          <h2 className="about-subtitle">Our Promise to You</h2>
          <div className="promise-grid">
            {promises.map((promise, index) => (
              <div key={index} className="promise-item">
                <h3 className="promise-title">{promise.title}</h3>
                <p className="promise-text">{promise.description}</p>
              </div>
            ))}
          </div>

          <div className="closing-text">
            <p className="about-text">
              Thank you for choosing us to be a part of your style story. We're so excited for you to 
              find something you love.
            </p>
            <p className="about-text signature">With love,</p>
            <p className="about-text signature-name" >The Accs In Touch Team</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section-about">
          <h2 className="about-subtitle" style={{color:'black'}}>Our Feature</h2>
          <div className="features-grid-about">
            {features.map((feature, index) => (
              <div key={index} className="feature-card-about">
                <div className="feature-icon-about">
                  <img src={icon} alt={feature.title} className="icon-image" />
                </div>
                <div className="feature-content-about">
                  <h3 className="feature-title-about">{feature.title}</h3>
                  <p className="feature-text-about">{feature.description}</p>
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

export default AboutUs;