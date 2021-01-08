import React from "react"
import PropTypes from "prop-types"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const ArticleHeader = ({
  children,
  title,
  subtitle,
  date,
  action,
  backgroundColor,
}) => {
  return (
    <>
      <Row className="pt-5" style={{ background: backgroundColor }}>
        <Container className="">
          <Row>
            <Col sm={6} className="left-first center-on-sm">
              <h1 className="hero-header" style={{ color: title.color }}>
                {title.text}
              </h1>
              <h2 className="lg" style={{ color: subtitle.color }}>
                {subtitle.text}
              </h2>
              <p>{date}</p>
            </Col>
            <Col sm={6} className="right-first center-on-sm">
              <a href={action.url} target="_blank" rel="noopener noreferrer">
                <Button variant="dark">{action.text}</Button>
              </a>
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  )
}

ArticleHeader.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.object.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  action: PropTypes.object,
  backgroundColor: PropTypes.string.isRequired,
}

ArticleHeader.defaultProps = {
  title: { text: "Placeholder Title", color: "black" },
  subtitle: { text: "Placeholder Subtitle", color: "black" },
  date: { text: "XX/XX/XXXX - XX/XX/XXXX", color: "black" },
  action: { url: "https://google.com", text: "Placeholder CTA" },
  backgroundColor: "grey",
}

export default ArticleHeader
