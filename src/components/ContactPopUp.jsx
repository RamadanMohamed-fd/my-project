import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

function ContactPopUp({ st, handle }) {
  const { t, isRTL, currentLanguage } = useLanguage();
  const dropdownRef = useRef(null);

  const [step, setStep] = useState(st ? 1 : 0);
  const [sucess, setSucess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    hearAboutUs: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const content = {
    en: {
      ready: "Ready to Get Started?",
      description:
        "We're excited to help you bring your vision to life! Whether you have a question, need a quote, or want to discuss your project in detail, we're here to assist you. Fill out the form below, and our team will get back to you as soon as possible. Let's create something amazing together!",
      responseTime: "We will get back to you as soon as possible.",
      next: "Next",
      back: "← Back",
      submit: "Submit",
      tryAgain: "Try again",
      done: "Done",
      successMessage: "Thank you for your message! We'll get back to you soon.",
      errorMessage: "Something went wrong. Please try again.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      institution: "Institution",
      hearAboutUs: "How did you hear about us?",
      select: "Select",
      yourMessage: "Your Message",
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      invalidEmail: "Invalid email format",
      phoneRequired: "Phone number is required",
      invalidPhone: "Invalid phone number",
      institutionRequired: "Institution is required",
      hearAboutUsRequired: "Please select an option",
      descriptionRequired: "Description is required",
      dropdownOptions: ["Google", "Social Media", "Friend/Colleague", "Other"],
    },
    ar: {
      ready: "مستعد للبدء؟",
      description:
        "نحن متحمسون لمساعدتك في تحقيق رؤيتك! سواء كان لديك سؤال، أو تحتاج إلى عرض سعر، أو تريد مناقشة مشروعك بالتفصيل، نحن هنا لمساعدتك. املأ النموذج أدناه، وسيعود فريقنا إليك في أقرب وقت ممكن. لنخلق شيئًا مذهلاً معًا!",
      responseTime: "سوف نعود إليك في أقرب وقت ممكن.",
      next: "التالي",
      back: "← رجوع",
      submit: "إرسال",
      tryAgain: "حاول مرة أخرى",
      done: "تم",
      successMessage: "شكرًا لك على رسالتك! سوف نعود إليك قريبًا.",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      institution: "المؤسسة",
      hearAboutUs: "كيف سمعت عنا؟",
      select: "اختر",
      yourMessage: "رسالتك",
      nameRequired: "الاسم مطلوب",
      emailRequired: "البريد الإلكتروني مطلوب",
      invalidEmail: "صيغة البريد الإلكتروني غير صالحة",
      phoneRequired: "رقم الهاتف مطلوب",
      invalidPhone: "رقم الهاتف غير صالح",
      institutionRequired: "المؤسسة مطلوبة",
      hearAboutUsRequired: "يرجى اختيار خيار",
      descriptionRequired: "الوصف مطلوب",
      dropdownOptions: ["جوجل", "وسائل التواصل الاجتماعي", "صديق/زميل", "أخرى"],
    },
  };

  const currentContent = content[currentLanguage];

  const validateForm = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = currentContent.nameRequired;

      if (!formData.email.trim()) {
        newErrors.email = currentContent.emailRequired;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = currentContent.invalidEmail;
      }

      if (!formData.phone.trim()) {
        newErrors.phone = currentContent.phoneRequired;
      } else if (!/^\+?[0-9]{7,15}$/.test(formData.phone)) {
        newErrors.phone = currentContent.invalidPhone;
      }

      if (!formData.institution.trim()) {
        newErrors.institution = currentContent.institutionRequired;
      }
    }

    if (step === 2 && !formData.hearAboutUs.trim()) {
      newErrors.hearAboutUs = currentContent.hearAboutUsRequired;
    }
    if (step === 2 && !formData.description.trim()) {
      newErrors.description = currentContent.descriptionRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (step === 2) {
      setSubmitting(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const isSuccess = Math.random() > 0.2;

        if (isSuccess) {
          setSucess(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            institution: "",
            hearAboutUs: "",
            description: "",
          });
        } else {
          setSucess(false);
        }

        setStep(3);
      } catch (error) {
        console.error("Error submitting the form:", error);
        setSucess(false);
        setStep(3);
      } finally {
        setSubmitting(false);
      }
    }
  };

  const handleStep = () => {
    if (step === 0) {
      setStep(1);
      return;
    }

    if (step === 1) {
      if (validateForm()) {
        setStep(2);
      }
    }
  };

  const handleStep2 = (event) => {
    event.preventDefault();
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-easing="ease-out-back"
      data-aos-duration="1000"
      data-aos-offset="100"
      data-aos-mirror="true"
      className="mx-auto z-[100] relative max-w-[700px] px-3 font-inter max-md:w-full"
    >
      <div className="w-full flex items-center justify-center px-5 py-12 form-step relative">
        {st && (
          <div
            onClick={handle}
            className="size-7 nav bgh cursor-pointer flexCenter absolute top-3 z-[505] font-inter right-3 rounded-full"
          >
            <p className="text-white">X</p>
          </div>
        )}
        <div>
          <div className="max-w-[450px] max-[500px]:w-full mx-auto flex flex-col items-center max-[440px]:justify-end">
            {step === 0 && (
              <>
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className="w-[300px] h-auto mx-auto max-[440px]:w-[80%] max-[440px]:mb-5"
                />
                <div className="flex items-center relative justify-center mt-8">
                  <h2 className="text-3xl max-[440px]:text-2xl hero-heading text-center font-semibold">
                    {currentContent.ready}
                  </h2>
                </div>
                <p className="text-sm max-[440px]:text-xs text-center text-white opacity-65 mx-auto py-5 px-3 font-medium">
                  {currentContent.description}
                </p>

                <div className="border cursor-pointer mt-3 text-center border-[#2C233E] w-fit mx-auto bgh pl-3 pr-4 py-1 rounded-full flex items-center gap-x-1">
                  <img
                    src="/images/timer.svg"
                    alt="timer"
                    className="max-[440px]:size-[20px] max-[440px]:hidden"
                  />
                  <p className="text-xs font-medium opacity-80 text-white">
                    {currentContent.responseTime}
                  </p>
                </div>
                <div className="mt-10 -mb-12 flex items-center">
                  <div className="border border-[#2d2641] mx-auto rounded-full w-[130px] h-[40px] cursor-pointer nav bgh relative z-10 bg-[hsla(0,0%,100%,.03)] backdrop-blur-sm">
                    <div
                      onClick={handleStep}
                      className="nav-link w-full h-full relative z-[51] text-sm text-[#551A8B] font-inter"
                    >
                      <p className="text-white text-sm">
                        {currentContent.next}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {step < 3 && (
              <div className="mt-5 w-[450px] max-[550px]:w-[350px] max-[440px]:w-[300px] max-[350px]:w-full mx-auto">
                <form className="w-full mt-8" onSubmit={handleSubmit}>
                  {step !== 0 && (
                    <div className="w-full">
                      {/* Step 1 Fields */}
                      <div
                        className={`relative ${
                          step === 1
                            ? "z-10 min-w-full mx-auto"
                            : "w-0 h-0 overflow-hidden"
                        }`}
                      >
                        {/* Name */}
                        <label
                          htmlFor="name"
                          className="hero-heading mb-1 text-sm block font-semibold"
                        >
                          {currentContent.name}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-field h-[46px] w-full"
                        />
                        {errors.name && (
                          <div className="text-xs text-red-400 mt-1">
                            {errors.name}
                          </div>
                        )}

                        {/* Email */}
                        <div className="mt-5">
                          <label
                            htmlFor="email"
                            className="hero-heading mb-1 text-sm block font-semibold"
                          >
                            {currentContent.email}
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="form-field h-[46px] w-full"
                          />
                          {errors.email && (
                            <div className="text-xs text-red-400 mt-1">
                              {errors.email}
                            </div>
                          )}
                        </div>

                        {/* Phone */}
                        <div className="mt-5">
                          <label
                            htmlFor="phone"
                            className="hero-heading mb-1 text-sm block font-semibold"
                          >
                            {currentContent.phone}
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="form-field h-[46px] w-full"
                          />
                          {errors.phone && (
                            <div className="text-xs text-red-400 mt-1">
                              {errors.phone}
                            </div>
                          )}
                        </div>

                        {/* Institution */}
                        <div className="mt-5">
                          <label
                            htmlFor="institution"
                            className="hero-heading mb-1 text-sm block font-semibold"
                          >
                            {currentContent.institution}
                          </label>
                          <input
                            type="text"
                            id="institution"
                            name="institution"
                            value={formData.institution}
                            onChange={handleInputChange}
                            required
                            className="form-field h-[46px] w-full"
                          />
                          {errors.institution && (
                            <div className="text-xs text-red-400 mt-1">
                              {errors.institution}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Step 2 Field */}
                      <div
                        className={`relative mt-2 ${
                          step === 2
                            ? "z-10 w-full mx-auto"
                            : "w-0 h-0 overflow-hidden"
                        }`}
                        ref={dropdownRef}
                      >
                        {/* Dropdown */}
                        <label
                          htmlFor="hearAboutUs"
                          className="hero-heading mb-1 text-sm block font-semibold"
                        >
                          {currentContent.hearAboutUs}
                        </label>
                        <div className="relative">
                          <div
                            className="form-field h-[46px] w-full flex items-center justify-between cursor-pointer px-3"
                            onClick={() => setDropdownOpen((prev) => !prev)}
                          >
                            <span>
                              {formData.hearAboutUs || currentContent.select}
                            </span>
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                dropdownOpen ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </div>

                          {dropdownOpen && (
                            <div className="absolute left-0 right-0 space-y-1 mt-1 form-field rounded-lg !px-0 border shadow-xl overflow-hidden z-20">
                              {currentContent.dropdownOptions.map((option) => (
                                <div
                                  key={option}
                                  onClick={() => {
                                    setFormData((prev) => ({
                                      ...prev,
                                      hearAboutUs: option,
                                    }));
                                    setDropdownOpen(false);
                                    if (errors.hearAboutUs) {
                                      setErrors((prev) => ({
                                        ...prev,
                                        hearAboutUs: "",
                                      }));
                                    }
                                  }}
                                  className={`px-3 py-2 cursor-pointer  hover:bg-violet-100 ${
                                    formData.hearAboutUs === option
                                      ? "bg-violet-500 text-white hover:text-black"
                                      : ""
                                  }`}
                                >
                                  {option}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        {errors.hearAboutUs && (
                          <div className="text-xs text-red-400 mt-1">
                            {errors.hearAboutUs}
                          </div>
                        )}

                        <div className="mt-5">
                          <label
                            htmlFor="description"
                            className="hero-heading mb-1 text-sm block font-semibold"
                          >
                            {currentContent.yourMessage}
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            maxLength={5000}
                            className="form-field w-full py-2 h-[230px]"
                          ></textarea>
                          {errors.description && (
                            <div className="text-xs text-red-400 mt-1">
                              {errors.description}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="mt-8 flex items-center">
                        <div className="border border-[#2d2641] mx-auto rounded-full w-[130px] h-[40px] cursor-pointer nav bgh relative z-10 bg-[hsla(0,0%,100%,.03)] backdrop-blur-sm">
                          {step === 2 ? (
                            <button
                              type="submit"
                              disabled={submitting}
                              className="nav-link w-full h-full relative z-[51] text-sm text-[#551A8B] font-inter"
                            >
                              <div
                                role="status"
                                className="flex items-center gap-2"
                              >
                                {submitting && (
                                  <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                      fill="currentFill"
                                    />
                                  </svg>
                                )}
                                <p className="text-white text-sm">
                                  {currentContent.submit}
                                </p>
                              </div>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={handleStep}
                              className="nav-link w-full h-full relative z-[51] text-sm text-[#551A8B] font-inter"
                            >
                              <p className="text-white text-sm">
                                {currentContent.next}
                              </p>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
            {step === 3 && (
              <div>
                <img
                  src={
                    sucess
                      ? "/images/check-mark.png"
                      : "/images/close-button.png"
                  }
                  alt={sucess ? "success" : "error"}
                  className="size-[128px] max-[440px]:size-24 mx-auto my-10"
                />
                <p className="text-center text-white text-lg mb-8">
                  {sucess
                    ? currentContent.successMessage
                    : currentContent.errorMessage}
                </p>
                {sucess ? (
                  <div className="relative z-20 my-16 max-[440px]:my-10 flex items-center">
                    <div
                      onClick={() => {
                        st ? handle() : setStep(0);
                        setSucess(false);
                      }}
                      className="border border-[#2d2641] mx-auto rounded-full w-[130px] h-[40px] cursor-pointer nav bgh relative z-10 bg-[hsla(0,0%,100%,.03)] backdrop-blur-sm"
                    >
                      <button className="nav-link w-full h-full relative z-[51] text-sm text-[#551A8B] font-inter">
                        <p className="text-white text-sm">
                          {currentContent.done}
                        </p>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="my-16 flex items-center">
                    <div
                      onClick={() => {
                        setStep(st ? 1 : 0);
                        setSucess(false);
                      }}
                      className="border border-[#2d2641] mx-auto rounded-full w-[130px] h-[40px] cursor-pointer nav bgh relative z-10 bg-[hsla(0,0%,100%,.03)] backdrop-blur-sm"
                    >
                      <button className="nav-link w-full h-full relative z-[51] text-sm text-[#551A8B] font-inter">
                        <p className="text-white text-sm">
                          {currentContent.tryAgain}
                        </p>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {step >= 1 && step < 3 && (
          <div
            onClick={handleStep2}
            className={`absolute left-5 z-10 opacity-60 ${
              step === 1 && st ? "hidden" : ""
            } hover:opacity-100 bottom-5 font-inter cursor-pointer hero-heading font-semibold text-sm ${
              sucess ? "hidden" : ""
            }`}
          >
            {currentContent.back}
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactPopUp;
