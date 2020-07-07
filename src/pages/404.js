import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import "../App.css"
import Emoji from "../components/Emoji"
import Navbar from "../components/Navbar"
import SEO from "../components/seo"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Button from "react-bootstrap/Button"

const NotFound = () => {
  return (
    <>
      <SEO title="Justin Zhang - 404" description="Something went wrong :(" type="website"/>
      <Navbar />
      <Container fluid>
        <motion.div
          key="404"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          exit={{ opacity: 0, translateY: 50 }}
          transition={{ duration: 0.333 }}
          className
        >
          <Row>
            <Container className="mt-5 text-center">
              <Row>
                <Col className="p-5">
                  <h1 className="font-weight-medium">
                    You went somewhere that doesn't work <Emoji symbol="😢" />
                  </h1>
                  <Button as={Link} to="/">
                    Back Home
                  </Button>
                </Col>
              </Row>
            </Container>
          </Row>
        </motion.div>
      </Container>
    </>
  )
}

export default NotFound
