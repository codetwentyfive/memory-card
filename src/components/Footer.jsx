import { useState } from "react";
import audioOnImg from "/images/audio.png";
import audioOffImg from "/images/audio-off.png";

const Footer = () => {
  const [isMusicOn, setIsMusicOn] = useState(true);

  const toggleMusic = () => {
    setIsMusicOn((prevState) => !prevState);
  };

  return (
    <footer className=" text-white">
      <div className="footerContainer py-4 px-8">
        <div className="audioSection flex items-center justify-center">
          <button
            onClick={toggleMusic}
            className="flex items-center justify-center bg-gray-800 rounded-full p-3"
          >
            <img
              src={isMusicOn ? audioOnImg : audioOffImg}
              alt={isMusicOn ? "Audio On" : "Audio Off"}
              className="h-6 w-6"
            />
            <span className="ml-2">{isMusicOn ? "Music On" : "Music Off"}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
