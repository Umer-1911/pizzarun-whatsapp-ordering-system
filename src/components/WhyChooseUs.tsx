import { motion } from 'motion/react';
import { Leaf, Zap, Banknote, Moon } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Fresh Ingredients",
      desc: "We source our vegetables and meat daily to ensure maximum flavor.",
      icon: Leaf
    },
    {
      title: "Fast Service",
      desc: "Your hunger won't have to wait. We pride ourselves on quick turnaround.",
      icon: Zap
    },
    {
      title: "Affordable Prices",
      desc: "Premium taste shouldn't break the bank. Best value for money in Karachi.",
      icon: Banknote
    },
    {
      title: "Late Night Open",
      desc: "Cravings at 3 AM? We've got you covered until 4:00 AM every day.",
      icon: Moon
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6"
          >
            Why Pizza Run is <br />
            <span className="text-brand-red">The Best Choice</span>
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            We're not just another fast food joint. We're a commitment to quality, speed, and affordability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-[32px] border border-gray-100 dark:border-zinc-800 transition-all hover:shadow-2xl hover:shadow-brand-red/10 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(229,9,20,0.1)] group-hover:scale-110 group-hover:shadow-brand-red/20 transition-all duration-300">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
