import React from 'react'
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" bg-[#17191F] font-body shadow-lg">
        <span className="mx-1 sm:mx-5 p-8 flex items-center justify-between 2xl:justify-around">
          <span>
            <img
              src="../assets/icon.png"
              className="max-h-12"
              alt=""
            />
          </span>
          <span className="uppercase font-semibold flex items-center justify-evenly sm:gap-x-8">
            <span className="text-white flex items-center sm:gap-x-8">
              
                <span className="flex items-center gap-x-2 sm:gap-x-8">
                  <BsTelephone />
                  <a href="tel:+91 7483800690">+91 7483800690</a>
                </span>
              
            </span>
          </span>
        </span>
         
    </footer>
  )
}

export default Footer