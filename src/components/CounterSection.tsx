import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Users, ShoppingBag, UtensilsCrossed, Star } from 'lucide-react';

export default function CounterSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { label: 'Happy Customers', value: 133, suffix: '+', icon: Users },
    { label: 'Orders Served', value: 1000, suffix: '+', icon: ShoppingBag },
    { label: 'Menu Items', value: 10, suffix: '+', icon: UtensilsCrossed },
    { label: 'Average Rating', value: 4.0, suffix: '', decimals: 1, icon: Star },
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-4">
              <div className="inline-flex p-4 bg-brand-red/5 rounded-2xl text-brand-red">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                {inView ? (
                  <CountUp 
                    end={stat.value} 
                    duration={2.5} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals || 0}
                  />
                ) : '0'}
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
