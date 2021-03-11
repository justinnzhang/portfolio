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

import ArticleHeader from "../../components/articles/ArticleHeader"
import ComingSoon from "../../components/articles/ComingSoon"

const WesternHousing = () => {
  const highlightColor = "#4F2683"

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
        <ArticleHeader
          title={[
            {
              text: "Western University",
              color: "white",
            },
          ]}
          subtitle={[
            {
              text:
                "A collection of my video work as a part-time marketing assistant",
              color: "rgb(240, 240, 240)",
            },
          ]}
          date={[
            {
              text: "PART-TIME WORK - 2018/2019",
              color: "rgb(250, 250, 250)",
            },
          ]}
          action={[
            {
              text: "Website",
              url: "https://housing.uwo.ca/",
              variant: "light",
            },
          ]}
          bg={highlightColor}
        >
          <Image
            fluid
            src="https://doixzan7hf4ti.cloudfront.net/logos/western.jpg"
            rounded
            className="p-5"
          />
        </ArticleHeader>

        <Roles
          roles="Videographer, Photographer, Editor"
          team="Western University Housing and Ancillary Services"
          tools="Premiere Pro, After Effects, Photoshop, Lightroom"
          timeline="December 2018 - September 2019"
          type="Part-Time Work"
        >
          Working with my University's marketing team was an incredible
          opportunity to get exposed to the world of professional content
          creation early on. During my time there, I was able to spearhead and
          launch recruitment campaigns seen around the world and{" "}
          <strong>outperform previous projects</strong> in engagement!
        </Roles>

        <ComingSoon />

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
      </Container>
    </>
  )
}

export default WesternHousing
