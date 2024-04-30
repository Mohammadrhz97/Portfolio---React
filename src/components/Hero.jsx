import { TypeAnimation } from "react-type-animation";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Image from "./Image";
import proj7 from "../assets/proj7.png";
import { useState } from "react";
import HelloImage from "./HelloImage";

function Hero() {
  const [hello, setHello] = useState(false);
  return (
    <div
      className="max-w-[1200px]  h-[auto] mx-auto flex flex-col-reverse sm:flex-row justify-center items-center pt-28 p-5"
      id="Home"
    >
      <div className="flex flex-col my-auto mx-auto sm:items-start items-center justify-center sm:w-[420px] ">
        <p className="md:text-3xl sm:text-4xl text-xl font-bold text-gray-300">
          Hi I am Mohammad👋🏻
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 ">
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "React Dev",
              1000,
              "Love to learn",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <div className=" flex justify-center items-center" id="Hero">
          <p className="md:text-2xl sm:text-xl text-l font-bold text-gray-500">
            I live in Netherlands
          </p>
        </div>
        <div className="text-5xl flex justify-start gap-10 my-7 text-purple-600">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mohammadreza-hosseinzadeh-dev-60a4002b1/"
          >
            <AiFillLinkedin />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Mohammadrhz97"
          >
            <AiFillGithub />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mohammadrhz/"
          >
            <AiFillInstagram />
          </a>
        </div>

        <div className="relative inline-flex group my-3">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 "></div>
          <a
            href="https://easyupload.io/hhw5h2"
            target="_blank"
            rel="noreferrer"
            title="Download CV"
            role="button"
            className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-1g font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className=" sm:mr-24 my-11 sm:my-0 relative z-0 ">
        <div className="my-auto w-full lg:px-1 sm:w-[500px]  h-auto absolute sm:-left-[75px] sm:-top-28 -top-20  z-10 overflow-hidden ">
          <img
            onMouseEnter={() => setHello(true)}
            onMouseLeave={() => setHello(false)}
            src={proj7}
            alt=""
            className="pl-4 scale-95 sm:scale-[.8] transition duration-300 sm:hover:scale-90 hover:scale-100 "
          />
          {hello ? <HelloImage /> : ""}
        </div>
        <Image />
      </div>
    </div>
  );
}

export default Hero;
