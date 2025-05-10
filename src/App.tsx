import React, { useState, useEffect } from 'react';
import { SunIcon, ShieldCheck, Leaf, Sparkles, CheckCircle2, Package, Truck, ThumbsUp } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductHero from './components/ProductHero';
import Benefits from './components/Benefits';
import HowToUse from './components/HowToUse';
import Ingredients from './components/Ingredients';
import Comparison from './components/Comparison';
import CustomerResults from './components/CustomerResults';
import ShippingInfo from './components/ShippingInfo';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">
      <Navbar scrolled={scrolled} />
      <main>
        <ProductHero />
        <div className="container mx-auto px-4 py-12">
          <Benefits />
          <HowToUse />
          <Ingredients />
          <Comparison />
          <CustomerResults />
          <ShippingInfo />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;