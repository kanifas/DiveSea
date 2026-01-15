import dayjs from 'dayjs'
import {
  useEffect,
  useRef,
  useState,
  type FC
} from 'react'
import { Font } from '@/shared/ui/'
import styles from './Expire.module.scss'

interface IProps {
  timestamp: number
}

const Countdown:FC<IProps> = ({ timestamp }) => {
  const timerId = useRef<ReturnType<typeof setTimeout>>(0)
  const [prettyValue, setPrettyValue] = useState(() => {
    const expire = dayjs(timestamp)
    return dayjs(expire.diff(dayjs())).format('HH[h] mm[m] ss[s]')
  })

  useEffect(() => {
    const expire = dayjs(timestamp)
    timerId.current = setInterval(() => {
      const difference = dayjs(expire.diff(dayjs()))
      setPrettyValue(
        difference.format('HH[h] mm[m] ss[s]')
      )
    }, 1000)

    return () => clearInterval(timerId.current)
  }, [timestamp])

  return (
    <div className={styles.root}>
      <Font family='Poppins' weight='Medium'>
        {prettyValue}
      </Font>
    </div>
  )
}

export default Countdown