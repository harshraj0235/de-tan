import React from 'react';

const HowToUse: React.FC = () => {
  const steps = [
    {
      image: "https://images.pexels.com/photos/3850841/pexels-photo-3850841.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Apply",
      description: "Apply this face mask on clean skin"
    },
    {
      image: "https://images.pexels.com/photos/3192175/pexels-photo-3192175.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Wait",
      description: "Allow it to dry for 5 to 10 minutes"
    },
    {
      image: "https://images.pexels.com/photos/7446839/pexels-photo-7446839.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Rinse",
      description: "Rinse well with water or remove with a wet towel"
    }
  ];

  return (
    <section id="how-to-use" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brown-800 mb-4">
          How to Use
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Follow these simple steps to get the best results from our DE-Tan Face Pack
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute h-1 bg-amber-200 top-28 left-0 right-0 z-0">
          <div className="absolute w-full h-full bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div 
                className={`w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-full bg-brown-600 text-white mb-4 relative ${
                  index < steps.length - 1 ? 'md:after:content-[""] md:after:absolute md:after:w-16 md:after:h-1 md:after:bg-amber-200 md:after:right-[-56px]' : ''
                }`}
              >
                {index + 1}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-full">
                <div className="rounded-lg overflow-hidden mb-4 h-48">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-brown-800 mb-2">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-neutral-600 mb-6">
          For best results, use 2-3 times a week for a radiant, tan-free complexion
        </p>
        <button className="bg-brown-600 hover:bg-brown-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default HowToUse;