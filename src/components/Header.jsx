// eslint-disable-next-line jsx-a11y/anchor-is-valid
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const [show, setShow] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const { t, isRTL } = useLanguage();

  // Dynamic navigation data with translation keys
  const navItems = [
    { href: "#about", key: "nav_about" },
    { href: "#features", key: "nav_features" },
    { href: "#impact", key: "nav_impact" },
    { href: "#achievements", key: "nav_achievements" },
    { href: "#partaner", key: "nav_partners" },
    { href: "#contact", key: "nav_contact" },
  ];

  // Dynamic class names with RTL support
  const headerContainerClasses = `
    ${
      true
        ? "fixed w-[760px] max-[800px]:h-screen top-5 max-[800px]:top-0 max-[800px]:right-0 z-[501] min-[800px]:mx-auto min-[800px]:left-[50%] min-[800px]:translate-x-[-50%]"
        : "hidden"
    } 
    ${
      show
        ? "max-[800px]:w-[250px] duration-200"
        : "max-[800px]:w-0 overflow-hidden duration-200"
    }
    ${isRTL ? "max-[800px]:left-0 max-[800px]:right-auto" : ""}
  `;

  // Handle navigation click
  const handleNavClick = () => {
    setShow(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <div className={headerContainerClasses + ""}>
        {/* Mobile Close Button */}
        <div
          onClick={() => setShow(!show)}
          className={`size-7 nav bgh min-[800px]:hidden text-white max-[800px]:rounded cursor-pointer flex items-center justify-center absolute top-3 z-[505] font-inter ${
            isRTL ? "right-3 " : "left-3"
          } rounded-full`}
        >
          x
        </div>

        {/* Navigation Menu */}
        <nav
          className={`
          nav font-light   relative max-[800px]:pt-12 max-[800px]:pb-5 border max-[800px]:rounded border-[#2d2641] rounded-full px-2 min-[800px]:flex items-center p-1 min-[800px]:h-[50px] max-[800px]:h-full 
          bg-[#0b011d] bg-opacity-60 backdrop-blur-md
          ${isRTL ? "" : ""}
        `}
        >
          <a href="/" className="block">
            <img
              src="/images/logo.png"
              alt="Logo"
              className={`w-[150px] cursor-pointer relative z-10  h-auto max-[800px]:w-full ${
                isRTL ? "mx-2" : "mx-2"
              }`}
            />
          </a>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={handleNavClick}
              className="nav-link max-[800px]:h-[45px] relative z-[51] text-sm text-white font-inter cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
              <p className="nav-text">{t(item.key)}</p>
            </a>
          ))}

          {/* Separator Line for Desktop */}

          {/* Login Button */}
          <a
            href="https://inutrical.net/login"
            type="button"
            className="nav-link max-[800px]:w-full max-[800px]:h-[45px] relative z-[51] text-sm text-white font-inter cursor-pointer hover:opacity-80 transition-opacity duration-200 bg-transparent border-none outline-none"
          >
            <p className="nav-text">{t("nav_login")}</p>
          </a>
          <div className="nav-line max-[800px]:hidden"></div>
          {/* Language Switcher */}
          <div className="nav-link mx-auto max-[800px]:h-[45px] !px-0 !pt-1.5 relative z-[51] text-sm text-white font-inter cursor-pointer hover:opacity-80 transition-opacity duration-200 bg-transparent border-none outline-none">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div
        className={`fixed flex bg-[#0b011d] bg-opacity-40 backdrop-blur-md w-full px-3 py-1 justify-between items-center min-[800px]:hidden z-[500] top-0 `}
      >
        <div className="flex items-center gap-3">
          <a href="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              className={`w-[150px] cursor-pointer relative z-10  h-auto  ${
                isRTL ? "mx-2" : "mx-2"
              }`}
            />
          </a>
          <a
            href="https://inutrical.net/login"
            type="button"
            className="nav-link  max-[800px]:h-[45px] relative z-[51] text-sm text-white font-inter cursor-pointer hover:opacity-80 transition-opacity duration-200 bg-transparent border-none outline-none"
          >
            <p className="nav-text">{t("nav_login")}</p>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="nav-link max-[800px]:h-[45px] !px-0 !pt-1.5 relative z-[51] text-sm text-white font-inter cursor-pointer hover:opacity-80 transition-opacity duration-200 bg-transparent border-none outline-none">
            <LanguageSwitcher />
          </div>
          <div onClick={() => setShow(!show)}>
            <div className="size-10 p-2 cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <img src="/menu.png" alt="Menu" className="size-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
