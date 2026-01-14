import clsx from 'clsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useAppDispatch, useAppSelector, toggleIsNavMenu } from '@/shared/lib/redux/store'
import { Burger, Button, Font, Logo, CenteredBlock, Socials } from '@/shared/ui'
import styles from './Header.module.scss'
import { useEffect, useRef, useState } from 'react'
gsap.registerPlugin(useGSAP)

const Header = () => {
  const dispatch = useAppDispatch();
  const isNavMenuOpen = useAppSelector(state => state.ui.isNavMenuOpen)
  const [isSticky, setSticky] = useState(false)
  const stickyElementRef = useRef<HTMLDivElement>(null)
  const initialHeaderOffsetTop = useRef(0)

  useEffect(() => {
    if (stickyElementRef.current) {
      initialHeaderOffsetTop.current = stickyElementRef.current.getBoundingClientRect().top
    }
  }, [])

  useEffect(() => {
    if (document.body && stickyElementRef.current) {
      const body = document.body;
      const onScroll = () => {
        const bodyOffsetTop = body.getBoundingClientRect().top
        if (bodyOffsetTop < 0 && bodyOffsetTop < -initialHeaderOffsetTop.current) {
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

  useEffect(() => {
    if (isNavMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isNavMenuOpen])

  useGSAP(() => {
    // if (isNavMenuOpen) {
    //   gsap.to(`.${styles.root}`,
    //     {height: '100vh', duration: 0.6, onComplete: () => {

    //     }}
    //   )
    // } else {
    //   gsap.to(`.${styles.root}`,
    //     {height: 'auto', duration: 0, onComplete: () => {

    //     }}
    //   )
    // }
    // gsap.fromTo(`.${styles.infoSection} h2`,
    //   { position: 'relative', top: -50, opacity: 0 },
    //   { top: 0, opacity: 1, duration: 0.6, delay: 0.3 }
    // )

    // gsap.from(`.${styles.grapchicSectionImage2}`,
    //   { left: 500, top: 200, opacity: 0, scale: 0.5, duration: 0.6, delay: 0.4, onComplete: () => {}}
    // )
  }, [isNavMenuOpen]);

  const rootClassName = clsx({
    [styles.root]: true,
    [styles.sticky]: isSticky,
    [styles.navOpen]: isNavMenuOpen
  })

  return (
    <div className={rootClassName}>
      <div className={styles.containerWrapper} ref={stickyElementRef}>
        <CenteredBlock>
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
              <div className={styles.socials}>
                <Socials />
              </div>
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