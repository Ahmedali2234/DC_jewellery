

import React from 'react';

function It() {
  return (
    <div className="container mx-auto px-4 mt-6">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Jewellery Proposal</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Terms and Conditions:</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores libero temporibus ab animi, officia, nemo consequatur laborum assumenda minus voluptate ducimus eum sequi a dolor rerum. Deleniti aliquam magni voluptate.
          </p>
          <a href="#" className="text-teal-600 hover:underline font-semibold">Learn More &gt;</a>
        </div>

        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Proposal Overview:</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique debitis corrupti error dolorem eos tenetur porro incidunt, distinctio numquam consectetur expedita! Voluptatibus debitis explicabo delectus quaerat ab officia, corporis eius!
          </p>
          <a href="#" className="text-teal-600 hover:underline font-semibold">Learn More &gt;</a>
        </div>
      </div>

      <div className="mt-12 bg-white text-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold mb-4"> Features and Specifications:</h2>
        <p className="text-gray-700 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic necessitatibus, amet, qui consectetur excepturi possimus, nesciunt voluptate fugiat iste facere perspiciatis assumenda? Impedit illum veritatis facere ea veniam eius temporibus.
        </p>
        <a href="#" className="text-teal-600 hover:underline font-semibold">Learn More &gt;</a>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sign Up for Our Weekly Newsletter</h2>
        <button className="bg-gradient-to-r from-gray-900 to-gray-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:from-gray-900 hover:to-gray-600 transition duration-300 transform hover:scale-105">Subscribe</button>
      </div>
    </div>
  );
}

export default It;
