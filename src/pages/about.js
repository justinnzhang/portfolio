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
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"

import SkillCard from "../components/SkillCard"

const HIRE_SITE_URL = "https://hirejustinzhang.com"

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
                    <h1 className="font-weight-bold">At a glance</h1>
                    <p>
                      I am currently the Co-Founder of{" "}
                      <a
                        style={{
                          color: "#005DAA",
                          textDecoration: "underline",
                        }}
                        className="font-weight-medium"
                        href="https://casecom.app"
                        rel="noopener"
                        target="_blank"
                      >
                        CaseCom
                      </a>{" "}
                      (
                      <a
                        style={{
                          color: "#005DAA",
                          textDecoration: "underline",
                        }}
                        className="font-weight-medium"
                        href="https://www.theleagueofinnovators.org/"
                        rel="noopener"
                        target="_blank"
                      >
                        League of Innovators Batch 7
                      </a>
                      ), and the Co-Directer of{" "}
                      <a
                        style={{
                          color: "#005DAA",
                          textDecoration: "underline",
                        }}
                        className="font-weight-medium"
                        href="https://hackwestern.com/#/"
                        rel="noopener"
                        target="_blank"
                      >
                        Hack Western
                      </a>
                      . Previously a Software Developer Intern at{" "}
                      <a
                        style={{
                          color: "#005DAA",
                          textDecoration: "underline",
                        }}
                        className="font-weight-medium"
                        href="https://shopify.com"
                        rel="noopener"
                        target="_blank"
                      >
                        Shopify
                      </a>{" "}
                      and Technical Systems Analyst Intern at{" "}
                      <a
                        style={{
                          color: "#005DAA",
                          textDecoration: "underline",
                        }}
                        className="font-weight-medium"
                        href="https://www.rbcroyalbank.com"
                        rel="noopener"
                        target="_blank"
                      >
                        The Royal Bank of Canada
                      </a>
                      !
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
                      <Alert variant="primary">
                        <Alert.Heading>Update</Alert.Heading>
                        <p>
                          I've recently created an interactive cover letter
                          higlighting who I am beyond the resume. Check it out
                          at{" "}
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
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {" "}
                      <div
                        itemScope
                        itemType="http://data-vocabulary.org/Person"
                      >
                        <span className="lg">
                          <Emoji symbol="🎓" />
                        </span>
                        <p>
                          My name is <span itemProp="name">Justin Zhang</span>{" "}
                          and I'm currently pursuing a dual degree in Honors
                          Business Administration and Computer Science from{" "}
                          <span
                            style={{ color: "#034638" }}
                            className="font-weight-medium"
                            itemProp="affiliation"
                          >
                            the Ivey School of Business
                          </span>{" "}
                          and{" "}
                          <span
                            style={{ color: "#4F2683" }}
                            className="font-weight-medium"
                            itemProp="affiliation"
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
