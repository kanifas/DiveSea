import Spiral from './ui/Spiral/Spiral'
import { Font } from '@/shared/ui'
import styles from './ui/styles/DiscoverAndCreateNFT.module.scss'

const DiscoverAndCreateNFT = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>


        <h2>Discover And Create NFTs</h2>
        <Spiral />
        <div>
          <Font family='Outfit' weight='SemiBold'>Explore More</Font>
        </div>
      </div>
    </div>
  )
}

export default DiscoverAndCreateNFT