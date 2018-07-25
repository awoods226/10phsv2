import * as React from "react";
import config from "../../../config";
const Location = () => {
  return (
    <iframe
      width="600"
      height="450"
      frameBorder="0"
      //   style="border:0"
      src={`https://www.google.com/maps/embed/v1/place?q=2615%20N%20Memorial%20Pkwy%20ste%20c%2C%20Huntsville%2C%20AL%2035810&key=${
        config.googleMapsAPIKey
      }`}
      allowFullScreen
    />
  );
};

export default Location;
