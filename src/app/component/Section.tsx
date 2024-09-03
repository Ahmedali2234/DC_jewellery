import React from 'react';

function Section() {
  return (
    <section className="bg-gradient-to-r  bg-gray-500 text-white min-h-screen flex flex-col items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
          <div className="w-full md:w-1/2">
            <img
              src="dev14.png"
              alt="Fashion Overview"
              className="object-cover w-full h-80 md:h-full transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <div>
              <h2 className="text-4xl font-extrabold text-black mb-4 leading-tight">
                Discover Your Style with Contemporary Fashion
              </h2>
              <p className="text-black mb-4 text-lg">
                Elevate your wardrobe with our exclusive collection of modern fashion pieces. Our range blends timeless elegance with the latest trends to keep you looking sharp and feeling confident.
              </p>
              <p className="text-black mb-6 text-lg">
                Explore expertly crafted garments designed for any occasion. Embrace the essence of sophistication and redefine your style with our curated selection.
              </p>
            </div>
            <a
              href="#"
              className="inline-block bg-gray-400 hover:bg-green-300 text-white  py-3 text-center rounded-full shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </div>


    


    <div className=" py-4 rounded-md mt-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item 1 */}
          <div className="relative group">
            <img
              src="dev15.png"
              alt="Man"
              className="w-full h-64 object-cover rounded-md transition-transform duration-300 transform group-hover:scale-105 shadow-lg"
            />
            <div className="absolute inset-0  to-transparent opacity-40 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white font-bold text-lg">
              <p>Now See!</p>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div className="relative group">
            <img
              src="dev16.png"
              alt="Man"
              className="w-full h-64 object-cover rounded-md transition-transform duration-300 transform group-hover:scale-105 shadow-lg"
            />
            <div className="absolute inset-0 to-transparent opacity-40 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white font-bold text-lg">
              <p>NOw See!</p>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div className="relative group">
            <img
              src="dev8.png"
              alt="Man"
              className="w-full h-64 object-cover rounded-md transition-transform duration-300 transform group-hover:scale-105 shadow-lg"
            />
            <div className="absolute inset-0  to-transparent opacity-40 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white font-bold text-lg">
              <p>Now See! </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  







    </section>
  );
}

export default Section;
