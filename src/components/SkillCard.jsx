import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { IconContext } from "react-icons"

import FadeInParent from "./animation/FadeInParent"
import { LeftRevealChild } from "./animation/Variants"

const SkillCard = ({ title, icon, skills }) => {
  return (
    <div className="skill-card shadow">
      <FadeInParent>
        <h3 className="lg font-weight-bold">
          <IconContext.Provider
            value={{ className: "lg", style: { verticalAlign: "-0.1em" } }}
            title={`${title} icon`}
          >
            {icon}
          </IconContext.Provider>{" "}
          {title}
        </h3>
        <ul className="skill-list">
          {skills.map((element, index) => (
            <motion.li variants={LeftRevealChild} key={`${title}-${index}`}>
              {element}
            </motion.li>
          ))}
        </ul>
      </FadeInParent>
    </div>
  )
}

SkillCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  skills: PropTypes.array,
}

export default SkillCard
