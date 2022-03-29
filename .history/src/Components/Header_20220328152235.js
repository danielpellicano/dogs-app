import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.modules.css';
import {ReactComponent as Dogs} from '../Assets/dogs.svg';


export default function Header() {
  return (
    <div className={styles.header}>
        <nav className="container">
          <Link to="/"><Dogs /></Link>
          <Link to="/login">Login / Criar</Link>
        </nav>
    </div>
  )
}
