import { motion } from 'motion/react';
import { Star, Quote, User } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../constants/data';

export default function Reviews() {
  return (
    <main className="pt-32 pb-24 bg-gray-50 dark:bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-brand-red/10 text-brand-red px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-5 h-5 fill-current" />
            <span className="font-bold">{BUSINESS_INFO.rating} Average Rating</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            What Our <span className="text-brand-red">Customers Say</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Don't just take our word for it. Here's what the people of Karachi think about Pizza Run.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-[40px] shadow-sm border border-gray-100 dark:border-zinc-800 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-red/10" />
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? 'text-brand-red fill-current' : 'text-gray-200 dark:text-zinc-700'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{review.comment}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-gray-400">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{review.name}</h4>
                  <p className="text-gray-500 text-xs">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leave a Review Form */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 p-10 rounded-[50px] shadow-2xl border border-gray-100 dark:border-zinc-800">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Leave a Review</h2>
            <p className="text-gray-500">Share your experience with us!</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex justify-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <button key={i} type="button" className="text-gray-300 hover:text-brand-red transition-colors">
                  <Star className="w-10 h-10" />
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-gray-50 dark:bg-black border border-gray-100 dark:border-zinc-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/50 dark:text-white"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-gray-50 dark:bg-black border border-gray-100 dark:border-zinc-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/50 dark:text-white"
              />
            </div>
            
            <textarea 
              rows={4}
              placeholder="Your Message"
              className="w-full px-6 py-4 bg-gray-50 dark:bg-black border border-gray-100 dark:border-zinc-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/50 dark:text-white"
            />
            
            <button className="w-full bg-brand-red text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-brand-red/30 hover:bg-red-700 transition-all">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
