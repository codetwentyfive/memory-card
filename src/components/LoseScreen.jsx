import React, { useEffect } from "react";
import defeatImage from "../assets/defeat-bg.jpg";
import defeatSound from "../assets/defeat-sound.mp3";

const LoseScreen = ({ restartGame }) => {
  useEffect(() => {
    // Play defeat sound when the component mounts
    const audio = new Audio(defeatSound);
    audio.play();

    // Clean up the audio when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="rounded-lg shadow-lg overflow-hidden">
        <img
          src={defeatImage}
          alt="Defeat"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Fell to the shadow realm!
          </h2>
          <button
            onClick={restartGame}
            className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoseScreen;
