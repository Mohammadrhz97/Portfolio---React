import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import LearningJurney from "./components/LearningJurney";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(function () {
    AOS.init({ duration: 1200 });
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <LearningJurney />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
