
import React, { useState, useEffect } from 'react';
import { ChefHat, Star, MapPin, Phone, Clock, Users, Utensils, Heart, ArrowRight, Menu, X } from 'lucide-react';

function App() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Hương Vị Quê Nhà",
      subtitle: "Nơi lưu giữ tinh hoa ẩm thực dân gian"
    },
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Món Ăn Truyền Thống",
      subtitle: "Được chế biến từ những nguyên liệu tươi ngon nhất"
    },
    {
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Không Gian Ấm Cúng",
      subtitle: "Thiết kế mang đậm nét văn hóa Việt Nam"
    }
  ];

  const specialDishes = [
    {
      name: "Cơm Tấm Sườn Nướng",
      price: "65.000đ",
      image: "https://i1-giadinh.vnecdn.net/2024/03/07/7-Hoan-thien-thanh-pham-1-6244-1709800134.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=Y03-BsY4ORbpVkG4zm_DcA",
      description: "Cơm tấm thơm ngon với sườn nướng đậm đà"
    },
    {
      name: "Bánh Xèo Miền Tây",
      price: "45.000đ",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Bánh xèo giòn tan với nhân tôm thịt đầy đặn"
    },
    {
      name: "Lẩu Cá Kèo",
      price: "180.000đ",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Lẩu cá kèo chua cay đặc sản miền Tây"
    },
    {
      name: "Gỏi Cuốn Tôm Thịt",
      price: "35.000đ",
      image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Gỏi cuốn tươi mát với tôm thịt tươi ngon"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
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
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Trang Chủ</a>
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Thực Đơn</a>
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
                <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Trang Chủ</a>
                <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Thực Đơn</a>
                <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Về Chúng Tôi</a>
                <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Liên Hệ</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-4xl">
                  <h2 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 text-yellow-300">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                      Xem Thực Đơn
                    </button>
                    <button className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                      Đặt Bàn Ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Tại Sao Chọn Chúng Tôi?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến những trải nghiệm ẩm thực tuyệt vời nhất với hương vị đậm đà quê hương
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700 transition-colors">
                <Utensils className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Nguyên Liệu Tươi Ngon</h3>
              <p className="text-gray-300">
                Tất cả nguyên liệu đều được chọn lọc kỹ càng từ các vùng quê, đảm bảo chất lượng và hương vị tự nhiên
              </p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700 transition-colors">
                <Heart className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Nấu Với Tình Yêu</h3>
              <p className="text-gray-300">
                Mỗi món ăn được chế biến với tình yêu và sự tận tâm, giữ gìn hương vị truyền thống của quê hương
              </p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700 transition-colors">
                <Users className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Phục Vụ Tận Tình</h3>
              <p className="text-gray-300">
                Đội ngũ nhân viên chuyên nghiệp, thân thiện, luôn sẵn sàng phục vụ quý khách như người thân trong gia đình
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Dishes */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Món Ăn Đặc Biệt</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Những món ăn được yêu thích nhất tại nhà hàng, mang đậm hương vị quê nhà
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialDishes.map((dish, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
                <div className="relative overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-yellow-400 px-3 py-1 rounded-full font-bold">
                    {dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{dish.name}</h3>
                  <p className="text-gray-300 mb-4">{dish.description}</p>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-yellow-400 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    Đặt Món <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white border-t border-red-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2 text-yellow-400">15+</div>
              <div className="text-gray-300">Năm Kinh Nghiệm</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2 text-yellow-400">50+</div>
              <div className="text-gray-300">Món Ăn Đặc Sắc</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2 text-yellow-400">1000+</div>
              <div className="text-gray-300">Khách Hàng Hài Lòng</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-gray-300">Đánh Giá 5 Sao</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Liên Hệ & Địa Chỉ</h2>
            <p className="text-gray-300 text-lg">Hãy đến và trải nghiệm hương vị quê nhà tại nhà hàng chúng tôi</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-900 rounded-xl hover:bg-black transition-colors border border-red-600">
              <MapPin className="w-8 h-8 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Địa Chỉ</h3>
              <p className="text-gray-300">123 Đường Quê Hương<br />Phường Tân Phú, Quận 7<br />TP. Hồ Chí Minh</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900 rounded-xl hover:bg-black transition-colors border border-red-600">
              <Phone className="w-8 h-8 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Điện Thoại</h3>
              <p className="text-gray-300">Hotline: 0901 234 567<br />Đặt bàn: 0901 234 568<br />Giao hàng: 0901 234 569</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900 rounded-xl hover:bg-black transition-colors border border-red-600">
              <Clock className="w-8 h-8 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Giờ Mở Cửa</h3>
              <p className="text-gray-300">Thứ 2 - Chủ Nhật<br />10:00 - 22:00<br />Không nghỉ trưa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <ChefHat className="w-8 h-8 text-yellow-500" />
              <h3 className="text-2xl font-bold">Nhà Hàng Quê</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nơi lưu giữ và lan tỏa những hương vị truyền thống của quê hương Việt Nam. 
              Chúng tôi tự hào mang đến cho quý khách những trải nghiệm ẩm thực đáng nhớ nhất.
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400">
                © 2024 Nhà Hàng Quê. Tất cả quyền được bảo lưu.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
