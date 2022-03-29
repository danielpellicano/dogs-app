import React from 'react'
import styles from './Input.module.css';

export default function Input({label, type, name}) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
      </label>
      <input id={name} className={styles.input} type={type} />

    </div>
  )
}
