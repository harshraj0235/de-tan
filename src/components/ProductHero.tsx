import React from 'react';
import { ShoppingCart, Star, Shield, Truck, ThumbsUp } from 'lucide-react';

const ProductHero: React.FC = () => {
  return (
    <section id="product" className="pt-24 pb-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="bg-white rounded-full p-8 shadow-xl relative">
              <img 
                src="https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="DE-Tan Face Pack" 
                className="w-full max-w-md mx-auto object-contain transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 bg-amber-100 text-brown-800 rounded-full px-4 py-2 font-bold text-sm shadow-md transform rotate-3">
                50g
              </div>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-brown-100 text-brown-800 px-3 py-1 rounded-full text-sm font-medium">
                Natural Skincare
              </span>
              <div className="flex items-center">
                <Star size={16} className="text-amber-400 fill-amber-400" />
                <Star size={16} className="text-amber-400 fill-amber-400" />
                <Star size={16} className="text-amber-400 fill-amber-400" />
                <Star size={16} className="text-amber-400 fill-amber-400" />
                <Star size={16} className="text-amber-400 fill-amber-400" />
                <span className="ml-1 text-sm text-neutral-600">(124 reviews)</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
              DE-Tan Face Pack
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral-600 mb-6">
              For Glowing & Radiant Skin
            </h2>
            
            <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Special Price</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-brown-800">₹399</span>
                    <span className="text-neutral-500 line-through ml-2">₹599</span>
                    <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      33% off
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-green-600 flex items-center">
                    <Shield size={16} className="mr-1" />
                    In Stock
                  </span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-sm mb-6 text-neutral-600">
              <p>
                Our DE-Tan Face Pack is specially formulated with natural ingredients like 
                Kojic acid, Fuller's earth, Orange extract, and more to help remove tan, 
                brighten skin, and give you a healthy, radiant glow.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-brown-600 hover:bg-brown-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center">
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
              <button className="bg-white border-2 border-brown-600 text-brown-600 hover:bg-brown-50 px-8 py-3 rounded-full font-medium transition-colors duration-300">
                Buy Now
              </button>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center mr-2">
                  <Shield size={18} className="text-brown-600" />
                </div>
                <span className="text-sm">100% Authentic</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center mr-2">
                  <Truck size={18} className="text-brown-600" />
                </div>
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center mr-2">
                  <ThumbsUp size={18} className="text-brown-600" />
                </div>
                <span className="text-sm">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;