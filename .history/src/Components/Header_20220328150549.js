import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.modules.css';


export default function Header() {
  return (
    <div className={styles.header}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Login / Criar</Link>
        </nav>
    </div>
  )
}
