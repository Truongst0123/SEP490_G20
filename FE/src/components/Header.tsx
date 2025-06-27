// src/components/Header.tsx
import { useState } from 'react';
import { ChefHat, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';  // Thêm Link từ react-router-dom
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-black to-gray-900 text-white sticky top-0 z-50 shadow-lg border-b border-red-600">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <ChefHat className="w-8 h-8 text-yellow-500" />
            <div>
              <h1 className="text-2xl font-bold">Nhà Hàng Hương Quê</h1>
              <p className="text-yellow-400 text-sm">Hương vị truyền thống</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-yellow-400 transition-colors font-medium">Trang Chủ</Link>
            <Link to="/menu" className="hover:text-yellow-400 transition-colors font-medium">Thực Đơn</Link>
            <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Về Chúng Tôi</a>
            <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Liên Hệ</a>
            <Link to="/cart" className="hover:text-yellow-400 transition-colors font-medium flex items-center relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25A3.75 3.75 0 0011.25 18h1.5a3.75 3.75 0 003.75-3.75V6.75M7.5 14.25V6.75m0 7.5H3.75a.75.75 0 01-.75-.75V6.75a.75.75 0 01.75-.75h3.75m0 7.5h9.75m-9.75 0V6.75m9.75 7.5V6.75m0 7.5h3.75a.75.75 0 00.75-.75V6.75a.75.75 0 00-.75-.75h-3.75" />
              </svg>
              Giỏ hàng
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-yellow-400 text-xs font-bold rounded-full px-2 py-0.5">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-red-600 mt-4 pt-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-yellow-400 transition-colors font-medium">Trang Chủ</Link>
              <Link to="/menu" className="hover:text-yellow-400 transition-colors font-medium">Thực Đơn</Link>
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Về Chúng Tôi</a>
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Liên Hệ</a>
              <Link to="/cart" className="hover:text-yellow-400 transition-colors font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25A3.75 3.75 0 0011.25 18h1.5a3.75 3.75 0 003.75-3.75V6.75M7.5 14.25V6.75m0 7.5H3.75a.75.75 0 01-.75-.75V6.75a.75.75 0 01.75-.75h3.75m0 7.5h9.75m-9.75 0V6.75m9.75 7.5V6.75m0 7.5h3.75a.75.75 0 00.75-.75V6.75a.75.75 0 00-.75-.75h-3.75" />
                </svg>
                Giỏ hàng
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
