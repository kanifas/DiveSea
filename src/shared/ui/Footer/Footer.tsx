import { Logo, Socials } from '@/shared/ui'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.topSection}>
        <div className={styles.logo}>
          <Logo invert adaptive={false} />
        </div>
        <nav className={styles.nav}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/conditions">Term & Conditions</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>

      <div className={styles.subSection}>
        <div className={styles.copyright}>
          © 2023
          {' '}
          <span className={styles.copyrightSubtext}>
            DiveSea All Rights Reserved.
          </span>
        </div>
        <div className={styles.socials}>
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default Footer