import React from 'react';
import { Truck, RotateCcw, Shield, HelpCircle } from 'lucide-react';

const ShippingInfo: React.FC = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brown-800 mb-4">
          Shipping & Returns
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Everything you need to know about our shipping and return policies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start mb-4">
            <Truck className="w-8 h-8 text-brown-600 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">Shipping Information</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>Free shipping on orders above ₹499</li>
                <li>Standard delivery: 3-5 business days</li>
                <li>Express delivery: 1-2 business days (additional charges)</li>
                <li>Track your order through our website or SMS updates</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-medium text-brown-800 mb-2">Product Details</h4>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="py-1 text-neutral-500">Product Name:</td>
                  <td className="py-1">DE-Tan Face Pack for Glowing & Radiant Skin</td>
                </tr>
                <tr>
                  <td className="py-1 text-neutral-500">Package Contains:</td>
                  <td className="py-1">1 Piece of De-Tan Face Pack</td>
                </tr>
                <tr>
                  <td className="py-1 text-neutral-500">Quantity:</td>
                  <td className="py-1">50gm</td>
                </tr>
                <tr>
                  <td className="py-1 text-neutral-500">Skin Type:</td>
                  <td className="py-1">All Skin Types</td>
                </tr>
                <tr>
                  <td className="py-1 text-neutral-500">Form:</td>
                  <td className="py-1">Cream</td>
                </tr>
                <tr>
                  <td className="py-1 text-neutral-500">Weight:</td>
                  <td className="py-1">300g (with packaging)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start mb-4">
            <RotateCcw className="w-8 h-8 text-brown-600 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">Return Policy</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>Easy returns within 7 days of delivery</li>
                <li>Full refund or replacement for damaged or incorrect products</li>
                <li>Contact our customer service for return authorization</li>
                <li>Return shipping charges may apply based on reason for return</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-medium text-brown-800 mb-2">RTO & Return Charges</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left text-neutral-500">Charges</th>
                  <th className="py-2 text-right">For this product</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 text-neutral-500">RTO</td>
                  <td className="py-2 text-right">₹74</td>
                </tr>
                <tr>
                  <td className="py-2 text-neutral-500">RVP</td>
                  <td className="py-2 text-right">₹143</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-neutral-500 mt-2">*RVP will be charged on orders where supplier is not found to be at fault.</p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center bg-amber-50 p-6 rounded-lg">
          <Shield className="w-10 h-10 text-brown-600 mb-4" />
          <h4 className="text-lg font-semibold text-brown-800 mb-2">Safe & Secure</h4>
          <p className="text-neutral-600 text-sm">All transactions are encrypted and secure</p>
        </div>
        
        <div className="flex flex-col items-center text-center bg-amber-50 p-6 rounded-lg">
          <Truck className="w-10 h-10 text-brown-600 mb-4" />
          <h4 className="text-lg font-semibold text-brown-800 mb-2">Fast Delivery</h4>
          <p className="text-neutral-600 text-sm">Quick and reliable shipping nationwide</p>
        </div>
        
        <div className="flex flex-col items-center text-center bg-amber-50 p-6 rounded-lg">
          <HelpCircle className="w-10 h-10 text-brown-600 mb-4" />
          <h4 className="text-lg font-semibold text-brown-800 mb-2">Customer Support</h4>
          <p className="text-neutral-600 text-sm">Need assistance? Contact us at 0755-4304201</p>
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;