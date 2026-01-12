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

      </div>

      <InfiniteSlider>
        <NftCard name='1. Autoglyphs' bid={1.5} expire={exp} image='/static/images/im1.jpg'  />
        <NftCard name='2. MoonCats - Acclimated' bid={2.3} expire={exp} image='/static/images/im2.jpg' />
        <NftCard name='3. Beranames' bid={0.8} expire={exp} image='/static/images/im3.jpg' />
        <NftCard name='4. Bitcoin' bid={1.5} expire={exp} image='/static/images/im4.jpg'  />
        <NftCard name='5. Ripple XRP' bid={2.3} expire={exp} image='/static/images/im5.jpg' />
        <NftCard name='6. Solana' bid={0.8} expire={exp} image='/static/images/im2.jpg' />
        <NftCard name='7. Switch' bid={1.5} expire={exp} image='/static/images/im5.jpg'  />
      </InfiniteSlider>
    </div>
  )
}

export default WeeklyTopNFT