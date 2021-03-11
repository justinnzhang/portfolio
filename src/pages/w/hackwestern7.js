import React from "react"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"

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
import Badge from "react-bootstrap/Badge"

import FadeUp from "../../components/animation/FadeUp"

import ArticleHeader from "../../components/articles/ArticleHeader"
import ComingSoon from "../../components/articles/ComingSoon"

const HackWestern7 = () => {
  var highlightColor = "#394F94"

  return (
    <>
      <SEO
        title="Justin Zhang - Hack Western 7"
        description="Leading one of Canada’s largest hackathons and the journey to their first virtual event"
        type="article"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <ArticleHeader
          title={[
            {
              text: "Hack Western 7 - Make Anything, Anywhere",
              color: "white",
            },
          ]}
          subtitle={[
            {
              text:
                "Leading the transition to an online event for one of Canada's largest student hackathons",
              color: "rgb(240, 240, 240)",
            },
          ]}
          date={[
            { text: "EXTRA-CURRICULAR - 2020", color: "rgb(250, 250, 250)" },
          ]}
          action={[
            {
              text: "Visit the Website",
              url: "https://hackwestern.com",
              variant: "light",
            },
          ]}
          bg={highlightColor}
        >
          <Image
            fluid
            src="https://doixzan7hf4ti.cloudfront.net/hw7/LinkedIn+Banner-01.png"
            className="p-5"
          />
        </ArticleHeader>

        <Roles
          roles="Product & Design Lead"
          team="Kelly Chong, Donna Xue"
          tools="Premiere
            Pro, After Effects, Illustrator, Photoshop, Figma"
          timeline="March 2020 - November 2020"
          type="Extra-Curricular"
        >
          <p>
            With the pandemic pushing everything online, we had to quickly adapt
            our event and create Hack Western's first ever online event. Through
            creating new engagement measures such as activity tracking through
            Zoom webhooks, to developing a fully functional online platform, we
            saw the <strong>highest level of engagement ever</strong> and had
            the <strong>most project submissions ever</strong> in the 7 year
            history of Hack Western.
          </p>
        </Roles>

        <ComingSoon />

        <Footer />
      </Container>
    </>
  )
}

export default HackWestern7
