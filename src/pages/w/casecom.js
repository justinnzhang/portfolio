import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

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
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"

import { AiOutlineTool, AiOutlineTeam, AiOutlineUser } from "react-icons/ai"
import { IconContext } from "react-icons"

const CaseCom = () => {
  return (
    <>
      <SEO
        title="Justin Zhang - CaseCom"
        description="Co-Founded the next generation of Case Competitions. By
                    students, for students."
        type="article"
        keywords={["Case Competiitons", "CaseCom", "co-founder"]}
        url="/w/casecom"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <motion.div
          key="casecom"
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
                  <h1 className="font-weight-bold">CaseCom</h1>
                  <h2 className="lg">
                    The Digital Complement To Any Case Competition
                  </h2>
                  <p>April 2020 - Present</p>
                </Col>
                <Col sm={6} className="right-first center-on-sm">
                  <Image
                    src="https://d1uuy4ke5hle5f.cloudfront.net/assets/logo.png"
                    style={{ width: "100px" }}
                  />
                </Col>
              </Row>

              <Row style={{ overflow: "hidden" }} className="mb-5">
                <Col>
                  <Image
                    fluid
                    src="https://d1uuy4ke5hle5f.cloudfront.net/assets/landing/headerimage.png"
                  />
                </Col>
              </Row>
            </Container>
          </Row>

          <Row className="featured-section pt-5 pb-5 text-center">
            <Container>
              <Row>
                <Col className="text-left" sm={4}>
                  <IconContext.Provider value={{ className: "lg" }}>
                    <div>
                      <AiOutlineUser />
                    </div>
                  </IconContext.Provider>
                  <p
                    style={{ lineHeight: "10px" }}
                    className="font-weight-bold pt-2"
                  >
                    My Roles
                  </p>
                  <p>Co-Founder, Head of Product</p>
                </Col>
                <Col className="text-left" sm={4}>
                  <IconContext.Provider value={{ className: "lg" }}>
                    <div>
                      <AiOutlineTeam />
                    </div>
                  </IconContext.Provider>
                  <p
                    style={{ lineHeight: "10px" }}
                    className="font-weight-bold pt-2"
                  >
                    Team Members
                  </p>
                  <p>
                    Amanda Adam, Jackie Chen, Eric Kogut, Amy Zhang, Frank
                    Huang, Jessica Le
                  </p>
                </Col>
                <Col className="text-left" sm={4}>
                  <IconContext.Provider value={{ className: "lg" }}>
                    <div>
                      <AiOutlineTool />
                    </div>
                  </IconContext.Provider>
                  <p
                    style={{ lineHeight: "10px" }}
                    className="font-weight-bold pt-2"
                  >
                    Tools
                  </p>
                  <p>MERN, AWS (S3, EC2, Lightsail, Cloudfront), Cloudfront</p>
                </Col>
              </Row>
            </Container>
          </Row>

          <Row className="pt-5">
            <Container className="">
              <Row>
                <Col>
                  <h3 className="font-weight-medium mb-5">
                    A brand new platform created to make the experience of
                    attending and organizing Case Competitions easier.
                  </h3>
                  <Button
                    variant="dark"
                    href="https://casecom.app"
                    target="_blank"
                  >
                    Visit the Main Site
                  </Button>{" "}
                  <Button
                    variant="dark"
                    href="https://blog.casecom.app"
                    target="_blank"
                  >
                    Read our Blog
                  </Button>
                </Col>
                <Col>
                  <ResponsiveEmbed
                    aspectRatio="1by1"
                    className="shadow"
                    style={{ borderRadius: "8px" }}
                  >
                    <iframe
                      width="430"
                      height="242"
                      src="https://www.youtube.com/embed/b6Xal8sMlwQ"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      title="Futureview Teaser"
                    ></iframe>
                  </ResponsiveEmbed>
                </Col>
              </Row>
            </Container>
          </Row>

          <Row className="pt-5">
            <Container className="conclusion-section p-3 text-center">
              <Row>
                <Col>
                  <Fade bottom duration={500} delay={333} distance="50px">
                    <h2
                      className="md font-weight-bold"
                      style={{ marginBottom: "0" }}
                    >
                      More Coming Soon
                    </h2>
                  </Fade>
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

export default CaseCom
