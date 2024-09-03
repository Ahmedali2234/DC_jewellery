import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { VscBellDot } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

export const Sr = () => {
    return (
        <div className='border-b border-gray-300 py-4 bg-gray-100'>
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
                <div className="uppercase font-bold text-4xl sm:text-5xl text-center text-gray-800 mb-4 sm:mb-0">
                Diamond Club
                </div>
                <div className="w-full sm:w-[300px] md:w-[50%] relative">
                    <input 
                        className='border border-gray-300 p-2 px-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
                        type="text" 
                        placeholder='Enter any product' 
                    />
                    <IoSearchOutline className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 text-2xl' />
                </div>
                <div className="flex gap-4 text-gray-600 text-[24px] mt-4 sm:mt-0">
                    <VscAccount className='relative'>
                        <span className='absolute top-0 right-0 w-3 h-3 bg-red-600 text-white text-xs rounded-full grid place-items-center -translate-x-1/2 -translate-y-1/2'>
                            0
                        </span>
                    </VscAccount>
                    <VscBellDot className='relative'>
                        <span className='absolute top-0 right-0 w-3 h-3 bg-red-600 text-white text-xs rounded-full grid place-items-center -translate-x-1/2 -translate-y-1/2'>
                            0
                        </span>
                    </VscBellDot>
                    <FaRegHeart className='relative'>
                        <span className='absolute top-0 right-0 w-3 h-3 bg-red-600 text-white text-xs rounded-full grid place-items-center -translate-x-1/2 -translate-y-1/2'>
                            0
                        </span>
                    </FaRegHeart>
                    <CiShoppingCart className='relative'>
                        <span className='absolute top-0 right-0 w-3 h-3 bg-red-600 text-white text-xs rounded-full grid place-items-center -translate-x-1/2 -translate-y-1/2'>
                            0
                        </span>
                    </CiShoppingCart>
                </div>
            </div>
        </div>
    );
}

export default Sr;
