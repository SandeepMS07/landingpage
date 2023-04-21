import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";

const WhatYouGet = ({ handleOpen }) => {
  return (
    <div className="container mt-20 my-2 mb-10 px-8 2xl:px-5 mx-auto">
      <section className="mb-3 text-gray-800 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 pb-4 text-center">
          What You Get
        </h2>
        <div className=" border  rounded-l-xl rounded-t-xl p-4 py-8 bg-gray-100 shadow-lg">
          <div className="grid sm:grid-cols-2  space-y-2 text-gray-800  font-semibold">
            <div className="flex flex-row items-center justify-start space-x-4 ml-10 sm:ml-20">
              <FaRegHandPointRight className="text-start text-lg sm:text-2xl" />
              <p className="text-lg sm:text-2xl">Live Classes</p>
            </div>
            <div className="flex flex-row items-center justify-start space-x-4 ml-10 sm:ml-20">
              <FaRegHandPointRight className="text-start text-lg sm:text-2xl" />
              <p className="text-lg sm:text-2xl">Recorded Live Sessions</p>
            </div>
            <div className="flex flex-row items-center justify-start space-x-4 ml-10 sm:ml-20">
              <FaRegHandPointRight className="text-start text-lg sm:text-2xl" />
              <p className="text-lg sm:text-2xl">Notes</p>
            </div>
            <div className="flex flex-row items-center justify-start space-x-4 ml-10 sm:ml-20">
              <FaRegHandPointRight className="text-start text-lg sm:text-2xl" />
              <p className="text-lg sm:text-2xl">Doubt Sessions</p>
            </div>
           
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            className="block uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg sm:text-2xl p-2 sm:p-5 px-4 sm:px-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={handleOpen}
          >
            Request for CallBack
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhatYouGet;
