import React from 'react';
import {ChevronRightIcon}  from '@heroicons/react/24/solid'
const Features = ({feature}) => {

   
    return (
        <div className='flex text-white p-2'>
        <ChevronRightIcon className='w-6 h-6'></ChevronRightIcon>
        <p>{feature}</p>
    </div>
    );
};

export default Features;