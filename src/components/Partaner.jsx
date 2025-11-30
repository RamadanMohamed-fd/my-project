import React, { forwardRef, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-back"
      data-aos-duration="1000"
      data-aos-offset="100"
      data-aos-mirror="true"
      className={`${className} z-30 `}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamMultipleOutputDemo({ className }) {
  const { t, isRTL, currentLanguage } = useLanguage();
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  const content = {
    en: {
      title: "Our Partners",
      freeTrialTitle: "Free Trial",
      freeTrialText1:
        "iNutriCal automates complex nutrition math, giving you more time for your patients. Experience it risk-free",
      freeTrialText2: "Stop calculating, start caring. Try iNutriCal free.",
    },
    ar: {
      title: "شركاؤنا",

      freeTrialTitle: "تجربة مجانية",
      freeTrialText1:
        "iNutriCal يؤتمت حسابات التغذية المعقدة، مما يمنحك المزيد من الوقت لمرضاك. جربه بدون مخاطر",
      freeTrialText2: "توقف عن الحساب، ابدأ بالرعاية. جرب iNutriCal مجانًا.",
    },
  };

  const currentContent = content[currentLanguage];

  return (
    <div
      id="partaner"
      className="w-full pb-20 max-sm:pb-10 bgh5 px-3 relative"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="line-break"></div>
      <h3
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-duration="1000"
        data-aos-offset="100"
        data-aos-mirror="true"
        className="hero-heading text-7xl max-sm:text-4xl font-inter font-semibold py-20 text-center"
      >
        {currentContent.title}
      </h3>
      <div
        className={`${className} z-50 flex-col flex justify-center items-center relative overflow-hidden`}
        ref={containerRef}
      >
        <div className="max-w-4xl flex-col flex items-stretch justify-between">
          <div className="flex flex-wrap items-center gap-10 justify-center">
            <Circle ref={div2Ref}>
              <img
                src="/images/p4.png"
                alt="Logo"
                className="w-[300px] max-sm:max-w-[250px] h-auto"
              />
            </Circle>
            <Circle ref={div4Ref}>
              <img
                src="/images/p5.png"
                alt="Logo"
                className="w-[300px] max-sm:max-w-[250px] h-auto"
              />
            </Circle>

            <Circle ref={div1Ref} className="">
              <img
                src="/images/p1.png"
                alt="Logo"
                className="w-[300px] max-sm:max-w-[250px] h-auto"
              />
            </Circle>
            <Circle ref={div3Ref}>
              <img
                src="/images/p3.png"
                alt="Logo"
                className="w-[160px] sm:mt-10 h-auto"
              />
            </Circle>
          </div>
        </div>
        {/* Free Trial Card */}
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-back"
          data-aos-duration="1000"
          data-aos-offset="100"
          data-aos-mirror="true"
          className="mt-20 relative pt-20 max-sm:pt-14 max-[330px]:pt-14 z-10 w-[670px] backdrop-blur-sm h-[550px] max-sm:h-[400px] max-[380px]:h-[430px] border border-[#ffffff00] intro-card max-sm:px-0 max-sm:pb-10 max-sm:w-[95%]"
        >
          <img
            src="/images/music.webp"
            alt="circles"
            className="w-[744px] h-auto max-[800px]:w-full max-[800px]:h-auto left-0 top-0 absolute z-[2]"
          />

          <p className="text-6xl max-sm:text-4xl font-lobster text-center hero-heading">
            {currentContent.freeTrialTitle}
          </p>
          <div className="px-5 max-sm:px-0 space-y-5 max-sm:space-y-5 mt-7 max-sm:mt-0">
            <h2
              className={`hero-heading px-6 max-sm:px-5 tracking-wide text-center font-normal mt-7 max-sm:mt-6 mx-auto text-3xl
                   leading-[1.4em] max-sm:text-xl font-inter `}
            >
              {currentContent.freeTrialText1}
              <p
                className={`flex items-center mt-4 text-3xl max-sm:text-xl leading-[50px] hero-heading gap-1 text-center mx-auto w-fit `}
              >
                {currentContent.freeTrialText2}
              </p>
            </h2>

            <div className="border z-[500] border-[#2d2641] group rounded-full w-[140px] mx-auto h-[40px] cursor-pointer nav bgh relative bg-[hsla(0,0%,100%,.03)] backdrop-blur-sm">
              <a
                href="#contact"
                className="nav-link w-full flex items-center linn !z-[499] gap-3 h-full relative text-sm text-white font-inter justify-center"
              >
                <img
                  src="/images/star.png"
                  alt="quill"
                  width={24}
                  height={24}
                  className="group-hover:rotate-180 duration-700"
                />
                <p className="text-white text-sm">
                  {currentLanguage === "en" ? "Free Trial" : "تجربة مجانية"}
                </p>
              </a>
            </div>
          </div>

          <div>
            <img
              src="/images/shadow.webp"
              alt="shadow"
              width={1444}
              height={666}
              className="absolute bottom-0 left-0 w-full h-auto opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
