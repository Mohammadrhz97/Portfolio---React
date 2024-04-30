import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const refOne = useRef(null);

  useEffect(function () {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (nav === true && !refOne.current.contains(e.target)) {
      setNav(false);
    }
  };

  function handleNav() {
    setNav(!nav);
  }
  return (
    <>
      <div className="text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-20 px-4 text-1 fixed w-full backdrop-blur-sm border-b border-gray-800 z-40 ">
        <h1 className="w-full text-3xl font-bold primary-color ml-4">
          MohammadRHz
        </h1>

        <ul className="hidden md:flex">
          <li className="p-5">
            <a href="#Home">Home</a>
          </li>
          <li className="p-5">
            <a href="#About">About</a>
          </li>
          <li className="p-5">
            <a href="#MyProjects">Projects</a>
          </li>
          <li className="p-5">
            <a href="#LearningJurney">Learning</a>
          </li>
          <li className="p-5">
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <div
        className={
          nav
            ? "text-gray-300 md:hidden fixed h-full left-0 top-0 w-[50%] border-r-gray-900 bg-[#202121] ease-in-out duration-500 z-10"
            : "fixed left-[-100%]  ease-out duration-100"
        }
        ref={refOne}
      >
        <ul className="p-8 text-xl mt-12">
          <li className="p-2" onClick={() => setNav(false)}>
            <a href="#Home">Home</a>
          </li>
          <li className="p-2" onClick={() => setNav(false)}>
            <a href="#About">About</a>
          </li>
          <li className="p-2" onClick={() => setNav(false)}>
            <a href="#MyProjects">Projects</a>
          </li>
          <li className="p-2" onClick={() => setNav(false)}>
            <a href="#7">Learning</a>
          </li>
          <li className="p-2" onClick={() => setNav(false)}>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
