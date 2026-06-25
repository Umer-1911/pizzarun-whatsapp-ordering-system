import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants/data';
import { Utensils, Heart, ShieldCheck, Truck } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Utensils, title: "Quality Food", desc: "We never compromise on the quality of our ingredients." },
    { icon: Heart, title: "Made with Love", desc: "Every pizza and burger is crafted with passion." },
    { icon: ShieldCheck, title: "Hygiene First", desc: "Our kitchen follows strict cleanliness protocols." },
    { icon: Truck, title: "Fast Delivery", desc: "Hot food delivered to your doorstep in record time." }
  ];

  return (
    <main className="pt-32 pb-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white">
              The Story of <br />
              <span className="text-brand-red">Pizza Run</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Founded in the heart of Karachi, Pizza Run started with a simple mission: 
              to provide high-quality, delicious fast food that everyone can afford. 
              We believe that fast food doesn't have to be "junk" food.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Our journey began in Buffer Zone, North Nazimabad, where we quickly became 
              a local favorite for late-night cravings. Today, we're proud to serve 
              thousands of happy customers across Karachi.
            </p>
            
            <div className="pt-6">
              <div className="p-8 bg-brand-red rounded-[40px] text-white shadow-2xl shadow-brand-red/20">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 leading-relaxed italic">
                  "To serve the freshest, most delicious fast food in Karachi with speed and a smile, 
                  ensuring every customer leaves satisfied and comes back for more."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80" 
                alt="Our Kitchen" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-red rounded-full flex items-center justify-center text-white text-center p-6 shadow-2xl animate-pulse">
              <div>
                <p className="text-4xl font-black">100%</p>
                <p className="text-sm font-bold uppercase tracking-widest">Fresh</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">What We Stand For</h2>
          <p className="text-gray-500 dark:text-gray-400">Our core values guide everything we do.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 rounded-3xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 group hover:shadow-2xl hover:shadow-brand-red/5 transition-all"
            >
              <div className="inline-flex p-4 bg-brand-red/10 border border-brand-red/20 text-brand-red rounded-2xl mb-6 shadow-[0_0_20px_rgba(229,9,20,0.1)] group-hover:scale-110 group-hover:shadow-brand-red/20 transition-all duration-300">
                <val.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{val.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
