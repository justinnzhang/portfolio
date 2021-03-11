import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import FadeInParent from "../animation/FadeInParent"
import {
  LeftRevealChild,
  FadeRevealChild,
  UpRevealChild,
} from "../animation/Variants"

const ArticleHeader = ({ children, title, subtitle, date, action, bg }) => {
  return (
    <FadeInParent>
      <Row className="pt-5" style={{ background: bg }}>
        <Container className="">
          <Row>
            <Col sm={6} className="left-first">
              <motion.p
                style={{ color: date[0].color }}
                variants={LeftRevealChild}
                className="font-weight-bold sm"
              >
                {date[0].text}
              </motion.p>
              <motion.h1
                className="hero-header xl"
                style={{ color: title[0].color }}
                variants={LeftRevealChild}
              >
                {title[0].text}
              </motion.h1>
              <motion.h2
                style={{ color: subtitle[0].color }}
                variants={LeftRevealChild}
                className="rg font-weight-regular"
              >
                {subtitle[0].text}
              </motion.h2>
            </Col>
            <Col sm={6} className="right-first left-on-sm">
              <motion.a
                href={action[0].url}
                target="_blank"
                rel="noopener noreferrer"
                variants={FadeRevealChild}
              >
                <Button variant={action[0].variant}>{action[0].text}</Button>
              </motion.a>
            </Col>
          </Row>
          <Row>
            <motion.div variants={UpRevealChild}>{children}</motion.div>
          </Row>
        </Container>
      </Row>
    </FadeInParent>
  )
}

ArticleHeader.propTypes = {
  title: PropTypes.array,
  subtitle: PropTypes.array,
  date: PropTypes.array,
  action: PropTypes.array,
  backgroundColor: PropTypes.string,
}

ArticleHeader.defaultProps = {
  title: [{ text: "Placeholder Title", color: "black" }],
  subtitle: [{ text: "Placeholder Subtitle", color: "black" }],
  date: [{ text: "XX/XX/XXXX - XX/XX/XXXX", color: "black" }],
  action: [
    { url: "https://google.com", text: "Placeholder CTA", variant: "dark" },
  ],
  bg: "grey",
}

export default ArticleHeader
