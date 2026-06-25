import { motion } from 'motion/react';

export default function ScrollingBanner() {
  return (
    <div className="bg-brand-red text-white py-2 overflow-hidden whitespace-nowrap border-b border-white/10">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="inline-block"
      >
        <span className="text-sm font-bold uppercase tracking-widest px-4">
          All the current and upcoming updates and deals will be shown here • 
          All the current and upcoming updates and deals will be shown here • 
          All the current and upcoming updates and deals will be shown here • 
          All the current and upcoming updates and deals will be shown here • 
          All the current and upcoming updates and deals will be shown here • 
        </span>
      </motion.div>
    </div>
  );
}
