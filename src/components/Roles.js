import React from "react"
import { motion } from "framer-motion"

import PropTypes from "prop-types"

import "./components.css"
import "../App.css"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import FadeInParent from "../components/animation/FadeInParent"
import {
  LeftRevealChild,
  UpRevealChild,
} from "../components/animation/Variants"

const Roles = ({ roles, team, tools, type, timeline, children }) => {
  return (
    <Row className="featured-section pt-5 pb-5">
      <Container>
        <FadeInParent>
          <Row>
            <Col md={{ order: 12 }} className="my-auto">
              <Row>
                <Col>
                  <motion.h2
                    className="font-weight-bold"
                    variants={UpRevealChild}
                  >
                    Overview
                  </motion.h2>
                  <motion.div variants={UpRevealChild}>{children}</motion.div>
                </Col>
              </Row>
            </Col>
            <Col md={4} sm={12}>
              <Row>
                <Col className="mb-2" sm={12}>
                  {roles && (
                    <motion.div variants={LeftRevealChild} className="mb-2">
                      <p className="font-weight-bold text-close sm">Roles</p>
                      <p className="text-close">{roles}</p>
                    </motion.div>
                  )}
                </Col>
                <Col className="mb-2" sm={12}>
                  {team && (
                    <motion.div variants={LeftRevealChild} className="mb-2">
                      <p className="font-weight-bold text-close sm">Team</p>
                      <p className="text-close">{team}</p>
                    </motion.div>
                  )}
                </Col>
                <Col className="mb-2" sm={12}>
                  {tools && (
                    <motion.div variants={LeftRevealChild} className="mb-2">
                      <p className="font-weight-bold text-close sm">Tools</p>
                      <p className="text-close">{tools}</p>
                    </motion.div>
                  )}
                </Col>
                <Col className="mb-2" sm={12}>
                  {type && (
                    <motion.div variants={LeftRevealChild} className="mb-2">
                      <p className="font-weight-bold text-close sm">Type</p>
                      <p className="text-close">{type}</p>
                    </motion.div>
                  )}
                </Col>
                <Col className="mb-2" sm={12}>
                  {timeline && (
                    <motion.div variants={LeftRevealChild} className="mb-2">
                      <p className="font-weight-bold text-close sm">Timeline</p>
                      <p className="text-close">{timeline}</p>
                    </motion.div>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </FadeInParent>
      </Container>
    </Row>
  )
}

Roles.propTypes = {
  roles: PropTypes.string,
  team: PropTypes.string,
  tools: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  timeline: PropTypes.string,
}

export default Roles
