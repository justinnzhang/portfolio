import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FadeUp from "../animation/FadeUp"

import { IoMdInformationCircleOutline } from "react-icons/io"

const ComingSoon = () => {
  return (
    <FadeUp>
      <Container className="mt-5">
        <Row>
          <Col>
            <div
              style={{
                background: "#f2f2f2",
                padding: "2em",
                borderRadius: "8px",
              }}
            >
              <h3 className="text-close font-weight-bold md">
                <IoMdInformationCircleOutline /> Full Page Coming Soon
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </FadeUp>
  )
}

export default ComingSoon
