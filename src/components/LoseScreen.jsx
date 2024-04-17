import React from "react";
import defeatImage from "../assets/defeat-bg.jpg";

const LoseScreen = ({ restartGame }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div
        className=" rounded-lg p-8 shadow-lg "
        style={{
          backgroundImage: `url(${defeatImage})`,
        }}
      >
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Fell to the shadow realm!
        </h2>
        <button
          onClick={restartGame}
          className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition duration-300"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default LoseScreen;
