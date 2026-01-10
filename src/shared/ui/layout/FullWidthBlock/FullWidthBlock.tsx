import type { FC, ReactNode } from 'react'
import styles from './FullWidthBlock.module.scss'

interface IProps {
  children: ReactNode
}

const FullWidthBlock:FC<IProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default FullWidthBlock