import React, { useState } from "react"
import { motion } from "framer-motion"

import "../App.css"
import "./pages.css"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SEO from "../components/seo"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Emoji from "../components/Emoji"
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"
import ListGroup from "react-bootstrap/ListGroup"
import Tab from "react-bootstrap/Tab"

const Fun = () => {
  const [gallery1, setGallery1] = useState(1)
  const [gallery2, setGallery2] = useState(1)

  function handleChange(type, count) {
    if (type === 1) {
      setGallery1(count)
    } else {
      setGallery2(count)
    }
  }

  return (
    <>
      <SEO
        title="Justin Zhang - Fun"
        description="My personal video and animation projects. Check them out here!"
        type="website"
      />
      <Navbar />
      <Container fluid>
        <motion.div
          key="about"
          initial={{ opacity: 0, translateY: 0 }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          exit={{ opacity: 0, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className
        >
          <Row className="pt-5 pb-5 featured-section">
            <Container>
              <Row>
                <Col>
                  <h1 className="font-weight-bold">
                    Fun <Emoji symbol="🤠" />
                  </h1>
                  <p>
                    Here, you'll be able to find all the projects that I've been
                    able to work on during my own time (Mostly video!)
                  </p>
                </Col>
              </Row>
            </Container>
          </Row>
          <Row className="mt-5">
            <Container className="film-section ">
              <Row>
                <Col>
                  <h2 className="font-weight-bold">Featured Short Films</h2>
                  <p style={{ color: "#383838" }} className="mb-4">
                    The first video I made created using an iPod pointed towards
                    a TV screen while my friends and I played video games
                    together. More than 10 years later, I've had the opportunity
                    to experience and meet so many people through my love for
                    video!
                  </p>
                  <Tab.Container
                    id="list-group-tabs-example"
                    className="feature-box"
                  >
                    <Row>
                      <Col
                        md={(8, { order: "12" })}
                        className="content-section mb-3"
                      >
                        <Tab.Content>
                          {gallery1 === 1 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <p>
                                Documenting our team's experience in Toronto for
                                the National Round while representing Ontario.
                              </p>
                              <ResponsiveEmbed
                                aspectRatio="16by9"
                                style={{ borderRadius: "8px" }}
                              >
                                <iframe
                                  width="430"
                                  height="242"
                                  src="https://www.youtube.com/embed/FFSEy4hhEwQ"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                  title="KPMG"
                                ></iframe>
                              </ResponsiveEmbed>
                            </motion.div>
                          )}
                          {gallery1 === 2 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <p>
                                Documenting the events that happen during
                                Western University's famous Orientation Week.
                              </p>
                              <ResponsiveEmbed
                                aspectRatio="16by9"
                                style={{ borderRadius: "8px" }}
                              >
                                <iframe
                                  width="277"
                                  height="155"
                                  src="https://www.youtube.com/embed/wr6qB1SwPLc"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                  title="Welcome to Western"
                                ></iframe>
                              </ResponsiveEmbed>
                            </motion.div>
                          )}
                          {gallery1 === 3 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <p>
                                Made during my last summer before moving off the
                                university, my friends and I explore the inner
                                beauty of our hometown.
                              </p>
                              <ResponsiveEmbed
                                aspectRatio="16by9"
                                style={{ borderRadius: "8px" }}
                              >
                                <iframe
                                  width="277"
                                  height="155"
                                  src="https://www.youtube.com/embed/ZwSmvLDPgzY"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                  title="Hometown"
                                ></iframe>
                              </ResponsiveEmbed>
                            </motion.div>
                          )}
                          {gallery1 === 4 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <p>
                                The final send off for a residence floor that
                                was able to bond over the course of the school
                                year.
                              </p>
                              <ResponsiveEmbed
                                aspectRatio="16by9"
                                style={{ borderRadius: "8px" }}
                              >
                                <iframe
                                  width="277"
                                  height="155"
                                  src="https://www.youtube.com/embed/srixvC5ZpyA"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                  title="4efe"
                                ></iframe>
                              </ResponsiveEmbed>
                            </motion.div>
                          )}
                        </Tab.Content>
                      </Col>
                      <Col md={4}>
                        <ListGroup variant="" className="center-on-md ">
                          <ListGroup.Item
                            onClick={() => handleChange(1, 1)}
                            active={gallery1 === 1 ? true : false}
                          >
                            My KPMG Ideation Challenge Experience 2020
                          </ListGroup.Item>
                          <ListGroup.Item
                            onClick={() => handleChange(1, 2)}
                            active={gallery1 === 2 ? true : false}
                          >
                            Welcome to Western
                          </ListGroup.Item>
                          <ListGroup.Item
                            onClick={() => handleChange(1, 3)}
                            active={gallery1 === 3 ? true : false}
                          >
                            Hometown
                          </ListGroup.Item>
                          <ListGroup.Item
                            onClick={() => handleChange(1, 4)}
                            active={gallery1 === 4 ? true : false}
                          >
                            The 4EFE Story
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col>
                  <h2 className="font-weight-bold">Animation Projects</h2>
                  <p style={{ color: "#383838" }} className="mb-4">
                    As the next step in creating digital content, I've stepped
                    into the world of product rendering and 3D design. Using
                    Blender, Adobe After Effects, and Adobe Premiere Pro, I'm
                    excited to start integrating more 3D elements in my creative
                    projects.
                  </p>
                  <Tab.Container
                    id="list-group-tabs-example"
                    className="feature-box"
                  >
                    <Row>
                      <Col
                        md={(8, { order: "12" })}
                        className="content-section mb-3"
                      >
                        <Tab.Content>
                          {gallery2 === 1 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <ResponsiveEmbed
                                aspectRatio="16by9"
                                style={{ borderRadius: "8px" }}
                              >
                                <iframe
                                  width="890"
                                  height="501"
                                  src="https://www.youtube.com/embed/YcS7fg9aE7Q"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                  title="ipad render"
                                ></iframe>
                              </ResponsiveEmbed>
                            </motion.div>
                          )}
                          {gallery2 === 2 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <ResponsiveEmbed
                                aspectRatio="16by9"
                                style={{ borderRadius: "8px" }}
                              >
                                <iframe
                                  width="430"
                                  height="242"
                                  src="https://www.youtube.com/embed/SbTto8o-o-A"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                  title="looping render"
                                ></iframe>
                              </ResponsiveEmbed>
                            </motion.div>
                          )}
                          {gallery2 === 3 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <ResponsiveEmbed
                                aspectRatio="16by9"
                                style={{ borderRadius: "8px" }}
                              >
                                <iframe
                                  width="430"
                                  height="242"
                                  src="https://www.youtube.com/embed/r3dDrAlJ-zY"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                  title="first render"
                                ></iframe>
                              </ResponsiveEmbed>
                            </motion.div>
                          )}
                        </Tab.Content>
                      </Col>
                      <Col md={4}>
                        <ListGroup variant="" className="center-on-md ">
                          <ListGroup.Item
                            onClick={() => handleChange(2, 1)}
                            active={gallery2 === 1 ? true : false}
                          >
                            iPad Product Render
                          </ListGroup.Item>
                          <ListGroup.Item
                            onClick={() => handleChange(2, 2)}
                            active={gallery2 === 2 ? true : false}
                          >
                            Looping Background Render
                          </ListGroup.Item>
                          <ListGroup.Item
                            onClick={() => handleChange(2, 3)}
                            active={gallery2 === 3 ? true : false}
                          >
                            First Render
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Col>
              </Row>
            </Container>
          </Row>
          <Footer />
        </motion.div>
      </Container>
    </>
  )
}

export default Fun
