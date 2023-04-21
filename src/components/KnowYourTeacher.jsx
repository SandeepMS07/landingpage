import React from "react";
import Card from "./Card";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const KnowYourTeacher = ({ handleOpen }) => {
 
  let videoUrls = [
    {
      name: "CS Rishi Kakkar",
      url: "https://www.youtube.com/embed/Of69SGZ-nkI?controls=0",
      subject: "CA, CM, FM & SL",
    },
    {
      name: "CS Vikram Pandya",
      url: "https://www.youtube.com/embed/aGbaPRWoQTs",
      subject: "SUBIL, EC & IPR",
    },
    {
      name: "CS Mukesh Pareek",
      url: "https://www.youtube.com/embed/EMwKpG5yAxc",
      subject: "Tax Laws",
    },
    {
      name: "CS Raju Dubey",
      url: "https://www.youtube.com/embed/ahwuSpYOFjg",
      subject: "CL & P",
    },
  ];

  const scrollLeft = () => {
    document.getElementById("videoContent").scrollLeft -= 400;
  };

  const scrollRight = () => {
    document.getElementById("videoContent").scrollLeft += 400;
  };

  return (
    <div className="container mt-20 my-2 px-5 mx-auto">
      <section className="mb-3 text-gray-800 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 pb-4 text-center">
          Know Your Teacher
        </h2>
        <div className="relative group">
          <div
            id="videoContent"
            className="carousel p-4 m-2 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
          >
            {videoUrls &&
              videoUrls.map((videoUrls, urlIndex) => {
                return (
                  <div key={urlIndex}>
                    <Card videoUrls={videoUrls} cardFor="video" />
                  </div>
                );
              })}
          </div>
          {/* Left Arrow */}
          <div
            onClick={scrollLeft}
            className="sm:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-base sm:text-2xl rounded-full p-2 bg-black/20 sm:bg-black/50 text-white cursor-pointer"
          >
            <BsChevronCompactLeft />
          </div>

          {/* Right Arrow */}
          <div
            onClick={scrollRight}
            className="sm:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-base sm:text-2xl rounded-full p-2 bg-black/20 sm:bg-black/50 text-white cursor-pointer"
          >
            <BsChevronCompactRight />
          </div>
        </div>
        <div className="flex top-4 justify-center py-2 mb-4">
          {videoUrls &&
            videoUrls.map((url, urlIndex) => {
              return (
                <div key={urlIndex} className="text-base cursor-pointer">
                  <RxDotFilled />
                </div>
              );
            })}
        </div>
        <div className="flex items-center justify-center">
          <button
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            className="block uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg sm:text-2xl p-2 sm:p-5 px-4 sm:px-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={handleOpen}
          >
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default KnowYourTeacher;
