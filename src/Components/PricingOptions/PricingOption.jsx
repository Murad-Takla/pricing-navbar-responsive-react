import React from 'react';
import PriceCard from './PriceCard';

const PricingOption = () => {

    const pricingOptions = [
        {id : 1 , type : "Free" , price : 0.00 , features : [
          
            "Simple features", 
            "Premium features",
            "Classical features",
            "Advanced features",
            "Traditional features",
            "Digital features",
            "Matha Nosto features"
        ]},
        {id : 2 , type : "Medium" , price : 5.80 , features : [
            
            "Medium features", 
            "Premium features",
            "Classical features",
            "Advanced features",
            "Traditional features",
            "Digital features",
            "Matha Nosto features"
        ]},
        {id : 3 , type : "Premium" , price : 9.90 , features : [
       
            "premium features", 
            "Premium features",
            "Classical features",
            "Advanced features",
            "Traditional features",
            "Digital features",
            "Matha nosto features"
        ]},
    ]

    return (
        <div>
            <h1 className='bg-indigo-400 text-3xl font-semibold text-center py-2 text-white'>Best deal with our Courses</h1>
           <div className='grid md:grid-cols-3 gap-6 p-2 '>
            {
                pricingOptions.map(option => <PriceCard key={option.id} option={option}></PriceCard>)
            }
          
           </div>
           
        </div>
    );
};

export default PricingOption;