import React from "react";

function About() {
  return (
    <div id="about" className="w-full pb-20 max-sm:pb-0 bgh5 relative  ">
      <div className="line-break"></div>
      <div className="max-w-[900px] relative z-50 mx-auto pt-20">
        <div className="max-w-[600px] mx-auto relative  ">
          <p className=" font-lobster font-semibold text-6xl hero-heading mt-10 mb-14">
            About Us{" "}
          </p>
          <div className="space-y-5 z-30 hero-heading">
            <div className="text-lg font-medium  max-sm:text-lg max-xs:text-base leading-[1.6em] tracking-wider font-inter">
              Clinical dietitians worldwide face a considerable burden when
              dealing with critically ill patients in the intensive care unit
              (ICU) settings.
            </div>
            <p className=" text-lg font-medium  max-sm:text-lg max-xs:text-base leading-[1.6em] tracking-wider font-inter">
              These inevitable daily challenges include calculating the energy
              and nutrients needs, the time consumed performing those
              calculations, the time needed for nutritional reassessment and
              monitoring, and the fact that those patients are at higher risk
              for complications. for ICU patients.
            </p>
            <p className=" text-lg font-medium  max-sm:text-lg max-xs:text-base leading-[1.6em] tracking-wider font-inter">
              iNutriCal® is the first clinical nutrition management system
              specialized in calculating the nutritional needs of
              enterally-administered formulae
            </p>
            <p className=" text-lg font-medium  max-sm:text-lg max-xs:text-base leading-[1.6em] tracking-wider font-inter">
              iNutriCal® is designed for clinical dietitians, diet technicians,
              and other nutrition care professionals to boost productivity and
              excellence in nutritional care for ICU patients.
            </p>
            <p className=" text-lg font-medium  max-sm:text-lg max-xs:text-base leading-[1.6em] tracking-wider font-inter">
              Our user-friendly critical care nutrition system performs complex,
              case-by-case nutritional requirement calculations in just a few
              clicks.
            </p>
            <p className=" text-lg font-medium  max-sm:text-lg max-xs:text-base leading-[1.6em] tracking-wider font-inter">
              In 2019, out of 464 participated projects nationwide, our software
              was recognized by the Saudi Food & Drug Administration, Riyadh,
              Saudi Arabia, for innovation and necessity.
            </p>
          </div>
          <p className=" text-right font-lobster text-4xl italic pr-16 mt-10  text-white">
            iNutriCal®
          </p>
          <div className="square absolute -bottom-5  rotate-[90deg] right-0 z-50 "></div>
        </div>
        <div className="">
          <div className="square absolute top-[9%] left-[50%]  "></div>
          <div className="square absolute top-[30%] left-0 z-50 "></div>
          <div className="square absolute top-[80%] rotate-[180deg] left-0 z-50 "></div>
          <div className="square absolute top-[50%] rotate-[270deg] right-0 z-50 "></div>
        </div>
      </div>
    </div>
  );
}

export default About;
