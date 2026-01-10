import type { SVGMotionProps, } from 'motion/react'
import { useCycle } from 'motion/react'
import * as motion from 'motion/react-client'

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="#282828"
    strokeLinecap="round"
    {...props}
  />
);

const Burger = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom="100%"
    >
      <div onClick={() => toggleOpen()}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <Path
            variants={{
              closed: { d: "M 34.75 8 L 3.25 8" },
              open: { d: "M 29 10 L 10 29" }
            }}
          />
          <Path
            d="M 34.75 19 L 3.25 19"
            variants={{
              closed: { opacity: 1, scale: 1 },
              open: { opacity: 0, scale: 0 }
            }}
            transition={{ duration: 0.2 }}
          />
          <Path
            variants={{
              closed: { d: "M 34.75 30 L 3.25 30" },
              open: { d: "M 29 29 L 10 10" }
            }}
          />
        </svg>
      </div>
    </motion.nav>
  )
}

export default Burger