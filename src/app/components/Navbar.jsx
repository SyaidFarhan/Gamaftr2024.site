import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    // sm:bg-space1 sm:rounded-none sm:border-0 sm:shadow-none rounded-full shadow-[0px_0px_20px_#FFC100] border-[2px] border-red-500 
    <nav className="relative z-40 mx-3 mb-5 sm:mx-1">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className=''>
              <a href="#info1" className="flex items-center px-2 py-2 text-xl text-space2 hover:text-gray-900">
                <img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/resize/logo%20rev%20pake%20yg%20ini%20aja%20(1)%20(1).png?raw=true" alt="" className="max-w-[70px] " />
                
              </a>
            </div>
          </div>

          <div className="items-center hidden gap-5 space-x-1 md:flex">
            <a href="#event" className="px-6 py-2 font-extrabold transition duration-300 bg-yellow-400 rounded-3xl text-space1 hover:bg-space1 hover:text-space2 font-spacegrotesk hover:shadow-[0px_0px_20px_#FFC100]">Our Event</a>
            <a href="https://bit.ly/PRESALE2GAMAFTR24" className="px-6 py-2 font-extrabold transition duration-300 bg-yellow-400 rounded-3xl text-space1 hover:bg-space1 hover:text-space2 font-spacegrotesk hover:shadow-[0px_0px_20px_#FFC100]">Order Ticket</a>
          </div>

          <div className="flex items-center md:hidden">
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuVisible ? '' : 'hidden'} md:hidden items-center flex justify-center`}>
        <a href="https://bit.ly/PRESALE2GAMAFTR24" className="block px-4 py-2 text-sm font-bold hover:bg-space1 rounded-xl font-spacegrotesk ">Order Ticket</a>
        <a href="#event" className="block px-4 py-2 text-sm font-bold hover:bg-space1 rounded-xl font-spacegrotesk ">Our Event</a>
      </div>
    </nav>
  );
};

export default Navbar;
