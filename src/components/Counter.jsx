import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Counter() {
  const { t, isRTL, currentLanguage } = useLanguage();

  const content = {
    en: {
      achievements: "Our Achievements",
      medalTitle:
        "Silver Medal out of 1,100+ projects & 80+ countries at the Geneva International Inventions Exhibition 2025.",
      firstPlace: "1st Place",
      firstPlaceDesc:
        "in the Food Sector out of +464 projects at The Saudi Food and Drug Authority Hackathon.",
      officiallySelected: "Officially Selected",
      officiallySelectedDesc:
        "to represent Saudi Arabia's health sector at the Geneva International Inventions Conference.",
      selected: "Selected",
      selectedDesc: "to participate in the Global Health Forum 2024 in Riyadh.",
      featured: "Featured",
      featuredDesc:
        "at the Inspirational Leadership Forum 2025 under the patronage of the Minister of Health.",
    },
    ar: {
      achievements: "إنجازاتنا",
      medalTitle:
        "الميدالية الفضية من بين ١١٠٠+ مشروع و ٨٠+ دولة في معرض جنيف الدولي للاختراعات ٢٠٢٥.",
      firstPlace: "المركز الأول",
      firstPlaceDesc:
        "في قطاع الغذاء من بين +٤٦٤ مشروع في هاكاثون الهيئة العامة للغذاء والدواء السعودية.",
      officiallySelected: "مختار رسمياً",
      officiallySelectedDesc:
        "لتمثيل القطاع الصحي السعودي في مؤتمر جنيف الدولي للاختراعات.",
      selected: "مختار",
      selectedDesc: "للمشاركة في منتدى الصحة العالمي ٢٠٢٤ في الرياض.",
      featured: "مميز",
      featuredDesc: "في منتدى القيادة الملهمة ٢٠٢٥ تحت رعاية وزير الصحة.",
    },
  };

  const currentContent = content[currentLanguage];

  return (
    <div
      id="achievements"
      className="w-full font-inter pb-20 max-sm:pb-0 bgh5 relative"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="line-break"></div>
      <div className="max-w-[920px] relative mx-auto mt-10 max-sm:mt-0 px-10 max-sm:px-2 max-sm:py-16">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-easing="ease-out-back"
          data-aos-duration="1000"
          data-aos-offset="100"
          data-aos-mirror="true"
          className="border border-[#ffffff1a] text-white nav relative text-sm max-sm:text-sm bg-[#ffffff0a] rounded-full py-1 px-3 w-fit mx-auto"
        >
          <p className="opacity-70 font-inter">{currentContent.achievements}</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-easing="ease-out-back"
          data-aos-duration="1000"
          data-aos-offset="100"
          data-aos-mirror="true"
          className="max-sm:mt-5 flex-col flex items-center justify-center pb-2 max-w-[650px] mt-5 leading-[1.2em] mx-auto text-center text-3xl px-3 
           font-inter font-medium capitalize hero-heading max-sm:text-xl"
        >
          <img
            loading="lazy"
            src="/medal2.png"
            alt="prize"
            className="mx-auto mb-7"
          />
          {currentContent.medalTitle}
        </div>
        <div className="relative z-20 mt-5 grid gap-4 max-sm:gap-2 grid-cols-2 max-md:flex flex-wrap justify-center items-center">
          <div className="relative">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-easing="ease-out-back"
              data-aos-duration="1000"
              data-aos-offset="100"
              data-aos-mirror="true"
              className={`absolute bottom-8 max-sm:bottom-4 ${
                isRTL ? "right-8 max-sm:right-4" : "left-8 max-sm:left-4"
              }`}
            >
              <div className="size-[48px] max-sm:size-10 flexCenter border border-[#ffffff62] rounded-full">
                <div className="size-[40px] max-sm:size-9 p-1 flexCenter border border-[#ffffff88 bg-[#ffffff27] rounded-full">
                  <img
                    loading="lazy"
                    src="/badge (1).png"
                    alt="customer"
                    width={32}
                    height={32}
                    className=""
                  />
                </div>
              </div>
              <h3 className="hero-heading mt-7 max-sm:mt-2 text-3xl max-sm:text-xl font-semibold">
                {currentContent.firstPlace}
              </h3>
              <p className="text-[#74698c] max-sm:text-sm font-inter mt-1 font-semibold">
                {currentContent.firstPlaceDesc}
              </p>
            </div>
            <img
              loading="lazy"
              src="/borders.png"
              alt="brand"
              width={680}
              height={450}
              className="max-md:h-[200px]"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="relative"
          >
            <div
              className={`absolute bottom-8 max-sm:bottom-4 ${
                isRTL ? "right-8 max-sm:right-4" : "left-8 max-sm:left-4"
              }`}
            >
              <div className="size-[48px] max-sm:size-10 flexCenter border border-[#ffffff62] rounded-full">
                <div className="size-[40px] flexCenter max-sm:size-9 p-1 flexCenter border border-[#ffffff88 bg-[#ffffff27] rounded-full">
                  <img
                    loading="lazy"
                    src="/official-store.png"
                    alt="customer"
                    width={32}
                    height={32}
                    className="mt-[2px]"
                  />
                </div>
              </div>
              <h3 className="hero-heading mt-7 max-sm:mt-2 text-3xl max-sm:text-xl font-semibold">
                {currentContent.officiallySelected}
              </h3>
              <p className="text-[#74698c] max-sm:text-sm font-inter mt-1 font-semibold">
                {currentContent.officiallySelectedDesc}
              </p>
            </div>
            <img
              loading="lazy"
              src="/borders2.png"
              alt="brand"
              width={680}
              height={450}
              className="max-md:h-[200px]"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-out-back"
            data-aos-duration="1000"
            data-aos-offset="100"
            data-aos-mirror="true"
            className="relative"
          >
            <div
              className={`absolute top-8 max-sm:top-4 ${
                isRTL ? "right-8 max-sm:right-4" : "left-8 max-sm:left-4"
              }`}
            >
              <div className="size-[48px] max-sm:size-10 flexCenter border border-[#ffffff62] rounded-full">
                <div className="size-[40px] max-sm:size-9 p-1 flexCenter border border-[#ffffff88 bg-[#ffffff27] rounded-full">
                  <img
                    loading="lazy"
                    src="/foursquare-check-in.png"
                    alt="customer"
                    width={32}
                    height={32}
                    className=""
                  />
                </div>
              </div>
              <h3 className="hero-heading mt-7 max-sm:mt-2 max-sm:text-xl text-3xl font-semibold">
                {currentContent.selected}
              </h3>
              <p className="text-[#74698c] max-sm:text-sm font-inter mt-1 font-semibold">
                {currentContent.selectedDesc}
              </p>
            </div>
            <img
              loading="lazy"
              src="/borders2.png"
              alt="brand"
              width={680}
              height={450}
              className="rotate-180 max-md:h-[200px]"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-out-back"
            data-aos-duration="1000"
            data-aos-offset="100"
            data-aos-mirror="true"
            className="relative"
          >
            <div
              className={`absolute top-8 max-sm:top-4 ${
                isRTL ? "right-8 max-sm:right-4" : "left-8 max-sm:left-4"
              }`}
            >
              <div className="size-[48px] max-sm:size-10 flexCenter border border-[#ffffff62] rounded-full">
                <div className="size-[40px] max-sm:size-9 p-1 flexCenter border border-[#ffffff88 bg-[#ffffff27] rounded-full">
                  <img
                    loading="lazy"
                    src="/extension.png"
                    alt="customer"
                    width={32}
                    height={32}
                    className="ml-1"
                  />
                </div>
              </div>
              <h3 className="hero-heading mt-7 max-sm:mt-2 max-sm:text-xl text-3xl font-semibold">
                {currentContent.featured}
              </h3>
              <p className="text-[#74698c] max-sm:text-sm font-inter mt-1 font-semibold">
                {currentContent.featuredDesc}
              </p>
            </div>
            <img
              loading="lazy"
              src="/borders.png"
              alt="brand"
              width={680}
              height={450}
              className="rotate-180 max-md:h-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
