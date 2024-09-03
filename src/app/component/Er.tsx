import React from 'react';

const Er = () => {
  return (
    <div className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              src: "dev6.png",
              alt: "Necklace",
              title: "NECKLACES",
              description: "We have a tremendous variety in comparison to all of our competition. Our collection is like a pearl among simple...",
            },
            {
              src: "dev9.png",
              alt: "Jewelry Set",
              title: "JEWELRY SETS",
              description: "These are two types of jewelry - stones and metal, closely both of them are unique because of their appearance &...",
            },
            {
              src: "dev15.png",
              alt: "Earrings",
              title: "EARRINGS",
              description: "We are offering you the unique goods because our product is the real treasure. If you are a true fan, you'll love...",
            },
            {
              src: "dev14.png",
              alt: "Ring",
              title: "RINGS",
              description: "A ring is a symbol of love, and in our collection, you will find a ring for every taste. We have rings made of different...",
            }
          ].map((item, index) => (
            <div key={index} className="relative group">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2 className="text-lg md:text-xl font-bold">{item.title}</h2>
                <p className="text-xs md:text-sm mt-2">{item.description}</p>
                <button className="mt-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white">
                  VIEW PRODUCTS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Er;
