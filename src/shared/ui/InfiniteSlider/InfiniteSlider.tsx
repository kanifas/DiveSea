import Navigator from './components/Navigator/Navigator'
import styles from './InfiniteSlider.module.scss'
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