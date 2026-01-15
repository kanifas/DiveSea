import type { FC } from 'react'
import styles from './NftCard.module.scss'
import { Font } from '@/shared/ui'
import Expire from './components/Expire/Expire'

interface IProps {
  name: string
  bid: number
  expire: number
  image: string
}

const NftCard:FC<IProps> = ({
  name,
  bid,
  image,
  expire,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <div className={styles.expire}>
          <Expire timestamp={expire} />
        </div>
        <div className={styles.image}>
          <img src={image} />
        </div>
        <div className={styles.name}>
          <Font family='Poppins' weight='SemiBold'>{name}</Font>
        </div>
        <div className={styles.bidSection}>
          <div className={styles.bidInfo}>
            <div className={styles.bidCaption}>
              <Font family='Poppins' weight='Regular'>
                Current bid
              </Font>
            </div>
            <div className={styles.bidValue}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00163 1.1669L3.83496 8.1669L8.00163 10.6669L12.1683 8.1669L8.00163 1.1669ZM3.83496 9.00024L8.00163 14.8336L12.1683 9.00024L8.00163 11.5002L3.83496 9.00024Z" fill="#141416"/>
              </svg>
              <Font family='Poppins' weight='Medium'>
                {bid}
              </Font>
            </div>
          </div>
          <div className={styles.bidButton}>
            <button style={{color:'#fff'}}><Font family='Poppins' weight='SemiBold'>PLACE BID</Font></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NftCard