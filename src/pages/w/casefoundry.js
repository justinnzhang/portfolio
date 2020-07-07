import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import "../../App.css"
import "../pages.css"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SEO from "../../components/seo"
import Roles from "../../components/Roles"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

const AdobeJam = () => {
  return (
    <>
      <SEO
        title="Justin Zhang - Case Foundry"
        description="Co-Founded the next generation of Case Competitions. By
                    students, for students."
        type="article"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <motion.div
          key="hackwestern"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          exit={{ opacity: 0, translateY: 50 }}
          transition={{ duration: 0.333 }}
          className
        >
          <Row className="pt-5">
            <Container className="">
              <Row className="mb-3">
                <Col sm={6} className="left-first center-on-sm">
                  <span className="message soon rg">Coming Soon</span>
                  <h1 className="font-weight-bold">Case Foundry</h1>
                  <h2 className="lg">
                    {" "}
                    Building the next generation of Case Competitions. By
                    students, for students.
                  </h2>
                  <p>March 2019 - Present</p>
                </Col>
                <Col sm={6} className="right-first center-on-sm">
                  <a
                    href="https://hackwestern.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="dark" disabled>
                      Coming Soon
                    </Button>
                  </a>
                </Col>
              </Row>

              <Row style={{ overflow: "hidden" }} className="mb-5">
                <Col>
                  <Image
                    fluid
                    src="https://justinzhang.imfast.io/casefoundry/Board%404x.png"
                  />
                </Col>
              </Row>
            </Container>
          </Row>

          <Roles
            roles="Co-Founder, Head of Product, Head of Engineering"
            team="Amanda Adam, Jackie Chen, Eric Kogut"
            tools="Github, React, Express, Node, MongoDB, AWS, Adobe
                    Illustrator"
          />

          <Row className="pt-5">
            <Container className="">
              <Row>
                <Col>
                  <h2>
                    A brand new platform created to make the experience of
                    attending and organizing Case Competitions easier.
                  </h2>
                  <p className="font-weight-bold">Launching Soon</p>
                  <Button as={Link} to="/" variant="dark">
                    Back Home
                  </Button>
                </Col>
              </Row>
            </Container>
          </Row>

          <Footer />
        </motion.div>
      </Container>
    </>
  )
}

export default AdobeJam
