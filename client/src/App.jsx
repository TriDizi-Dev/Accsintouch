import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home/Homepage'; 
import CartPage from './components/Cart/CartPage';
import AboutUs from './pages/About/AboutUs';
import ContactUs from './pages/Contact/ContactUs';
import ProductPage from './pages/Products/ProductPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import WishlistPage from './pages/wishlist/WishlistPage';
import Blog from './pages/Blog/Blog';
import Company from './pages/Company/Company';
import Profile from './pages/Profile/Profile';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsConditions from './pages/Legal/TermsConditions';
import RefundPolicy from './pages/Legal/RefundPolicy';
import ReturnPolicy from './pages/Legal/ReturnPolicy';
import ShippingPolicy from './pages/Legal/ShippingPolicy';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/category/:category" element={<ProductPage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
        
      </Routes>
    </Router>
  );
}

export default App;