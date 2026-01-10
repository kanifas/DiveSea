import type { FC, ReactNode } from 'react'
import styles from './CenteredBlock.module.scss'

interface IProps {
  children: ReactNode
}

const CenteredBlock:FC<IProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default CenteredBlock