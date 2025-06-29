import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../assets/about4.jpeg";

function About() {
  useEffect(function () {
    AOS.init({ duration: 1200 });
  });
  return (
    <div
      className="mt-16 pb-12 text-white bg-[#232325] h-auto"
      id="About"
      data-aos="fade-right"
    >
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="sm:w-[400px] h-full pb-20">
            <img
              src={aboutImg}
              alt="about"
              className="object-cover rounded-xl h-[300px] filter grayscale brightness-50"
            />
          </div>
        </div>

        <div>
          <div className="p-2 w-[380px] sm:w-auto">
            <div className="text-gray-300 my-3">
              <h3 className="text 4xl font-semibold mb-5">
                About <span className="primary-text">Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                At 26 years old, I find myself with a diverse background. Since
                childhood, I've had a deep love for creation. Music, in
                particular, captured my imagination with its boundless
                creativity. Pursuing this passion, I enrolled at the University
                of Art, where I delved further into artistic expression. Along
                the way, I discovered unexpected sources of creativity, such as
                working as a barista for almost 8 years. Now, you might wonder
                why I transitioned to coding. For me, it was about finding an
                even larger canvas for my creativity. Just almost a year ago, I
                decided to learn coding to discover new ways to express my
                creativity. It's only been a year since I started, but I'm
                already excited about all the possibilities ahead.
              </p>
            </div>
          </div>

          <div className="pl-3 pt-6">
            speaking <span>language</span> :
          </div>

          <div className="flex flex-col sm:flex-row mt-6 items-center sm:justify-start justify-center gap-7 pl-3">
            <div className="bg-[#333333]/40 p-5 rounded-lg w-[113px]">
              <p>
                <span className=" text-xl">English</span>
              </p>
              <h3 className="md:text-4l text-2l  text-white">Fluent</h3>
            </div>

            <div className="bg-[#333333]/40 p-5 rounded-lg w-[113px]">
              <p>
                <span className=" text-xl">Persian</span>
              </p>
              <h3 className="md:text-4l text-2l  text-white">Native</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
