import React from "react";
import FeaturesSection from "./Features";
import WhySection from "./Why";
import ImpactsSection from "./Impact";
function Divided() {
  return (
    <div className="w-full bgh5 relative  font-inter">
      <div className="line-break"></div>
      <div className="w-fit   py-20 max-sm:pb-10 mx-auto">
        <FeaturesSection />
        <WhySection />

        <ImpactsSection />
      </div>
    </div>
  );
}

export default Divided;
