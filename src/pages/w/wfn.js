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

import ArticleHeader from "../../components/articles/ArticleHeader"
import ComingSoon from "../../components/articles/ComingSoon"

const WesternFoundersNetwork = () => {
  const highlightColor = "black"

  return (
    <>
      <SEO
        title="Justin Zhang - Western Founders Network"
        description="Leading the Design direction of Western University's largest business and technology club"
        type="article"
        url="/w/wfn"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <ArticleHeader
          title={[
            {
              text: "Western Founders Network",
              color: "white",
            },
          ]}
          subtitle={[
            {
              text:
                "Leading the video branding and strategy of Western's largest Business and Technology Club",
              color: "rgb(240, 240, 240)",
            },
          ]}
          date={[
            {
              text: "EXTRA-CURRICULAR - 2018/2019",
              color: "rgb(250, 250, 250)",
            },
          ]}
          action={[
            {
              text: "Visit the Website",
              url: "https://www.foundersnetwork.ca/",
              variant: "light",
            },
          ]}
          bg={highlightColor}
        >
          {" "}
          <Image
            fluid
            src="https://doixzan7hf4ti.cloudfront.net/WFN/wfnteamphoto.jpg"
            rounded
            className="p-5"
          />
        </ArticleHeader>

        <Roles
          roles="Director of Marketing, VP of Design"
          team="WFN Design Team"
          tools="Adobe Creative Suite, Slack, Figma"
          timeline="September 2018 - April 2019"
          type="Extra-curricular"
        >
          <p>
            From joining as an aspiring designer in my first year of university,
            to taking charge and leading the branding in my second year, WFN has
            provided me with countless learning opportunities.
          </p>
        </Roles>

        <ComingSoon />

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
                <Col className="text-center mb-5" md={6} sm={12}>
                  <h3 className="font-weight-medium mb-3">
                    FutureView Conference 2019 Promotion
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

        <Row>
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col className="text-center mb-5" md={6} sm={12}>
                  <h3 className="font-weight-medium mb-3">
                    Startup Showcase 2018 Recap
                  </h3>
                  <ResponsiveEmbed
                    aspectRatio="16by9"
                    className="shadow"
                    style={{ borderRadius: "8px" }}
                  >
                    <iframe
                      width="430"
                      height="242"
                      src="https://www.youtube.com/embed/wAF15A1XV4U"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      title="Futureview Teaser"
                    ></iframe>
                  </ResponsiveEmbed>
                </Col>
                <Col className="text-center">
                  <h3 className="font-weight-medium mb-3">
                    Startup Showcase 2018 Promotion
                  </h3>
                  <ResponsiveEmbed
                    aspectRatio="16by9"
                    className="shadow"
                    style={{ borderRadius: "8px" }}
                  >
                    <iframe
                      width="430"
                      height="242"
                      src="https://www.youtube.com/embed/sLZxaZn7fyQ"
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
      </Container>
    </>
  )
}

export default WesternFoundersNetwork
