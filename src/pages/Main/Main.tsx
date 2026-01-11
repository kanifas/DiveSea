import { DiscoverAndCreateNFT, CreateAndSellNFT, WeeklyTopNFT } from '@/widgets'
import { CenteredBlock, FullWidthBlock } from '@/shared/ui'
const Main = () => {
  return (
    <>
      <CenteredBlock>
        <DiscoverAndCreateNFT />
      </CenteredBlock>

      <FullWidthBlock>
        <WeeklyTopNFT />
      </FullWidthBlock>

      <CenteredBlock>
        <CreateAndSellNFT />
      </CenteredBlock>
    </>
  )
}

export default Main