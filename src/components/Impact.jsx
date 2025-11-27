import React from "react";
import { useLanguage } from "../context/LanguageContext";

function ImpactsSection() {
  const { currentLanguage } = useLanguage();

  return (
    <section
      id="impact"
      className="impacts-section-design mt-20 relative z-20 max-w-6xl px-4 mx-auto"
    >
      <h2
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-duration="1000"
        data-aos-mirror="true"
        className="text-center mb-12 max-sm:mb-8 max-sm:text-3xl text-4xl md:text-5xl hero-heading"
      >
        {currentLanguage === "en"
          ? "Measurable Impacts"
          : "التأثيرات القابلة للقياس"}
      </h2>

      <div className="grid grid-cols-12 gap-5 max-sm:gap-3">
        {/* Quality Care - Large card spanning 2 rows and 4 columns */}
        <div
          data-aos="fade-up-right"
          data-aos-mirror="true"
          className="lg:row-span-2 group col-span-4 max-sm:col-span-12 max-lg:col-span-6 flex flex-col justify-between gap-3 bgH border-2 border-[#ffffff1a] p-4 rounded-xl"
        >
          <p className="text-3xl font-light leading-[1.5] font-inter text-[#E3E3E3]">
            {currentLanguage === "en" ? "Quality Care" : "رعاية الجودة"}
          </p>
          <img
            src="/high-quality.png"
            alt={currentLanguage === "en" ? "Quality Care" : "رعاية الجودة"}
            width={512}
            height={212}
            className="w-auto h-auto group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in duration-200 mx-auto"
          />
          <p className="leading-[1.5] font-inter hero-heading transition-colors duration-300">
            {currentLanguage === "en"
              ? "Improving the quality of care by focusing on what matters"
              : "تحسين جودة الرعاية من خلال التركيز على ما يهم"}
          </p>
        </div>

        {/* Error Reduction - Horizontal card with text and image side by side */}
        <div
          data-aos="fade-up-left"
          data-aos-mirror="true"
          className="col-span-8 max-lg:col-span-6 max-sm:col-span-12 group flex max-lg:flex-col justify-between gap-3 bgH border-2 border-[#ffffff1a] p-4 rounded-xl"
        >
          <div className="max-w-[350px] gap-3 flex flex-col justify-end">
            <p className="text-3xl leading-[1.3] font-inter text-[#E3E3E3]">
              {currentLanguage === "en" ? "Error Reduction" : "تقليل الأخطاء"}
            </p>
            <p className="leading-[1.5] font-inter hero-heading transition-colors duration-300">
              {currentLanguage === "en"
                ? "Reducing clinical complications associated with manual calculation errors"
                : "تقليل المضاعفات السريرية المرتبطة بأخطاء الحساب"}
            </p>
          </div>
          <img
            src="/risk.png"
            alt={currentLanguage === "en" ? "Error Reduction" : "تقليل الأخطاء"}
            width={512}
            height={212}
            className="w-[150px] max-lg:w-[200px] h-auto group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in duration-200 mx-auto"
          />
        </div>

        {/* Nested grid for Cost Management and Research Resource */}
        <div
          data-aos="fade-up"
          data-aos-mirror="true"
          className="col-span-8 max-lg:col-span-12 sm:grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Cost Management - Top text, bottom image */}
          <div className="group bgH border-2 border-[#ffffff1a] p-4 rounded-xl">
            <div className="mb-4">
              <p className="text-3xl leading-[1.3] font-inter text-[#E3E3E3]">
                {currentLanguage === "en"
                  ? "Cost Management"
                  : "إدارة التكاليف"}
              </p>
              <p className="leading-[1.5] max-w-[270px] mt-2 font-inter text-white/80 transition-colors duration-300">
                {currentLanguage === "en"
                  ? "Minimizing hospitalization time and better managing costs in the Intensive Care Unit"
                  : "تقليل وقت الاستشفاء وإدارة التكاليف بشكل أفضل في وحدة العناية المركزة"}
              </p>
            </div>
            <img
              src="/money.png"
              alt={
                currentLanguage === "en" ? "Cost Management" : "إدارة التكاليف"
              }
              width={512}
              height={212}
              className="w-auto h-[150px] group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in duration-200 mx-auto"
            />
          </div>

          {/* Research Resource - Top image, bottom text */}
          <div className="group bgH border-2 border-[#ffffff1a] p-4 rounded-xl">
            <img
              src="/global-search.png"
              alt={
                currentLanguage === "en" ? "Research Resource" : "مورد البحث"
              }
              width={512}
              height={212}
              className="w-auto h-[150px] group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in duration-200 mx-auto"
            />
            <p className="text-3xl leading-[1.3] font-inter text-[#E3E3E3]">
              {currentLanguage === "en" ? "Research Resource" : "مورد البحث"}
            </p>
            <p className="leading-[1.5] mt-2 font-inter text-white/80 transition-colors duration-300">
              {currentLanguage === "en"
                ? "Serving as a valuable resource for future nutritional, epidemiological, and clinical research"
                : "يعمل كمورد قيم لأبحاث التغذية والأوبئة والسريرية المستقبلية"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactsSection;
