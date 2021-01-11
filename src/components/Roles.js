import React from "react"
import { AiOutlineTool, AiOutlineTeam, AiOutlineUser } from "react-icons/ai"
import { IconContext } from "react-icons"

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
          <Col md={6} sm={12}>
            <Row>
              <Col className="text-left" sm={12}>
                <IconContext.Provider value={{ className: "lg" }}>
                  <AiOutlineUser />
                </IconContext.Provider>
                <p className="font-weight-bold text-close">My Roles</p>
                <p>{props.roles}</p>
              </Col>
              <Col className="text-left" sm={12}>
                <IconContext.Provider value={{ className: "lg" }}>
                  <AiOutlineTeam />
                </IconContext.Provider>
                <p className="font-weight-bold text-close">Team Members</p>
                <p>{props.team}</p>
              </Col>
              <Col className="text-left" sm={12}>
                <IconContext.Provider value={{ className: "lg" }}>
                  <AiOutlineTool />
                </IconContext.Provider>
                <p className="font-weight-bold text-close">Tools</p>
                <p>{props.tools}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Row>
  )
}

export default Roles
