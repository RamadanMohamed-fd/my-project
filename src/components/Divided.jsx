import React, { useEffect } from "react";

function Divided() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards2 = document.getElementsByClassName("grid-card1");
      for (const card of cards2) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const cardsContainer = document.getElementById("cards2");
    if (cardsContainer) {
      cardsContainer.addEventListener("mousemove", handleMouseMove);
    }

    // Cleanup function
    return () => {
      if (cardsContainer) {
        cardsContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  // Features data array
  const features = [
    {
      icon: "/energy.png",
      title:
        "Performs complex energy, nutrients, and fluid calculations in seconds",
      iconAlt: "Energy Calculation",
    },
    {
      icon: "/diet.png",
      title: "Precisely suggests diet plans based on the patient needs",
      iconAlt: "Diet Planning",
    },
    {
      icon: "/cloud.png",
      title:
        "Automatically saves the patient nutritional data into the patient record",
      iconAlt: "Data Storage",
    },

    {
      icon: "/server.png", // Consider using a different icon for this feature
      title:
        "Electronic lab and history documentation for efficient patient monitoring",
      iconAlt: "Electronic Documentation",
    },
  ];
  const impacts = [
    {
      icon: "/patient.png",
      title: "Improving the quality of care by focusing on what matters",
      iconAlt: "Energy Calculation",
    },
    {
      icon: "/clockwise.png",
      title:
        "Reducing clinical complications associated with calculation errors",
      iconAlt: "Diet Planning",
    },
    {
      icon: "/schedule.png",
      title:
        "Minimizing hospitalization time and better managing costs in the Intensive Care Unit",
      iconAlt: "Data Storage",
    },

    {
      icon: "/research.png", // Consider using a different icon for this feature
      title:
        "Serving as a valuable resource for future nutritional, epidemiological, and clinical research",
      iconAlt: "Electronic Documentation",
    },
  ];

  // Section configuration
  const sectionConfig = {
    subtitle: "From Calculations to Care",
    description:
      "The all-in-one platform that automates ICU nutrition math, prevents errors, and lets you focus on what you do best: saving lives.",
    featuresTitle: "iNutrical Features",
  };

  return (
    <div
      id="care"
      className="w-full font-inter pb-20 max-sm:pb-0 bgh5 relative "
    >
      <div className="line-break"></div>
      <div
        id="cards2"
        className="max-w-[1000px] relative mx-auto mt-10 px-10 max-sm:px-2 max-sm:py-16 max-sm:w-[95%]"
      >
        {/* Subtitle Section */}
        <div className="border border-[#ffffff1a] text-white nav relative text-sm max-xs:text-sm bg-[#ffffff0a] rounded-full py-1 px-3 w-fit mx-auto">
          <p className="opacity-70 font-inter">{sectionConfig.subtitle}</p>
        </div>

        {/* Description Section */}
        <div
          className="max-xs:-mt-1 flex-col flex items-center justify-center pb-2 max-w-[650px] mt-5 leading-[1.3em] mx-auto text-center text-2xl px-3 
           font-inter font-medium capitalize hero-heading"
        >
          {sectionConfig.description}
        </div>

        {/* Features Section */}

        <div className="">
          <h2 className="font-lobster text-center my-14 text-5xl hero-heading">
            {sectionConfig.featuresTitle}
          </h2>

          <div className="grid grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                alt={feature.iconAlt}
                index={index}
                totalItems={features.length}
              />
            ))}
          </div>
        </div>
        <div className="">
          <h2 className="font-lobster text-center my-14  text-5xl hero-heading">
            Measurable impacts
          </h2>

          <div className="grid grid-cols-2 gap-5 grid-card1">
            {impacts.map((impact, index) => (
              <FeatureCard
                key={index}
                icon={impact.icon}
                title={impact.title}
                alt={impact.iconAlt}
                index={index}
                totalItems={impacts.length}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Separate component for feature card
// Separate component for feature card
const FeatureCard = ({ icon, title, alt, index, totalItems }) => {
  return (
    <div className={"font-inter border border-[#ffffff1a] p-6 rounded-lg  "}>
      {/* Add relative z-10 to ensure content stays above hover effects */}
      <div className="border border-[#75d5a867] p-2 rounded-full w-fit mx-auto relative ">
        <img
          src={icon}
          alt={alt}
          width={32}
          height={32}
          className="size-[32px]"
        />
      </div>
      <p className="mt-6 text-2xl capitalize hero-heading font-inter text-center relative ">
        {title}
      </p>
    </div>
  );
};

export default Divided;
