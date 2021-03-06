import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Card,
  NavDropdown,
  Tab,
  Tabs,
  ListGroup,
} from "react-bootstrap";
import React, { Component } from "react";
import "../Components/SingleEvent.css";
import { RiArrowGoBackLine } from "react-icons/ri";
import { GrAccessibility } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import Navigation from "../Components/Navigation";
import data from "../../../event-data.json";

import "react-toastify/dist/ReactToastify.css";
import { retrieveCookie } from "../Components/Cookies";

export default class Event extends Component {
  constructor(props) {
    super(props);

    const categories = [];

    data.Events.forEach((element) => {
      categories.push(element.category);
    });

    this.state = {
      events: data.Events,
      newEventModal: false,
      selectedCategory: null,
      categories,
      interested: false,
      going: false,
    };

    this.toggleCreateModal = this.toggleCreateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.interested = this.interested.bind(this);
  }

  toggleCreateModal() {
    this.setState({
      newEventModal: !this.state.newEventModal,
    });
  }

  interested() {
    this.setState({
      interested: true,
      going: false,
    });
    toast("Selection Saved!");
  }

  renderButtons() {
    let variant1 = "warning";
    let variant2 = "warning";
    if (this.state.going === true) {
      variant1 = "success";
    }
    if (this.state.interested === true) {
      variant2 = "success";
    }
    if (retrieveCookie()) {
      return (
        <div>
          <Button variant={variant2} onClick={() => this.interested()}>
            I'm interested...
          </Button>
          {"  "}
          <Button variant={variant1} onClick={() => this.going()}>
            I'm going!
          </Button>
        </div>
      );
    }

    return (
      <div>
        <Button variant="warning">You must log in to RSVP</Button>
      </div>
    );
  }

  going() {
    this.setState({
      going: true,
      interested: false,
    });
    toast("Selection Saved!");
  }

  closeModal() {
    this.setState({
      newEventModal: false,
      eventModal: null,
    });
  }

  openModal(id) {
    this.setState({
      newEventModal: false,
      eventModal: id,
    });
  }

  selectCategory(category) {
    if (this.state.selectedCategory === category) {
      this.setState({
        selectedCategory: null,
      });
    } else {
      this.setState({
        selectedCategory: category,
      });
    }
  }

  render() {
    return (
      <div className="singleEventbody">
        <Navigation />

        <Container fluid className="page-content">
          <Row className="justify-content-md-center ">
            <Col md="8" sm="12">
              <Button
                className="back-to-events"
                variant="warning"
                onClick={() => {
                  this.props.history.push("/Events");
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RiArrowGoBackLine /> Back to Events
                </div>
              </Button>

              <div className="content">
                <Col>
                  <Row>
                    <Col md="6">
                      <br />
                      <Card style={{ width: "100%" }}>
                        <Card.Img
                          variant="top"
                          src="/EventPictures/img-1.jpg"
                        />
                        <Card.Body>
                          <Card.Title>Intramural Basketball</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            Thursday, October 28
                          </Card.Subtitle>
                          <Card.Text>
                            Playoffs have begun! Support your peers this week at
                            the Mashouf Wellness Center at 12PM for the first
                            round of the Basketball Intramural Playoffs.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <row>
                        <p />
                      </row>
                      <Card
                        className="single-mutuals"
                        style={{ width: "100%" }}
                      >
                        <Card.Header>
                          <GrAccessibility /> Attending
                        </Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item>32 Going</ListGroup.Item>
                          <ListGroup.Item>23 Interested</ListGroup.Item>
                          <ListGroup.Item>30 Not Available</ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Col>
                    <Col md="6">
                      <br />
                      <Card
                        className="single-mutuals"
                        style={{ width: "100%" }}
                      >
                        <Card.Header>More Information</Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item>
                            Host:
                            {"   "}
                            <Button
                              variant="warning"
                              onClick={() => {
                                this.props.history.push("/Group2");
                              }}
                            >
                              SFSU Athletics
                            </Button>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Time: 12:00PM - 5:00PM{" "}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            All attendees must have their SFSU ID or guest form
                            ready prior to entering.
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                      <br />
                      <Card
                        className="single-mutuals"
                        style={{ width: "100%" }}
                      >
                        <Card.Header>People You Know</Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item>
                            Sarah Lambert [Attending]
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Christian Wood [Attending]
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Michael Porter Jr. [Not Interested]
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Row className="justify-content-md-end">
                  <Col md="4" className="rsvp">
                    {this.renderButtons()}
                  </Col>
                </Row>
                <br />
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer position="bottom-right" autoClose={2000} />
      </div>
    );
  }
}
