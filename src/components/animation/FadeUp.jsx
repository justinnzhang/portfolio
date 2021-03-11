import React from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const FadeUp = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: "-300px 10px",
    triggerOnce: true,
  })

  const variants = {
    initial: { opacity: 0, y: 30 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.333, ease: [0.17, 0.75, 0.95, 1] },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={inView ? "enter" : "initial"}
    >
      <main>{children}</main>
    </motion.div>
  )
}

export default FadeUp
