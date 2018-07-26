import * as React from "react";
import { Segment, Container, Header } from "semantic-ui-react";
import Footer from "../components/Footer/Footer";
import Instructors from "../components/Instructors/Instructors";
import LeadCapture from "../components/LeadCapture/LeadCapture";
import Schedule from "../components/Schedule/Schedule";
import Location from "../components/Location/Location";
import { Helmet, link } from "react-helmet";
import favicon from "../images/favicon.ico";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
// import "prismjs/themes/prism-okaidia.css";

export default props => (
  <div>
    <Helmet>
      <title>10th Planet Huntsville</title>
      <meta name="10phsv" content="10th Planet Huntsville BJJ" />
      <link rel="shortcut icon" type="image/png" href={`${favicon}`} />
    </Helmet>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      {/* <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      /> */}
      <Container text>
        <Header inverted as="h1">
          <span className="hero10">10th Planet</span> Huntsville
        </Header>
        <Header inverted as="h2">
          JiuJitsu - Kickboxing - MMA
        </Header>
      </Container>
      <LeadCapture />
    </Segment>
    {/* Schedule */}
    <Segment vertical className="stripe alternate" textAlign="center">
      <Container>
        <Header inverted as="h3">
          Schedule
          <Header.Subheader>More classes coming soon</Header.Subheader>
        </Header>
        <Schedule />
      </Container>
    </Segment>
    {/* Instructors */}
    <Instructors />
    {/* Map and directions */}
    <Segment vertical className="stripe alternate" textAlign="center">
      <Container>
        <Header inverted as="h3">
          Location
          <Header.Subheader>Come roll with us!</Header.Subheader>
        </Header>
        <Location />
      </Container>
    </Segment>
    <Footer />
  </div>
);
