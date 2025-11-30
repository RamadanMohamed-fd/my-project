import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Techsection() {
  const { t, isRTL, currentLanguage } = useLanguage();

  const content = {
    en: {
      advertise: "Advertise with us",
      freeTrial: "Free Trial",
      successTitle: "Success",
      successQuote:
        "stories always start with a vision, and the most successful visions are those that are built on sturdy foundations",
      princeName: "Mohammed bin Salman bin Abdulaziz Al-Saud",
      missionTitle: "Our Mission",
      missionText:
        "Our mission is to provide smart solutions to improve health care delivery",
      visionTitle: "Our Vision",
      visionText:
        "We envision becoming a trusted name in clinical nutrition management in every critical care unit",
      locallyGlobal: "locally and globally",
      freeTrialTitle: "Free Trial",
      freeTrialText1:
        "iNutriCal automates complex nutrition math, giving you more time for your patients. Experience it risk-free",
      freeTrialText2: "Stop calculating, start caring. Try iNutriCal free.",
    },
    ar: {
      advertise: "إعلن معنا",
      freeTrial: "تجربة مجانية",
      successTitle: "النجاح",
      successQuote:
        "تبدأ القصص دائمًا برؤية، وأنجح الرؤى هي تلك المبنية على أسس متينة",
      princeName: "محمد بن سلمان بن عبدالعزيز آل سعود",
      missionTitle: "مهمتنا",
      missionText: "مهمتنا هي تقديم حلول ذكية لتحسين تقديم الرعاية الصحية",
      visionTitle: "رؤيتنا",
      visionText:
        "نتطلع إلى أن نصبح اسمًا موثوقًا في إدارة التغذية السريرية في كل وحدة رعاية حرجة",
      locallyGlobal: "محليًا وعالميًا",
      freeTrialTitle: "تجربة مجانية",
      freeTrialText1:
        "iNutriCal يؤتمت حسابات التغذية المعقدة، مما يمنحك المزيد من الوقت لمرضاك. جربه بدون مخاطر",
      freeTrialText2: "توقف عن الحساب، ابدأ بالرعاية. جرب iNutriCal مجانًا.",
    },
  };

  const currentContent = content[currentLanguage];

  return (
    <div id="teck" className="w-full pb-20 max-sm:pb-0 bgh5 relative">
      <div className="line-break"></div>

      <div className="relative mt-10 max-sm:mt-8 max-w-[1300px] h-full mx-auto">
        <div className="w-full h-full relative z-50">
          {/* Empty div for animations - kept as is */}
          <a data-aos="fade" href="/" className="block ">
            <img
              src="/images/logo.png"
              alt="Logo"
              className={`w-[400px] cursor-pointer relative z-10 mx-auto `}
            />
          </a>
          <div className="max-xs:-mt-1 flex items-center justify-center pb-2 max-w-[700px] leading-[1.3em] mx-auto text-center text-3xl px-3 font-inter font-medium max-sm:text-xl capitalize hero-heading"></div>

          {/* Background decorations */}
          <div className="min-h-[100px]">
            <div className="square absolute top-0 left-[8%] max-[400px]:hidden"></div>
            <div className="square absolute top-[17%] left-[15%] max-sm:hidden rotate-90"></div>
            <div className="square absolute top-0 right-[8%] max-[400px]:hidden -rotate-90"></div>
            <div className="square absolute top-[17%] right-[15%] max-sm:hidden rotate-180"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative flex flex-col -mt-10 mx-auto justify-center items-center">
          {/* Mission Card */}
          <div className="sticky-1 relative pt-32 max-sm:pt-20 z-10 w-[670px] backdrop-blur-sm h-[550px] max-sm:h-[400px] border border-[#ffffff00] intro-card max-sm:w-[95%]">
            <img
              src="/images/tags-quick-action-grid.png"
              alt="grid"
              width={500}
              height={400}
              className="absolute -left-0 bottom-0 w-full mx-auto h-full"
            />
            <img
              src="/images/music.webp"
              alt="circles"
              className="w-[744px] h-auto max-[800px]:w-full max-[800px]:h-auto left-0 top-0 absolute z-[2]"
            />

            <p className="text-6xl max-sm:text-4xl font-lobster text-center hero-heading">
              {currentContent.missionTitle}
            </p>

            <h2
              className={`hero-heading px-6 max-sm:px-5 tracking-wide text-center font-normal mt-10 max-sm:mt-6 max-w-[550px] mx-auto text-3xl leading-[1.4em]
                 max-sm:text-2xl font-inter `}
            >
              {currentContent.missionText}
            </h2>

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

          {/* Vision Card */}
          <div className="sticky-2 relative pt-32 max-sm:pt-20 max-[330px]:pt-14 z-10 w-[670px] backdrop-blur-sm h-[550px] max-sm:h-[400px] border border-[#ffffff00] intro-card max-sm:px-0 max-sm:pb-10 max-sm:w-[95%]">
            <img
              src="/images/tags-quick-action-grid.png"
              alt="grid"
              width={500}
              height={400}
              className="absolute -left-0 bottom-0 w-full mx-auto h-full"
            />
            <img
              src="/images/circles.png"
              alt="circles"
              className="w-[744px] h-auto max-[800px]:w-full max-[800px]:h-auto left-0 top-0 absolute z-[2]"
            />
            <p className="text-6xl max-sm:text-4xl font-lobster text-center hero-heading">
              {currentContent.visionTitle}
            </p>
            <h2
              className={`hero-heading !text-center px-5 max-sm:px-5 tracking-wide  font-normal mt-10 max-sm:mt-6 max-w-[550px] mx-auto text-3xl leading-[1.4em] max-sm:text-xl font-inter  ${
                currentLanguage === "ar"
                  ? "direction-rtl leading-[2em]"
                  : "direction-ltr"
              }`}
            >
              {currentContent.visionText} {currentContent.locallyGlobal}
            </h2>

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
    </div>
  );
}

export default Techsection;
