import React from 'react';

const NavBar = ({route}) => {
     


    return (

        <li className=' mr-12 font-bold hover:underline hover:text-white p-2'>
           <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default NavBar;