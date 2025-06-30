import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Menu from './pages/Menu';  // Import trang Menu
import Cart from './pages/Cart';  // Import trang Giỏ hàng
import Payment from './pages/Payment'; // Import trang Thanh Toán
import Login from './pages/Login'; // Import trang Đăng Nhập
import Register from './pages/Register'; // Import trang Đăng Ký
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
          <Route path="/payment" element={<Payment />} /> {/* Route cho trang Thanh Toán */}
          <Route path="/login" element={<Login />} /> {/* Route cho trang Đăng Nhập */}
          <Route path="/register" element={<Register />} /> {/* Route cho trang Đăng Ký */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
