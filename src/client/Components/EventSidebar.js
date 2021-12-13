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
  ListGroup,
  NavDropdown,
} from "react-bootstrap";
import React, { Component, useState } from "react";
import "./Cards.css";
import "./components.css";

import { FaBasketballBall } from "react-icons/fa";
import { GrBeacon } from "react-icons/gr";
import { FaMusic } from "react-icons/fa";
import { GrPaint } from "react-icons/gr";
import { BsController } from "react-icons/bs";
import { SiBytedance } from "react-icons/si";


const icons = {
  Sports: <FaBasketballBall />,
  Networking: <GrBeacon />,
  Music: <FaMusic />,
  Art: <GrPaint />,
  Gaming: <BsController />,
  Dance: <SiBytedance />
};

function RenderCategories(categories, selectCategory) {
  return categories.map((item) => (
    <ListGroup.Item
      action
      as="li"
      onClick={() => {
        selectCategory(item);
      }}
    >
      {icons[item]} {item}
    </ListGroup.Item>
  ));
}

function EventSidebar(props) {
  return (
    <>
      <div className="">
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action href="/Events">
            Home
          </ListGroup.Item>
        </ListGroup>
        <ListGroup defaultActiveKey="#link2">
          <ListGroup.Item action href="/Events">
            Birthdays
          </ListGroup.Item>
        </ListGroup>
        <ListGroup defaultActiveKey="#link2">
          <ListGroup.Item action href="/Events">
            Notifications
          </ListGroup.Item>
        </ListGroup>
        <div className="event-sidebar">
          <h6>Your Upcoming Events</h6>
          <p>THU, OCT 28 AT 12PM PST BASKETBALL INTRAMURAL PLAYOFFS</p>
          <h5>Categories</h5>
        </div>
        <ListGroup as="ul">
          {RenderCategories(props.categories, props.selectCategory)}
        </ListGroup>
      </div>
    </>
  );
}

export default EventSidebar;
