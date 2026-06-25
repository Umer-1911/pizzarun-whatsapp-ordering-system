import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Mail, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/data';

export default function Contact() {
  return (
    <main className="pt-32 pb-24 bg-white dark:bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Get in <span className="text-brand-red">Touch</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Have a question or want to place a large order? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Phone</h4>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-500 hover:text-brand-red transition-colors">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Address</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Hours</h4>
                    <p className="text-gray-500 text-sm">
                      5:00 PM - 4:00 AM <br />
                      Every Day
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-500 text-sm">info@pizzarun.pk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-[400px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 dark:border-zinc-800">
              <iframe
                title="Pizza Run Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4875.007535027502!2d67.06114807633801!3d24.952607641562256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3413f96fe8aab%3A0xfa82434223d3ea33!2sPizza%20Run%20Fast-food!5e1!3m2!1sen!2s!4v1773257774818!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 dark:bg-zinc-900 p-10 rounded-[50px] border border-gray-100 dark:border-zinc-800"
          >
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 dark:text-gray-400 ml-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full px-6 py-4 bg-white dark:bg-black border border-gray-100 dark:border-zinc-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/50 dark:text-white shadow-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 dark:text-gray-400 ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white dark:bg-black border border-gray-100 dark:border-zinc-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/50 dark:text-white shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 dark:text-gray-400 ml-2">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 bg-white dark:bg-black border border-gray-100 dark:border-zinc-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/50 dark:text-white shadow-sm"
                />
              </div>
              
              <button className="w-full bg-brand-red text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-brand-red/30 hover:bg-red-700 transition-all flex items-center justify-center space-x-3">
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
