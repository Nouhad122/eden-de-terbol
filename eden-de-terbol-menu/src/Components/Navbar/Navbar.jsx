import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/eden-logo.png'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Eden de Terbol" className={styles.logo} />
    </header>
  )
}

export default Navbar
