import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(function () {
    AOS.init({ duration: 1200 });
  });
  return (
    <div
      className="mt-12 w-max-[800px] border-t border-gray-500 text-center"
      id="Footer"
      data-aos="fade-in"
    >
      <p className="my-5 text-gray-500">
        <br />
        Netherlands,Arnhem
      </p>
      <div className="inline-flex test-gray-500 gap-4 text-3xl">
        <FaGithubSquare />
        <FaInstagram />
        <FaGithubSquare />
        <FaInstagram />
      </div>
    </div>
  );
}

export default Footer;
