import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import "../../App.css"
import "../pages.css"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SEO from "../../components/seo"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"

import Roles from "../../components/Roles"
import ArticleHeader from "../../components/articles/ArticleHeader"

import ComingSoon from "../../components/articles/ComingSoon"

const CaseCom = () => {
  var highlightColor = "#FFF5E8"

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
        <ArticleHeader
          title={[{ text: "CaseCom", color: "black" }]}
          subtitle={[
            {
              text:
                "The first online tool for hosting, participating, and judging in Case Competitions",
              color: "rgb(50, 50, 50)",
            },
          ]}
          date={[
            { text: "ENTREPRENEURSHIP - 2020", color: "rgb(100, 100, 100)" },
          ]}
          action={[
            {
              text: "Blog Site",
              url: "https://blog.casecom.app",
              variant: "dark",
            },
          ]}
          bg={highlightColor}
        >
          <Image
            fluid
            src="https://dmo510vqfifxd.cloudfront.net/assets/landing/headerimage.png"
            className="p-5"
          />
        </ArticleHeader>

        <Roles
          team="The CaseCom Team"
          roles="Co-Founder"
          tools="MongoDB, Express, React, Node, AWS (Lightsail, S3, Cloudfront), Cloudflare"
          type="Entrepreneurship"
          timeline="April 2020 - Present"
        >
          <p>
            After participating and organizing case competitions, I noticed that
            there there weren't any tools available. Even today, many of these
            events still rely on paper rubrics and manually handling logistics.
            Combined with the pandemic moving everything online, there was a
            clear need for some better way organize these important events. Fast
            forward to today, we've been able to work with organizations across
            Canada, and recently secured{" "}
            <strong>a year-long partnership with Shopify!</strong>
          </p>
        </Roles>

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

        <ComingSoon />

        <Footer />
      </Container>
    </>
  )
}

export default CaseCom
