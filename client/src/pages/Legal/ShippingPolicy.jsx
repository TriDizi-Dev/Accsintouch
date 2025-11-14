import React from 'react';
import './PolicyPages.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import WhatsAppLogo from '../../components/WhatsAppLogo';
export default function ShippingPolicy() {
  return (
    <div className="policy-page">
      <Header />
      <div className="policy-container">
        <h1>Shipping Policy</h1>
        <p className="last-updated">Last Updated: January 2025</p>

        <section>
          <h2>Shipping Coverage</h2>
          <p>We currently ship to all locations within India. International shipping is not available at this time, but we're working to expand our reach soon!</p>
        </section>

        <section>
          <h2>Processing Time</h2>
          <p>Orders are processed within 1-3 business days (Monday-Saturday, excluding public holidays) after payment confirmation. You will receive an email confirmation once your order has been shipped with tracking information.</p>
          <ul>
            <li><strong>Standard Orders:</strong> 1-3 business days processing</li>
            <li><strong>Custom/Personalized Items:</strong> 3-5 business days processing</li>
            <li><strong>Bulk Orders (10+ items):</strong> 3-7 business days processing</li>
          </ul>
        </section>

        <section>
          <h2>Shipping Methods and Delivery Times</h2>
          
          <h3>Standard Shipping (Free on orders above ₹499)</h3>
          <ul>
            <li><strong>Major Cities:</strong> 3-5 business days</li>
            <li><strong>Other Areas:</strong> 5-7 business days</li>
            <li><strong>Remote Areas:</strong> 7-10 business days</li>
            <li><strong>Cost:</strong> ₹40 for orders below ₹499</li>
          </ul>

          <h3>Express Shipping</h3>
          <ul>
            <li><strong>Major Cities:</strong> 1-2 business days</li>
            <li><strong>Other Areas:</strong> 2-4 business days</li>
            <li><strong>Cost:</strong> ₹150</li>
          </ul>

          <p><em>Note: Delivery times are estimates and may vary due to courier delays, weather conditions, or other unforeseen circumstances.</em></p>
        </section>

        <section>
          <h2>Shipping Charges</h2>
          <div className="shipping-table">
            <table>
              <thead>
                <tr>
                  <th>Order Value</th>
                  <th>Standard Shipping</th>
                  <th>Express Shipping</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Below ₹499</td>
                  <td>₹40</td>
                  <td>₹150</td>
                </tr>
                <tr>
                  <td>₹499 and above</td>
                  <td>FREE</td>
                  <td>₹150</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Order Tracking</h2>
          <p>Once your order ships, you'll receive:</p>
          <ul>
            <li>Shipping confirmation email with tracking number</li>
            <li>Link to track your package in real-time</li>
            <li>SMS updates on delivery status</li>
          </ul>
          <p>You can also track your order by logging into your account on our website.</p>
        </section>

        <section>
          <h2>Shipping Partners</h2>
          <p>We partner with reliable courier services including:</p>
          <ul>
            <li>India Post</li>
            <li>Delhivery</li>
            <li>Blue Dart</li>
            <li>DTDC</li>
          </ul>
          <p>The courier service is selected based on your location to ensure fastest delivery.</p>
        </section>

        <section>
          <h2>Delivery Attempts</h2>
          <p>Our shipping partners typically make 2-3 delivery attempts. If delivery fails:</p>
          <ul>
            <li>You'll receive notification of failed delivery attempt</li>
            <li>Package will be held at local courier facility for 5-10 Days</li>
            <li>Contact the courier or us to arrange redelivery</li>
            <li>After holding period, package returns to us and you'll be contacted for next steps</li>
          </ul>
        </section>

        <section>
          <h2>Address Requirements</h2>
          <p>Please ensure your shipping address is:</p>
          <ul>
            <li>Complete with house/flat number, street name, and landmark</li>
            <li>Includes correct PIN code</li>
            <li>Has a valid mobile number for delivery coordination</li>
            <li>Updated with any special delivery instructions</li>
          </ul>
          <p><strong>Important:</strong> We cannot be held responsible for delays or non-delivery due to incorrect or incomplete addresses.</p>
        </section>

        <section>
          <h2>Package Contents</h2>
          <p>All orders are carefully packaged to ensure safe delivery. Your package will include:</p>
          <ul>
            <li>Your ordered items in protective packaging</li>
            <li>Invoice/Receipt</li>
            <li>Return/Exchange instructions (if applicable)</li>
            <li>Care instructions for your accessories</li>
          </ul>
        </section>

        <section>
          <h2>Delivery Issues</h2>
          
          <h3>Lost Packages</h3>
          <p>If your tracking shows delivered but you haven't received the package:</p>
          <ul>
            <li>Check with neighbors or building security</li>
            <li>Verify the delivery address</li>
            <li>Contact us within 48 hours at accsintouch@gmail.com</li>
            <li>We'll investigate with our courier partner</li>
          </ul>

          <h3>Damaged Packages</h3>
          <p>If your package arrives damaged:</p>
          <ul>
            <li>Take photos of the package and damaged items</li>
            <li>Contact us immediately at accsintouch@gmail.com</li>
            <li>Do not discard the packaging</li>
            <li>We'll arrange for replacement or refund</li>
          </ul>
        </section>

        <section>
          <h2>Holidays and Peak Seasons</h2>
          <p>During festivals, holidays, and sale periods:</p>
          <ul>
            <li>Processing times may extend by 1-2 days</li>
            <li>Delivery times may be slightly longer</li>
            <li>We'll update you about any expected delays</li>
            <li>Orders are processed in the sequence received</li>
          </ul>
        </section>

        <section>
          <h2>Order Modifications</h2>
          <p>Need to change your order or shipping address?</p>
          <ul>
            <li>Contact us within 2 hours of placing the order</li>
            <li>Changes cannot be made once the order is shipped</li>
            <li>Email: accsintouch@gmail.com with your order number</li>
          </ul>
        </section>

        <section>
          <h2>Bulk Orders</h2>
          <p>For bulk orders (10+ items) or business purchases:</p>
          <ul>
            <li>Special shipping arrangements available</li>
            <li>Contact us at accsintouch@gmail.com</li>
            <li>Customized delivery timelines</li>
            <li>Potential shipping discounts</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>For shipping queries, please contact:</p>
          <p>Email:  accsintouch@gmail.com<br/>
          Phone:  +91 9553765409<br/>
          WhatsApp:  +91 9553765409<br/>
          Hours: Monday-Saturday, 9 AM - 6 PM IST<br/>
          Address: Pragathi Nagar, Hyderabad - 500090</p>
        </section>
      </div>
      <Footer />
      <WhatsAppLogo />
    </div>
  );
}