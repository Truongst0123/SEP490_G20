// src/components/Header.tsx
import { useState } from 'react';
import { ChefHat, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';  // Thêm Link từ react-router-dom

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Link to="/menu" className="hover:text-yellow-400 transition-colors font-medium">Thực Đơn</Link> {/* Thêm Link đến menu */}
            <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Về Chúng Tôi</a>
            <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Liên Hệ</a>
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
              <Link to="/menu" className="hover:text-yellow-400 transition-colors font-medium">Thực Đơn</Link> {/* Thêm Link đến menu */}
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Về Chúng Tôi</a>
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Liên Hệ</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
