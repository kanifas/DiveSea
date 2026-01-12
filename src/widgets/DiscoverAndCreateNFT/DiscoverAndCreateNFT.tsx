import Spiral from './ui/Spiral/Spiral'
import { Button, Font } from '@/shared/ui'
import styles from './ui/styles/DiscoverAndCreateNFT.module.scss'

const DiscoverAndCreateNFT = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.infoSection}>
          <div className={styles.mainCaption}>
            <Font family='Poppins' weight='SemiBold'>
              OVER 1M CREATERS
            </Font>
          </div>
          <h2>
            <Font family='Poppins' weight='SemiBold'>
              Discover And Create NFTs
            </Font>
          </h2>
          <h3>
            <Font family='Inter' weight='Regular'>
              Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <b>$20 bonus</b>.
            </Font>
          </h3>
          <div className={styles.buttons}>
            <Button>
              <Font family='Poppins' weight='Medium'>
                EXPLORE MORE
              </Font>
            </Button>
            <Button outlined>
              <Font family='Poppins' weight='Medium'>
                CREATE NFT
              </Font>
            </Button>
          </div>
          <div className={styles.stats}>
            <div>
              <div className={styles.value}><Font family='PublicSans' weight='SemiBold'>430K+</Font></div>
              <div className={styles.caption}><Font family='Inter' weight='Medium'>Art Works</Font></div>
            </div>
            <div>
              <div className={styles.value}><Font family='PublicSans' weight='SemiBold'>159K+</Font></div>
              <div className={styles.caption}><Font family='Inter' weight='Medium'>Creators</Font></div>
            </div>
            <div>
              <div className={styles.value}><Font family='PublicSans' weight='SemiBold'>87K+</Font></div>
              <div className={styles.caption}><Font family='Inter' weight='Medium'>Collections</Font></div>
            </div>
          </div>
        </div>

        <div className={styles.grapchicSection}>
          <img src="/static/images/im1.jpg" width="350" />
          <Spiral />
        </div>
      </div>
    </div>
  )
}

export default DiscoverAndCreateNFT