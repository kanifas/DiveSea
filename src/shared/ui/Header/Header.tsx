import { useAppDispatch, useAppSelector, toggleIsNavMenu } from '@/shared/lib/redux/store'
import { Burger, Button, Font, Logo } from '@/shared/ui'
import styles from './Header.module.scss'

const Header = () => {
  const dispatch = useAppDispatch();
  const isNavMenuOpen = useAppSelector(state => state.ui.isNavMenuOpen)

  const onBurgerClick = () => {
    dispatch(toggleIsNavMenu())
  }

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
          <Button>
            <Font family='Inter' weight='Medium'>
              Connect Wallet
            </Font>
          </Button>
        </div>

        <div className={styles.burger} onClick={onBurgerClick}>
          <Burger />
        </div>
      </div>
    </div>
  )
}

export default Header