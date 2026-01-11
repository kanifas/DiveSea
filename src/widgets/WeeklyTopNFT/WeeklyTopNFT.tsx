import { Font, NftCard, InfiniteSlider } from '@/shared/ui'
import styles from './ui/styles/WeeklyTopNFT.module.scss'

const exp = Date.now() + 10000;

const WeeklyTopNFT = () => {

  return (
    <div className={styles.root}>
      <h2>
        <Font family='Poppins' weight='SemiBold'>
          Weekly - Top NFT
        </Font>
      </h2>

      <div className={styles.container}>
        <NftCard name='Autoglyphs' bid={1.5} expire={exp} image='/static/images/im1.jpg'  />
        <NftCard name='MoonCats - Acclimated' bid={2.3} expire={exp} image='/static/images/im2.jpg' />
        <NftCard name='Beranames' bid={0.8} expire={exp} image='/static/images/im3.jpg' />
      </div>

      <InfiniteSlider />
    </div>
  )
}

export default WeeklyTopNFT