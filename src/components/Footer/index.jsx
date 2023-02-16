import React from 'react'
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" bg-[#17191F] font-body">
        <span className="mx-1 sm:mx-5 p-8 flex items-center sm:justify-around ">
          <span>
            <img
              src="../assets/logo-on-white-bg-1.png"
              className="max-h-12"
              alt=""
            />
          </span>
          <span className="uppercase font-semibold hidden sm:flex items-center justify-evenly sm:gap-x-8">
            <span className="text-white flex items-center sm:gap-x-8">
              <span>
                <span className="flex items-center gap-x-2">
                  <BsTelephone />
                  <p>080 22960366</p>
                </span>
              </span>
              <span>
                <span className="flex items-center gap-x-2">
                  <BsTelephone />
                  <p>+91 7483800690</p>
                </span>
              </span>
            </span>
          </span>
        </span>
         
    </footer>
  )
}

export default Footer