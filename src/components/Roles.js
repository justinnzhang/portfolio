import React from "react"

import "./components.css"
import "../App.css"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Roles = props => {
  return (
    <Row className="featured-section pt-5 pb-5 text-center">
      <Container>
        <Row>
          <Col className="text-left" sm={4}>
            <p style={{ lineHeight: "10px" }} className="font-weight-bold pt-2">
              My Roles
            </p>
            <p>{props.roles}</p>
          </Col>
          <Col className="text-left" sm={4}>
            <p style={{ lineHeight: "10px" }} className="font-weight-bold pt-2">
              Team Members
            </p>
            <p>{props.team}</p>
          </Col>
          <Col className="text-left" sm={4}>
            <p style={{ lineHeight: "10px" }} className="font-weight-bold pt-2">
              Tools
            </p>
            <p>{props.tools}</p>
          </Col>
        </Row>
      </Container>
    </Row>
  )
}

export default Roles
