import React from "react"
import { motion } from "framer-motion"

import "../App.css"
import "./pages.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Emoji from "../components/Emoji"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"

import Footer from "../components/Footer"
import { work } from "../components/articles/ListOfWork"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import IntroAnimation from "../components/animation/IntroAnimation"
import CardsDisplay from "../components/cards/CardsDisplay"

const HIRE_SITE_URL = "https://hirejustinzhang.com"

const UpReveal = {
  hidden: {
    opacity: 0,
    translateY: 200,
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.666,
      ease: "easeOut",
    },
  },
}

const UpRevealParent = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.333,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.333,
    },
  },
}

const IndexPage = () => {
  return (
    <div>
      <SEO
        title="Justin Zhang's Portfolio"
        type="website"
        keywords={[
          "Justin Zhang",
          "Portfolio",
          "Justin Zhang Student",
          "Justin Zhang Canada",
          "Justin Zhang Western University",
          "Justin Zhang Portfolio",
          "Justin Zhang Product Manager",
          "Product Management Intern",
          "Software Engineering Intern",
          "Ivey Business School School",
          "Shopify intern",
          "RBC intern",
        ]}
      />
      <Navbar />
      <Container fluid style={{ overflow: "hidden" }}>
        <motion.div
          key="landing"
          initial={{ opacity: 0, translateY: 0 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 50 }}
          transition={{ duration: 0.333 }}
        >
          <Row>
            <Col>
              <Container className="pt-3">
                <Alert variant="primary">
                  <Alert.Heading>Update</Alert.Heading>
                  <p>
                    I've recently created an interactive cover letter
                    higlighting who I am beyond the resume. Check it out at{" "}
                    <Alert.Link href={HIRE_SITE_URL} target="_blank">
                      {HIRE_SITE_URL}
                    </Alert.Link>
                    !
                  </p>
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="outline-primary"
                      href={HIRE_SITE_URL}
                      target="_blank"
                    >
                      Visit
                    </Button>
                  </div>
                </Alert>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <IntroAnimation />
              <Container>
                <Row>
                  <Col md={8} className="pt-5 pb-5">
                    <motion.div
                      animate={{
                        scale: [0.5, 1, 1, 1, 1, 1, 0],
                        opacity: [1, 1, 1, 1, 1, 0, 0],
                        rotate: [0, 20, -20, 20, -20, 1, 1],
                        translateY: [100, 100, 100, 100, 100, -50, -50],
                      }}
                      transition={{
                        duration: 0.666,
                      }}
                      className="initial-wave text-center"
                    >
                      <Emoji symbol="👋" />
                    </motion.div>
                    <motion.div
                      variants={UpRevealParent}
                      initial="hidden"
                      animate="show"
                    >
                      <div style={{ overflow: "hidden" }}>
                        <motion.h1
                          variants={UpReveal}
                          className="font-weight-bold mb-3 xl"
                        >
                          Hello There! <Emoji symbol="👋" />
                        </motion.h1>
                      </div>
                      <div style={{ overflow: "hidden" }}>
                        <motion.p
                          key="text1"
                          variants={UpReveal}
                          className="lg"
                        >
                          My name is{" "}
                          <span className="gradient-text font-weight-bold">
                            Justin Zhang
                          </span>
                          , a videographer/designer-turned Computer Science and
                          Business student. Currently exploring the intersection
                          of <strong>Business</strong>,
                          <strong>Technology</strong>, and{" "}
                          <strong>Design,</strong> I'm hoping to break into{" "}
                          <strong>
                            Product Management or Software Development!
                          </strong>
                        </motion.p>
                      </div>
                    </motion.div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>

          <Row className="landing-header featured-section">
            <Container className="mt-5 mb-4">
              <Row className="mb-4">
                <Col>
                  <h2 className="font-weight-bold dark-blue">Selected Work</h2>
                </Col>
              </Row>
              <CardsDisplay type="featured" />
            </Container>
          </Row>
          <Row>
            <Container>
              <Row className="mt-5 mb-4">
                <Col>
                  <h2 className="font-weight-bold dark-blue">More Work</h2>
                </Col>
              </Row>
              <CardsDisplay />
            </Container>
          </Row>
          <Footer />
        </motion.div>
      </Container>
    </div>
  )
}

export default IndexPage
