import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Menu from './pages/Menu';  // Import trang Menu
import Cart from './pages/Cart';  // Import trang Giỏ hàng
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/menu" element={<Menu />} />  {/* Route cho trang Thực Đơn */}
          <Route path="/cart" element={<Cart />} />  {/* Route cho trang Giỏ hàng */}
          
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
