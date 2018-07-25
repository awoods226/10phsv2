import * as React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div class="ui inverted vertical footer segment">
      <div class="ui center aligned container">
        <h4 class="ui inverted header">
          2615 N Memorial Pkwy ste c, Huntsville, AL 35810
        </h4>
        <a href="https://www.facebook.com/">
          <i class="facebook square icon big" />
        </a>
        <a href="https://twitter.com/">
          <i class="twitter square icon big" />
        </a>
        <a href="https://www.linkedin.com/company/c">
          <i class="linkedin square icon big" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
