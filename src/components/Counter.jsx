import React from "react";

function Counter() {
  return (
    <div
      id="achievements"
      className="w-full font-inter pb-20 max-sm:pb-0 bgh5 relative "
    >
      <div className="line-break"></div>
      <div className=" max-w-[920px] relative mx-auto  mt-10 px-10  max-sm:px-2 max-sm:py-16  max-sm:w-[95%]">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-easing="ease-out-back"
          data-aos-duration="1000"
          data-aos-offset="100"
          data-aos-mirror="true"
          className="border border-[#ffffff1a] text-white nav relative text-sm max-xs:text-sm bg-[#ffffff0a] rounded-full py-1 px-3  w-fit mx-auto"
        >
          <p className=" opacity-70  font-inter">Our Achievements</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-easing="ease-out-back"
          data-aos-duration="1000"
          data-aos-offset="100"
          data-aos-mirror="true"
          className=" max-xs:-mt-1 flex-col flex items-center justify-center pb-2 max-w-[850px] mt-5 leading-[1.2em] mx-auto text-center text-3xl px-3 
           font-inter font-medium  capitalize hero-heading"
        >
          {" "}
          <img
            loading="lazy"
            src="/1st-prize1.png"
            alt="prize"
            className="mx-auto  mb-2"
          />
          1st Place in the Food Sector out of +464 projects at The Saudi Food
          and Drug Authority Hackathon.
        </div>
        <div className=" relative z-20 mt-5  grid gap-4 max-xs:gap-2 grid-cols-2 justify-center items-center ">
          <div className=" relative  ">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-easing="ease-out-back"
              data-aos-duration="1000"
              data-aos-offset="100"
              data-aos-mirror="true"
              className=" absolute bottom-8 left-8 max-xs:bottom-4 max-xs:left-4"
            >
              <div className=" size-[48px] max-xs:size-10 flexCenter border border-[#ffffff62] rounded-full">
                <div className="size-[40px] max-xs:size-9 p-1 flexCenter border border-[#ffffff88 bg-[#ffffff27] rounded-full">
                  <img
                    loading="lazy"
                    src="/second1.png"
                    alt="customer"
                    width={32}
                    height={32}
                    className=""
                  />
                </div>
              </div>
              <h3 className="hero-heading mt-7 max-xs:mt-2 text-3xl max-xs:text-xl font-semibold ">
                Silver Medal
              </h3>
              <p className=" text-[#74698c] max-xs:text-sm font-inter mt-1 font-semibold">
                out of 1,100+ projects & 80+ countries at the Geneva
                International Inventions Exhibition 2025.
              </p>
            </div>
            <img
              loading="lazy"
              src="/borders.png"
              alt=" brand"
              width={680}
              height={450}
              className=""
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className=" relative "
          >
            <div className=" absolute bottom-8 left-8 max-xs:bottom-4 max-xs:left-4">
              <div className=" size-[48px] max-xs:size-10 flexCenter border border-[#ffffff62] rounded-full">
                <div className="size-[40px] flexCenter max-xs:size-9 p-1 flexCenter border border-[#ffffff88 bg-[#ffffff27] rounded-full">
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
              <h3 className="hero-heading mt-7 max-xs:mt-2 text-3xl max-xs:text-xl font-semibold ">
                Officially Selected
              </h3>
              <p className=" text-[#74698c] max-xs:text-sm font-inter mt-1 font-semibold">
                {" "}
                to represent Saudi Arabia's health sector at the Geneva
                International Inventions Conference.
              </p>
            </div>
            <img
              loading="lazy"
              src="/borders2.png"
              alt="brand"
              width={680}
              height={450}
              className="  "
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-out-back"
            data-aos-duration="1000"
            data-aos-offset="100"
            data-aos-mirror="true"
            className=" relative"
          >
            <div className=" absolute top-8 left-8 max-xs:top-4 max-xs:left-4">
              <div className=" size-[48px] max-xs:size-10 flexCenter border border-[#ffffff62] rounded-full">
                <div className="size-[40px] max-xs:size-9 p-1 flexCenter border border-[#ffffff88 bg-[#ffffff27] rounded-full">
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
              <h3 className="hero-heading mt-7 max-xs:mt-2 max-xs:text-xl text-3xl font-semibold ">
                {" "}
                Selected
              </h3>
              <p className=" text-[#74698c] max-xs:text-sm font-inter mt-1 font-semibold">
                {" "}
                to participate in the Global Health Forum 2024 in Riyadh.
              </p>
            </div>
            <img
              loading="lazy"
              src="/borders2.png"
              alt="brand"
              width={680}
              height={450}
              className=" rotate-180  "
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-out-back"
            data-aos-duration="1000"
            data-aos-offset="100"
            data-aos-mirror="true"
            className="   relative"
          >
            <div className=" absolute top-8 left-8 max-xs:top-4 max-xs:left-4">
              <div className=" size-[48px] max-xs:size-10 flexCenter border border-[#ffffff62] rounded-full">
                <div className="size-[40px] max-xs:size-9 p-1 flexCenter border border-[#ffffff88 bg-[#ffffff27] rounded-full">
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
              <h3 className="hero-heading mt-7 max-xs:mt-2 max-xs:text-xl  text-3xl font-semibold ">
                Featured
              </h3>
              <p className=" text-[#74698c] max-xs:text-sm font-inter mt-1 font-semibold">
                at the Inspirational Leadership Forum 2025 under the patronage
                of the Minister of Health.
              </p>
            </div>
            <img
              loading="lazy"
              src="/borders.png"
              alt="brand"
              width={680}
              height={450}
              className=" rotate-180"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
