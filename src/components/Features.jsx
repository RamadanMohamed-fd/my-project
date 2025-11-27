import React from "react";
import { useLanguage } from "../context/LanguageContext";

function FeaturesSection() {
  const { currentLanguage } = useLanguage();

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
      icon: "/vitamins.png",
      title: {
        en: "Accurately calculates the formula contents of vitamins and minerals given to the patient",
        ar: "يحسب بدقة محتويات الفيتامينات والمعادن في التركيبة المُعطاة للمريض",
      },
      iconAlt: {
        en: "Vitamins and Minerals Calculation",
        ar: "حساب الفيتامينات والمعادن",
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
    {
      icon: "/mobile.png",
      title: {
        en: "Patients information can easily be accessed through the mobile application during the ICU rounds",
        ar: "يمكن الوصول بسهولة إلى معلومات المرضى من خلال التطبيق mobile أثناء جولات العناية المركزة",
      },
      iconAlt: {
        en: "Mobile Access",
        ar: "الوصول عبر الجوال",
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
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="features-section-design max-w-6xl px-4   -ml-2 !mx-auto relative z-20 "
    >
      <h2
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-duration="1000"
        data-aos-mirror="true"
        className="text-center mb-12 max-sm:mb-8 max-sm:text-3xl text-4xl md:text-5xl hero-heading"
      >
        {currentLanguage === "en" ? "iNutriCal Features" : "ميزات iNutriCal"}
      </h2>

      <div className="grid  grid-cols-12 gap-5 max-sm:gap-3 ">
        <div
          data-aos="fade-up-right"
          data-aos-mirror="true"
          className=" lg:row-span-2 group col-span-4 max-sm:col-span-12 max-lg:col-span-6 flex flex-col justify-between gap-3  bgH border-2 border-[#ffffff1a] p-4 rounded-xl "
        >
          <p className="text-3xl font-light  leading-[1.5] font-inter text-[#E3E3E3]">
            {features[0].iconAlt[currentLanguage] || features[0].iconAlt.en}
          </p>
          <img
            src="/e1.png"
            alt="img"
            width={512}
            height={212}
            className="w-auto h-auto group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in  duration-200  mx-auto"
          />

          <p className="   leading-[1.5] font-inter hero-heading  transition-colors duration-300">
            {features[0].title[currentLanguage] || features[0].title.en}
          </p>
        </div>

        <div
          data-aos="fade-up-left"
          data-aos-mirror="true"
          className=" col-span-8 max-lg:col-span-6 max-sm:col-span-12 group flex max-lg:flex-col justify-between gap-3  bgH border-2 border-[#ffffff1a] p-4 rounded-xl"
        >
          <div className="max-w-[350px] gap-3 flex flex-col justify-end">
            <p className="text-3xl     leading-[1.3] font-inter text-[#E3E3E3]">
              {features[1].iconAlt[currentLanguage] || features[1].iconAlt.en}
            </p>
            <p className="   leading-[1.5] font-inter hero-heading  transition-colors duration-300">
              {features[1].title[currentLanguage] || features[1].title.en}
            </p>
          </div>
          <img
            src="/v.png"
            alt="img"
            width={512}
            height={212}
            className="w-[150px] max-lg:w-[200px] h-auto group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in  duration-200  mx-auto"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-mirror="true"
          className=" col-span-8 max-lg:col-span-12 sm:grid grid-cols-1 md:grid-cols-2  gap-5"
        >
          <div className=" group  bgH border-2 border-[#ffffff1a] p-4 rounded-xl">
            <div className="mb-4">
              <p className="text-3xl     leading-[1.3] font-inter text-[#E3E3E3]">
                {features[2].iconAlt[currentLanguage] || features[2].iconAlt.en}
              </p>
              <p className="   leading-[1.5] max-w-[270px] mt-2 font-inter text-white/80 transition-colors duration-300">
                {features[2].title[currentLanguage] || features[2].title.en}
              </p>
            </div>
            <img
              src="/d6.png"
              alt="img"
              width={512}
              height={212}
              className="w-auto h-[150px] group-hover:opacity-90 opacity-50  group-hover:scale-100 scale-95 ease-in  duration-200  mx-auto"
            />
          </div>

          <div className=" group  bgH border-2 border-[#ffffff1a] p-4 rounded-xl">
            <img
              src="/database.png"
              alt="img"
              width={512}
              height={212}
              className="w-auto h-[150px] group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in  duration-200  mx-auto"
            />
            <p className="text-3xl     leading-[1.3] font-inter text-[#E3E3E3]">
              {features[3].iconAlt[currentLanguage] || features[3].iconAlt.en}
            </p>

            <p className="   leading-[1.5]  mt-2 font-inter text-white/80 transition-colors duration-300">
              {features[3].title[currentLanguage] || features[3].title.en}
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-mirror="true"
          className=" col-span-6 max-lg:col-span-6 max-sm:col-span-12 max-lg:flex-col-reverse group flex justify-between gap-3  bgH border-2 border-[#ffffff1a] p-4 rounded-xl"
        >
          <div className="max-w-[350px] gap-3 flex flex-col justify-end">
            <p className="text-3xl     leading-[1.3] font-inter text-[#E3E3E3]">
              {features[4].iconAlt[currentLanguage] || features[4].iconAlt.en}
            </p>
            <p className="   leading-[1.5] font-inter text-white/50 transition-colors duration-300">
              {features[4].title[currentLanguage] || features[4].title.en}
            </p>
          </div>
          <img
            src="/paper.png"
            alt="img"
            width={512}
            height={212}
            className="w-auto h-[130px] group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in  duration-200  mx-auto"
          />
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-mirror="true"
          className=" col-span-6 max-lg:col-span-6 max-lg:flex-col max-sm:col-span-12  group flex justify-between gap-3  bgH border-2 border-[#ffffff1a] p-4 rounded-xl"
        >
          <div className=" gap-3 flex flex-col justify-end">
            <p className="text-3xl     leading-[1.3] font-inter text-[#E3E3E3]">
              {features[5].iconAlt[currentLanguage] || features[5].iconAlt.en}
            </p>
            <p className="   leading-[1.5] font-inter text-white/50 transition-colors duration-300">
              {features[5].title[currentLanguage] || features[5].title.en}
            </p>
          </div>
          <img
            src="/m.png"
            alt="img"
            width={512}
            height={212}
            className="w-auto h-[150px] group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in  duration-200  mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
