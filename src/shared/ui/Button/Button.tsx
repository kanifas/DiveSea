import clsx from 'clsx'
import type { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode,
  outlined?: boolean
  invert?: boolean
  uppercase?: boolean
}

const Button:FC<IProps> = ({
  children,
  outlined = false,
  invert = false,
  uppercase = true,
  ...props
}) => {
  const className = clsx({
    [styles.button]: true,
    [styles.outlined]: outlined,
    [styles.invert]: invert,
    [styles.lowercase]: !uppercase,
  })

  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export default Button