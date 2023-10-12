import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import NavBar from '../NavBar/NavBar';
const Nav = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Service", path: "/service" },
        { id: 5, name: "Hire", path: "/hire" },
    ]

    return (
        <>
        <div >
            <div onClick={() => setOpen(!open)} className='  md:hidden   w-7   text-blue-600'>

                {
                    open ? <XMarkIcon
                    ></XMarkIcon >
                        : <Bars3Icon
                            onClick={() => { setOpen(!open) }}
                        ></Bars3Icon>
                }
              

            </div> 
             <ul className={`md:flex justify-center md:static absolute duration-500 ease-in  w-full text-center bg-red-300 ${open ? 'top-6 mx-auto' : "top-[-200px]"}`}>
                    {
                        routes.map(route => <NavBar key={route.id} route={route}></NavBar>)
                    }

                </ul>
        </div>
        </>
    );
};

export default Nav;