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
                <Table.Cell>
                  <Header as="h4">
                    6:45 AM - 7:30 AM
                    <Header.Subheader>BJJ Fundamentals</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    7:30 PM - 9:00 PM
                    <Header.Subheader>All Levels BJJ</Header.Subheader>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <Header as="h4">
                    5:00 PM - 6:00 PM
                    <Header.Subheader>Kids Class</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    6:15 PM - 7:45 PM
                    <Header.Subheader>BJJ Fundamentals</Header.Subheader>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <Header as="h4">
                    6:45 AM - 7:30 AM
                    <Header.Subheader>BJJ Fundamentals</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    6:00 PM - 7:30 PM
                    <Header.Subheader>BJJ Fundamentals</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    8:00 PM - 9:00 PM
                    <Header.Subheader>Muay Thai</Header.Subheader>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <Header as="h4">
                    5:00 PM - 6:00 PM
                    <Header.Subheader>Kids Class</Header.Subheader>
                  </Header>
                  <Header as="h4">
                    6:15 PM - 7:45 PM
                    <Header.Subheader>BJJ Fundamentals</Header.Subheader>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <span />
                </Table.Cell>
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
                  6:45am - 7:30am BJJ Fundamentals
                  <br />
                  7:30pm - 9:00pm All Levels BJJ
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Tuesday</List.Header>
                <List.Description>
                  5:00pm - 6:00pm Kids Class
                  <br />
                  6:15pm - 7:45pm BJJ Fundamentals
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Wednesday</List.Header>
                <List.Description>
                  6:45am - 7:30am BJJ Fundamentals
                  <br />
                  6:00pm - 7:30pm BJJ Fundamentals
                  <br />
                  8:00pm - 9:00pm Muay Thai
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Thursday</List.Header>
                <List.Description>
                  5:00pm - 6:00pm Kids Class
                  <br />
                  6:15pm - 7:45pm BJJ Fundamentals
                </List.Description>
              </List.Content>
            </List.Item>
            {/* <List.Item>
              <List.Content>
                <List.Header>Friday</List.Header>
                <List.Description>
                  6:00pm - 7:30pm BJJ Fundamentals
                </List.Description>
              </List.Content>
            </List.Item> */}
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
