import React, { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState('bg-gray-200');
  
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 50) {
        setNavBackground('bg-white shadow-lg');
      } else {
        setNavBackground('bg-gray-200');
      }
    };
    
    window.addEventListener('scroll', changeBackground);
    
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);
  return (
    <>
      <header className={`p-4 sm:p-5 sticky top-0   font-body z-[999] ${navBackground}  transition duration-500 ease-in-out`}>
        <span className="mx-2 sm:mx-6 flex items-center justify-between 2xl:justify-around">
          <span>
            <img
              src="../assets/logo-on-white-bg-1.png"
              className="max-h-10"
              alt=""
            />
          </span>
          <span className="uppercase font-semibold flex items-center justify-evenly sm:gap-x-8">
            <span className="text-gray-600 flex items-center gap-x-2 sm:gap-x-8">
              <BsTelephone />
              <a href="tel:+91 7483800690">+91 7483800690</a>
            </span>
          </span>
        </span>
      </header>
    </>
  );
};

export default Navbar;
