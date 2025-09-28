import MainSection from "./components/MainSection";
import Prict from "./components/Prict";
import Techsection from "./components/Techsection";
import About from "./components/About";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact";
import "./components/AnimatedBeam";
import Divided from "./components/Divided";
import AnimatedBeamDemo from "./components/Partaner";
import Counter from "./components/Counter";
import Header from "./components/Header";
function App() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 800,
      easing: "ease-in-out",
      once: true, // Animation only happens once
      mirror: false,
      anchorPlacement: "top-bottom",

      // You can add more settings as needed
    });

    // Refresh AOS when components are updated
    AOS.refresh();

    return () => {
      AOS.refreshHard(); // Cleanup if needed
    };
  }, []);
  return (
    <div className="App">
      <MainSection />
      <Techsection />
      <Counter />
      <Divided />
      <About />
      <AnimatedBeamDemo />
      <Contact />
      <div className=" fixed top-0 left-0 w-full  h-screen z-10">
        <Prict />
      </div>
      <Header />
    </div>
  );
}

export default App;
