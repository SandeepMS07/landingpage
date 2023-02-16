import React from "react";
import { BsTelephone } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <header className="p-4 sm:p-5 sticky top-0 bg-white font-body">
        <span className="mx-2 sm:mx-6 flex items-center sm:justify-around">
          <span>
            <img
              src="../assets/logo-on-white-bg-1.png"
              className="max-h-10"
              alt=""
            />
          </span>
          <span className="uppercase font-semibold hidden sm:flex items-center justify-evenly sm:gap-x-8">
            <span className="text-gray-600 flex items-center sm:gap-x-8">
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
      </header>
    </>
  );
};

export default Navbar;
