import { useEffect } from 'react';
import { useAppDispatch, useAppSelector, fetchNftsThunk  } from '@/shared/lib/redux/store'
import { Font, NftCard, InfiniteSlider } from '@/shared/ui'
import styles from './ui/styles/WeeklyTopNFT.module.scss'
import Skeleton from '@/shared/ui/NftCard/components/Skeleton/Skeleton'

const exp = Date.now() + 10000;

const WeeklyTopNFT = () => {
  const dispatch = useAppDispatch()
  const { items, loading, error } = useAppSelector(state => state.nft)

  useEffect(() => {
    dispatch(fetchNftsThunk())
  }, [dispatch])

  console.log(error, 11)

  return (
    <div className={styles.root}>
      <h2>
        <Font family='Poppins' weight='SemiBold'>
          Weekly - Top NFT
        </Font>
      </h2>

      {loading && (
        <div className={styles.placeholder}>
          {[1,2,3].map((i) => (
            <Skeleton key={i} />
          ))}
        </div>
      )}

      {error && (
        <div style={{textAlign: 'center'}}>
          Something went wrong <br />
          Has not data
        </div>
      )}

      {!loading && !error && items && items.length > 0 && (
        <InfiniteSlider>
          {items.map(({ name, id }) => {
            return (
              <NftCard
                key={id}
                name={name}
                bid={1.5}
                expire={exp}
                image='/static/images/im1.jpg'
              />
            )
          })}
        </InfiniteSlider>
      )}
    </div>
  )
}

export default WeeklyTopNFT