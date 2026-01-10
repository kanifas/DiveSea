import type { Transition } from "motion/react"
import * as motion from "motion/react-client"

const transition: Transition = {
    duration: 1,
    repeat: 0,
    repeatType: "reverse",
    ease: "easeOut",
}

export default function Spiral() {
    return (
        <div style={{ position: "relative", display:"block", width:112, height:82  }}>
          <svg   xmlns="http://www.w3.org/2000/svg" width="110" height="80">
            <motion.path
              d="M1.63356 18.2743C18.4168 5.70486 37.9572 -2.00905 58.6659 3.60869C77.3578 8.6795 89.126 24.6102 76.5225 44.3117C70.5564 53.638 57.8535 60.166 47.8681 54.8534C36.7435 48.9348 45.5118 33.9964 52.6335 29.6883C69.2669 19.6262 92.6792 24.3031 104.195 43.847C117.832 66.9915 94.7681 78.5115 94.7524 78.3237"
              fill="transparent"
              color="#000"
              strokeWidth="3.37884"
              // stroke="var(--hue-6-transparent)"
              stroke="#000"
                strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="1.5"
              initial={{ pathLength: 1, pathOffset: 1, opacity: 0 }}
              animate={{ pathLength: 1, pathOffset: 0, opacity: 1 }}
              transition={transition}
            />
          </svg>
          <motion.div
            style={{
              rotate: '45deg',
              position: "absolute",
              width: 1,
              height: 1,
              top: '0',
              left: '0',
              offsetPath: `path("M1.63356 18.2743C18.4168 5.70486 37.9572 -2.00905 58.6659 3.60869C77.3578 8.6795 89.126 24.6102 76.5225 44.3117C70.5564 53.638 57.8535 60.166 47.8681 54.8534C36.7435 48.9348 45.5118 33.9964 52.6335 29.6883C69.2669 19.6262 92.6792 24.3031 104.195 43.847C117.832 66.9915 94.7681 78.5115 94.7524 78.3237")`,
            }}
            initial={{ offsetDistance: "100%", scale: 0.4, opacity: 0 }}
            animate={{ offsetDistance: "0%", scale: 1, opacity: 1 }}
            transition={transition}
          >
            <svg
              width="29" height="34" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                left: -4,
                top: -28,
              }}
            >
              <path d="M11.19 1.74413C11.7992 4.1686 11.4475 6.59568 11.208 9.03918C10.4225 17.0628 7.27708 25.3929 1.63338 30.6553C9.05978 27.3991 19.714 25.981 26.4592 31.6967" stroke="black" strokeWidth="3.37884" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
    )
}
