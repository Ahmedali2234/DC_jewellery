import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { BsCurrencyBitcoin } from 'react-icons/bs';

function Fr() {
  return (
    <footer className="bg-gray-100 py-8 mt-16 text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Column 1 */}
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Shopping Online</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline font-bold">Frequently Asked Questions</a></li>
              <li className="mb-2"><a href="#" className="hover:underline font-bold">Delivery</a></li>
              <li className="mb-2"><a href="#" className="hover:underline font-bold">Pricing</a></li>
              <li><a href="#" className="hover:underline font-bold">Where We Deliver?</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Gift Cards</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline font-bold">Frequently Asked Questions</a></li>
              <li className="mb-2"><a href="#" className="hover:underline font-bold">Delivery and Payment</a></li>
              <li className="mb-2"><a href="#" className="hover:underline font-bold">Activate The Card</a></li>
              <li><a href="#" className="hover:underline font-bold">Rules</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0 ">
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline font-bold">Buy A Gift Card</a></li>
              <li className="mb-2"><a href="#" className="hover:underline font-bold">History</a></li>
              <li className="mb-2"><a href="#" className="hover:underline font-bold">Return</a></li>
              <li><a href="#" className="hover:underline font-bold">Contact</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Diamond Club</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline font-bold">Registration</a></li>
              <li className="mb-2"><a href="#" className="hover:underline font-bold">Application</a></li>
              <li className="mb-2"><a href="#" className="hover:underline font-bold">About Program</a></li>
              <li><a href="#" className="hover:underline font-bold">Rules</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media and Promo Banner */}
        <div className="border-t  border-gray-300 mt-8 pt-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            {/* Social Media Icons */}
            <div className="flex gap-4 mb-4 md:mb-0">
              <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaFacebookSquare /></a>
              <a href="#" className="text-blue-700 text-2xl hover:text-blue-900"><FaLinkedin /></a>
              <a href="#" className="text-pink-600 text-2xl hover:text-pink-800"><FaInstagramSquare /></a>
              <a href="#" className="text-blue-400 text-2xl hover:text-blue-600"><FaTwitterSquare /></a>
              <a href="#" className="text-green-600 text-2xl hover:text-green-800"><FaWhatsappSquare /></a>
            </div>

            {/* Promo Banner */}
            <div className="text-center text-gray-800  font-extrabold text-sm">
              <strong>FREE CLOTHING</strong> THIS WEEK ORDER OVER $55
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 text-white py-4 mt-8">
        <div className="container mx-auto text-center text-sm">
          <p>© {new Date().getFullYear()} Jeweller.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Fr;
