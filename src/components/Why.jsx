import React from "react";
import { useLanguage } from "../context/LanguageContext";

function WhySection() {
  const { currentLanguage } = useLanguage();

  return (
    <section
      id="why"
      className="why-section-design mt-20  relative z-20 max-w-6xl mx-auto px-4 "
    >
      <h2
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-duration="1000"
        data-aos-mirror="true"
        className="text-center mb-16 max-sm:mb-10 hero-heading max-sm:text-3xl text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
      >
        {currentLanguage === "en" ? "Why iNutriCal ?" : "لماذا iNutriCal؟"}
      </h2>

      <div className="columns-3 space-y-5 sm:gap-5 max-sm:space-y-3 max-lg:columns-2 max-sm:columns-1">
        {/* Protocol Adherence */}
        <div
          data-aos="fade-up-right"
          data-aos-mirror="true"
          className="group bgH min-h-fit text-left border-2 border-[#ffffff1a] rounded-xl py-5"
        >
          <img
            src="/protocols.png"
            alt="protocol"
            width={256}
            height={256}
            className="w-[170px] mb-2 h-auto group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in duration-200 mx-auto"
          />
          <div className="space-y-2 px-5">
            <h3 className="text-2xl text-left leading-[1.3] font-inter text-[#E3E3E3]">
              {currentLanguage === "en"
                ? "Protocol Adherence"
                : "الالتزام بالبروتوكول"}
            </h3>
            <p className="leading-[1.5] font-inter text-white/50 transition-colors duration-300">
              {currentLanguage === "en"
                ? "Track adherence of the clinical dietitians to the hospital's enteral feeding protocol"
                : "تتبع التزام أخصائيي التغذية السريرية ببروتوكول التغذية المعوية بالمستشفى"}
            </p>
          </div>
        </div>

        {/* Performance Monitoring */}
        <div
          data-aos="fade-up-right"
          data-aos-mirror="true"
          className="group bgH min-h-fit text-left border-2 border-[#ffffff1a] rounded-xl py-5"
        >
          <div className="space-y-2 px-5">
            <h3 className="text-2xl text-left leading-[1.3] font-inter text-[#E3E3E3]">
              {currentLanguage === "en"
                ? "Performance Monitoring"
                : "مراقبة الأداء"}
            </h3>
            <p className="leading-[1.5] font-inter text-white/50 transition-colors duration-300">
              {currentLanguage === "en"
                ? "Enables the head of the clinical nutrition department to monitor the clinical dietitians' performance, and easily access the patient nutrition history when needed"
                : "يمكن رئيس قسم التغذية السريرية من مراقبة أداء أخصائيي التغذية السريرية، والوصول بسهولة إلى تاريخ التغذية للمريض عند الحاجة"}
            </p>
          </div>
          <img
            src="/data.png"
            alt="data"
            width={256}
            height={256}
            className="w-[170px] mt-2 h-auto group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in duration-200 mx-auto"
          />
        </div>

        {/* Inventory Management */}
        <div
          data-aos="fade-up"
          data-aos-mirror="true"
          className="group bgH min-h-fit text-left border-2 border-[#ffffff1a] rounded-xl py-5"
        >
          <div className="space-y-2 px-5">
            <h3 className="text-2xl text-left leading-[1.3] font-inter text-[#E3E3E3]">
              {currentLanguage === "en"
                ? "Inventory Management"
                : "إدارة المخزون"}
            </h3>
            <p className="leading-[1.5] font-inter text-white/50 transition-colors duration-300">
              {currentLanguage === "en"
                ? "Provides sophisticated, yet user-friendly enteral formula inventory system for a Real-time tracking of inventory levels to prevent shortages"
                : "يوفر نظام مخزون متطور وسهل الاستخدام للتركيبات المعوية لتتبع مستويات المخزون في الوقت الفعلي لمنع النقص"}
            </p>
          </div>
          <img
            src="/supply.png"
            alt="supply"
            width={256}
            height={256}
            className="w-[170px] mt-2 h-auto group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in duration-200 mx-auto"
          />
        </div>

        {/* Time Reduction */}
        <div
          data-aos="fade-up"
          data-aos-mirror="true"
          className="group bgH min-h-fit text-left border-2 border-[#ffffff1a] rounded-xl py-5"
        >
          <img
            src="/reduce-time.png"
            alt="time reduction"
            width={256}
            height={256}
            className="w-[170px] mb-2 h-auto group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in duration-200 mx-auto"
          />
          <div className="space-y-2 px-5">
            <h3 className="text-2xl text-left leading-[1.3] font-inter text-[#E3E3E3]">
              {currentLanguage === "en" ? "Time Reduction" : "توفير الوقت"}
            </h3>
            <p className="leading-[1.5] font-inter text-white/50 transition-colors duration-300">
              {currentLanguage === "en"
                ? "Reduce documentation time, and improve patient care"
                : "تقليل وقت التوثيق، وتحسين رعاية المريض"}
            </p>
          </div>
        </div>

        {/* Team Collaboration */}
        <div
          data-aos="fade-up-left"
          data-aos-mirror="true"
          className="group bgH min-h-fit text-left border-2 border-[#ffffff1a] rounded-xl py-5"
        >
          <img
            src="/team.png"
            alt="team collaboration"
            width={256}
            height={256}
            className="w-[170px] mb-2 h-auto group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in duration-200 mx-auto"
          />
          <div className="space-y-2 px-5">
            <h3 className="text-2xl text-left leading-[1.3] font-inter text-[#E3E3E3]">
              {currentLanguage === "en"
                ? "Team Collaboration"
                : "التعاون بين الفريق"}
            </h3>
            <p className="leading-[1.5] font-inter text-white/50 transition-colors duration-300">
              {currentLanguage === "en"
                ? "Enhanced team collaboration by easily and securely sharing the patient nutrition-related information"
                : "تعزيز التعاون بين الفريق من خلال مشاركة معلومات التغذية الخاصة بالمريض بسهولة وأمان"}
            </p>
          </div>
        </div>

        {/* Cost Reduction */}
        <div
          data-aos="fade-up-left"
          data-aos-mirror="true"
          className="group bgH min-h-fit text-left border-2 border-[#ffffff1a] rounded-xl py-5"
        >
          <div className="space-y-2 px-5">
            <h3 className="text-2xl text-left leading-[1.3] font-inter text-[#E3E3E3]">
              {currentLanguage === "en" ? "Cost Reduction" : "خفض التكاليف"}
            </h3>
            <p className="leading-[1.5] font-inter text-white/50 transition-colors duration-300">
              {currentLanguage === "en"
                ? "Lowers the cost-of-care by shortening patient length of stay in the ICU unit"
                : "يخفض تكلفة الرعاية من خلال تقليل مدة بقاء المريض في وحدة العناية المركزة"}
            </p>
          </div>
          <img
            src="/lowest-price.png"
            alt="cost reduction"
            width={256}
            height={256}
            className="w-[170px] mt-2 h-auto group-hover:opacity-90 opacity-50 group-hover:scale-100 scale-95 ease-in duration-200 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default WhySection;
