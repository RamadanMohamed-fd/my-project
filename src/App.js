import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection";
import Prict from "./components/Prict";
import Techsection from "./components/Techsection";
import About from "./components/About";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact";
import Divided from "./components/Divided";
import AnimatedBeamDemo from "./components/Partaner";
import Counter from "./components/Counter";
import Header from "./components/Header";
import TermsAndConditions from "./components/TermsAndConditions"; // New component
import Police from "./components/police"; // New component
import ComingSoon from "./components/ComingSoon"; // New component

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main landing page route */}
          <Route
            path="/"
            element={
              <>
                <MainSection />
                <About />
                <Divided />
                <Counter />
                <Techsection />
                <AnimatedBeamDemo />
                <Contact />
                <div className="fixed top-0 left-0 w-full h-screen z-10">
                  <Prict />
                </div>
                <Header />
              </>
            }
          />

          {/* Terms & Conditions page route */}
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/police" element={<Police />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
