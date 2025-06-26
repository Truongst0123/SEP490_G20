
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Menu from './pages/Menu';
function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} /> 
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
