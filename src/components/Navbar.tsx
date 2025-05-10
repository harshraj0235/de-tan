import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-brown-800">
              <span className="text-brown-600">TNW</span> Naturals
            </h1>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#product" className="text-neutral-800 hover:text-brown-600 transition-colors">
              Product
            </a>
            <a href="#benefits" className="text-neutral-800 hover:text-brown-600 transition-colors">
              Benefits
            </a>
            <a href="#how-to-use" className="text-neutral-800 hover:text-brown-600 transition-colors">
              How to Use
            </a>
            <a href="#ingredients" className="text-neutral-800 hover:text-brown-600 transition-colors">
              Ingredients
            </a>
            <a href="#reviews" className="text-neutral-800 hover:text-brown-600 transition-colors">
              Reviews
            </a>
            <button className="bg-brown-600 text-white px-6 py-2 rounded-full hover:bg-brown-700 transition-colors flex items-center space-x-2">
              <ShoppingCart size={18} />
              <span>Buy Now</span>
            </button>
          </nav>
          
          {/* Mobile Nav Button */}
          <button 
            className="md:hidden text-neutral-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Nav Menu */}
        {menuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            <a 
              href="#product" 
              className="text-neutral-800 hover:text-brown-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Product
            </a>
            <a 
              href="#benefits" 
              className="text-neutral-800 hover:text-brown-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#how-to-use" 
              className="text-neutral-800 hover:text-brown-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              How to Use
            </a>
            <a 
              href="#ingredients" 
              className="text-neutral-800 hover:text-brown-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Ingredients
            </a>
            <a 
              href="#reviews" 
              className="text-neutral-800 hover:text-brown-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Reviews
            </a>
            <button 
              className="bg-brown-600 text-white px-6 py-2 rounded-full hover:bg-brown-700 transition-colors flex items-center justify-center space-x-2"
              onClick={() => setMenuOpen(false)}
            >
              <ShoppingCart size={18} />
              <span>Buy Now</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;