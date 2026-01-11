import { Font } from '@/shared/ui'
import image from './ui/images/im1.jpg'
import styles from './ui/styles/CreateAndSellNFT.module.scss'
const CreateAndSellNFT = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.infoSection}>
          <div>
            <h2><Font family='Poppins' weight='SemiBold'>Create and Sell NFTs</Font></h2>
            <h3><Font family='Poppins' weight='Medium'>World’s Largest NFT Place</Font></h3>
          </div>
          <div className={styles.buttons}>
            <button style={{color:'#fff'}}>Explore More</button>
            <button style={{color:'#fff'}}>Sell Artwork</button>
          </div>
        </div>

        <div className={styles.imageBox}>
          <img src={image} />
        </div>
      </div>
    </div>
  )
}

export default CreateAndSellNFT