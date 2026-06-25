import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import { CartProvider } from './hooks/useCart';
import { AnimatePresence } from 'motion/react';
import CartModal from './components/CartModal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </div>
          <Footer />
          <FloatingButtons />
          <CartModal />
        </div>
      </Router>
    </CartProvider>
  );
}
