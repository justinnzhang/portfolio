import { Link } from "gatsby"

import React, { useState } from "react"
import { useViewportScroll, motion, useTransform } from "framer-motion"

import "../App.css"
import "./pages.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Emoji from "../components/Emoji"
import Card from "../components/Card"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"

import Footer from "../components/Footer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

const UpReveal = {
  hidden: {
    opacity: 0,
    translateY: 100,
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.666, ease: "easeOut", delay: 0.333 },
  },
}

const UpRevealParent = {
  hidden: {
    opacity: 0,
    translateY: 50,
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeOut",
      delayChildren: 0.5,
    },
  },
}

const IndexPage = () => {
  // Parallax Variables
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 1500], [0, 500])
  const y2 = useTransform(scrollY, [0, 1000], [0, 200])
  // const y3 = useTransform(scrollY, [0, 1200], [0, 300])

  // Modal state variables
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <SEO title="Justin Zhang's Portfolio | Business - Technology - Design" description="Welcome to my personal portfolio! Here, you can find a representation of the projects that I've been able to work on." type="website"/>
      <Navbar />
      <Container fluid style={{ overflow: "hidden" }}>
        <Modal show={show} onHide={handleClose} centered>
          <Container className="p-5 restricted">
            <Row>
              <Col>
                <p className="lg font-weight-bold">
                  This Content is Protected{" "}
                  <FontAwesomeIcon icon="lock" size="x1" />
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Please reach out to me if you would like more details about
                  the work done!
                </p>
              </Col>
            </Row>
          </Container>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <motion.div
          key="landing"
          initial={{ opacity: 0, translateY: 0 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 50 }}
          transition={{ duration: 0.333 }}
        >
          <Row>
            <Container style={{ zIndex: -1000 }}>
              <motion.div style={{ y: y1 }}>
                <Row>
                  <Col md={8} className="">
                    <motion.div className="pr-5">
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
                        className=""
                        variants={UpRevealParent}
                        initial="hidden"
                        animate="show"
                      >
                        <h1 className="font-weight-bold pb-2 header-fix">
                          Hello There! <Emoji symbol="👋" />
                        </h1>
                        <motion.div key="text1" variants={UpReveal}>
                          <p>
                            My name is Justin Zhang, a
                            videographer/designer-turned Computer Science and
                            Business student currently attending the{" "}
                            <span
                              style={{ color: "#034638" }}
                              className="font-weight-medium"
                              itemprop="affiliation"
                            >
                              Ivey School of Business
                            </span>{" "}
                            at{" "}
                            <span
                              style={{ color: "#4F2683" }}
                              className="font-weight-medium"
                              itemprop="affiliation"
                            >
                              Western University.
                            </span>
                          </p>
                        </motion.div>
                        <motion.div
                          key="text2"
                          variants={UpReveal}
                          className="medium-fix"
                        >
                          <p>
                            Currently exploring the intersection of{" "}
                            <strong>Business</strong>,
                            <strong>Technology</strong>, and{" "}
                            <strong>Design,</strong> I am a curious and
                            passionate student dreaming of breaking into Product
                            Management!
                          </p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </Col>
                  <Col md={4}>
                    <Image
                      src="https://justinzhang.imfast.io/landing/headshotcutout.png"
                      fluid
                      rounded
                      className="mt-5 headshot"
                      alt="Justin Zhang headshot"
                    />
                    <motion.div
                      className="circle-bottom"
                      initial={{ translateY: 50, opacity: 0 }}
                      animate={{ translateY: 0, opacity: 1 }}
                      transition={{
                        delay: 0.8,
                        ease: "easeOut",
                        duration: 0.666,
                      }}
                      style={{ y: y2 }}
                    />
                  </Col>
                </Row>
              </motion.div>
            </Container>
          </Row>

          <Row className="featured-section landing-header">
            <Container className="mt-5 mb-4">
              <Row className="mb-4">
                <Col>
                  <h2 className="font-weight-bold">Featured</h2>
                </Col>
              </Row>
              <Row>
                <Col
                  sm={12}
                  md={6}
                  lg={3}
                  as={Link}
                  to="/w/hackwestern"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    role="Product Designer"
                    name="Hack Western"
                    locked={false}
                    unfinished={false}
                    image="https://justinzhang.imfast.io/landing/hwlogo.png"
                    description="Bridging the gap between virtual and physical hackathon design for over 500 students across Canada"
                    color="30, 9, 59"
                  />
                </Col>
                <Col
                  sm={12}
                  md={6}
                  lg={3}
                  as={Link}
                  to="/w/adobejam"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    role="Airbnb Memories"
                    name="Airbnb & Adobe"
                    locked={false}
                    unfinished={false}
                    image="https://justinzhang.imfast.io/landing/airbnb.png"
                    description="Spending 48 hours to solve how users can stay connected during the pandemic"
                    color="180, 20, 25"
                  />
                </Col>
                <Col
                  sm={12}
                  md={6}
                  lg={3}
                  as={Link}
                  to="/w/kpmg"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    role="Regional Champions"
                    name="KPMG Ideation Challenge"
                    locked={false}
                    unfinished={false}
                    image="https://justinzhang.imfast.io/landing/kpmglogo.png"
                    description="Representing Ontario on the national stage to answer the question: How might we give back time?"
                    color="1, 49, 138"
                  />
                </Col>
                <Col
                  sm={12}
                  md={6}
                  lg={3}
                  as={Link}
                  to="/w/casefoundry"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    role="Co-Founder, Head of Product"
                    name="Case Foundry"
                    locked={false}
                    unfinished={false}
                    image="https://justinzhang.imfast.io/landing/logo.png"
                    description="Building the next generation of Case Competitions"
                    color="179, 123, 45"
                  />
                </Col>
              </Row>
            </Container>
          </Row>
          <Row>
            <Container>
              <Row className="mt-5 mb-4">
                <Col>
                  <h2 className="font-weight-bold">More Work</h2>
                </Col>
              </Row>
              <Row>
                <Col
                  lg={8}
                  md={6}
                  onClick={handleShow}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    role="Developer Intern & Publications Designer"
                    name="Munich Re Canada"
                    locked={true}
                    unfinished={false}
                    image="https://justinzhang.imfast.io/landing/mrlogo.png"
                    description="Developer internship turned part-time designer"
                    color="22, 87, 136"
                  />
                </Col>
                <Col
                  lg={4}
                  md={6}
                  onClick={handleShow}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <Card
                    role="Technical Systems Analyst"
                    name="Royal Bank of Canada"
                    locked={true}
                    unfinished={false}
                    image="https://justinzhang.imfast.io/landing/rbclogo.jpg"
                    description="Modernizing critical infrastructure for Canada's largest bank"
                    color="0, 93, 170"
                  />
                </Col>
                <Col lg={6} md={6}>
                  <Card
                    role="VP of Design"
                    name="Western Founders Network"
                    locked={false}
                    unfinished={true}
                    image="https://justinzhang.imfast.io/landing/wfn.png"
                    description="Building the visual and motion brand of the largest Business & Technology club on campus over two years of time."
                    color="0, 0, 0"
                  />
                </Col>
                <Col lg={6} md={6}>
                  {" "}
                  <Card
                    role="Marketing Assistant"
                    name="Western University"
                    locked={false}
                    unfinished={true}
                    image="https://justinzhang.imfast.io/landing/western.jpg"
                    description="How might I build a video brand to reach university students?"
                    color="79, 38, 131"
                  />
                </Col>
              </Row>
            </Container>
          </Row>
          <Footer />
        </motion.div>
      </Container>
    </div>
  )
}

export default IndexPage
