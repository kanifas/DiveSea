import Spiral from '@/widgets/DiscoverAndCreateNFT/ui/Spiral/Spiral'
import { CreateAndSellNFT } from '@/widgets'
import { Font, CenteredBlock, FullWidthBlock } from '@/shared/ui'
const Main = () => {
  return (
    <>
      <CenteredBlock>
        <h1>Discover And Create NFTs</h1>
        <Spiral />
        <div>
          <Font family='Outfit' weight='SemiBold'>Explore More</Font>
        </div>
        <br />
        <div style={{height:320, background: 'silver'}} />
        <br />
        <div>
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a $20 bonus.
        </div>
      </CenteredBlock>

      <FullWidthBlock>
        <div style={{height:220, background: 'silver'}} />
      </FullWidthBlock>

      <CenteredBlock>
        <CreateAndSellNFT />
      </CenteredBlock>
    </>
  )
}

export default Main