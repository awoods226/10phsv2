import * as React from "react";
import {
  Segment,
  Header,
  Icon,
  Image,
  Card,
  Transition,
  Visibility,
} from "semantic-ui-react";
import "./Instructors.css";
import finke from "../../images/finke.png";
var ericimg = require("../../images/eric2.jpeg");
var chuckimg = require("../../images/chuck.jpg");

class Instructors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
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
                <Image className="instructor-image" fluid src={ericimg} />
              </Transition>
              <Card.Content>
                <Card.Header>Eric Ow</Card.Header>
              </Card.Content>
            </Card>
            <Card>
              <Transition
                duration={800}
                visible={this.state.isVisible}
                animation={"fade"}
              >
                <Image className="instructor-image" fluid src={chuckimg} />
              </Transition>
              <Card.Content>
                <Card.Header>Chuck Mitchell</Card.Header>
              </Card.Content>
            </Card>
            <Card>
              <Transition
                duration={800}
                visible={this.state.isVisible}
                animation={"fade"}
              >
                <Image className="instructor-image" fluid src={finke} />
              </Transition>
              <Card.Content>
                <Card.Header>Thomas Finke</Card.Header>
              </Card.Content>
            </Card>
          </Card.Group>
        </Visibility>
      </Segment>
    );
  }
}

export default Instructors;
