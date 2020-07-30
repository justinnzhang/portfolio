import React from "react"
import { motion } from "framer-motion"
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

const WesternFoundersNetwork = () => {
  return (
    <>
      <SEO
        title="Justin Zhang - Western Founders Network"
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
          <Row className="pt-5" style={{ background: "black", color: "white" }}>
            <Container className="">
              <Row className="mb-3">
                <Col sm={6} className="left-first center-on-sm">
                  <h1 className="font-weight-bold">Western Founders Network</h1>
                  <h2 className="lg">
                    {" "}
                    Leading the video branding and strategy of Western's largest
                    Business and Technology Club
                  </h2>
                  <p>Sept 2018 – April 2020</p>
                </Col>
                <Col sm={6} className="right-first center-on-sm">
                  <a
                    href="https://www.foundersnetwork.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="light">Website</Button>
                  </a>
                </Col>
              </Row>

              <Row style={{ overflow: "hidden" }} className="mb-5">
                <Col>
                  <Image
                    fluid
                    src="https://justinzhang.imfast.io/wfn/wfnteamphoto.jpg"
                    rounded
                  />
                </Col>
              </Row>
            </Container>
          </Row>

          <Roles
            roles="Director of Marketing, VP of Design"
            team="Gloria Wu, Jessica Le, (many more)"
            tools="Adobe Creative Suite, Slack, GSuite"
          />

          <Row className="pt-5">
            <Container className="conclusion-section p-3 text-center">
              <Row>
                <Col>
                  <Fade bottom duration={500} delay={333} distance="50px">
                    <h2
                      className="md font-weight-bold"
                      style={{ marginBottom: "0" }}
                    >
                      More Coming Soon!
                    </h2>
                  </Fade>
                </Col>
              </Row>
            </Container>
          </Row>

          <Row>
            <Container>
              <Fade bottom duration={666} distance="50px">
                <Row className="mt-5">
                  <Col>
                    <h2 className="font-weight-bold mb-3">
                      A Collection of Video Projects
                    </h2>
                    <p>View some of videos that I've been able to create.</p>
                  </Col>
                </Row>
              </Fade>
            </Container>
          </Row>

          <Row>
            <Container>
              <Fade bottom duration={666} distance="50px">
                <Row className="mt-5">
                  <Col className="text-center">
                    <h3 className="font-weight-bold mb-3">
                      Welcome to Western Founders Network
                    </h3>
                    <ResponsiveEmbed
                      aspectRatio="16by9"
                      className="shadow"
                      style={{ borderRadius: "8px" }}
                    >
                      <iframe
                        width="430"
                        height="242"
                        src="https://www.youtube.com/embed/8EynUySLCx0"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        title="WFN intro video"
                      ></iframe>
                    </ResponsiveEmbed>
                  </Col>
                </Row>
              </Fade>
            </Container>
          </Row>

          <Row>
            <Container>
              <Fade bottom duration={666} distance="50px">
                <Row className="mt-5">
                  <Col className="text-center" md={6} sm={12}>
                    <h3 className="font-weight-medium mb-3">
                      Welcome to Western Founders Network
                    </h3>
                    <ResponsiveEmbed
                      aspectRatio="16by9"
                      className="shadow"
                      style={{ borderRadius: "8px" }}
                    >
                      <iframe
                        width="430"
                        height="242"
                        src="https://www.youtube.com/embed/aNTMxjTrtXs"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        title="Futureview Teaser"
                      ></iframe>
                    </ResponsiveEmbed>
                  </Col>
                  <Col className="text-center">
                    <h3 className="font-weight-medium mb-3">
                      Product Design Sprint 2018 Promo
                    </h3>
                    <ResponsiveEmbed
                      aspectRatio="16by9"
                      className="shadow"
                      style={{ borderRadius: "8px" }}
                    >
                      <iframe
                        width="430"
                        height="242"
                        src="https://www.youtube.com/embed/my5B9GpCWGk"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        title="Product Design Sprint Advertisement"
                      ></iframe>
                    </ResponsiveEmbed>
                  </Col>
                </Row>
              </Fade>
            </Container>
          </Row>

          <Footer />
        </motion.div>
      </Container>
    </>
  )
}

export default WesternFoundersNetwork
