import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Clock, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/data';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/src/assets/images/pizzarun_logo_1782315841577.jpg" 
                alt="Pizza Run Logo" 
                className="h-12 w-12 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold text-2xl tracking-tight text-brand-red">
                PIZZA RUN
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {BUSINESS_INFO.tagline}. Karachi's favorite spot for fresh, fast, and delicious fast food.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-brand-red transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-brand-red transition-colors">Our Menu</Link></li>
              <li><Link to="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link to="/reviews" className="hover:text-brand-red transition-colors">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                <span className="text-sm">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sm hover:text-brand-red transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-sm">info@pizzarun.pk</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6">Opening Hours</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-brand-red shrink-0" />
                <div className="text-sm">
                  <p>Mon - Sun: 5:00 PM - 4:00 AM</p>
                  <p className="text-brand-red text-xs mt-1 font-medium">Open Late Night!</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Pizza Run Fast-food. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
