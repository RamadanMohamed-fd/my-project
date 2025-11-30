import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";

function MainSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const { t, isRTL, currentLanguage } = useLanguage();

  const slides = [
    {
      id: 1,
      image: "header/1.png",
      title: { en: "Finally", ar: "أخيرًا" },
      description: {
        en: "A powerful solution designed to improve feeding practices, quality of care delivery, and patient outcomes",
        ar: "حل قوي مصمم لتحسين ممارسات التغذية، وجودة تقديم الرعاية، ونتائج المرضى",
      },
    },
    {
      id: 2,
      image: "header/2.jpeg",
      title: { en: "", ar: "" },
      description: {
        en: "“Success stories always start with a vision, and the most successful visions are those that are built on sturdy foundations”",
        ar: "“قصص النجاح تبدأ دائمًا برؤية، وأنجح الرؤى هي تلك المبنية على أسس متينة”",
      },
    },
    {
      id: 3,
      image: "header/3.JPEG",

      title: { en: "Our Story", ar: "قصتنا" },
      description: {
        en: "In 2019, out of 464 participated projects nationwide, iNutriCal was recognized by the Saudi Food & Drug Administration for innovation and necessity.",
        ar: "في عام 2019، من أصل 464 مشروعًا مشاركًا على مستوى الوطن، تم الاعتراف بـ iNutriCal من قبل الهيئة العامة للغذاء والدواء السعودية للابتكار والضرورة.",
      },
    },
    {
      id: 4,
      image: "header/66.webp",
      title: { en: "Silver Medal", ar: "الميدالية الفضية" },
      description: {
        en: "out of 1,100+ projects & 80+ countries at the Geneva International Inventions Exhibition 2025.",
        ar: "من بين 1100+ مشروع و 80+ دولة في معرض جنيف الدولي للاختراعات 2025.",
      },
    },
    {
      id: 5,
      image: "header/55.jpg",
      title: {
        en: "Health Ministry Recognition",
        ar: "تقدير وزارة الصحة",
      },
      description: {
        en: "iNutriCal invention received the Saudi Minister of Health's acknowledgment and admiration",
        ar: "حصل اختراع iNutriCal على تقدير وإعجاب وزير الصحة السعودي",
      },
    },
  ];

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || index === currentSlide) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 1200);
    },
    [isTransitioning, currentSlide]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isTransitioning) nextSlide();
    }, 6000);
  }, [isTransitioning, nextSlide]);

  useEffect(() => {
    startAutoSlide();
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [startAutoSlide]);

  const getSlideContent = (slide) => ({
    title: slide.title[currentLanguage] || slide.title.en,
    description: slide.description[currentLanguage] || slide.description.en,
  });

  return (
    <div
      id="home"
      className="relative z-[300] w-full  h-screen overflow-hidden bg-black"
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const content = getSlideContent(slide);

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform
  ${
    index === currentSlide
      ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
      : "opacity-0 scale-105 translate-x-10 pointer-events-none"
  }`}
            >
              <img
                src={slide.image}
                alt={content.title}
                className={`w-full  h-full object-cover object-[right_-60px] ${
                  slide.id === 5 ? "!object-top" : ""
                } `}
              />

              {/* LEFT/RIGHT OVERLAY */}
              <div
                className={`absolute z-[50] top-0 left-0 w-full h-full ${
                  isRTL ? "banner-overlayl" : "banner-overlay"
                }`}
              ></div>

              {/* TEXT CONTENT */}
              <div
                className={`absolute !z-[200] inset-0 flex items-center ${
                  isRTL ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[630px]  px-4 py-8 max-md:text-center ${
                    isRTL
                      ? "md:mr-16 md:ml-auto text-right"
                      : "md:ml-16 md:mr-auto text-left"
                  }`}
                >
                  <div
                    className={`relative  transition-all duration-1000 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <div className=" ">
                      <p className="font-lobster hero-heading text-3xl max-sm:text-2xl">
                        {content.title}
                      </p>

                      <p className="text-3xl max-sm:text-2xl  leading-[45px] hero-heading font-inter mt-4">
                        {content.description}
                      </p>

                      {index === 1 && (
                        <p className="text-2xl max-sm:text-xl mt-4 font-lobster hero-heading">
                          {currentLanguage === "en"
                            ? "Mohammed bin Salman bin Abdulaziz Al-Saud"
                            : "محمد بن سلمان بن عبدالعزيز آل سعود"}
                        </p>
                      )}
                    </div>

                    {/* BUTTONS */}
                    <div
                      className={`flex items-center  max-md:justify-center gap-6 mt-8 ${
                        isRTL ? "flex-row-reverse justify-end" : "justify-start"
                      }`}
                    >
                      {/* FREE TRIAL */}
                      <div className="border border-[#2d2641]  group rounded-full w-[130px] h-[40px] cursor-pointer nav bgh relative bg-[hsla(0,0%,100%,.03)] backdrop-blur-sm">
                        <a
                          href="#contact"
                          className="nav-link w-full flex items-center linn !z-[499] gap-3 h-full relative  text-sm text-white font-inter"
                        >
                          <img
                            src="/images/star.png"
                            alt="quill"
                            width={24}
                            height={24}
                            className="group-hover:rotate-180 duration-700"
                          />
                          <p className="text-white text-sm">
                            {currentLanguage === "en"
                              ? "Free Trial"
                              : "تجربة مجانية"}
                          </p>
                        </a>
                      </div>

                      {/* LOGIN */}
                      <div className="border border-[#2d2641] group rounded-full min-w-[100px] linn h-[40px] cursor-pointer nav bgh relative backdrop-blur-sm">
                        <a
                          href="https://inutrical.net/login"
                          className="nav-link w-full flex items-center relative !z-[499] gap-3 h-full   text-sm text-white font-inter"
                        >
                          <p className="text-white text-sm">
                            {currentLanguage === "en"
                              ? "Login"
                              : "تسجيل الدخول"}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center z-[300] space-y-4">
        <div
          className={`flex space-x-3 items-center ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {/* Previous */}
          <div className="border border-[#2d2641] group rounded-full w-[40px] h-[40px] cursor-pointer nav bgh relative z-[300] bg-[hsla(0,0%,100%,.03)] backdrop-blur-sm">
            <div
              onClick={prevSlide}
              className="nav-link w-full flex items-center justify-center h-full relative z-[301] text-white text-xl font-mono"
            >
              {isRTL ? ">" : "<"}
            </div>
          </div>

          {/* Next */}
          <div className="border border-[#2d2641] group rounded-full w-[40px] h-[40px] cursor-pointer nav bgh relative z-[300] bg-[hsla(0,0%,100%,.03)] backdrop-blur-sm">
            <div
              onClick={nextSlide}
              className="nav-link w-full flex items-center justify-center h-full relative z-[301] text-white text-xl font-mono"
            >
              {isRTL ? "<" : ">"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
