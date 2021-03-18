import React from "react"
import { motion } from "framer-motion"

import "../App.css"
import "./pages.css"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Emoji from "../components/Emoji"
import SEO from "../components/seo"

import { AiOutlineCode, AiOutlineTool, AiOutlineCamera } from "react-icons/ai"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

import SkillCard from "../components/SkillCard"

const skillList = [
  {
    title: "Technical Languages",
    icon: <AiOutlineCode />,
    skills: [
      "JavaScript (React, Node, Express)",
      "Java",
      "Python",
      "VBA",
      "C++",
    ],
  },
  {
    title: "Tools & Frameworks",
    icon: <AiOutlineTool />,
    skills: [
      <span>
        <span className="font-weight-medium">AWS</span> (S3, Lightsail,
        Cloudfront, Lambda)
      </span>,
      <span>
        <span className="font-weight-medium">Adobe Creative Suite</span> (Video
        and Photo)
      </span>,
      "GitHub",
      "MongoDB",
      "Cloudflare",
      "Figma",
    ],
  },
  {
    title: "Camera Equipment",
    icon: <AiOutlineCamera />,
    skills: [
      "Sony A7iii",
      "Tamron 28-75 f2.8",
      "Zhiyun Crane 2",
      "Zoom H1n Condensor Microphone",
    ],
  },
]

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
                      , and the Co-Directer of{" "}
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
                      . Soon to be a Front-End Developer at{" "}
                      <a
                        style={{
                          color: "#005DAA",
                          textDecoration: "underline",
                        }}
                        className="font-weight-medium"
                        href="https://shopify.com"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Shopify!
                      </a>
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
                      </div>
                    </Col>
                  </Row>

                  <span className="lg">
                    <Emoji symbol="🔍" />
                  </span>
                  <p>
                    I came from a background in creative digital media and
                    marketing, helping organizations define their brands. Over
                    time, I realized that I was also interested in creating the
                    products themselves. One thing led to another, and now I am
                    exploring the intersection of Technology, Business, and
                    Design!
                  </p>

                  <span className="lg">
                    <Emoji symbol="💭" />
                  </span>
                  <p>
                    With my practical experiences ranging across many different
                    fields, I hope to one day{" "}
                    <span className="font-weight-bold">
                      break into Product Management!
                    </span>{" "}
                    Feel free to reach out and get connected, I love to meet new
                    people!
                  </p>
                </Col>
              </Row>

              <Row className="mt-5 mb-3">
                <Col>
                  <h2 className="font-weight-bold">My Tool Box</h2>
                </Col>
              </Row>

              <Row>
                {skillList.map((element, index) => (
                  <Col md={4} sm={12}>
                    <SkillCard
                      title={element.title}
                      icon={element.icon}
                      skills={element.skills}
                    />
                  </Col>
                ))}
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
