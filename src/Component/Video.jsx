import React, { useEffect, useState } from "react";
import "./Video.css";
import sample from "../assets/sample.mp4";
import sample1 from "../assets/sample1.mp4";
import sample2 from "../assets/sample2.mp4";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [num, setNum] = useState(0);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
      setIsPlaying(true);
      setNum(1);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setShowImage(true);
    setNum(num + 1);
  };

  return (
    <div className="main-container">
      <div className="img-container">
        {showImage && (
          <img
            src="https://wallpapercave.com/wp/wp2342132.jpg"
            alt="placeholder"
            className="video-image"
          />
        )}
      </div>

      <div className="video-container">
        {num === 1 && (
          <video
            src={sample}
            autoPlay
            muted
            controls
            className="video-element"
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
          ></video>
        )}
        {num === 2 && (
          <video
            src={sample1}
            autoPlay
            muted
            controls
            className="video-element"
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
          ></video>
        )}
        {num === 3 && (
          <video
            src={sample2}
            autoPlay
            muted
            controls
            className="video-element"
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
          ></video>
        )}
      </div>
    </div>
  );
}
