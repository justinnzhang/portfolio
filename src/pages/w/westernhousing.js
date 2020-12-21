import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import "../../App.css"
import "../pages.css"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SEO from "../../components/seo"
import ParagraphComponent from "../../components/articles/ParagraphComponent"
import Roles from "../../components/Roles"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"

const WesternHousing = () => {
  return (
    <>
      <SEO
        title="Justin Zhang - Western Housing"
        description="My work as the youngest hire by the University's Marketing Team."
        type="article"
        url="/w/westernhousing"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <motion.div
          key="housing"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          exit={{ opacity: 0, translateY: 50 }}
          transition={{ duration: 0.333 }}
          className
        >
          <Row
            className="pt-5"
            style={{ background: "#4F2683", color: "white" }}
          >
            <Container className="">
              <Row className="mb-3">
                <Col sm={6} className="left-first center-on-sm">
                  <h1 className="font-weight-bold">Western University</h1>
                  <h2 className="lg">
                    {" "}
                    A collection of my video work as a part-time marketing
                    assistant
                  </h2>
                  <p>Dec 2018 - Sept 2019</p>
                </Col>
                <Col sm={6} className="right-first center-on-sm"></Col>
              </Row>

              <Row style={{ overflow: "hidden" }} className="pb-5">
                <Col>
                  <Image
                    fluid
                    src="https://doixzan7hf4ti.cloudfront.net/logos/western.jpg"
                    rounded
                  />
                </Col>
              </Row>
            </Container>
          </Row>

          <Row>
            <Col>
              <Roles
                roles="Videographer, Photographer, Editor"
                team="Western University Housing and Ancillary Services"
                tools="Premiere Pro, After Effects, Photoshop, Lightroom"
              />
            </Col>
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

          <Row className="pt-5">
            <Col>
              <Container className="">
                <Row>
                  <Col>
                    <Fade bottom duration={500} delay={333} distance="50px">
                      <h2 className="font-weight-bold">Featured Videos</h2>
                    </Fade>
                  </Col>
                </Row>
              </Container>

              <Container>
                <Fade bottom duration={666} distance="50px">
                  <Row className="mt-5">
                    <Col className="text-center mb-5" md={6} sm={12}>
                      <h3 className="font-weight-medium mb-3">
                        This is Your RezLife 2018-2019
                      </h3>
                      <ResponsiveEmbed
                        aspectRatio="16by9"
                        className="shadow"
                        style={{ borderRadius: "8px" }}
                      >
                        <iframe
                          width="430"
                          height="242"
                          src="https://www.youtube-nocookie.com/embed/XQXDJvgXX9c"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                          title="Futureview Teaser"
                        ></iframe>
                      </ResponsiveEmbed>
                    </Col>
                    <Col className="text-center">
                      <h3 className="font-weight-medium mb-3">
                        CHOPT Student Cooking Competition
                      </h3>
                      <ResponsiveEmbed
                        aspectRatio="16by9"
                        className="shadow"
                        style={{ borderRadius: "8px" }}
                      >
                        <iframe
                          width="430"
                          height="242"
                          src="https://www.youtube-nocookie.com/embed/464TEIKQt_0"
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

              <Container>
                <Fade bottom duration={666} distance="50px">
                  <Row className="mt-5">
                    <Col md={4} className="my-auto">
                      <h3 className="font-weight-bold">
                        Saugeen's 50th Birthday
                      </h3>
                      <p>Please view in full screen</p>
                    </Col>
                    <Col md={8}>
                      <ResponsiveEmbed
                        aspectRatio="1by1"
                        className="shadow"
                        style={{ borderRadius: "8px" }}
                      >
                        <iframe
                          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwesternuhousing%2Fvideos%2F1145206785651442%2F&show_text=false&width=734&height=1299&appId"
                          width="734"
                          height="1299"
                          style={{ border: "none", overflow: "hidden" }}
                          scrolling="no"
                          frameborder="0"
                          allowTransparency="true"
                          allow="encrypted-media"
                          allowFullScreen="true"
                          title="birthday saugeen"
                        ></iframe>
                      </ResponsiveEmbed>
                    </Col>
                  </Row>
                </Fade>
              </Container>
            </Col>
          </Row>
          <Footer />
        </motion.div>
      </Container>
    </>
  )
}

export default WesternHousing
