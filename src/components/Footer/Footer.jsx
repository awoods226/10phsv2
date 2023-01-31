import * as React from "react";
import "./Footer.css";
import { Icon } from "semantic-ui-react";
const Footer = () => {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui center aligned container">
        <h4 className="ui inverted header">
          3419 AL-53 Unit B, Huntsville, AL 35806
        </h4>
        <h4 className="ui inverted header">(256) 361-3882</h4>
        <a href="https://www.facebook.com/10thplanethuntsville/">
          <Icon name="facebook official" size="big" />
        </a>
        <a href="https://www.instagram.com/10phuntsville/">
          {/* <i className="instagram square icon big" /> */}
          <Icon name="instagram" size="big" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
