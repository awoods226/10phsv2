import * as React from "react";
import { Segment, Container, Header } from "semantic-ui-react";
import Footer from "../components/Footer/Footer";
import Instructors from "../components/Instructors/Instructors";
import LeadCapture from "../components/LeadCapture/LeadCapture";
import Schedule from "../components/Schedule/Schedule";
import Img from "gatsby-image";

import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
// import "prismjs/themes/prism-okaidia.css";

// export const query = graphql`
//   query GatsbyImageSampleQuery {
//     file(relativePath: { eq: "images/gym2.png" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         resolutions(width: 125, height: 125) {
//           ...GatsbyImageSharpResolutions
//         }
//       }
//     }
//   }
// `;

export default () => (
  <div>
    {/* <Img
      css={{ top: 0, left: 0, right: 0, zIndex: -1 }}
      style={{ position: `absolute` }}
      fluid={this.props.data.file.childImageSharp.fluid}
    /> */}
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
    <Segment vertical className="stripe schedule" textAlign="center">
      <Container>
        <Header inverted as="h3">
          Schedule
        </Header>
        <Schedule />
      </Container>
    </Segment>
    {/* Instructors */}
    <Instructors />
    {/* Map and directions */}
    <Segment vertical textAlign="center" className="stripe alternate feature">
      <Container>Map and directions</Container>
    </Segment>
    <Footer />
  </div>
);
