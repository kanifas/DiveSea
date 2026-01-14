import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)

import { useState } from 'react'
import Spiral from './ui/Spiral/Spiral'
import { Button, Font } from '@/shared/ui'
import styles from './ui/styles/DiscoverAndCreateNFT.module.scss'

const DiscoverAndCreateNFT = () => {
  const [isShowSpiral, setIsShowSpiral] = useState(false)

  useGSAP(() => {
    gsap.fromTo(`.${styles.infoSection} h2`,
      { position: 'relative', top: -50, opacity: 0 },
      { top: 0, opacity: 1, duration: 0.6, delay: 0.3 }
    )

    gsap.fromTo(`.${styles.infoSection} h3`,
      { position: 'relative', top: 50, opacity: 0 },
      { top: 0, opacity: 1, duration: 0.6, delay: 0.5 }
    )

    gsap.fromTo(`.${styles.buttons} > :nth-child(1)`,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.4 , delay: 0.8 }
    )

    gsap.fromTo(`.${styles.buttons} > :nth-child(2)`,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.4 , delay: 1 }
    )

    gsap.fromTo(`.${styles.stats}`,
      { position: 'relative', top: 50, opacity: 0 },
      { top: 0, opacity: 1, duration: 0.6, delay: 1.5 }
    )

    gsap.fromTo(`.${styles.mainCaption}`,
      { position: 'relative', left: 200, opacity: 0 },
      { left: 0, opacity: 1, duration: 0.5, delay: 0.8 }
    )

    gsap.from(`.${styles.grapchicSectionImage1}`,
      { left: 400, top: -50, opacity: 0, scale: 0.5, duration: 0.6, delay: 0.4 }
    )

    gsap.from(`.${styles.grapchicSectionDots}`,
      { left: 500, opacity: 0, duration: 0.6, delay: 0.4}
    )

    gsap.from(`.${styles.grapchicSectionImage2}`,
      { left: 500, top: 200, opacity: 0, scale: 0.5, duration: 0.6, delay: 0.4, onComplete: () => setIsShowSpiral(true)}
    )
  }, []);

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
              Discover, Create and Sell NFTs On Our NFT Marketplace<br/>With Over Thousands Of NFTs And Get a <b>$20 bonus</b>.
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
          <div className={styles.grapchicSectionDots}/>
          <div className={styles.grapchicSectionImage1}>
            <img src="/static/images/im1.jpg" />
            <div className={styles.grapchicSectionImage1Shadow}>
              <img src="/static/images/im1.jpg" />
            </div>
          </div>
          <div className={styles.grapchicSectionImage2}>
            <img src="/static/images/im2.jpg" />
            <div className={styles.grapchicSectionImage2Shadow}>
              <img src="/static/images/im2.jpg" />
            </div>
          </div>
          <div className={styles.grapchicSectionSpiral}>
            {isShowSpiral && <Spiral />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverAndCreateNFT