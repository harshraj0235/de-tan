import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const Comparison: React.FC = () => {
  const comparisonPoints = [
    {
      point: "Gentle on skin",
      tnw: true,
      others: false
    },
    {
      point: "Prevents breakouts",
      tnw: true,
      others: false
    },
    {
      point: "Natural ingredients",
      tnw: true,
      others: false
    },
    {
      point: "Long-lasting glow",
      tnw: true,
      others: false
    },
    {
      point: "Non-sticky texture",
      tnw: true,
      others: false
    },
    {
      point: "Suits all skin types",
      tnw: true,
      others: false
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brown-800 mb-4">
          TNW vs Others
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          See why our DE-Tan Face Pack stands out from the competition
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="px-6 py-4 bg-neutral-100 text-neutral-800 rounded-tl-lg"></th>
              <th className="px-6 py-4 bg-brown-600 text-white text-center">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold">TNW</span>
                  <span className="text-sm opacity-75">DE-Tan Face Pack</span>
                </div>
              </th>
              <th className="px-6 py-4 bg-neutral-200 text-neutral-800 text-center rounded-tr-lg">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold">Others</span>
                  <span className="text-sm opacity-75">Typical Products</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonPoints.map((point, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                <td className="px-6 py-4 font-medium">{point.point}</td>
                <td className="px-6 py-4 text-center">
                  {point.tnw ? 
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" /> : 
                    <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                  }
                </td>
                <td className="px-6 py-4 text-center">
                  {point.others ? 
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" /> : 
                    <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                  }
                </td>
              </tr>
            ))}
            <tr className="bg-amber-50">
              <td className="px-6 py-4 font-medium rounded-bl-lg">Price</td>
              <td className="px-6 py-4 text-center font-bold text-green-600">₹399</td>
              <td className="px-6 py-4 text-center font-medium text-neutral-600 rounded-br-lg">₹600 - ₹800</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-12 text-center">
        <p className="text-neutral-600 mb-6">
          Make the smart choice for your skin with our premium DE-Tan Face Pack
        </p>
        <button className="bg-brown-600 hover:bg-brown-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
          Try Risk-Free Today
        </button>
      </div>
    </section>
  );
};

export default Comparison;