
import React from 'react';
import './PolicyPages.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WhatsAppLogo from '../../components/WhatsAppLogo';
export default function RefundPolicy() {
  return (
    <div className="policy-page">
      <Header />
      <div className="policy-container">
        <h1>Refund Policy</h1>
        <p className="last-updated">Last Updated: January 2025</p>

        <section>
          <h2>Our Commitment</h2>
          <p>At ACCS IN-TOUCH, we want you to be completely satisfied with your purchase. If you're not happy with your order, we're here to help with our refund policy.</p>
        </section>

        <section>
          <h2>Eligibility for Refunds</h2>
          <p>You may request a refund within 7 days of receiving your order if:</p>
          <ul>
            <li>The product is defective or damaged upon arrival</li>
            <li>You received the wrong item</li>
            <li>The product significantly differs from its description</li>
            <li>The item is unused, unworn, and in its original packaging</li>
          </ul>
        </section>

        <section>
          <h2>Non-Refundable Items</h2>
          <p>The following items are not eligible for refunds:</p>
          <ul>
            <li>Items used, worn, or damaged after delivery</li>
            <li>Products without original packaging or tags</li>
            <li>Earrings and other piercing accessories (for hygiene reasons)</li>
            <li>Sale or clearance items marked as final sale</li>
            <li>Gift cards</li>
          </ul>
        </section>

        <section>
          <h2>How to Request a Refund</h2>
          <p>To initiate a refund, please follow these steps:</p>
          <ol>
            <li>Contact our customer service team at accsintouch@gmail.com within 7 days of delivery</li>
            <li>Provide your order number and reason for the refund</li>
            <li>Include photos if the product is defective or damaged</li>
            <li>Wait for our team to review and approve your request</li>
            <li>Once approved, return the item using our provided instructions</li>
          </ol>
        </section>

        <section>
          <h2>Refund Processing</h2>
          <p>Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund. If approved:</p>
          <ul>
            <li>Refunds will be processed to your original payment method</li>
            <li>Processing time: 5-10 business days after approval</li>
            <li>You will receive an email confirmation once the refund is issued</li>
            <li>Shipping charges are non-refundable unless the error was on our part</li>
          </ul>
        </section>

        <section>
          <h2>Partial Refunds</h2>
          <p>In some cases, partial refunds may be granted for:</p>
          <ul>
            <li>Items showing obvious signs of use</li>
            <li>Missing components or accessories</li>
            <li>Items returned more than 7 days after delivery</li>
          </ul>
        </section>

        <section>
          <h2>Late or Missing Refunds</h2>
          <p>If you haven't received your refund within the expected timeframe:</p>
          <ul>
            <li>Check your bank account or credit card statement</li>
            <li>Contact your credit card company (processing may take time)</li>
            <li>Contact your bank (processing delays may occur)</li>
            <li>If you've done all of this and still haven't received your refund, please contact us at accsintouch@gmail.com</li>
          </ul>
        </section>

        <section>
          <h2>Exchanges</h2>
          <p>We currently replace items only if they are defective or damaged. If you need to exchange for the same item, please contact us at accsintouch@gmail.com</p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>For refund inquiries, please contact:</p>
          <p>Email:  accsintouch@gmail.com<br/>
          Phone:  +91 9553765409<br/>
          Address:Pragathi Nagar, Hyderabad - 500090</p>
        </section>
      </div>
      <Footer />
      <WhatsAppLogo />
    </div>
  );
}

