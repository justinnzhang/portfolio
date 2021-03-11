import React, { useState } from "react"
import { motion } from "framer-motion"

import "../components.css"
import "../../App.css"

import { AiTwotoneLock } from "react-icons/ai"

const Card = props => {
  // For usage to track if an item is being hovered on
  const [hovered, setHovered] = useState(false)

  const bgImage = {
    backgroundImage:
      "linear-gradient( rgba(" +
      props.color +
      ", 0.8), rgba(" +
      props.color +
      ", 0.2) ), url(" +
      props.image +
      ")",
  }

  return (
    <motion.div
      animate={
        hovered
          ? {
              translateY: -5,
              boxShadow: "0px 10px 16px 2px grey",
              borderRadius: "8px",
            }
          : {
              translateY: 0,
              boxShadow: "0px 0px 5px 0px grey",
              borderRadius: "8px",
            }
      }
      className="dynamic-cards mb-3"
      style={bgImage}
      id={props.id}
      key={props.id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={
        props.locked || props.unfinished
          ? {
              scale: 1,
              translateX: [0, -10, 10, -10, 10, 0],
            }
          : { scale: 0.95 }
      }
    >
      {props.locked && (
        <p style={{ paddingBottom: "0px", lineHeight: "1em" }}>
          <span className="message locked rg">
            Contact Me! <AiTwotoneLock />
          </span>
        </p>
      )}
      {props.unfinished && (
        <p style={{ paddingBottom: "0px", lineHeight: "1em" }}>
          <span className="message soon rg">
            Coming Soon <AiTwotoneLock />
          </span>
        </p>
      )}

      <p
        className="font-weight-regular"
        style={{
          paddingBottom: "0px",
          marginBottom: "0.5em",
          paddingTop: "0.5em",
          lineHeight: "1em",
          color: "#EAEAEA",
        }}
      >
        {props.name}
      </p>
      <h3
        className="font-weight-medium"
        style={{ paddingTop: "0px", lineHeight: "1em" }}
      >
        {props.role}
      </h3>

      <motion.p
        className="font-weight-light text-card"
        animate={
          hovered
            ? {
                opacity: 1,
                translateY: 0,
                padding: "10px",
                borderRadius: "4px",
              }
            : {
                opacity: 0,
                translateY: 20,
                padding: "10px",
                borderRadius: "4px",
              }
        }
        transition={{ duration: 0.333 }}
      >
        {props.description}
      </motion.p>
    </motion.div>
  )
}

export default Card
