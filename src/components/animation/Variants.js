export const CardRevealParent = {
  initial: {
    opacity: 0,
    y: 30,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.333,
      ease: [0.1, 0.6, 0.8, 0.95, 1],
      staggerChildren: 0.05,
    },
  },
}

export const CardRevealChild = {
  initial: {
    opacity: 1,
    translateY: 20,
  },
  enter: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.3, ease: [0.1, 0.6, 0.8, 0.95, 1] },
  },
}
