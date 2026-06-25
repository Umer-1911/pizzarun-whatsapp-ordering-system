import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_DATA } from '../constants/data';
import MenuItem from '../components/MenuItem';
import { Search, Filter } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All', 
    'New Arrivals', 
    'Pizza Run Deals', 
    'Festival Deals', 
    'Pizza', 
    'Burgers', 
    'Broast', 
    'Fries', 
    'Sandwiches', 
    'Pasta & Lasagna', 
    'Drinks'
  ];

  const filteredMenu = MENU_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sectionTitles: Record<string, string> = {
    'New Arrivals': 'New Arrival Items',
    'Pizza Run Deals': 'Pizza Run Deals',
    'Festival Deals': 'Festival Deals',
    'Pizza': 'Pizza Menu (Crust & Flavors)',
    'Burgers': 'Burgers',
    'Broast': 'Broast',
    'Fries': 'Fries',
    'Sandwiches': 'Sandwiches',
    'Pasta & Lasagna': 'Pasta / Lasagna',
    'Drinks': 'Beverages'
  };

  const renderSection = (category: string) => {
    const items = filteredMenu.filter(item => item.category === category);
    if (items.length === 0) return null;

    return (
      <div key={category} className="mb-20">
        <div className="flex items-center space-x-4 mb-10">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
            {sectionTitles[category] || category}
          </h2>
          <div className="h-1 flex-grow bg-brand-red/10 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="pt-32 pb-24 bg-gray-50 dark:bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6"
          >
            Our <span className="text-brand-red">Menu</span>
          </motion.h1>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg px-4">
            Explore our wide range of delicious pizzas, juicy burgers, and crispy siders. 
            Freshly made for every order.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 mb-12">
          <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex lg:flex-wrap justify-start lg:justify-center gap-2 min-w-max lg:min-w-0 px-4 lg:px-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                      : 'bg-white dark:bg-zinc-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full lg:w-96 px-4 lg:px-0">
            <Search className="absolute left-8 lg:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for your favorite food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/50 dark:text-white shadow-sm text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Menu Content */}
        <div className="min-h-[400px]">
          {activeCategory === 'All' ? (
            categories.slice(1).map(cat => renderSection(cat))
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredMenu.map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {filteredMenu.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No items found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
