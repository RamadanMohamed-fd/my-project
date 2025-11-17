import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

function Divided() {
  const { t, isRTL, currentLanguage } = useLanguage();

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

  // Section configuration
  const sectionConfig = {
    en: {
      subtitle: "From Calculations to Care",
      description:
        "The all-in-one platform that automates ICU nutrition math, prevents errors, and lets you focus on what you do best: saving lives.",
      featuresTitle: "iNutriCal Features",
      impactsTitle: "Measurable Impacts",
    },
    ar: {
      subtitle: "من الحسابات إلى الرعاية",
      description:
        "المنصة الشاملة التي تؤتمت حسابات التغذية في العناية المركزة، تمنع الأخطاء، وتتيح لك التركيز على ما تفعله بشكل أفضل: إنقاذ الأرواح.",
      featuresTitle: "ميزات iNutriCal",
      impactsTitle: "التأثيرات القابلة للقياس",
    },
  };

  // Features data array
  const features = [
    {
      icon: "/energy.png",
      title: {
        en: "Performs complex energy, nutrients, and fluid calculations in seconds",
        ar: "ينفذ حسابات الطاقة والعناصر الغذائية والسوائل المعقدة في ثوانٍ",
      },
      iconAlt: {
        en: "Energy Calculation",
        ar: "حساب الطاقة",
      },
      svgIcon: (
        <svg
          className="size-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      icon: "/diet.png",
      title: {
        en: "Precisely suggests diet plans based on the patient needs",
        ar: "يقترح خطط النظام الغذائي بدقة بناءً على احتياجات المريض",
      },
      iconAlt: {
        en: "Diet Planning",
        ar: "تخطيط النظام الغذائي",
      },
      svgIcon: (
        <svg
          className="size-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      icon: "/cloud.png",
      title: {
        en: "Automatically saves the patient nutritional data into the patient record",
        ar: "يحفظ بيانات التغذية الخاصة بالمريض تلقائيًا في سجل المريض",
      },
      iconAlt: {
        en: "Data Storage",
        ar: "تخزين البيانات",
      },
      svgIcon: (
        <svg
          className="size-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      ),
    },
    {
      icon: "/server.png",
      title: {
        en: "Electronic lab and history documentation for efficient patient monitoring",
        ar: "توثيق المختبر الإلكتروني والسجل الطبي لمراقبة المريض بكفاءة",
      },
      iconAlt: {
        en: "Electronic Documentation",
        ar: "التوثيق الإلكتروني",
      },
      svgIcon: (
        <svg
          className="size-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  const impacts = [
    {
      icon: "/patient.png",
      title: {
        en: "Improving the quality of care by focusing on what matters",
        ar: "تحسين جودة الرعاية من خلال التركيز على ما يهم",
      },
      iconAlt: {
        en: "Quality Care",
        ar: "رعاية الجودة",
      },
      svgIcon: (
        <svg
          className="size-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      icon: "/clockwise.png",
      title: {
        en: "Reducing clinical complications associated with calculation errors",
        ar: "تقليل المضاعفات السريرية المرتبطة بأخطاء الحساب",
      },
      iconAlt: {
        en: "Error Reduction",
        ar: "تقليل الأخطاء",
      },
      svgIcon: (
        <svg
          className="size-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      icon: "/schedule.png",
      title: {
        en: "Minimizing hospitalization time and better managing costs in the Intensive Care Unit",
        ar: "تقليل وقت الاستشفاء وإدارة التكاليف بشكل أفضل في وحدة العناية المركزة",
      },
      iconAlt: {
        en: "Cost Management",
        ar: "إدارة التكاليف",
      },
      svgIcon: (
        <svg
          className="size-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
    },
    {
      icon: "/research.png",
      title: {
        en: "Serving as a valuable resource for future nutritional, epidemiological, and clinical research",
        ar: "يعمل كمورد قيم لأبحاث التغذية والأوبئة والسريرية المستقبلية",
      },
      iconAlt: {
        en: "Research Resource",
        ar: "مورد البحث",
      },
      svgIcon: (
        <svg
          className="size-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  const currentConfig = sectionConfig[currentLanguage];

  return (
    <div
      id="features"
      className="w-full font-inter pb-20 max-sm:pb-0 bgh5 relative"
    >
      <div className="line-break"></div>
      <div
        id="cards2"
        className="max-w-[1000px] relative mx-auto mt-10 px-10 max-sm:px-2 max-sm:py-10 max-sm:mt-0"
      >
        {/* Subtitle Section */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-easing="ease-out-back"
          data-aos-duration="1000"
          data-aos-offset="100"
          data-aos-mirror="true"
          className="border border-[#ffffff1a] text-white nav relative text-sm max-sm:text-sm bg-[#ffffff0a] rounded-full py-1 px-3 w-fit mx-auto"
        >
          <p className="opacity-70 font-inter text-center">
            {currentConfig.subtitle}
          </p>
        </div>

        {/* Description Section */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-easing="ease-out-back"
          data-aos-duration="1000"
          data-aos-offset="100"
          data-aos-mirror="true"
          className="max-sm:mt-6 flex-col flex items-center justify-center pb-2 max-w-[650px] mt-5 leading-[1.3em] mx-auto text-center text-2xl max-sm:text-xl px-3 font-inter font-medium capitalize hero-heading"
        >
          <p>{currentConfig.description}</p>
        </div>

        {/* Features Section */}
        <div className="">
          <h2
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-out-back"
            data-aos-duration="1000"
            data-aos-offset="100"
            data-aos-mirror="true"
            className="text-center my-14 max-sm:my-8 max-sm:text-3xl text-5xl hero-heading"
          >
            {currentConfig.featuresTitle}
          </h2>

          <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-3 gap-5">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title[currentLanguage] || feature.title.en}
                alt={feature.iconAlt[currentLanguage] || feature.iconAlt.en}
                svgIcon={feature.svgIcon}
                index={index}
                totalItems={features.length}
                currentLanguage={currentLanguage}
              />
            ))}
          </div>
        </div>

        {/* Impacts Section */}
        <div id="impact" className="mb-10 pt-10 ">
          <h2
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-out-back"
            data-aos-duration="1000"
            data-aos-offset="100"
            data-aos-mirror="true"
            className="text-center my-14 max-sm:my-8 max-sm:text-3xl text-5xl hero-heading"
          >
            {currentConfig.impactsTitle}
          </h2>

          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 max-sm:gap-3 grid-card1">
            {impacts.map((impact, index) => (
              <FeatureCard
                key={index}
                icon={impact.icon}
                title={impact.title[currentLanguage] || impact.title.en}
                alt={impact.iconAlt[currentLanguage] || impact.iconAlt.en}
                svgIcon={impact.svgIcon}
                index={index}
                totalItems={impacts.length}
                currentLanguage={currentLanguage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  alt,
  svgIcon,
  index,
  totalItems,
  currentLanguage,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-easing="ease-out-back"
      data-aos-duration="1000"
      data-aos-offset="100"
      data-aos-mirror="true"
      className="font-inter border border-[#ffffff1a] p-6 rounded-lg hover:bg-[#ffffff08] transition-all duration-300"
    >
      {/* Icon Container */}
      <div className="border border-[#75d5a867] p-3 rounded-full w-fit mx-auto relative bg-[#75d5a815]">
        {/* SVG Icon as fallback/alternative */}
        <div className="text-[#75d5a8]">{svgIcon}</div>
        {/* Original PNG icon as backup */}
        <img
          src={icon}
          alt={alt}
          width={32}
          height={32}
          className="size-[32px] hidden" // Hidden by default, can be shown if needed
        />
      </div>

      {/* Title */}
      <p
        className={`mt-6 text-2xl max-sm:text-xl capitalize hero-heading font-inter text-center relative `}
      >
        {title}
      </p>
    </div>
  );
};

export default Divided;
