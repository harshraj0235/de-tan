import React from 'react';

const Ingredients: React.FC = () => {
  const ingredients = [
    {
      name: "Kojic Acid",
      benefit: "Helps reduce hyperpigmentation and sun damage",
      image: "https://images.pexels.com/photos/5765/flour-white-powder.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Fuller's Earth",
      benefit: "Absorbs excess oil and deep cleanses pores",
      image: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Orange Extract",
      benefit: "Rich in vitamin C for brightening the skin",
      image: "https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Sugar Cane Extract",
      benefit: "Natural source of glycolic acid for gentle exfoliation",
      image: "https://images.pexels.com/photos/1168764/pexels-photo-1168764.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Argan Oil",
      benefit: "Moisturizes and nourishes the skin",
      image: "https://images.pexels.com/photos/9464589/pexels-photo-9464589.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Lemon Extract",
      benefit: "Natural astringent with brightening properties",
      image: "https://images.pexels.com/photos/855204/pexels-photo-855204.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="ingredients" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brown-800 mb-4">
          Natural, Powerful Ingredients
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Our DE-Tan Face Pack combines scientifically-backed ingredients that work together
          to give you glowing, radiant skin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ingredients.map((ingredient, index) => (
          <div 
            key={index}
            className="bg-white overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={ingredient.image} 
                alt={ingredient.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-brown-800 mb-1">{ingredient.name}</h3>
              <p className="text-neutral-600 text-sm">{ingredient.benefit}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-amber-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-brown-800 mb-4">Product Quality</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="bg-brown-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
            <span>Made with premium natural ingredients</span>
          </li>
          <li className="flex items-start">
            <span className="bg-brown-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
            <span>Dermatologically tested and approved</span>
          </li>
          <li className="flex items-start">
            <span className="bg-brown-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
            <span>No harmful chemicals, parabens, or sulfates</span>
          </li>
          <li className="flex items-start">
            <span className="bg-brown-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
            <span>Not tested on animals</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Ingredients;