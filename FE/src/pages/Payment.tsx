import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';


const Payment = () => {
  const { cart, clearCart } = useCart();
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = () => {
    alert('Thanh toán thành công! Cảm ơn bạn đã đặt món.');
    clearCart();
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center">Thanh toán</h2>
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-700">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[200px]">
              <p className="text-gray-300 text-center mb-4">Không có sản phẩm nào để thanh toán.</p>
              <a href="/menu" className="mt-2 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-colors text-lg shadow">Quay lại thực đơn</a>
            </div>
          ) : (
            <>
              <ul className="divide-y divide-gray-700 mb-6">
                {cart.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover border border-gray-700" />
                      <div>
                        <div className="text-white font-semibold">{item.name}</div>
                        <div className="text-yellow-400">{item.price.toLocaleString()}đ</div>
                      </div>
                    </div>
                    <div className="text-gray-300">x{item.quantity}</div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center text-lg font-bold text-yellow-400 mb-4">
                <span>Tổng cộng:</span>
                <span>{totalAmount.toLocaleString()}đ</span>
              </div>
              <div className="my-8 text-center">
                <p className="text-white font-semibold mb-2">Quét mã QR để chuyển khoản qua Momo:</p>
                
                <p className="text-gray-300 mt-2">Nội dung chuyển khoản: <span className="font-bold text-yellow-400">SĐT + Tên</span></p>
              </div>
              <button
                className="w-full bg-red-600 hover:bg-red-700 text-yellow-400 font-bold py-3 rounded-lg transition-colors text-lg shadow-lg"
                onClick={handlePayment}
              >
                Xác nhận đã chuyển tiền
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
