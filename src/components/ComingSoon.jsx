import React from "react";

function comingSoon() {
  return (
    <div className="bgH min-h-screen flex items-center justify-center flex-col ">
      {" "}
      <a href="/">
        <img src="/images/logo.png" alt="Logo" className="w-[250px] h-auto" />
      </a>{" "}
      <p className="text-white font-inter text-6xl font-bold mt-5 her-heading">
        Coming Soon
      </p>
    </div>
  );
}

export default comingSoon;
