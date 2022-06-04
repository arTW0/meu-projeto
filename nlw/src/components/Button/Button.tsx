import React from 'react'

import { ButtonHTMLAttributes } from 'react'
import styles from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  return (
    <styles.button 
      className="button"
      {...props}
    />
  )
}