import React from 'react';
import { AiFillAlipayCircle } from 'react-icons/ai';

const PriceOption = ({option}) => {
    const {name, features, price} = option;
    return (
        <div className='items-center p-6 text-white bg-indigo-500 rounded-lg'>
            <h2>
                <span className='font-bold text-7xl'>{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h4 className='my-6 text-3xl'>{name}</h4>
            <ul >
                {
                    features.map((feature, index) => <li key={index} className='m-2 text-xl'>{feature}</li>)
                }
            </ul>

            <button className='w-full py-2 mt-12 font-bold text-black bg-red-300 rounded-lg'> Buy Now </button>   
        </div>
    );
};

export default PriceOption;