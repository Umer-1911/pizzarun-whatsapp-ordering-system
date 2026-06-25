import Hero from '../components/Hero';
import CounterSection from '../components/CounterSection';
import PopularTimes from '../components/PopularTimes';
import WhyChooseUs from '../components/WhyChooseUs';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MENU_DATA, BUSINESS_INFO } from '../constants/data';
import MenuItem from '../components/MenuItem';

export default function Home() {
  const featuredItems = MENU_DATA.slice(0, 3);

  return (
    <main>
      <Hero />
      <CounterSection />
      
      {/* Featured Menu Preview */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                Our <span className="text-brand-red">Bestsellers</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                The flavors that Karachi can't get enough of. Freshly prepared and delivered hot.
              </p>
            </div>
            <Link 
              to="/menu" 
              className="text-brand-red font-bold flex items-center space-x-2 hover:underline"
            >
              <span>View Full Menu</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <PopularTimes />
      <WhyChooseUs />
      
      {/* Newsletter/CTA */}
      <section className="py-24 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 sm:mb-8">
              Hungry? We're Open <br className="hidden sm:block" />
              Until 4:00 AM!
            </h2>
            <p className="text-white/80 text-lg sm:text-xl mb-8 sm:mb-10">
              Don't let the late-night cravings win. Order now and get it delivered in 30 mins.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/menu"
                className="bg-white text-brand-red px-8 py-4 sm:px-10 sm:py-5 rounded-full text-lg sm:text-xl font-black hover:bg-gray-100 transition-all shadow-2xl"
              >
                Order Now
              </Link>
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-black text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full text-lg sm:text-xl font-black hover:bg-zinc-900 transition-all shadow-2xl"
              >
                Call to Order
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
