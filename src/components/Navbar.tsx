import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart, Phone, Moon, Sun } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { BUSINESS_INFO } from '../constants/data';
import ScrollingBanner from './ScrollingBanner';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const navTextColor = isScrolled || !isHome ? 'text-gray-900 dark:text-gray-100' : 'text-white';
  const logoTextColor = isScrolled || !isHome ? 'text-gray-900 dark:text-white' : 'text-white';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="src\assets\images\pizzarun_logo_1782315841577.jpg" 
              alt="Pizza Run Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <span className={`font-black text-lg sm:text-xl tracking-tighter transition-colors uppercase ${logoTextColor}`}>
              PIZZA <span className="text-brand-red">RUN</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-red ${
                  location.pathname === link.path 
                    ? 'text-brand-red' 
                    : navTextColor
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition-colors ${isScrolled || !isHome ? 'hover:bg-gray-100 dark:hover:bg-gray-800' : 'hover:bg-white/10'}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className={`w-5 h-5 ${navTextColor}`} />}
              </button>
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2"
              >
                <ShoppingCart className={`w-6 h-6 transition-colors ${navTextColor}`} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>

              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-brand-red text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 hover:bg-red-700 transition-all shadow-lg hover:shadow-brand-red/50"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2"
            >
              <ShoppingCart className={`w-6 h-6 transition-colors ${navTextColor}`} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${navTextColor}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-black border-t dark:border-gray-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-red hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex items-center justify-between px-3">
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="bg-brand-red text-white px-6 py-2 rounded-full font-bold"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ScrollingBanner />
    </motion.nav>
  );
}
