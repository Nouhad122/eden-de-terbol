import React from 'react'
import FooterLogo from './FooterLogo'
import FooterHours from './FooterHours'
import FooterContact from './FooterContact'
import FooterBottom from './FooterBottom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <FooterLogo />
        <FooterHours />
        <FooterContact />
      </div>
      <FooterBottom />
    </footer>
  )
}

export default Footer
