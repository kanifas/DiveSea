import { Font, Logo } from '@/shared/ui'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo adaptive />

        <nav className={styles.nav}>
          <Font family='Inter'>
            <a href="#">Discover</a>
          </Font>
          <Font>
            <a href="#">Creators</a>
          </Font>
          <Font>
            <a href="#">Sell</a>
          </Font>
          <Font>
            <a href="#">Stats</a>
          </Font>
        </nav>

        <button style={{color:'#fff'}}>Connect Wallet</button>

      </div>
    </div>
  )
}

export default Header