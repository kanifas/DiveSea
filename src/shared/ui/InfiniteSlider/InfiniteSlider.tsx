import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Draggable from 'gsap/Draggable'

import Navigator from './components/Navigator/Navigator'
import styles from './InfiniteSlider.module.scss'

gsap.registerPlugin(ScrollTrigger, Draggable)



const InfiniteSlider = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
      </div>

      <div className={styles.navigator}>
        <Navigator />
      </div>
    </div>
  )
}

export default InfiniteSlider