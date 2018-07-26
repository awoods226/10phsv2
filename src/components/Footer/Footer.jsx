import * as React from "react";
import "./Footer.css";
import { Icon } from "semantic-ui-react";
const Footer = () => {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui center aligned container">
        <h4 className="ui inverted header">
          2615 N Memorial Pkwy ste c, Huntsville, AL 35810
        </h4>
        <a href="https://www.facebook.com/10thplanethuntsville/">
          <Icon name="facebook official" size="big" />
        </a>
        <a href="https://www.instagram.com/10phsv/">
          {/* <i className="instagram square icon big" /> */}
          <Icon name="instagram" size="big" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
