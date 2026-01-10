import Spiral from '@/widgets/DiscoverAndCreateNFT/ui/Spiral/Spiral'
import './ui/styles'
import styles from './ui/styles/App.layout.module.scss'
import { Font, Footer, Header, CenteredBlock, FullWidthBlock } from '@/shared/ui'

function App() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <CenteredBlock>
          <Header />
        </CenteredBlock>
      </header>

      <main className={styles.main}>

        <CenteredBlock>
          <h1>Discover And Create NFTs</h1>
          <Spiral />
          <div>
            <Font family='Outfit' weight='Semi Bold'>Explore More</Font>
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
          <h1>Another block</h1>
          <div>
            <Font family='Outfit' weight='Semi Bold'>Explore More</Font>
          </div>
          <br />
          <div style={{height:220, background: 'silver'}} />
          <br />
          <div>
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a $20 bonus.
          </div>
        </CenteredBlock>
      </main>

      <footer className={styles.footer}>
        <CenteredBlock>
          <Footer />
        </CenteredBlock>
      </footer>
    </div>
  )
}

export default App
