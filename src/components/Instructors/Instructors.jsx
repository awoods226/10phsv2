import * as React from "react";
import {
  Segment,
  Header,
  Icon,
  Image,
  Card,
  Transition,
  Visibility
} from "semantic-ui-react";
import "./Instructors.css";
import brandonimg from "../../images/brandon.png";
var ericimg = require("../../images/eric.png");
var jacobimg = require("../../images/jacob.png");

class Instructors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  handleTransition = () => {
    this.setState({ isVisible: true });
  };
  render() {
    return (
      <Segment textAlign="center" vertical className="stripe instructors">
        <Header as="h3">Instructors</Header>
        <Visibility onTopVisible={() => this.handleTransition()}>
          <Card.Group centered={true} stackable className="instructors-group">
            <Card fluid={false}>
              <Transition
                duration={800}
                visible={this.state.isVisible}
                animation={"fade"}
              >
                <Image fluid src={brandonimg} />
              </Transition>
              <Card.Content>
                <Card.Header>Brandon Mccaghren</Card.Header>
                <Card.Meta>
                  <span className="date">Head Instructor</span>
                </Card.Meta>
                <Card.Description>
                  Brandon Mccaghren earned his Brazilian Jiu Jitsu Black Belt
                  under Eddie Bravo and was the first 10th Planet Instructor in
                  the entire Southeastern United States. He has received each of
                  his Jiu Jitsu ranks directly from Eddie Bravo. In addition to
                  being an experienced teacher and Black belt in the Traditional
                  Martial Arts, Brandon has staked his claim as one of the top
                  grappling competitors in the Southeast by taking titles in
                  Kakuto, Good Fight, IBJJF, NAGA, and even Freestyle Judo to
                  name just a few. He has also led 10th Planet to multiple Team
                  Titles at many of these same events.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  Brandon is sponsored by Coke Zero
                </a>
              </Card.Content>
            </Card>
            <Card>
              <Transition
                duration={800}
                visible={this.state.isVisible}
                animation={"fade"}
              >
                <Image fluid src={ericimg} />
              </Transition>
              <Card.Content>
                <Card.Header>Eric Ow</Card.Header>
                <Card.Meta>
                  <span className="date">Instructor</span>
                </Card.Meta>
                <Card.Description>
                  Eric Ow is a purple belt under Brandon McCaghren. He has
                  competed in numerous gi and no gi tournaments in the
                  southeast.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  Eric likes long walks on the beach.... and chokes.
                </a>
              </Card.Content>
            </Card>
            <Card>
              <Transition
                duration={800}
                visible={this.state.isVisible}
                animation={"fade"}
              >
                <Image fluid src={jacobimg} />
              </Transition>
              <Card.Content>
                <Card.Header>Jacob Sandlin</Card.Header>
                <Card.Meta>
                  <span className="date">Instructor</span>
                </Card.Meta>
                <Card.Description>
                  Jacob Sandlin is a purple belt under Brandon McCaghren. He is
                  the former V3 135 Champion.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  Jacob and his wife Mckenna have 500 dogs.
                </a>
              </Card.Content>
            </Card>
          </Card.Group>
        </Visibility>
      </Segment>
    );
  }
}

export default Instructors;
