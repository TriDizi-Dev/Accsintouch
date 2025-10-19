import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home/Homepage';
import CartPage from './components/Cart/CartPage';
import AboutUs from './pages/About/AboutUs';
import ContactUs from './pages/Contact/ContactUs';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;