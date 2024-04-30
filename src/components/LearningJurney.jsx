import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function LearningJurney() {
  useEffect(function () {
    AOS.init({ duration: 1200 });
  });
  return (
    <div className="py-10 bg-[#232325]" id="LearningJurney" data-aos="zoom-in">
      <h2 className="mb-8 text-3xl text-white text-center">
        My <span>Learning jurney</span>
      </h2>
      <div
        data-aos="fade-left"
        className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto"
      >
        <p>
          Udemy Course: <br />
          The Complete JavaScript Course 2024: From Zero to Expert!
          <br />{" "}
          <strong className="text-gray-500 text-xs">
            By Jonas schmedtmann
          </strong>
        </p>
        <p className="text-gray-500 pt-4">
          After some self-learning experiences, I've made the decision to enroll
          in this course to embark on a journey from zero to becoming an expert
          in JavaScript.
        </p>
      </div>
      <div className="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>

      <div
        data-aos="fade-right"
        className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto"
      >
        <p>
          Udemy Course: <br />
          The Ultimate React Course 2024: React, Redux & More <br />
          <strong className="text-gray-500 text-xs">
            By Jonas schmedtmann
          </strong>
        </p>
        <p className="text-gray-500 pt-4">
          After figuring out how to code with CSS, HTML, and vanilla JavaScript,
          I decided to delve into React as my next learning adventure in web
          development.
        </p>
      </div>
      <div className="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>

      <div
        data-aos="fade-left"
        className="mb-[20px] text-white relative  bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto"
      >
        <p>Self learning</p>
        <p className="text-gray-500 pt-4">
          It's crucial not to underestimate the wealth of free resources
          available for learning. YouTube, W3Schools, JavaScript.info, and Stack
          Overflow stand out as some of the most valuable platforms out there.
        </p>
      </div>
    </div>
  );
}

export default LearningJurney;
