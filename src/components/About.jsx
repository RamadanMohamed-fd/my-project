import React from "react";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { t, isRTL, currentLanguage } = useLanguage();

  return (
    <div id="about" className="w-full pb-20 max-sm:pb-10 bgh5 relative">
      <div className="line-break"></div>
      <div
        className={`max-w-[900px] relative z-50 mx-auto pt-20 max-sm:pt-10 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <div
          className={`max-w-[600px] max-sm:px-2 mx-auto relative ${
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
            {currentLanguage === "en" ? "About Us" : "من نحن"}
          </p>
          <div
            className={`space-y-5 z-30 hero-heading ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`text-lg font-medium max-sm:text-lg max-[440px]:text-base leading-[1.6em] tracking-wider font-inter ${
                currentLanguage === "ar"
                  ? "text-right direction-rtl leading-[2.2em] "
                  : "text-left direction-ltr leading-[1.6em]"
              }`}
            >
              {currentLanguage === "en"
                ? "Clinical dietitians worldwide face a considerable burden when dealing with critically ill patients in the intensive care unit (ICU) settings."
                : "يواجه أخصائيو التغذية السريرية حول العالم عبئًا كبيرًا عند التعامل مع المرضى المصابين بأمراض خطيرة في بيئات وحدة العناية المركزة (ICU)."}
            </div>
            <p
              className={`text-lg font-medium max-sm:text-lg max-[440px]:text-base leading-[1.6em] tracking-wider font-inter ${
                currentLanguage === "ar"
                  ? "text-right direction-rtl leading-[2.2em] "
                  : "text-left direction-ltr leading-[1.6em]"
              }`}
            >
              {currentLanguage === "en"
                ? "These inevitable daily challenges include calculating the energy and nutrients needs, the time consumed performing those calculations, the time needed for nutritional reassessment and monitoring, and the fact that those patients are at higher risk for complications. for ICU patients."
                : "تشمل هذه التحديات اليومية الحتمية حساب احتياجات الطاقة والعناصر الغذائية، والوقت المستغرق في إجراء تلك الحسابات، والوقت اللازم لإعادة التقييم الغذائي والمراقبة، وحقيقة أن هؤلاء المرضى معرضون لخطر أكبر للإصابة بالمضاعفات."}
            </p>
            <p
              className={`text-lg font-medium max-sm:text-lg max-[440px]:text-base leading-[1.6em] tracking-wider font-inter ${
                currentLanguage === "ar"
                  ? "text-right direction-rtl leading-[2.2em] "
                  : "text-left direction-ltr leading-[1.6em]"
              }`}
            >
              {currentLanguage === "en"
                ? "iNutriCal® is the first clinical nutrition management system specialized in calculating the nutritional needs of enterally-administered formulae"
                : "iNutriCal® هو أول نظام إدارة التغذية السريرية المتخصص في حساب الاحتياجات الغذائية للتركيبات المُعطاة عن طريق الأنبوب."}
            </p>
            <p
              className={`text-lg font-medium max-sm:text-lg max-[440px]:text-base leading-[1.6em] tracking-wider font-inter ${
                currentLanguage === "ar"
                  ? "text-right direction-rtl leading-[2.2em] "
                  : "text-left direction-ltr leading-[1.6em]"
              }`}
            >
              {currentLanguage === "en"
                ? "iNutriCal® is designed for clinical dietitians, diet technicians, and other nutrition care professionals to boost productivity and excellence in nutritional care for ICU patients."
                : "تم تصميمiNutriCal لأخصائيي التغذية السريرية وفنيي التغذية ومتخصصي الرعاية الغذائية الآخرين لتعزيز الإنتاجية والتميز في الرعاية الغذائية لمرضى العناية المركزة."}
            </p>
            <p
              className={`text-lg font-medium max-sm:text-lg max-[440px]:text-base leading-[1.6em] tracking-wider font-inter ${
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
              className={`text-lg font-medium max-sm:text-lg max-[440px]:text-base leading-[1.6em] tracking-wider font-inter ${
                currentLanguage === "ar"
                  ? "text-right direction-rtl leading-[2.2em] "
                  : "text-left direction-ltr leading-[1.6em]"
              }`}
            >
              {currentLanguage === "en"
                ? "In 2019, out of 464 participated projects nationwide, our software was recognized by the Saudi Food & Drug Administration, Riyadh, Saudi Arabia, for innovation and necessity."
                : "في عام 2019، من أصل 464 مشروعًا مشاركًا على مستوى الوطن، تم الاعتراف ببرنامجنا من قبل الهيئة العامة للغذاء والدواء، الرياض، المملكة العربية السعودية، للابتكار والضرورة."}
            </p>
          </div>
          <p
            className={`font-lobster text-4xl italic mt-10 text-white ${
              isRTL ? "text-left pl-16" : "text-right pr-16"
            }`}
          >
            iNutriCal
          </p>
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
