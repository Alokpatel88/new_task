import React from "react";

const YouTubePlayer = ({ videoUrl, title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      <div className="w-full max-w-3xl">
        <iframe
          className="w-full h-[315px] md:h-[450px] lg:h-[550px]"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubePlayer;