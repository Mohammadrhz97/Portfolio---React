import { useEffect } from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Work() {
  useEffect(function () {
    AOS.init({ duration: 1200 });
  });
  return (
    <div className="py-6 max-w-[1200px] mx-auto" id="Work" data-aos="fade-up">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-white">
              My <span>Projects</span>
            </h2>
            <p className="text-gray-500">These are my latest projects.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/Mohammadrhz97/pen/KKYYWRy"
            className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-auto"
          >
            <img
              src={proj1}
              alt=""
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>

          <a
            href="https://maptyapp12.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-auto"
          >
            <img
              src={proj2}
              alt=""
              className="h-full w-full object-center scale-105 transition duration-200 group-hover:scale-110"
            />
          </a>

          <a
            href="https://github.com/Mohammadrhz97/worldwise"
            target="_blank"
            rel="noreferrer"
            className="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-auto"
          >
            <img
              src={proj3}
              alt=""
              className="h-full w-full   object-center scale-105 transition duration-200 group-hover:scale-110"
            />
          </a>

          <a
            href="https://github.com/Mohammadrhz97/reactQuiz"
            target="_blank"
            rel="noreferrer"
            className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-auto"
          >
            <img
              src={proj4}
              alt=""
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
