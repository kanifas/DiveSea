import clsx from 'clsx'
import { useAppDispatch, useAppSelector, toggleIsNavMenu } from '@/shared/lib/redux/store'
import { Burger, Button, Font, Logo, CenteredBlock } from '@/shared/ui'
import styles from './Header.module.scss'
import { useEffect, useState } from 'react'

const Header = () => {
  const dispatch = useAppDispatch();
  const isNavMenuOpen = useAppSelector(state => state.ui.isNavMenuOpen)
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    if (document.body) {
      const body = document.body;
      const onScroll = () => {
        if (body.getBoundingClientRect().top + 17 < 0) {
          setSticky(true)
        } else {
          setSticky(false)
        }
      }
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onBurgerClick = () => {
    dispatch(toggleIsNavMenu())
  }

  const rootClassName = clsx({
    [styles.root]: true,
    [styles.sticky]: isSticky
  })

  const navClassName = clsx({
    [styles.nav]: true,
    [styles.navOpen]: isNavMenuOpen
  })

  return (
    <div className={rootClassName}>
      <div className={styles.containerWrapper}>
        <CenteredBlock>
          <div className={styles.container}>
            <Logo adaptive />

            <nav className={navClassName}>
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
        </CenteredBlock>
      </div>
    </div>
  )
}

export default Header