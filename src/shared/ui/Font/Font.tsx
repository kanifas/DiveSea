import type { FC, ReactNode } from 'react'
import styles from './Font.module.scss'

interface IProps {
  family?: TFontFamily
  weight?: TFontWeight
  uppercase?: boolean
  children: ReactNode
}

const Font:FC<IProps> = ({
  family,
  weight,
  children,
}) => {
  let fontFamilyClass: string
  switch (family) {
    case FontFamily.Outfit: fontFamilyClass = styles.outfit; break;
    case FontFamily.Poppins: fontFamilyClass = styles.poppins; break;
    case FontFamily.PublicSans: fontFamilyClass = styles.publicSans; break;
    default: fontFamilyClass = styles.inter;
  }

  let fontWeightClass: string
  switch (weight) {
    case FontWeight.Thin: fontWeightClass = styles.thin; break;
    case FontWeight.ExtraLight: fontWeightClass = styles.extraLight; break;
    case FontWeight.Light: fontWeightClass = styles.light; break;
    case FontWeight.Regular: fontWeightClass = styles.regular; break;
    case FontWeight.Medium: fontWeightClass = styles.medium; break;
    case FontWeight.SemiBold: fontWeightClass = styles.semiBold; break;
    case FontWeight.Bold: fontWeightClass = styles.bold; break;
    case FontWeight.ExtraBold: fontWeightClass = styles.extraBold; break;
    case FontWeight.Black: fontWeightClass = styles.black; break;
    default: fontWeightClass = styles.normal;
  }

  const className = `${fontFamilyClass} ${fontWeightClass}`

  return (
    <span className={className} style={{lineHeight: 'inherit'}}>{children}</span>
  )
}

// Alternative: Works with erasableSyntaxOnly
export const FontFamily = {
  Inter: 'Inter',
  Poppins: 'Poppins',
  Outfit: 'Outfit',
  PublicSans: 'PublicSans',
} as const // 'as const' ensures type safety and immutability

export type TFontFamily = (typeof FontFamily)[keyof typeof FontFamily]

export const FontWeight = {
  Thin: 'Thin',
  ExtraLight: 'ExtraLight',
  Light: 'Light',
  Normal: 'Normal',
  Regular: 'Regular',
  Medium: 'Medium',
  SemiBold: 'SemiBold',
  Bold: 'Bold',
  ExtraBold: 'ExtraBold',
  Black: 'Black'
} as const

export type TFontWeight = (typeof FontWeight)[keyof typeof FontWeight]

export default Font