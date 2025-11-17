import React, { forwardRef, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
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
    },
    ar: {
      title: "شركاؤنا",
    },
  };

  const currentContent = content[currentLanguage];

  return (
    <div
      id="partners"
      className="w-full pb-20 max-sm:pb-10 bgh5 px-3 relative"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="line-break"></div>
      <h3
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-easing="ease-out-back"
        data-aos-duration="1000"
        data-aos-offset="100"
        data-aos-mirror="true"
        className="hero-heading text-7xl max-sm:text-4xl font-inter font-semibold pt-20 mb-10 text-center"
      >
        {currentContent.title}
      </h3>
      <div
        className={`${className} flex-col flex justify-center items-center relative overflow-hidden`}
        ref={containerRef}
      >
        <div className="max-w-[1000px] flex-col flex items-stretch justify-between">
          <div className="flex flex-wrap items-center gap-10 justify-center">
            <Circle ref={div4Ref}>
              <img
                src="/images/p5.png"
                alt="Logo"
                className="w-[300px] max-sm:max-w-[250px] h-auto"
              />
            </Circle>
            <Circle ref={div2Ref}>
              <img
                src="/images/p4.png"
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
      </div>
    </div>
  );
}
