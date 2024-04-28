import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Image() {
  useEffect(function () {
    AOS.init({ duration: 1200 });
  });
  return (
    <div className="flex flex-col gap-6 blur-sm z-0">
      <div className="w-[330px] h-[55px] image-primary-color rounded-full -rotate-12"></div>
      <div className="w-[330px] h-[55px] image-primary-color rounded-full -rotate-12"></div>
      <div className="w-[330px] h-[55px] image-primary-color rounded-full -rotate-12"></div>
      <div className="w-[330px] h-[55px] image-primary-color rounded-full -rotate-12"></div>
    </div>
  );
}

export default Image;
