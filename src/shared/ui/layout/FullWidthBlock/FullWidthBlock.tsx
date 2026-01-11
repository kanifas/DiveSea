import type { FC, ReactNode, HTMLAttributes } from 'react'
import styles from './FullWidthBlock.module.scss'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const FullWidthBlock:FC<IProps> = ({ children, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default FullWidthBlock