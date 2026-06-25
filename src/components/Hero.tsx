import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { MENU_DATA } from '../constants/data';

export default function Hero() {
  const deals = MENU_DATA.filter(item => item.category === 'Festival Deals');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (deals.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % deals.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [deals.length]);

  const nextSlide = () => {
    if (deals.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % deals.length);
  };
  const prevSlide = () => {
    if (deals.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + deals.length) % deals.length);
  };

  if (deals.length === 0) return null;

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={deals[currentIndex].image} 
            alt={deals[currentIndex].name} 
            className="w-full h-full object-cover opacity-60 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-brand-red text-white px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest mb-4 sm:mb-6">
                Special Deal
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight mb-4 sm:mb-6 uppercase">
                {deals[currentIndex].name}
              </h1>
              <p className="text-xl sm:text-2xl text-brand-red font-black mb-3 sm:mb-4">
                Starting from Rs {deals[currentIndex].price}
              </p>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-lg">
                {deals[currentIndex].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link 
                  to="/menu"
                  className="group bg-brand-red text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold flex items-center justify-center space-x-2 hover:bg-red-700 transition-all shadow-xl shadow-brand-red/30"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/menu"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  View Menu
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-12 right-12 z-20 flex space-x-4">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-12 z-20 flex space-x-2">
        {deals.map((_, index) => (
          <div 
            key={index}
            className={`h-1 transition-all duration-300 rounded-full ${index === currentIndex ? 'w-12 bg-brand-red' : 'w-4 bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
}
