import React from "react"
import { motion } from "framer-motion"

import "../App.css"
import "./pages.css"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Emoji from "../components/Emoji"
import SEO from "../components/seo"

import { IconContext } from "react-icons"
import { AiOutlineCode, AiOutlineTool, AiOutlineCamera } from "react-icons/ai"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

const list = {
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      ease: "easeOut",
    },
  },
  hidden: { opacity: 0, translateY: 20, transition: { delay: 1 } },
}

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -50 },
}

const About = () => {
  return (
    <>
      <SEO
        title="Justin Zhang - About"
        description="A look at what makes me unique, and where I came from. Let's get connected!"
        type="website"
      />
      <Navbar />
      <Container fluid>
        <motion.div
          key="about"
          initial={{ opacity: 0, translateY: 0 }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          exit={{ opacity: 0, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className
        >
          <Row className="mb-5 featured-section">
            <Container>
              <Row className="pt-5 pb-5">
                <Col>
                  <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                      delay: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <h1 className="font-weight-bold">At A Glance</h1>
                    <p>
                      I am currently the Co-Founder and Head of Product at{" "}
                      <a
                        style={{
                          color: "#005DAA",
                          textDecoration: "underline",
                        }}
                        className="font-weight-medium"
                        href="https://casecom.app"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        CaseCom
                      </a>
                      , and the Product Team Lead at{" "}
                      <a
                        style={{
                          color: "#005DAA",
                          textDecoration: "underline",
                        }}
                        className="font-weight-medium"
                        href="https://hackwestern.com/#/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Hack Western
                      </a>
                      .
                    </p>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </Row>
          <Row>
            <Container>
              <Row>
                <Col>
                  <h2 className="font-weight-bold">About Me</h2>
                </Col>
              </Row>
              <Row>
                <Col sm={4} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                      delay: 0.2,
                      ease: "easeOut",
                    }}
                  >
                    <Image
                      src="https://doixzan7hf4ti.cloudfront.net/other/headshot.jpg"
                      fluid
                      rounded
                      alt="Justin Zhang headshot"
                    />
                    <motion.div
                      className="about-circle-bottom"
                      initial={{ translateY: 50, opacity: 0 }}
                      animate={{ translateY: 0, opacity: 1 }}
                      transition={{
                        delay: 0.5,
                        ease: "easeOut",
                        duration: 0.666,
                      }}
                    ></motion.div>
                  </motion.div>
                </Col>
                <Col sm={8} className="mb-5">
                  <Row>
                    <Col>
                      {" "}
                      <div
                        itemscope
                        itemtype="http://data-vocabulary.org/Person"
                      >
                        <span className="lg">
                          <Emoji symbol="🎓" />
                        </span>
                        <p>
                          My name is <span itemprop="name">Justin Zhang</span>{" "}
                          and I'm currently pursuing a dual degree in Honors
                          Business Administration and Computer Science from{" "}
                          <span
                            style={{ color: "#034638" }}
                            className="font-weight-medium"
                            itemprop="affiliation"
                          >
                            the Ivey School of Business
                          </span>{" "}
                          and{" "}
                          <span
                            style={{ color: "#4F2683" }}
                            className="font-weight-medium"
                            itemprop="affiliation"
                          >
                            Western University.
                          </span>
                        </p>
                        <span className="lg">
                          <Emoji symbol="📍" />
                        </span>
                        <p>
                          I grew up in Ottawa, currently studying in London,
                          Ontario, and working (remotely) in Toronto.
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <span className="lg">
                    <Emoji symbol="🔍" />
                  </span>
                  <p>
                    When approaching a product problem, I try to see it from 3
                    different angles: how to design it to be user-friendly and
                    pleasing to use; how to build the product with the
                    technologies available; and what kind of value this product
                    would bring to the organization.
                  </p>

                  <span className="lg">
                    <Emoji symbol="💭" />
                  </span>
                  <p>
                    With my practical knowledge across Business, Design, and
                    Technology, I hope to one day{" "}
                    <span className="font-weight-bold">
                      break into Product Management!
                    </span>{" "}
                    Feel free to reach out and get connected, I love to meet new
                    people!
                  </p>
                  <a
                    href="https://www.linkedin.com/in/justinzhang000/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="none"
                      style={{ color: "#2867b2", paddingLeft: "0px" }}
                    >
                      <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                    </Button>{" "}
                  </a>
                  <a
                    href="https://github.com/madebyjustinzhang"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    rel="noopener noreferrer"
                  >
                    <Button variant="none">
                      <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                    </Button>{" "}
                  </a>
                  <a
                    href="https://www.youtube.com/justinzhang"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="none"
                      className="youtube"
                      style={{ color: "#c4302b" }}
                    >
                      <FontAwesomeIcon icon={["fab", "youtube"]} size="2x" />
                    </Button>{" "}
                  </a>
                  <a href="mailto:justinzhangzll@gmail.com">
                    <Button variant="none" className="email">
                      <FontAwesomeIcon icon="envelope" size="2x" />
                    </Button>
                  </a>
                </Col>
              </Row>
              <Row className="mt-5 mb-3">
                <Col>
                  <h2 className="font-weight-bold">My Tool Box</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="skill-card">
                    <IconContext.Provider value={{ className: "xl" }}>
                      <div>
                        <AiOutlineCode />
                      </div>
                    </IconContext.Provider>
                    <h3 className="lg">Development Languages</h3>
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      variants={list}
                      className="skill-list"
                    >
                      <motion.li variants={item}>
                        <span className="font-weight-bold">MERN Stack</span> |
                        MongoDB, Express, React, Node
                      </motion.li>
                      <motion.li variants={item}>Javascript</motion.li>
                      <motion.li variants={item}>Java</motion.li>
                      <motion.li variants={item}>Python</motion.li>
                    </motion.ul>
                  </div>
                </Col>
                <Col md={4} sm={12}>
                  <div className="skill-card">
                    <IconContext.Provider value={{ className: "xl" }}>
                      <div>
                        <AiOutlineTool />
                      </div>
                    </IconContext.Provider>

                    <h3 className="lg">Tools & Frameworks</h3>
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      variants={list}
                      className="skill-list"
                    >
                      <motion.li variants={item}>Agile Thinking</motion.li>
                      <motion.li variants={item}>Scrum</motion.li>
                      <motion.li variants={item}>Github</motion.li>
                      <motion.li variants={item}>ZenHub</motion.li>
                      <motion.li variants={item}>
                        <span className="font-weight-bold">
                          Adobe Creative Suite
                        </span>{" "}
                        | Premiere, After Effects, Illustrator, Photoshop,
                        InDesign
                      </motion.li>
                      <motion.li variants={item}>
                        <span className="font-weight-bold">
                          Office365 Suite
                        </span>{" "}
                        | SharePoint, Power Automate, PowerApps
                      </motion.li>
                    </motion.ul>
                  </div>
                </Col>
                <Col md={4} sm={12}>
                  <div className="skill-card">
                    <IconContext.Provider value={{ className: "xl" }}>
                      <div>
                        <AiOutlineCamera />
                      </div>
                    </IconContext.Provider>
                    <h3 className="lg">Camera Equipment</h3>
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      variants={list}
                      className="skill-list"
                    >
                      <motion.li variants={item}>Sony A7iii</motion.li>
                      <motion.li variants={item}>Tamron 28-75 f2.8</motion.li>
                      <motion.li variants={item}>Zhiyun Crane 2</motion.li>
                      <motion.li variants={item}>
                        Zoom H1n Condensor Microphone
                      </motion.li>
                    </motion.ul>
                  </div>
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

export default About
