import * as React from "react";
import "./Schedule.css";
import * as moment from "moment";
import { List, Table, Header } from "semantic-ui-react";

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="calendar-container">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Monday</Table.HeaderCell>
                <Table.HeaderCell>Tuesday</Table.HeaderCell>
                <Table.HeaderCell>Wednesday</Table.HeaderCell>
                <Table.HeaderCell>Thursday</Table.HeaderCell>
                <Table.HeaderCell>Friday</Table.HeaderCell>
                <Table.HeaderCell>Saturday</Table.HeaderCell>
                <Table.HeaderCell>Sunday</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                {/* Monday */}
                <Table.Cell>
                  <Header as="h4">
                    7:00 AM - 8:30 AM
                    <Header.Subheader>All Levels BJJ</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    6:15 PM - 8:00 PM
                    <Header.Subheader>All Levels BJJ</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    8:15 PM - 9:00 PM
                    <Header.Subheader>Muay Thai</Header.Subheader>
                  </Header>
                </Table.Cell>
                {/* Tuesday */}
                <Table.Cell>
                  <Header as="h4">
                    11:00 AM - 12:30 PM
                    <Header.Subheader>All Levels BJJ</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    4:15 PM - 5:00 PM
                    <Header.Subheader>Kids Class Ages 4-6</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    5:00 PM - 6:00 PM
                    <Header.Subheader>Kids Class Ages 7-13</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    6:00 PM - 7:00 PM
                    <Header.Subheader>Beginners BJJ</Header.Subheader>
                  </Header>
                </Table.Cell>
                {/* Wednesday */}
                <Table.Cell>
                  <Header as="h4">
                    7:00 AM - 8:30 AM
                    <Header.Subheader>All Levels BJJ</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    6:15 PM - 8:00 PM
                    <Header.Subheader>All Levels BJJ</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    8:15 PM - 9:00 PM
                    <Header.Subheader>Muay Thai</Header.Subheader>
                  </Header>
                </Table.Cell>
                {/* Thursday */}
                <Table.Cell>
                  <Header as="h4">
                    11:00 AM - 12:30 PM
                    <Header.Subheader>All Levels BJJ</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    4:15 PM - 5:00 PM
                    <Header.Subheader>Kids Class Ages 4-6</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    5:00 PM - 6:00 PM
                    <Header.Subheader>Kids Class Ages 7-13</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    6:00 PM - 7:00 PM
                    <Header.Subheader>Beginners BJJ</Header.Subheader>
                  </Header>
                </Table.Cell>
                {/* Friday */}
                <Table.Cell>
                  <Header as="h4">
                    6:15 PM - 8:00 PM
                    <Header.Subheader>All Levels BJJ</Header.Subheader>
                  </Header>
                </Table.Cell>
                {/* Saturday */}
                <Table.Cell>
                  <Header as="h4">
                    10:00 AM - 12:00 PM
                    <Header.Subheader>Open Mat</Header.Subheader>
                  </Header>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <div className="mobile-schedule-container">
          <List
            divided
            animated
            relaxed
            size="large"
            verticalAlign="middle"
            className="mobile-schedule"
          >
            <List.Item>
              <List.Content>
                <List.Header>Monday</List.Header>
                <List.Description>
                  7:00am - 8:30am All Levels BJJ
                  <br />
                  6:15pm - 8:00pm All Levels BJJ
                  <br />
                  8:15pm - 9:00pm Muay Thai
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Tuesday</List.Header>
                <List.Description>
                  11:00am - 12:30pm All Levels BJJ
                  <br />
                  4:15pm - 5:00pm Kids Class Ages 4-6
                  <br />
                  5:00pm - 6:00pm Kids Class Ages 7-13
                  <br />
                  6:00pm - 7:00pm Beginners BJJ
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Wednesday</List.Header>
                <List.Description>
                  7:00am - 8:30am All Levels BJJ
                  <br />
                  6:15pm - 8:00pm All Levels BJJ
                  <br />
                  8:15pm - 9:00pm Muay Thai
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Thursday</List.Header>
                <List.Description>
                  11:00am - 12:30pm All Levels BJJ
                  <br />
                  4:15pm - 5:00pm Kids Class Ages 4-6
                  <br />
                  5:00pm - 6:00pm Kids Class Ages 7-13
                  <br />
                  6:00pm - 7:00pm Beginners BJJ
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Friday</List.Header>
                <List.Description>
                  6:15pm - 8:00pm All Levels BJJ
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Saturday</List.Header>
                <List.Description>10:00am - 12:00am Open Mat</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </div>
      </div>
    );
  }
}

export default Schedule;
