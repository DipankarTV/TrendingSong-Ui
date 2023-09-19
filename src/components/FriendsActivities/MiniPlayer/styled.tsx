import React, { useState, useEffect } from "react";

const MiniPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prevProgress) => (prevProgress + 1) % 100);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleNext = () => {
    // Logic to play the next song
  };

  const handlePrevious = () => {
    // Logic to play the previous song
  };

  return (
    <div className="mini-player">
      <div className="controls">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default MiniPlayer;
