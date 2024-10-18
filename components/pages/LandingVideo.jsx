import React from "react";

function LandingVideo() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-primaryccent">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/video-poster.jpg"
        loading="lazy"
      >
        <source
          src="/videos/video_high.mp4"
          type="video/mp4"
          media="(min-width: 768)"
        />
        <source
          src="/videos/video_normal.mp4"
          type="video/mp4"
          media="(min-width: 421px)"
        />
        <source
          src="/videos/video_low.mp4"
          type="video/mp4"
          media="(max-width: 420px)"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default LandingVideo;
