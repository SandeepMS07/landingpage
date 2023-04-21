import React from "react";

const PriceCard = ({ handleOpen }) => {
  return (
    <div class="py-20   radius-for-skewed">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center mb-16">
          {" "}
          <h2 class="mb-2 text-4xl lg:text-5xl font-bold font-heading">
            Choose your best plan
          </h2>
        </div>

        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <div class="p-8 bg-blue-600 shadow-lg rounded-l-xl rounded-t-xl   cursor-pointer">
              <h4
                class="mb-2 text-2xl font-bold text-white"
                data-config-id="02_title"
              >
                One Paper
              </h4>{" "}
              <span className="flex flex-col items-start justify-center my-4">
                <span
                  class="text-5xl font-bold text-white"
                  data-config-id="02_price"
                >
                  ₹6,999/-
                </span>{" "}
                <span class="text-gray-50 text-xs" data-config-id="02_note">
                  <del>₹10,000/-</del>
                </span>
              </span>
              <span className="text-gray-100 text-sm ml-2 mt-6">Incl. of GST</span>
              <a
                href="https://rzp.io/l/kLOpUG447Z"
                class="inline-block text-center py-2 px-4 w-full rounded-l-xl rounded-t-xl bg-white hover:bg-gray-100 font-bold leading-loose transition duration-200"
                type="button"
              >
                Buy Now
              </a>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <div class="p-8 bg-white drop-shadow-lg rounded-l-xl rounded-t-xl cursor-pointer">
              <h4 class="mb-2 text-2xl font-bold font-heading">Module 1</h4>{" "}
              <span className="flex flex-col items-start justify-center my-4">
                <span class="text-5xl font-bold" data-config-id="03_price">
                  ₹17,999/-
                </span>{" "}
                <span class="text-gray-400 text-sm" data-config-id="03_note">
                  <del>₹25,000/-</del>
                </span>
              </span>
              <span className="text-gray-500 text-sm ml-2 mt-6">Incl. of GST</span>
              <a
                href="https://rzp.io/l/kLOpUG447Z"
                class="inline-block text-center py-2 px-4 w-full rounded-l-xl rounded-t-xl bg-blue-600 hover:bg-blue-700 text-white font-bold leading-loose transition duration-200"
                type="button"
              >
                Buy Now
              </a>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <div class="p-8 bg-blue-600 shadow-lg rounded-l-xl rounded-t-xl   cursor-pointer">
              <h4
                class="mb-2 text-2xl font-bold text-white"
                data-config-id="02_title"
              >
                Module 2
              </h4>{" "}
              <span className="flex flex-col items-start justify-center my-4">
                <span
                  class="text-5xl font-bold text-white"
                  data-config-id="02_price"
                >
                  ₹17,999/-
                </span>{" "}
                <span class="text-gray-50 text-xs" data-config-id="02_note">
                  <del>₹25,000/-</del>
                </span>
              </span>
              <span className="text-gray-100 text-sm ml-2 mt-6">Incl. of GST</span>
              <a
                href="https://rzp.io/l/kLOpUG447Z"
                class="inline-block text-center py-2 px-4  w-full rounded-l-xl rounded-t-xl bg-white hover:bg-gray-100 font-bold leading-loose transition duration-200"
                type="button"
              >
                Buy Now
              </a>
            </div>
          </div>
          <div class="w-full lg:w-1/4 px-4">
            <div class="p-8 bg-white shadow-lg rounded-l-xl rounded-t-xl cursor-pointer">
              <h4
                class="mb-2 text-2xl font-bold font-heading"
                data-config-id="03_title"
              >
                Both Modules
              </h4>{" "}
              <span className="flex flex-col items-start justify-center my-4">
                <span class="text-5xl font-bold" data-config-id="03_price">
                  ₹29,999/-
                </span>{" "}
                <span class="text-gray-400 text-sm" data-config-id="03_note">
                  <del>₹40,000/-</del>
                </span>
                
              </span>
              <span className="text-gray-500 text-sm ml-2 mt-6">Incl. of GST</span>
              <a
                href="https://rzp.io/l/kLOpUG447Z"
                class="inline-block text-center py-2 px-4 w-full rounded-l-xl rounded-t-xl bg-blue-600 hover:bg-blue-700 text-white font-bold leading-loose transition duration-200"
                type="button"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
