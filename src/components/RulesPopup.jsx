import React, { useState, useEffect } from "react";
import introImage from "../assets/intro-bg.jpg";

const RulesPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-80 rounded-xl flex justify-center items-center z-50 ${
        showPopup ? "" : "hidden"
      }`}
      style={{
        backgroundImage: `url(${introImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-opacity-75 bg-black p-8 rounded-lg shadow-lg">
        <h2 className="text-white text-xl font-bold mb-4">Rules</h2>
        <p className="text-white">Do not click the same card twice!</p>
        <button
          onClick={closePopup}
          className="rounded-xl bg-slate-500 mt-4 mx-auto block px-4 py-2 text-white font-semibold hover:bg-slate-600 transition duration-300"
        >
          Understood!
        </button>
      </div>
    </div>
  );
};

export default RulesPopup;
