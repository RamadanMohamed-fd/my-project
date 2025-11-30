import React from "react";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { t, isRTL, currentLanguage } = useLanguage();

  return (
    <div id="about" className="w-full pb-20 max-sm:pb-10 bgh5 relative">
      <div className="line-break"></div>
      <div
        data-aos="fade-up"
        className={`max-w-[650px] relative z-50 mx-auto pt-20 max-sm:pt-10 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <div
          className={` max-sm:px-2 mx-auto relative ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <p
            className={`font-lobster font-semibold text-6xl hero-heading mt-10 mb-14 max-sm:my-5 max-sm:text-4xl ${
              currentLanguage === "ar"
                ? "text-right direction-rtl"
                : "text-left direction-ltr"
            }`}
          >
            {currentLanguage === "en" ? "About" : "من نحن"}
          </p>
          <div
            className={`space-y-5 z-30 hero-heading ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            <p
              className={`text-xl font-medium max-sm:text-xl max-[440px]:text-base leading-[1.6em] tracking-wider font-inter ${
                currentLanguage === "ar"
                  ? "text-right direction-rtl leading-[2.2em] "
                  : "text-left direction-ltr leading-[1.6em]"
              }`}
            >
              {currentLanguage === "en"
                ? "iNutriCal® is the first clinical nutrition management system specialized in calculating the nutritional needs of enterally-administered formulae for adult critical care patients."
                : "iNutriCal® هو أول نظام إدارة التغذية السريرية المتخصص في حساب الاحتياجات الغذائية للتركيبات المُعطاة عن طريق الأنبوب لمرضى الرعاية الحرجة البالغين."}
            </p>
            <p
              className={`text-xl font-medium max-sm:text-xl max-[440px]:text-base leading-[1.6em] tracking-wider font-inter ${
                currentLanguage === "ar"
                  ? "text-right direction-rtl leading-[2.2em] "
                  : "text-left direction-ltr leading-[1.6em]"
              }`}
            >
              {currentLanguage === "en"
                ? "iNutriCal® is designed for clinical dietitians, diet technicians, and other nutrition care professionals to boost productivity and excellence in nutritional care for ICU patients."
                : "تم تصميم iNutriCal® لأخصائيي التغذية السريرية وفنيي التغذية ومتخصصي الرعاية الغذائية الآخرين لتعزيز الإنتاجية والتميز في الرعاية الغذائية لمرضى العناية المركزة."}
            </p>
            <p
              className={`text-xl font-medium max-sm:text-xl max-[440px]:text-base leading-[1.6em] tracking-wider font-inter ${
                currentLanguage === "ar"
                  ? "text-right direction-rtl leading-[2.2em] "
                  : "text-left direction-ltr leading-[1.6em]"
              }`}
            >
              {currentLanguage === "en"
                ? "Our user-friendly critical care nutrition system performs complex, case-by-case nutritional requirement calculations in just a few clicks."
                : "يقوم نظام التغذية للرعاية الحرجة سهل الاستخدام لدينا بإجراء حسابات متطلبات التغذية المعقدة لكل حالة على حدة بنقرة واحدة فقط."}
            </p>
            <p
              className={`text-xl font-medium max-sm:text-xl max-[440px]:text-base leading-[1.6em] tracking-wider font-inter ${
                currentLanguage === "ar"
                  ? "text-right direction-rtl leading-[2.2em] "
                  : "text-left direction-ltr leading-[1.6em]"
              }`}
            >
              {currentLanguage === "en"
                ? "The innovative iNutriCal inventory system provides real-time reporting of formulae consumption, prevents shortages and lower inventory levels, views and tracks formulae inventory purchases and transactions, and more."
                : "يوفر نظام المخزون المبتكر iNutriCal إعداد تقارير في الوقت الفعلي عن استهلاك التركيبات، ويمنع النقص ويخفض مستويات المخزون، ويعرض ويتتبع مشتريات ومعاملات مخزون التركيبات، والمزيد."}
            </p>
          </div>

          <div
            className={`square absolute -bottom-5 rotate-[90deg] z-50 ${
              isRTL ? "left-0" : "right-0"
            }`}
          ></div>
        </div>
        <div className="">
          <div className="square absolute top-[9%] left-[50%]"></div>
          <div
            className={`square absolute top-[30%] z-50 ${
              isRTL ? "right-0" : "left-0"
            }`}
          ></div>
          <div
            className={`square absolute top-[80%] rotate-[180deg] z-50 ${
              isRTL ? "right-0" : "left-0"
            }`}
          ></div>
          <div
            className={`square absolute top-[50%] rotate-[270deg] z-50 ${
              isRTL ? "left-0" : "right-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default About;
