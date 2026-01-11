import { Burger, Font, Logo } from '@/shared/ui'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo adaptive />

        <nav className={styles.nav}>
          <Font family='Inter'>
            <a href="/discover">Discover</a>
          </Font>
          <Font family='Inter'>
            <a href="/creators">Creators</a>
          </Font>
          <Font family='Inter'>
            <a href="/sell">Sell</a>
          </Font>
          <Font family='Inter'>
            <a href="/stats">Stats</a>
          </Font>
        </nav>

        <div className={styles.connectWallet}>
          <button style={{color:'#fff'}}>Connect Wallet</button>
        </div>

        <div className={styles.burger}>
          <Burger />
        </div>
      </div>
    </div>
  )
}

export default Header