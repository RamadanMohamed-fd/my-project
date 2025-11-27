import React from "react";
import { useLanguage } from "../context/LanguageContext";
import ContactPopUp from "./ContactPopUp";

function Contact() {
  const { t, isRTL, currentLanguage } = useLanguage();
  const date = new Date();

  const content = {
    en: {
      title: "Contact Us",
      terms: "Terms and Conditions",
      privacy: "Privacy Policy",
      rights: "All Rights Reserved – iNutrical ©",
    },
    ar: {
      title: "اتصل بنا",
      terms: "الشروط والأحكام",
      privacy: "سياسة الخصوصية",
      rights: "جميع الحقوق محفوظة – iNutrical ©",
    },
  };

  const currentContent = content[currentLanguage];

  return (
    <div id="contact" className="w-full pb-5 bgh5  font-inter">
      <div className="line-break"></div>
      <div className="my-20  max-sm:my-10 relative">
        <h2
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-mirror="true"
          className="hero-heading mb-10 relative  text-center text-7xl max-sm:text-4xl font-[600]"
        >
          {currentContent.title}
        </h2>

        <ContactPopUp />
      </div>

      {/* ---------------------------------------footer---------------------------------------------------- */}
      <div className="relative !z-20">
        {/* <div className="line-break"></div> */}

        <div className="flex flex-wrap gap-5 gap-y-3 justify-between  max-w-[1024px] px-2 mx-auto">
          <div class="flex w-full justify-center gap-5 mb-10 flex-wrap max-[400px]:justify-start">
            <a
              href="/coming-soon"
              className="group flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                fill="white"
                viewBox="0 0 256 256"
                className=""
              >
                <path d="M64.34,196.07l-9.45,16a8,8,0,1,1-13.78-8.14l9.46-16a8,8,0,1,1,13.77,8.14ZM232,152H184.2l-30.73-52a8,8,0,1,0-13.77,8.14l61.41,103.93a8,8,0,0,0,13.78-8.14L193.66,168H232a8,8,0,0,0,0-16Zm-89.53,0H90.38L158.89,36.07a8,8,0,0,0-13.78-8.14L128,56.89l-17.11-29a8,8,0,1,0-13.78,8.14l21.6,36.55L71.8,152H24a8,8,0,0,0,0,16H142.47a8,8,0,1,0,0-16Z"></path>
              </svg>

              <div className=" hero-heading">
                <span class="block text-xs tracking-wider">Get it on the</span>
                <span class="block font-medium text-xl">App Store</span>
              </div>
            </a>

            <a
              href="/coming-soon"
              className="group flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                fill="white"
                viewBox="0 0 256 256"
              >
                <path d="M223.82,114.19,56,18.16a16,16,0,0,0-16.12,0A15.68,15.68,0,0,0,32,31.87V224.13a15.68,15.68,0,0,0,7.92,13.67,16,16,0,0,0,16.12,0l167.78-96a15.75,15.75,0,0,0,0-27.62ZM48,212.67V43.33L132.69,128Zm96-73.36,18.92,18.92-88.5,50.66ZM74.4,47.1l88.53,50.67L144,116.69ZM177.31,150l-22-22,22-22,38.43,22Z"></path>
              </svg>

              <div className=" hero-heading">
                <span class="block text-xs tracking-wider">Get it on</span>
                <span class="block font-medium text-xl">Google Play</span>
              </div>
            </a>
          </div>
          <div>
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-[250px] h-auto"
            />
            <div className="flex px-1 gap-5 mt-2 items-center">
              <a
                href="https://www.facebook.com/profile.php?id=100077757926650#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  className="w-8 h-8 fill-[#b5abcb] hover:bg-white rounded-md hover:fill-gray-700 duration-100"
                >
                  <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/iNutriCal1"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  className="w-8 h-8 fill-[#b5abcb] hover:bg-white rounded-md hover:fill-gray-700 duration-100"
                >
                  <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/inutrical/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  className="w-8 h-8 fill-[#b5abcb] hover:bg-white rounded-md hover:fill-gray-700 duration-100"
                >
                  <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/inutrical1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  className="w-8 h-8 fill-[#b5abcb] hover:bg-white rounded-md hover:fill-gray-700 duration-100"
                >
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center flex-wrap justify-between  gap-5">
            <img src="/ksa.png" alt="ksa" className="w-[120px] h-auto" />
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3   pt-3 border-t border-opacity-10 border-white w-full">
            <div className="flex   gap-5 gap-y-3 ">
              <a href="/terms" className="flex items-center opacity-80 gap-x-2">
                <img
                  loading="lazy"
                  src="/images/stopwatch.png"
                  alt="terms"
                  width={32}
                  height={32}
                  className="size-6"
                />
                <p className="text-sm hover:underline duration-100 hover:text-white text-[#b5abcb] font-normal">
                  {currentContent.terms}
                </p>
              </a>

              <a
                href="/police"
                className="flex items-center opacity-80 gap-x-2"
              >
                <img
                  loading="lazy"
                  src="/security.png"
                  alt="terms"
                  width={32}
                  height={32}
                  className="size-6"
                />
                <p className="text-sm hover:underline duration-100 hover:text-white text-[#b5abcb] font-normal">
                  {currentContent.privacy}
                </p>
              </a>
            </div>
            <p className="hero-heading text-sm  max-[550px]:mb-0">
              {currentContent.rights} {date.getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
