import React, { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  // Dynamic navigation data
  const navItems = [
    { href: "#home", label: "Inutrical" },
    { href: "#teck", label: "Finally" },
    { href: "#achievements", label: "Achievements" },
    { href: "#care", label: "Care" },
    { href: "#about", label: "About" },
    { href: "#partaner", label: "Partners" },
    { href: "#contact", label: "Contact" },
  ];

  // Dynamic class names
  const headerContainerClasses = `
    ${
      true
        ? "fixed max-md:h-screen top-5 max-md:top-0 max-md:right-0 z-[200] md:mx-auto md:left-[50%] md:translate-x-[-50%]"
        : "hidden"
    } 
    ${
      show
        ? "max-md:w-[250px] duration-200"
        : "max-md:w-0 overflow-hidden duration-200"
    }
  `;

  // Handle navigation click
  const handleNavClick = () => {
    setShow(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <div className={headerContainerClasses}>
        {/* Mobile Close Button */}
        <div
          onClick={() => setShow(!show)}
          className="size-7 nav bgh md:hidden cursor-pointer flex items-center justify-center absolute top-3 z-[505] font-inter left-3 rounded-full"
        >
          <p className="text-white">X</p>
        </div>

        {/* Navigation Menu */}
        <nav className="nav font-light relative max-md:pt-12 max-md:pb-5 border border-[#2d2641] rounded md:rounded-full md:flex items-center p-1 md:h-[48px] max-md:h-full bg-[#0b011d] bg-opacity-60 backdrop-blur-md">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={handleNavClick}
              className="nav-link max-md:h-[45px] relative z-[51] text-sm text-white font-inter cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
              <p className="nav-text">{item.label}</p>
            </a>
          ))}

          {/* Separator Line for Desktop */}
          <div className="nav-line max-md:hidden"></div>
          <button
            type="button"
            className="nav-link max-md:h-[45px] relative z-[51] text-sm text-white font-inter cursor-pointer hover:opacity-80 transition-opacity duration-200 bg-transparent border-none outline-none"
          >
            <p className="nav-text">Login</p>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div onClick={() => setShow(!show)}>
        <img
          src="/menu.png"
          alt="menu"
          width={32}
          height={32}
          className="size-6 hover:rotate-180 duration-300 md:hidden"
        />
      </div>

      {/* Popup Modal (You can implement this separately) */}
      {showPopUp && (
        <div className="fixed inset-0 z-[1000] bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3>Consultation Popup</h3>
            <button onClick={() => setShowPopUp(false)}>Close</button>
            {/* Add your consultation form here */}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
