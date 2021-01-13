// Issue - Cards not rendering when intersection hook is hit

import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import { useInView } from "react-intersection-observer"

import { work } from "../articles/ListOfWork"
import { CardRevealParent, CardRevealChild } from "../animation/Variants"

import Card from "./Card"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "../components.css"
import "../../App.css"

const CardsDisplay = ({ type }) => {
  const [ref, inView] = useInView({
    rootMargin: "0px 0px",
    triggerOnce: true,
  })

  if (type === "featured") {
    return (
      <Row
        as={motion.div}
        ref={ref}
        variants={CardRevealParent}
        initial="initial"
        animate={inView ? "enter" : "initial"}
      >
        {work.slice(0, 4).map(element => (
          <Col
            sm={12}
            md={6}
            lg={3}
            as={Link}
            to={element.url}
            style={{ textDecoration: "none" }}
            key={element.url}
          >
            <motion.div variants={CardRevealChild}>
              <Card
                role={element.role}
                name={element.name}
                locked={element.locked}
                unfinished={element.unfinished}
                image={element.image}
                description={element.description}
                color={element.color}
              />
            </motion.div>
          </Col>
        ))}
      </Row>
    )
  } else {
    return (
      <Row
        as={motion.div}
        ref={ref}
        variants={CardRevealParent}
        initial="initial"
        animate={inView ? "enter" : "initial"}
      >
        {work.slice(4).map(element => (
          <Col
            sm={12}
            md={6}
            lg={3 * element.span}
            as={Link}
            to={element.url}
            style={{ textDecoration: "none" }}
            key={element.url}
          >
            <motion.div variants={CardRevealChild}>
              <Card
                role={element.role}
                name={element.name}
                locked={element.locked}
                unfinished={element.unfinished}
                image={element.image}
                description={element.description}
                color={element.color}
              />
            </motion.div>
          </Col>
        ))}
      </Row>
    )
  }
}

CardsDisplay.PropTypes = {
  type: PropTypes.string,
}

CardsDisplay.defaultProps = {
  type: "",
}

export default CardsDisplay
