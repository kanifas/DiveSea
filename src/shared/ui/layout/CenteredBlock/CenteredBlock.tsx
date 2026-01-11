import type { FC, ReactNode, HTMLAttributes } from 'react'
import styles from './CenteredBlock.module.scss'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode,
}

const CenteredBlock:FC<IProps> = ({ children, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default CenteredBlock