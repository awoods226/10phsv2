import * as React from "react";
import "./WhatIs10.css";
import YouTube from "react-youtube";

const WhatIs10 = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  return (
    <div className="whatis10 video-container">
      <YouTube videoId="PqZiShzsvCM" opts={opts} />
    </div>
  );
};

export default WhatIs10;
