
import React from 'react';
import './PolicyPages.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import WhatsAppLogo from '../../components/WhatsAppLogo';
export default function ReturnPolicy() {
  return (
    <div className="policy-page">
      <Header />
      <div className="policy-container">
        <h1>Return Policy</h1>
        <p className="last-updated">Last Updated: January 2025</p>

        <section>
          <h2>Return Window</h2>
          <p>We accept returns within 7 days of the delivery date. To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original packaging with all tags attached.</p>
        </section>

        <section>
          <h2>Eligible Items for Return</h2>
          <p>The following items can be returned:</p>
          <ul>
            <li>Claw clips and hair accessories (unused and in original packaging)</li>
            <li>Scrunchies (unworn with original tags)</li>
            <li>Hair bows (in original condition)</li>
            <li>Defective or damaged products</li>
            <li>Incorrectly shipped items</li>
          </ul>
        </section>

        <section>
          <h2>Non-Returnable Items</h2>
          <p>For hygiene and safety reasons, the following items cannot be returned:</p>
          <ul>
            <li>Earrings and piercing accessories</li>
            <li>Items that have been worn or used</li>
            <li>Products without original packaging or tags</li>
            <li>Personalized or custom-made items</li>
            <li>Items marked as final sale or clearance</li>
            <li>Gift cards</li>
          </ul>
        </section>

        <section>
          <h2>Return Process</h2>
          <h3>Step 1: Contact Us</h3>
          <p>Email us at accsintouch@gmail.com with:</p>
          <ul>
            <li>Your order number</li>
            <li>Item(s) you wish to return</li>
            <li>Reason for return</li>
            <li>Photos (if defective or damaged)</li>
          </ul>

          <h3>Step 2: Receive Return Authorization</h3>
          <p>Our team will review your request within 24-48 hours and provide return instructions and a Return Authorization (RA) number.</p>

          <h3>Step 3: Pack and Ship</h3>
          <p>Carefully pack the item in its original packaging. Include the RA number on the outside of the package. Ship the item to the address provided in your return authorization email.</p>

          <h3>Step 4: Inspection and Processing</h3>
          <p>Once we receive your return, we will inspect it and notify you of the status within 3-5 business days.</p>
        </section>

        <section>
          <h2>Return Shipping</h2>
          <p>Return shipping costs depend on the reason for return:</p>
          <ul>
            <li><strong>Defective/Damaged Items:</strong> We cover return shipping costs. We'll provide a prepaid shipping label.</li>
            <li><strong>Wrong Item Sent:</strong> We cover return shipping costs and expedite the correct item to you.</li>
            <li><strong>Change of Mind:</strong> Customer is responsible for return shipping costs. We recommend using a trackable shipping service.</li>
          </ul>
        </section>

        <section>
          <h2>Inspection and Approval</h2>
          <p>All returned items are inspected upon receipt. Returns may be rejected if:</p>
          <ul>
            <li>Items show signs of wear or use</li>
            <li>Original packaging or tags are missing</li>
            <li>Return is initiated after the 7-day window</li>
            <li>Item doesn't match the return authorization</li>
          </ul>
          <p>Rejected returns will be shipped back to you at your expense.</p>
        </section>

        <section>
          <h2>Exchanges</h2>
          <p>We currently do not offer direct exchanges. If you need a different size or color:</p>
          <ol>
            <li>Return your original item following the return process</li>
            <li>Place a new order for the desired item</li>
            <li>We'll process your refund once the return is approved</li>
          </ol>
        </section>

        <section>
          <h2>Damaged or Defective Items</h2>
          <p>If you receive a damaged or defective item:</p>
          <ul>
            <li>Contact us immediately at accsintouch@gmail.com</li>
            <li>Provide photos of the damage or defect</li>
            <li>We'll arrange a free return and send a replacement or issue a full refund</li>
            <li>Priority processing for damaged/defective returns</li>
          </ul>
        </section>

        <section>
          <h2>Lost or Damaged Returns</h2>
          <p>We are not responsible for returns lost or damaged in transit. We strongly recommend using a trackable shipping method and purchasing shipping insurance for valuable returns.</p>
        </section>

        <section>
          <h2>International Returns</h2>
          <p>International customers are responsible for return shipping costs and any customs fees. Returns must comply with customs regulations of both countries.</p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>For return assistance, please contact:</p>
          <p>Email:  accsintouch@gmail.com<br/>
          Phone:  +91 9553765409<br/>
          Hours: Monday-Saturday, 9 AM - 6 PM IST<br/>
          Address: Pragathi Nagar, Hyderabad - 500090</p>
        </section>
      </div>
      <Footer />
      <WhatsAppLogo />
    </div>
  );
}
