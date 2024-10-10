import React from "react";

function LandingVideo() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-primaryccent">
      <video
        className="h-full w-full object-cover"
        src="/paragraph_uniqueness.mov" // Replace with the actual video path
        autoPlay
        muted
        loop
        playsInline
      ></video>
    </div>
  );
}

export default LandingVideo;
