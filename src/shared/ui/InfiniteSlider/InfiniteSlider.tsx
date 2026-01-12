import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Draggable from 'gsap/Draggable'
import InertiaPlugin from 'gsap/InertiaPlugin'
// import { useGSAP } from '@gsap/react'; // Import the useGSAP hook
// gsap.registerPlugin(useGSAP);

import {
  useRef,
  // Children,
  // isValidElement,
  // cloneElement,
  type FC,
  type ReactNode,
  useEffect
} from 'react'

import horizontalLoop from './helpers/horizontalLoop'

import styles from './InfiniteSlider.module.scss'

gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin)


interface IProps {
  children: ReactNode
}

let activeElement:HTMLElement

let isMounted = false

const InfiniteSlider:FC<IProps> = ({ children }) => {

  // const container = useRef(); // Create a ref for the container

  // useGSAP(() => {
  //   // GSAP animation code goes here
  //   gsap.to('.box', { rotation: 180, duration: 1 }); // Animate elements within the container
  // }, { scope: container }); // Scope selectors to this container

  const containerRef = useRef<HTMLDivElement>(null)
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  // const childRefs = useRef([])

  // Function to get valid React elements and assign refs
  // const childrenWithRefs = Children.map(children, (child, index) => {
  //   // Only process valid React elements (ignores null, strings, etc. if not wrapped)
  //   if (isValidElement(child)) {
  //     return cloneElement(child, {
  //       ref: (domNode) => {
  //         childRefs.current[index] = domNode
  //       }
  //     });
  //   }
  //   return child
  // })

  useEffect(() => {
    if (!isMounted) {
      const boxes = containerRef.current && containerRef.current.childNodes
      ? [...containerRef.current.childNodes]
      : [];

      const loop = horizontalLoop(boxes, {
        paused: true,
        draggable: true,
        center: true, // active element is the one in the center of the container rather than th left edge
        onChange: (element: HTMLElement, /*index: number*/) => { // when the active element changes, this function gets called.
          if (activeElement) {
            activeElement.classList.remove("active")
          }
          element.classList.add("active")
          activeElement = element
        }
      }, gsap, Draggable, InertiaPlugin);

      boxes.forEach((box, i) => box.addEventListener("click", () => loop.toIndex(i, {duration: 0.8, ease: "power1.inOut"})));
      if (nextRef && nextRef.current) {
        nextRef.current.addEventListener("click", () => loop.next({duration: 0.4, ease: "power1.inOut"}))
      }
      if (prevRef && prevRef.current) {
        prevRef.current.addEventListener("click", () => loop.previous({duration: 0.4, ease: "power1.inOut"}))
      }

      setTimeout(() => {
        if (nextRef.current) {
          nextRef.current.click()
        }
      }, 200)

      isMounted = true

      return () => {

      }
    }
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.container} ref={containerRef}>
        {children}
      </div>

      <div className={styles.navigatorWrapper}>
        <div className={styles.navigator}>
          <div className={styles.prev} ref={prevRef}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.90906 7.26521C9.50324 6.8906 8.87058 6.9159 8.49597 7.32172L5.2652 10.8217C4.9116 11.2047 4.9116 11.7952 5.26519 12.1782L8.49597 15.6783C8.87057 16.0841 9.50323 16.1094 9.90905 15.7348C10.3149 15.3602 10.3402 14.7276 9.96558 14.3217L8.28397 12.5L18 12.5C18.5523 12.5 19 12.0523 19 11.5C19 10.9477 18.5523 10.5 18 10.5L8.284 10.5L9.96557 8.67829C10.3402 8.27247 10.3149 7.63981 9.90906 7.26521Z" fill="black"/>
            </svg>
          </div>
          <div className={styles.next} ref={nextRef}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z" fill="#23262F"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfiniteSlider