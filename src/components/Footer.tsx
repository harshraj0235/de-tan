import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TNW Naturals</h3>
            <p className="text-neutral-300 mb-4">
              Premium natural skincare products for a healthier, more radiant you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-brown-700 hover:bg-brown-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-brown-700 hover:bg-brown-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-brown-700 hover:bg-brown-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">Darshna Creation, Surat, Gujarat</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:07554304201" className="text-neutral-300 hover:text-white transition-colors">0755-4304201</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:support@tnwnaturals.com" className="text-neutral-300 hover:text-white transition-colors">support@tnwnaturals.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-brown-700 text-center text-neutral-400 text-sm">
          <p>© 2025 TNW Naturals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;