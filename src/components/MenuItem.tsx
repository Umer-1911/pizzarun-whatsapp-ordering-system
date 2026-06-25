import { motion } from 'motion/react';
import { ShoppingCart, Plus } from 'lucide-react';
import { useCart } from '../hooks/useCart';

interface MenuItemProps {
  key?: number | string;
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
  };
}

export default function MenuItem({ item }: MenuItemProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="bg-white dark:bg-zinc-900 rounded-[32px] overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-[0_20px_50px_rgba(229,9,20,0.15)] transition-all duration-300 group flex flex-col"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            {item.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-red transition-colors mb-2">
          {item.name}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-2">
          {item.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-brand-red font-black text-xl sm:text-2xl">
            Rs {item.price}
          </span>
          <button
            onClick={() => addToCart(item)}
            className="bg-brand-red text-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg shadow-brand-red/20 hover:bg-red-700 transition-all group/btn"
            aria-label="Add to cart"
          >
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:rotate-90 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
