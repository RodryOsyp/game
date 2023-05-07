import React from 'react'
import styles from './Button.module.css'
import cn from 'classnames'
const Button = ({title, className, onClick, game}) => {
  return (
    <button onClick ={()=>onClick(game)} className={cn(styles.button, className)}>{title}</button>  
  )
}

export default Button