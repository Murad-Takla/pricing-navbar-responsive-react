import React from 'react';
import Features from './Features';

const PriceCard = (props) => {

    const { features, type, price, id } = props.option
   
    return (

        <div className='bg-indigo-400 rounded p-2' >
            <div className='text-center text-white'>
                <span className='text-5xl font-semibold'>{price}</span>
                <span className='text-2xl font-bold'>/month</span>
                <p className='font-bold text-xl '>{type}</p>
            </div>
          <hr></hr>
        {features.map ((feature , i) => <Features key={i} feature = {feature}></Features>) }
    <button className='py-2 rounded text-white font-bold hover:bg-orange-600 bg-red-600 w-full'>Buy now</button>
        </div>

    );
};

export default PriceCard;