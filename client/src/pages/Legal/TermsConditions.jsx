import React from 'react';
import './PolicyPages.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WhatsAppLogo from '../../components/WhatsAppLogo';
export default function TermsConditions() {
  return (
    <div className="policy-page">
      <Header />
      <div className="policy-container">
        <h1>Terms and Conditions</h1>
        <p className="last-updated">Last Updated: January 2025</p>

        <section>
          <h2>Acceptance of Terms</h2>
          <p>By accessing and using the ACCS IN-TOUCH website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.</p>
        </section>

        <section>
          <h2>Use of Website</h2>
          <p>You agree to use our website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the website. Prohibited activities include:</p>
          <ul>
            <li>Attempting to gain unauthorized access to our systems</li>
            <li>Transmitting harmful code or viruses</li>
            <li>Engaging in fraudulent activities</li>
            <li>Violating intellectual property rights</li>
          </ul>
        </section>

        <section>
          <h2>Product Information</h2>
          <p>We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions, colors, or other content are accurate, complete, or error-free. We reserve the right to correct errors and update information at any time without notice.</p>
        </section>

        <section>
          <h2>Pricing and Availability</h2>
          <p>All prices are listed in Indian Rupees (INR) and are subject to change without notice. We reserve the right to modify prices, discontinue products, or limit quantities at our discretion. In the event of a pricing error, we will contact you before processing your order.</p>
        </section>

        <section>
          <h2>Orders and Payment</h2>
          <p>By placing an order, you represent that you are of legal age and have the authority to make the purchase. We reserve the right to refuse or cancel any order for reasons including product availability, errors in pricing, or suspected fraud.</p>
          <p>Payment must be made at the time of purchase using our accepted payment methods. All transactions are processed securely through our payment partners.</p>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, images, and software, is the property of ACCS IN-TOUCH and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>ACCS IN-TOUCH shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products. Our total liability shall not exceed the amount you paid for the product in question.</p>
        </section>

        <section>
          <h2>Governing Law</h2>
          <p>These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Andhra Pradesh, India.</p>
        </section>

        <section>
          <h2>Changes to Terms</h2>
          <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.</p>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>For questions about these Terms and Conditions, please contact us at:</p>
          <p>Email:  accsintouch@gmail.com<br/>
          Address:Pragathi Nagar, Hyderabad - 500090</p>
        </section>
      </div>
      <Footer />
      <WhatsAppLogo />
    </div>
  );
}
