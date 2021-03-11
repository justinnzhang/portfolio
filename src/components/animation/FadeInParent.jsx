import React from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const FadeInParent = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: "-300px 10px",
    triggerOnce: true,
  })

  const parentFade = {
    initial: { opacity: 0, y: 0 },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        ease: [0.17, 0.75, 0.95, 1],
        staggerChildren: 0.09,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      variants={parentFade}
      initial="initial"
      animate={inView ? "enter" : "initial"}
    >
      <main>{children}</main>
    </motion.div>
  )
}

export default FadeInParent
