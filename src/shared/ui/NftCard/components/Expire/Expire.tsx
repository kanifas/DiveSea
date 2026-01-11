import { Font } from '@/shared/ui/'
import styles from './Expire.module.scss'

const Countdown = () => {
  return (
    <div className={styles.root}>
      <Font family='Poppins' weight='Medium'>
        7h 09m 12s
      </Font>
    </div>
  )
}

export default Countdown