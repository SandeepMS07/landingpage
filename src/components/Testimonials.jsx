import React from "react";
import Card from "./Card";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Testimonials = ({ handleOpen }) => {
  let cardDetails = [
    {
      name: "Sohail Ahmed",
      imgUrl: "https://courses.learncab.com/testimonials/1.jpg",
      text: "Thank you so much LearnCab. The video lectures have been very beneficial for me CAFC and I have been able to clear the exam with good marks.",
    },
    {
      name: "VENISSA PINTO",
      imgUrl: "https://courses.learncab.com/testimonials/2.jpg",
      text: "I watched LearnCab classes for my CA Final Group 2 papers i.e., Indirect taxes and costing which helped me a lot to clear my CA Exam and now I’m a qualified CA. These classes are conducted by expert faculties who have in-depth knowledge about the subject and classes provided at reasonable rates. They also provide a platform to discuss the queries involved in the subject with respective faculties. I would like to thank everyone involved in providing these classes.",
    },
    {
      name: "VASUDEV C",
      imgUrl: "https://courses.learncab.com/testimonials/3.jpg",
      text: "I read about LearnCab Online classes and downloaded the app and went through the demo lectures. The approach and lectures helped me to understand better and then I subscribed to CA final classes, each chapter alone with practical examples made it very interesting and quizzes after each chapter made me assist my understanding right away. I not only cleared Group II but scored 72 in IDT and good marking in AMA. Thanks to LearnCab for this wonderful platform now I can study anytime anywhere.",
    },
  ];

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  return (
    <div className="container mt-20 my-2 px-6 mx-auto">
      <section className="mb-2 text-gray-800 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 pb-4 text-center">
          Testimonials
        </h2>

        <div className="relative group">
          <div
            id="content"
            className="carousel p-2 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {cardDetails &&
              cardDetails.map((cardDetails, urlIndex) => {
                return (
                  <div key={urlIndex}>
                    <Card cardDetails={cardDetails} />
                  </div>
                );
              })}
          </div>
          {/* Left Arrow */}
          <div
            onClick={scrollLeft}
            className="sm:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-base sm:text-3xl rounded-full p-2 bg-black/20 sm:bg-black/50 text-white cursor-pointer"
          >
            <BsChevronCompactLeft />
          </div>

          {/* Right Arrow */}
          <div
            onClick={scrollRight}
            className="sm:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-base sm:text-3xl rounded-full p-2 bg-black/20 sm:bg-black/50 text-white cursor-pointer"
          >
            <BsChevronCompactRight />
          </div>
        </div>
        <div className="flex top-4 justify-center py-2">
          {cardDetails &&
            cardDetails.map((url, urlIndex) => {
              return (
                <div key={urlIndex} className="text-base cursor-pointer">
                  <RxDotFilled />
                </div>
              );
            })}
        </div>
        <div className="flex items-center justify-center mt-4">
          <button
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            className="block uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg sm:text-2xl p-2 sm:p-5 px-4 sm:px-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={handleOpen}
          >
           Enquire Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
