import React from 'react';
import { Star } from 'lucide-react';

const CustomerResults: React.FC = () => {
  const statistics = [
    {
      percentage: "92%",
      description: "Found it effective in reducing tanning"
    },
    {
      percentage: "84%",
      description: "Witnessed glow after using this face pack"
    },
    {
      percentage: "79%",
      description: "Loved its creamy texture"
    }
  ];

  const testimonials = [
    {
      name: "Priya S.",
      location: "Mumbai",
      rating: 5,
      comment: "I've tried many de-tan products but this one actually works! My skin looks brighter and the tan from my beach vacation is almost gone after just 2 weeks of use.",
      image: "https://images.pexels.com/photos/3777556/pexels-photo-3777556.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Aisha K.",
      location: "Delhi",
      rating: 5,
      comment: "Love the smooth texture and how it doesn't dry out my skin like other face packs. The natural ingredients make it gentle enough to use regularly, and I've noticed my dark spots fading!",
      image: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Raj M.",
      location: "Bangalore",
      rating: 4,
      comment: "I was skeptical about this product but decided to give it a try. I'm glad I did because it has significantly improved my uneven skin tone after consistent usage.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="reviews" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brown-800 mb-4">
          Real Results, Happy Customers
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          See the impressive results our customers have achieved with our DE-Tan Face Pack
        </p>
      </div>

      <div className="mb-16">
        <div className="bg-brown-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-brown-800 mb-6 text-center">
            DE-Tan Face Pack Results
          </h3>
          <p className="text-sm text-neutral-600 text-center mb-8">Based on customer surveys</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-brown-600 mb-2">{stat.percentage}</div>
                <p className="text-neutral-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-brown-800 mb-8 text-center">
          Customer Testimonials
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-brown-800">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={16} 
                    className={i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-neutral-300"} 
                  />
                ))}
              </div>
              
              <p className="text-neutral-600 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-brown-600 hover:bg-brown-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
          See More Reviews
        </button>
      </div>
    </section>
  );
};

export default CustomerResults;