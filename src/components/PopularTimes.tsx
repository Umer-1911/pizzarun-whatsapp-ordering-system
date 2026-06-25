import { motion } from 'motion/react';
import { Clock, Users, Timer } from 'lucide-react';

export default function PopularTimes() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
              Planning a visit? <br />
              <span className="text-brand-red">Check our peak hours.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We're a local favorite! To ensure you get the freshest food with the shortest wait, 
              here's what you need to know about our peak times.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-black rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800">
                <div className="flex items-center space-x-3 text-brand-red mb-4">
                  <Clock className="w-6 h-6" />
                  <span className="font-bold">Peak Hour</span>
                </div>
                <p className="text-2xl font-black dark:text-white">10:00 PM</p>
                <p className="text-sm text-gray-500 mt-1">Usually busy at this time</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-black rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800">
                <div className="flex items-center space-x-3 text-brand-red mb-4">
                  <Timer className="w-6 h-6" />
                  <span className="font-bold">Wait Time</span>
                </div>
                <p className="text-2xl font-black dark:text-white">Up to 30 mins</p>
                <p className="text-sm text-gray-500 mt-1">During peak weekend hours</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant Atmosphere" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-brand-red text-white p-8 rounded-3xl shadow-2xl max-w-[240px]">
              <Users className="w-10 h-10 mb-4" />
              <p className="text-lg font-bold leading-tight">Average stay is 10–45 minutes</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
