import React, { useState, useEffect, useRef } from "react";

function MainSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: "/s.webp",
      title: "Our Story",
      description:
        "In 2019, out of 464 participated projects nationwide, iNutriCal was recognized by the Saudi Food & Drug Administration for innovation and necessity.",
    },
    {
      id: 2,
      image: "/images/t.jpg",
      title: "",
      description:
        "“Success stories always start with a vision, and the most successful visions are those that are built on sturdy foundations”",
    },
    {
      id: 3,
      image: "s.webp",
      title: "Finally",
      description:
        "A powerful solution designed to improve feeding practices, quality of care delivery, and patient outcomes",
    },
  ];

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1200);
    startAutoSlide();
  };

  const nextSlide = React.useCallback(
    () => goToSlide((currentSlide + 1) % slides.length),
    [currentSlide, slides.length]
  );
  const prevSlide = () =>
    goToSlide((currentSlide - 1 + slides.length) % slides.length);

  const startAutoSlide = React.useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isTransitioning) nextSlide();
    }, 6000);
  }, [isTransitioning, nextSlide]);

  useEffect(() => {
    startAutoSlide();
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [isTransitioning, startAutoSlide]);

  return (
    <div
      id="home"
      className="relative z-[51] w-full h-screen overflow-hidden bg-black"
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide
                ? "opacity-100 scale-100 translate-x-0"
                : "opacity-0 scale-105 translate-x-10"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Gradient/Shadow overlay */}
            <div className="absolute z-[50] top-0 left-0 w-full h-full banner-overlay"></div>

            {/* Text Content with animation */}
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="max-w-[680px] ml-16 mr-auto px-4 py-8">
                <div
                  className={`relative z-50 rounded-lg transition-all duration-1000 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <p className=" font-lobster  hero-heading text-3xl">
                    {" "}
                    {slide.title}
                  </p>

                  <p className="text-3xl capitalize leading-[45px] hero-heading font-inter mt-4">
                    {slide.description}
                  </p>
                  {index === 1 && (
                    <p className="text-2xl mt-4 font-lobster hero-heading">
                      Mohammed bin Salman bin Abdulaziz Al-Saud
                    </p>
                  )}
                  <div className="flex items-center gap-6">
                    <div className="border border-[#2d2641] group  rounded-full w-[140px] h-[40px] mt-8 cursor-pointer nav bgh relative  bg-[hsla(0,0%,100%,.03)] backdrop-blur-sm">
                      <div className=" nav-link w-full  flex items-center gap-3 h-full relative z-[51] text-sm text-[#551A8B] font-inter">
                        <img
                          src="/images/star.png"
                          alt="quill"
                          width={24}
                          height={24}
                          className="group-hover:rotate-180 duration-700"
                        />
                        <p className=" text-white text-sm">Free Trial </p>
                      </div>
                    </div>
                    <div className="border c border-[#2d2641] group  rounded-full w-[100px] h-[40px] mt-8 cursor-pointer nav bgh relative backdrop-blur-sm">
                      <div className=" nav-link w-full  flex items-center gap-3 h-full relative z-[51] text-sm text-[#551A8B] font-inter">
                        <p className=" text-white text-sm">Login</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center space-y-4 z-30">
        {/* Navigation arrows */}
        <div className="flex space-x-3 items-end">
          <div className="border border-[#2d2641] group mx-auto rounded-full w-[40px] h-[40px] cursor-pointer nav bgh relative z-10 bg-[hsla(0,0%,100%,.03)] backdrop-blur-sm">
            <div
              onClick={prevSlide}
              className=" nav-link w-full  flex items-center gap-3 h-full relative z-[51] text-sm text-[#551A8B] font-inter"
            >
              <p className=" text-white text-xl font-mono"> {"<"} </p>
            </div>
          </div>
          {/* Pagination */}
          <div className="flex space-x-1">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-1 rounded-sm transition-all ${
                  index === currentSlide
                    ? "bg-white w-6"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <div className="border border-[#2d2641] group mx-auto rounded-full w-[40px] h-[40px]  cursor-pointer nav bgh relative z-10 bg-[hsla(0,0%,100%,.03)] backdrop-blur-sm">
            <div
              onClick={nextSlide}
              className=" nav-link w-full  flex items-center gap-3 h-full relative z-[51] text-sm text-[#551A8B] font-inter"
            >
              <p className=" text-white font-mono text-xl"> &gt; </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
