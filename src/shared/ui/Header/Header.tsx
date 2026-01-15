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
    if (isNavMenuOpen) {
      gsap.to(`.${styles.dropDown}`, {height: '100vh', duration: 0.6, ease: 'Power2.easeOut'})
      gsap.fromTo(`.${styles.nav}`,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 0.3 }
      )
      gsap.fromTo(`.${styles.nav} > :nth-child(1)`,
        { opacity: 0, position: 'relative', left: 100 },
        { opacity: 1, position: 'relative', left: 0, duration: 0.4, delay: 0.3 }
      )
      gsap.fromTo(`.${styles.nav} > :nth-child(2)`,
        { opacity: 0, position: 'relative', left: 100 },
        { opacity: 1, position: 'relative', left: 0, duration: 0.4, delay: 0.4 }
      )
      gsap.fromTo(`.${styles.nav} > :nth-child(3)`,
        { opacity: 0, position: 'relative', left: 100 },
        { opacity: 1, position: 'relative', left: 0, duration: 0.4, delay: 0.5 }
      )
      gsap.fromTo(`.${styles.nav} > :nth-child(4)`,
        { opacity: 0, position: 'relative', left: 100 },
        { opacity: 1, position: 'relative', left: 0, duration: 0.4, delay: 0.6 }
      )
      gsap.fromTo(`.${styles.nav} > :nth-child(5)`,
        { opacity: 0, position: 'relative', top: 50 },
        { opacity: 1, top: 0, duration: 0.4, delay: 0.6 }
      )
      gsap.fromTo(`.${styles.connectWallet}`,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1.05, duration: 0.2, delay: 0.9, ease: 'Power2.easeOut', onComplete: () => {
          gsap.to(`.${styles.connectWallet}`, {scale: 1, duration: 0.2})
        } /*ease: 'bounce.out', strength: 0.1, frequency: 0*/ }
      )
    } else {
      gsap.to(`.${styles.dropDown}`, {height: 'auto', duration: 0, ease: 'Power2.easeOut', onComplete: () => {}})
      gsap.to(`.${styles.nav}`, { opacity: 0, duration: 0 })
      gsap.to(`.${styles.nav} > :nth-child(1)`, { opacity: 0, position: 'relative', left: 100, duration: 0 })
      gsap.to(`.${styles.nav} > :nth-child(2)`, { opacity: 0, position: 'relative', left: 100, duration: 0 })
      gsap.to(`.${styles.nav} > :nth-child(3)`,{ opacity: 0, position: 'relative', left: 100, duration: 0 })
      gsap.to(`.${styles.nav} > :nth-child(4)`, { opacity: 0, position: 'relative', left: 100, duration: 0 })
      gsap.to(`.${styles.nav} > :nth-child(5)`, { opacity: 0, duration: 0 })
      gsap.to(`.${styles.connectWallet}`, { opacity: 0, scale: 0.8, duration: 0 })
    }
  }, [isNavMenuOpen]);

  const rootClassName = clsx({
    [styles.root]: true,
    [styles.sticky]: isSticky,
    [styles.navOpen]: isNavMenuOpen
  })

  return (
    <div className={rootClassName}>
      <div className={styles.dropDown}>
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
    </div>
  )
}

export default Header