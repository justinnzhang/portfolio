import React from "react"
import { motion } from "framer-motion"
import Emoji from "./Emoji"

import "../App.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLock, faCircle } from "@fortawesome/free-solid-svg-icons"
library.add(fab, faEnvelope, faLock, faCircle)

const Footer = () => {
  return (
    <Row className="pt-3 mt-5 pb-3">
      <Container className="footer-custom">
        <Row>
          <Col className="center-on-md pb-3" md={6}>
            <p>
              Made with a lot of <Emoji symbol="❤️" /> by Justin Zhang
            </p>
            <a
              href="https://www.linkedin.com/in/justinzhang000/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noopener noreferrer"
            >
              <Button
                variant="none"
                style={{
                  paddingLeft: "0px",
                  paddingTop: "0px",
                }}
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
              </Button>{" "}
            </a>
            <a
              href="https://github.com/madebyjustinzhang"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noopener noreferrer"
            >
              <Button variant="none" style={{ paddingTop: "0px" }}>
                <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
              </Button>{" "}
            </a>
            <a
              href="https://www.youtube.com/justinzhang"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noopener noreferrer"
            >
              <Button variant="none" style={{ paddingTop: "0px" }}>
                <FontAwesomeIcon icon={["fab", "youtube"]} size="lg" />
              </Button>{" "}
            </a>
            <a href="mailto:justinzhangzll@gmail.com">
              <Button variant="none" style={{ paddingTop: "0px" }}>
                <FontAwesomeIcon icon="envelope" size="lg" />
              </Button>
            </a>
          </Col>
          <Col
            className="center-on-md right-first"
            md={6}
            style={{ lineHeight: "0.5" }}
          >
            <p className="font-weight-bold">Techologies Used</p>
            <p className="rg">
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              ,{" "}
              <a
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby
              </a>
              ,{" "}
              <a
                href="https://www.framer.com/motion/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Framer Motion API
              </a>
              ,{" "}
              <a
                href="https://react-bootstrap.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bootstrap 4
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <motion.div
              className="footer-object"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                loop: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
          </Col>
        </Row>
      </Container>
    </Row>
  )
}

export default Footer
