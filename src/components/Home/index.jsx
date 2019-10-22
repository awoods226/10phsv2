import * as React from "react";
import Instructors from "../Instructors/Instructors";
import LeadCapture from "../LeadCapture/LeadCapture";
import Schedule from "../Schedule/Schedule";
import Location from "../Location/Location";
import WhatIs10 from "../WhatIs10/WhatIs10";
import { Segment, Container, Header } from "semantic-ui-react";
import "../../css/styles.css";
import "../../css/responsive.css";

import "../../css/semantic.min.css";

const Home = () => {
  return (
    <React.Fragment>
      <Segment vertical inverted textAlign="center" className="masthead">
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
      <Segment vertical className="stripe alternate" textAlign="center">
        <Container>
          <Header inverted as="h3">
            Schedule
          </Header>
          <Schedule />
        </Container>
      </Segment>
      <Segment vertical className="stripe black" textAlign="center">
        <Container>
          <Header inverted as="h3">
            What is 10th Planet
          </Header>
          <WhatIs10 />
        </Container>
      </Segment>
      <Instructors />
      <Segment vertical className="stripe alternate" textAlign="center">
        <Container>
          <Header inverted as="h3">
            Location
            <Header.Subheader>Come roll with us!</Header.Subheader>
          </Header>
          <Location />
        </Container>
      </Segment>
    </React.Fragment>
  );
};

export default Home;
