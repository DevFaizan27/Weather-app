import React from 'react'
import { Navbar } from 'flowbite-react';

const NavBar = () => {
  return (
    <>
    
<nav className="bg-gray-700 border-gray-200">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#" className="flex items-center">
            <img src="https://tse3.mm.bing.net/th?id=OIP.18Rfjr8VntreF97wIpVxggHaHa&pid=Api&P=0&h=180" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Weather App</span>
        </a>
    </div>
</nav>
    </>
  )
}

export default NavBar