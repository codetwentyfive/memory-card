import { useEffect, useState, useRef } from "react";
import audio from "../assets/audio.mp3";
import audioOnImg from "/images/audio.png";
import audioOffImg from "/images/audio-off.png";

const Footer = () => {
  const [isMusicOn, setIsMusicOn] = useState(true);
  const audioRef = useRef(new Audio(audio));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const toggleMusic = () => {
    setIsMusicOn((prevState) => !prevState);
  };
  useEffect(() => {
    if (isMusicOn) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isMusicOn]);
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
