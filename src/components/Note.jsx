import React from "react";

const Note = () => {
  return (
    <div class="my-2 p-10">
      <div className="container">
        <section>
          <h1 className="text-xl font-semibold">Note:</h1>

          <ol className="list-disc list-item sm:text-gray-700 space-y-1 ml-2 sm:ml-7">
            <li>Live classes will be streamed through the Zoom application.</li>
            <li>
              The classes are specifically designed for the December 2023
              examination.
            </li>
            <li>
              Experienced faculties, with a teaching experience ranging from 5
              to 15 years, will conduct the classes in English.
            </li>
            <li>
              The timetable for the classes will be released periodically.
            </li>
            <li>
              Module 1 classes will be conducted in the morning, while Module 2
              classes will be conducted in the evening.
            </li>
            <li>
              Upon registration, students will receive printed study material.
            </li>
            <li>
              The classes are being conducted in partnership by LearnCab and DD
              Institute.
            </li>
            <li>
              The fees for 1 paper is{" "}
              <span className="font-semibold"> Rs.7,000/-</span>, 1 module is{" "}
              <span className="font-semibold"> Rs.18,000/-</span> , and for both
              modules is <span className="font-semibold"> Rs.30,000/-</span>.
              The prices include GST.
            </li>
            <li>
              Classes will be conducted between May and October 2023, and the
              above cited duration may vary by 10-20 hours, depending on the
              students' pace of learning.
            </li>
            <li>
              Revision of all papers will be conducted in the final month to
              ensure that students have understood the subjects and their doubts
              are clarified.
            </li>
            <li>
              Recording of the classes will be available until the end of
              December 2023 exams on the LearnCab portal.
            </li>
            <li>
              Please inform fellow students to take advantage of these classes.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Note;
