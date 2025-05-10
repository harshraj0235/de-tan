import React from 'react';
import { SunIcon, ShieldCheck, Leaf, Sparkles, CheckCircle2 } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <SunIcon className="w-8 h-8 text-amber-500" />,
      title: "Reduces Tanning",
      description: "Effectively reduces sun tan and pigmentation with natural ingredients"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      title: "For All Skin Types",
      description: "Gentle formula suitable for all skin types including sensitive skin"
    },
    {
      icon: <Leaf className="w-8 h-8 text-amber-500" />,
      title: "100% Natural",
      description: "Made with natural ingredients without harmful chemicals"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-500" />,
      title: "Glowing Skin",
      description: "Promotes radiant, glowing skin by removing dead skin cells"
    }
  ];

  return (
    <section id="benefits" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brown-800 mb-4">
          Why Choose Our DE-Tan Face Pack?
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Our specially formulated face pack provides multiple benefits for your skin,
          giving you a natural glow while reducing tanning and pigmentation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 border border-neutral-100"
          >
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-brown-800 mb-2">{benefit.title}</h3>
            <p className="text-neutral-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-amber-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-brown-800 mb-4">Key Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Reduces tanning and pigmentation",
            "Removes dead skin cells & impurities",
            "Lightens dark spots & blemishes",
            "Makes skin glowing & healthy",
            "Improves overall skin tone",
            "Suitable for all skin types"
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-neutral-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;