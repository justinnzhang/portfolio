import React from "react"
import { motion } from "framer-motion"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"

import "../../App.css"
import "../pages.css"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import StickyNote from "../../components/StickyNote"
import SEO from "../../components/seo"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"

import Roles from "../../components/Roles"
import ArticleHeader from "../../components/articles/ArticleHeader"

const KPMG = () => {
  var highlightColor = "#00338D"

  return (
    <>
      <SEO
        title="Justin Zhang - KPMG"
        description="Representing Ontario on the national stage to answer the
                    question: How might we give back time?"
        type="article"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <ArticleHeader
          title={[
            { text: "SmartCal - KPMG Ideation Challenge", color: "white" },
          ]}
          subtitle={[
            {
              text:
                "Representing Ontario on the national stage to answer the question: How might we give back time?",
              color: "rgb(250, 250, 250)",
            },
          ]}
          date={[{ text: "CHALLENGE - 2020", color: "rgb(250, 250, 250)" }]}
          action={[
            {
              text: "Video Demo",
              url: "https://youtu.be/LTBv5ETf3HI",
              variant: "light",
            },
          ]}
          bg={highlightColor}
        >
          <Image
            fluid
            src="https://doixzan7hf4ti.cloudfront.net/kpmg/kiclanding.png"
            className="p-3"
          />
        </ArticleHeader>

        <Roles
          roles="Product Manager, Technical Lead"
          team="Angel Huang, Moksha Antani, Omar Kabir, Sarah Huynh,
            Palvisha Sharma"
          tools="After Effects, Photoshop, PowerPoint"
          timeline="January 2020 - February 2020"
          type="Challenge"
        >
          <p>
            This month-long ideation challenge was split into two different
            parts. I was invited to attend the Regional round in January where
            our team was able to move onto Nationals. Our solution consisted of
            a personalized productivity system to incorporate time-blocking as
            well as project management tools leveraging machine learning.
          </p>
        </Roles>

        <Row
          className="mt-5 p-5"
          style={{
            backgroundColor: highlightColor,
            color: "white",
          }}
        >
          <Col>
            <Container>
              <Row className="text-center">
                <Col>
                  <Fade bottom duration={666} distance="50px">
                    <div className="">
                      <h2 className="font-weight-bold">
                        Part 1 - Regional Round
                      </h2>
                      <p className="font-weight-bold">48 Hours</p>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

        <Row>
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold">Problem Statement</h2>
                </Col>
                <Col md={8}>
                  <p className="font-weight-medium lg">
                    How might you create a solution using advanced analytical
                    technologies that enables your client to achieve more in
                    less time?
                  </p>
                  <p>
                    With only 12 hours to create a product, develop a pitch, and
                    deliver it in front of a panel of judges, we knew that we
                    had to focus our collective efforts on the project at hand.
                  </p>
                  <p>
                    Our final idea settled on driving workplace efficiencies
                    using the organizational concept of time blocking,
                    leveraging analytics and machine learning to make the
                    process simpler and more intuitive.
                  </p>
                  <p>
                    We distilled down the original problem statement to
                    something that was more applicable for our solution:{" "}
                    <strong>
                      How might we decrease time mismanagement that is caused by
                      thinking about and organizing what you have to do, and
                      instead get you focused on actually doing those things?
                    </strong>
                  </p>
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold">Target Market</h2>
                </Col>
                <Col md={8}>
                  <Image
                    src="https://doixzan7hf4ti.cloudfront.net/logos/kpmglogo.png"
                    alt="KPMG Logo"
                    fluid
                    style={{ width: "20%" }}
                  />
                  <p>
                    <strong>Professional Service Firms</strong> was the market
                    that we chose. This was due to the fact that we had many
                    employees available to us to refine the product, while also
                    seeing how they all used a very standardized set of tools
                    which could reduce any installation overhead.
                  </p>
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold">Research Assumptions</h2>
                </Col>
                <Col md={8}>
                  <p>
                    Due to our time constraint, our research time was limited.
                    We focused primarily on speaking to those around us, and
                    getting their point of view.
                  </p>
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <StickyNote
                    text="With the always-on state of connected devices, employees are getting overwhelmed and don't know when to work on tasks"
                    source={null}
                  />
                </Col>
                <Col md={4}>
                  <StickyNote
                    text="Needing to actively manage tasks and coordinate across busy schedules decreases over all productivity of employees"
                    source={null}
                  />
                </Col>
                <Col md={4}>
                  <StickyNote
                    text="A study showed that individuals that were given a predetermined schedule performed better than those who multi-tasked or created their own schedules"
                    source="https://link.springer.com/article/10.1007/s10683-012-9318-8"
                  />
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold">User Persona</h2>
                </Col>
                <Col md={8}>
                  <p>
                    Due to our limited time, we decided to focus on one single
                    user persona based on conversations that we had with
                    multiple employees.
                  </p>
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5 persona shadow-sm">
                <Col md={4} className="p-5">
                  <Image
                    src="https://doixzan7hf4ti.cloudfront.net/kpmg/jennypic.jpeg"
                    roundedCircle
                    fluid
                  />
                </Col>
                <Col md={8} className="my-auto">
                  <p className="font-weight-medium lg">Jenny</p>
                  <p>
                    Jenny is a 24 year old working within KPMG’s Management
                    Consulting Practice. She organizes her daily schedule using
                    MS Outlook, Trello, sticky notes, and sometimes a simple
                    mental note to self. Jenny often feels disorganized and
                    finds it burdensome to manually input her tasks and meetings
                    into her calendar to stay on top of things. Not only does
                    this take up valuable time that she could be using on other
                    projects, it is distracting and pulls focus throughout her
                    day. Scheduling meetings through coordinating other
                    coworkers’ calendars is an even bigger pain point.
                  </p>
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5 text-center">
                <Col
                  className="picture-highlight p-5"
                  style={{ backgroundColor: highlightColor }}
                >
                  <p style={{ color: "white" }}>
                    A team picture before pitching!
                  </p>
                  <Image
                    src="https://doixzan7hf4ti.cloudfront.net/kpmg/regionalteampic.jpg"
                    fluid
                    alt="People smiling in a group pose"
                    className="shadow"
                  />
                </Col>
              </Row>
            </Fade>
          </Container>
        </Row>

        <Row className="mt-5 pb-4">
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold solution-color">
                    The Solution
                  </h2>
                </Col>
                <Col md={8}>
                  <p>
                    An Outlook extension that would learn the user's work habits
                    through Machine Learning, create tasks from emails using
                    Natural Language Processing, and schedule in blocks of time
                    to focus and complete the work.
                  </p>
                  <p>
                    The application would also see what kinds of to-do items
                    already exist, and begin to guide the user towards starting
                    work. This would reduce the need to plan out one's day,
                    while also taking advantage of Deep Focus periods for
                    maximum productivity.
                  </p>
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold solution-color">
                    Key Performance Indicators
                  </h2>
                </Col>
                <Col md={8}>
                  <p>
                    With productivity in mind, our KPIs would revolve around
                    user retention while also seeing how it would affect
                    productivity through the completion of tasks.
                  </p>
                  <ul className="numbered-list">
                    <li>Keeping a high completion rate of scheduled tasks</li>
                    <li>Daily active users scheduling tasks</li>
                    <li>A decrease in time for completing similar tasks</li>
                  </ul>
                  <p>
                    Using this data, we can get an overall picture of how the
                    tool is helping employees stay focused and identify problems
                    that need solving.
                  </p>
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold solution-color">
                    Competitive Analysis
                  </h2>
                </Col>
                <Col md={8}>
                  <p>
                    After comparing our proposed solution to many similar
                    products (Toggle, Rescue Time, Calendly, Omnifocus, Cortana
                    Scheduler), SmartCal stands out by focusing on personalizing
                    the experience for every user based on their work habits,
                    while also performing the repetitive task of creating
                    calendar events automatically.
                  </p>
                </Col>
              </Row>
            </Fade>
          </Container>
        </Row>

        <Row>
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="text-center">
                <Col className="p-5">
                  <p className="font-weight-bold lg">After The Pitch...</p>
                  <div className="less-text">
                    <p>
                      Our team <strong>won!</strong>
                    </p>
                    <p>
                      We were going to be representing Ontario in the National
                      Round! This meant that we would have another month to
                      refine and practice our pitch.
                    </p>
                  </div>
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="text-center">
                <Col
                  className="picture-highlight p-5"
                  style={{ backgroundColor: highlightColor }}
                >
                  <p style={{ color: "white" }}>
                    A team picture after pitching!
                  </p>
                  <Image
                    src="https://doixzan7hf4ti.cloudfront.net/kpmg/round1.jpg"
                    fluid
                    alt="Group picture holding our certificates"
                    className="shadow"
                  />
                </Col>
              </Row>
            </Fade>
          </Container>
        </Row>

        <Row
          className="mt-5 p-5"
          style={{
            backgroundColor: highlightColor,
            color: "white",
          }}
        >
          <Col>
            <Container>
              <Row className="text-center">
                <Col>
                  <Fade bottom duration={666} distance="50px">
                    <div className="">
                      <h2 className="font-weight-bold">
                        Part 2 - National Round
                      </h2>
                      <p className="font-weight-bold">24 Hours</p>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

        <Row>
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col className="text-center">
                  <h2 className="font-weight-bold mb-3">
                    Watch The Video Recap!
                  </h2>
                  <ResponsiveEmbed
                    aspectRatio="16by9"
                    className="shadow"
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
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold">Next Steps</h2>
                </Col>
                <Col md={8}>
                  <p>
                    After landing in Toronto, I would have 4 days to prepare
                    with my team for our final pitch. This time, we would be up
                    against 3 other teams representing British Columbia,
                    Alberta, and Quebec.
                  </p>
                  <p>
                    With more time to prep, our next step was to project
                    financial results while also producing development
                    road-maps.
                  </p>
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold">Financial Analysis</h2>
                </Col>
                <Col md={8}>
                  <p>
                    Using Microsoft Azure’s tools, we projected that the
                    variable costs for running such a platform would be
                    reasonable. Our pricing model would mimic popular SaaS
                    companies and we would charge 6$/user/month. We felt like
                    this would be a reasonable investment into employees as such
                    a concept could derive a higher ROI due to productivity
                    increases.
                  </p>
                  <p>
                    Furthermore, from a Customer Lifetime Value perspective, we
                    assumed a 5-year career path for an employee at the
                    staff/senior level to transition into a management role.
                    This turned out to be $353.75 over the 5-year period.
                  </p>
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5">
                <Col md={4}>
                  <h2 className="font-weight-bold">Product Roadmap</h2>
                </Col>
                <Col md={8}>
                  <p>
                    With KPMG as a starting point, the product would begin in
                    the initial development phase. Lasting around 4 weeks, it
                    would consist of 2 sprints to build out an MVP with its core
                    features.
                  </p>
                  <p>
                    Next, the program would be pushed out to a select team to
                    begin gathering baseline information and usage habits to
                    provide inputs for a Machine Learning model. The team chosen
                    was an internal group which focuses on the professional
                    development and training for future leaders. This would
                    allow for better future adoption due to decision makers
                    being already familiar with the software.
                  </p>
                  <p>
                    During the testing period, the development team would also
                    be iterating on new features and fixing any issues that come
                    up.
                  </p>
                  <p>
                    With the metrics and a relatively stable product, then we
                    would begin marketing and outreach. Awareness campaigns
                    would be started, and we hope to start onboarding more teams
                    within the organization.{" "}
                  </p>
                  <p>
                    Finally, as more users begin implementing SmartCal into
                    their routines, the tool becomes more useful as employees
                    begin to understand when they are most productive and
                    respect other’s focus periods. This would lead onto the
                    product being pitched and expanding beyond KPMG Toronto.
                  </p>
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="mt-5 text-center">
                <Col
                  className="picture-highlight p-5"
                  style={{ backgroundColor: highlightColor }}
                >
                  <p style={{ color: "white" }}>
                    During our final pitch, presenting our opening video
                  </p>
                  <Image
                    src="https://doixzan7hf4ti.cloudfront.net/kpmg/presentation.jpg"
                    fluid
                    alt="Group of people presenting"
                    className="shadow"
                  />
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="text-center">
                <Col className="p-5">
                  <p className="font-weight-bold lg">In the end...</p>
                  <div className="less-text">
                    <p>
                      We did <strong>not</strong> move on.
                    </p>
                    <p>
                      Although it was disappointing, I am still so grateful for
                      being able to meet and work together with my team.
                      Furthermore, having the opportunity to learn from
                      professionals in the industry gave me a new perspective on
                      the product development process.
                    </p>
                  </div>
                </Col>
              </Row>
            </Fade>

            <Fade bottom duration={666} distance="50px">
              <Row className="text-center">
                <Col
                  className="picture-highlight p-5"
                  style={{ backgroundColor: highlightColor }}
                >
                  <p style={{ color: "white" }}>
                    A group photo with all the Canadian Finalists.
                    Congratulations Team Alberta!
                  </p>
                  <Image
                    src="https://doixzan7hf4ti.cloudfront.net/kpmg/grouppicture.jpg"
                    fluid
                    alt="Group of people posing for a photo"
                    className="shadow"
                  />
                </Col>
              </Row>
            </Fade>
          </Container>
        </Row>
        <Row className="conclusion-section pt-5 pb-5 mt-5">
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="">
                <Col md={4}>
                  <h2 className="font-weight-bold">Conclusion</h2>
                </Col>
                <Col md={8}>
                  <p>
                    In all, I was given an incredible opportunity to put my
                    product thinking to the test and work towards solving an
                    actual business problem. This exposed me to the nitty gritty
                    of distilling the problem down to its core and testing new
                    hypotheses. Being able to grow my network within the firm,
                    as well as with motivated students from across Canada also
                    allowed me to meet and develop valuable relationships.
                  </p>
                  <p>
                    I also learned a lot in terms of how to properly create a
                    pitch, and convince others of the value that you believe
                    your idea to have. We had to work towards getting excited
                    about our vision, as well as keeping our team motivated to
                    contiously iterate on its production.
                  </p>
                  <p className="font-weight-medium lg mt-5">Looking Forward</p>
                  <p>
                    With this experience, I'm looking forward to applying what I
                    learned in future projects, as well as keeping in touch with
                    the amazing individuals that I was able to meet!
                  </p>
                  <Button as={Link} to="/" variant="light">
                    Back Home
                  </Button>
                </Col>
              </Row>
            </Fade>
          </Container>
        </Row>

        <Footer />
      </Container>
    </>
  )
}

export default KPMG
