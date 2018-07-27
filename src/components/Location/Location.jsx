import * as React from "react";
import "./Location.css";
const Location = () => {
  console.log(process.env);
  return (
    <div>
      <div className={"map-container-mobile"}>
        <iframe
          width="350"
          height="450"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?q=2615%20N%20Memorial%20Pkwy%20ste%20c%2C%20Huntsville%2C%20AL%2035810&key=${
            process.env.GATSBY_googleMapsAPIKey
          }`}
          allowFullScreen
        />
      </div>
      <div className={"map-container-desktop"}>
        <iframe
          width="650"
          height="450"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?q=2615%20N%20Memorial%20Pkwy%20ste%20c%2C%20Huntsville%2C%20AL%2035810&key=${
            process.env.GATSBY_googleMapsAPIKey
          }`}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Location;
