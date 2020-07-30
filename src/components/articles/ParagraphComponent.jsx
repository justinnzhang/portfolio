import React from "react"
import PropTypes from "prop-types"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Fade from "react-reveal/Fade"

/* Usage 
Pass the text components as the children of the component
Props.solution: a boolean flag to indeicate whether the text should be highlighted green
Props.title: The text to be used as the title of the paragraph component
*/

const ParagraphComponent = ({ children, title, solution }) => {
  return (
    <>
      <Container>
        <Fade bottom duration={666} distance="50px">
          <Row className="mt-5">
            <Col md={4}>
              <h2
                className="font-weight-bold"
                style={{ color: solution ? "#1f6121" : "black" }}
              >
                {title}
              </h2>
            </Col>
            <Col md={8}>{children}</Col>
          </Row>
        </Fade>
      </Container>
    </>
  )
}

ParagraphComponent.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default ParagraphComponent
