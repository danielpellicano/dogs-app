import React from 'react'
import styles from './Input.module.css';

export default function Input({label}) {
  return (
    <div>
      <label>
        {label}
      </label>
      <input className={styles.input} />

    </div>
  )
}
