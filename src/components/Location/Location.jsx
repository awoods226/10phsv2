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
          src={`https://www.google.com/maps/embed/v1/place?q=3419%20Alabama%2053%20Unit%20B&key=${process.env.GATSBY_googleMapsAPIKey}`}
          allowFullScreen
        />
      </div>
      <div className={"map-container-desktop"}>
        <iframe
          width="650"
          height="450"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?q=3419%20Alabama%2053%20Unit%20B&key=${process.env.GATSBY_googleMapsAPIKey}`}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Location;
