import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.modules.css';
import {ReactComponent as Dogs} from '../Assets/dogs.svg';


export default function Header() {
  return (
    <div className={styles.header}>
        <nav className={`${styles.mav} container`}>
          <Link className={styles.logo} to="/" aria-label="Dogs - Home"><Dogs /></Link>
          <Link className={styles.login} to="/login">Login / Criar</Link>
        </nav>
    </div>
  )
}
