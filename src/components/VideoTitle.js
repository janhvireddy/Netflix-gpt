import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="px-6 py-1 bg-white text-black font-bold w-20 text-lg rounded">
          Play
        </button>
        <button className="px-6 py-1  mx-2 bg-white text-black font-bold w-30 text-lg rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
