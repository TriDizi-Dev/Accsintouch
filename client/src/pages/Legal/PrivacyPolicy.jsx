
import React from 'react';
import './PolicyPages.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WhatsAppLogo from '../../components/WhatsAppLogo';

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <Header />
      <div className="policy-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: January 2025</p>

        <section>
          <h2>Introduction</h2>
          <p>ACCS IN-TOUCH ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.</p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>When you place an order or create an account, we collect:</p>
          <ul>
            <li>Name and contact information (email, phone number, shipping address)</li>
            <li>Billing information and payment details</li>
            <li>Order history and preferences</li>
            <li>Communication preferences</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>We automatically collect certain information about your device, including:</p>
          <ul>
            <li>IP address and browser type</li>
            <li>Device information and operating system</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website addresses</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and account</li>
            <li>Send promotional emails (if you've opted in)</li>
            <li>Improve our website and customer experience</li>
            <li>Prevent fraud and maintain security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li>Service providers who assist in our operations (payment processors, shipping companies)</li>
            <li>Legal authorities when required by law</li>
            <li>Business successors in the event of a merger or acquisition</li>
          </ul>
        </section>

        <section>
          <h2>Cookies and Tracking</h2>
          <p>We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookie settings through your browser preferences.</p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and receive a copy of your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to certain processing of your information</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <p>Email:  accsintouch@gmail.com<br/>
          Address: Pragathi Nagar, Hyderabad - 500090</p>
        </section>
        
      </div>
      <Footer />
      <WhatsAppLogo />
    </div>
      
  );
  
}
