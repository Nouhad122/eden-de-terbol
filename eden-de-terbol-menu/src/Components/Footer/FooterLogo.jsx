import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import styles from './FooterLogo.module.css'
import edenLogo from '../../assets/eden-logo.png'

const FooterLogo = () => {
  return (
    <div className={styles.logoSection}>
      <div className={styles.logo}>
        <img src={edenLogo} alt="Eden de Terbol" className={styles.logoImage} />
        <div className={styles.logoSubtitle}>Fine Dining Experience</div>
      </div>
      <p className={styles.description}>
        Nestled in the heart of tranquility, Eden de Terbol offers an exquisite culinary journey 
        where every dish tells a story of passion, tradition, and innovation.
      </p>
      <div className={styles.socialIcons}>
        <div className={styles.socialIcon}><a href="https://www.instagram.com/edendeterbol?igsh=YTZqanQ3cWM0YzJo" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></div>
      </div>
    </div>
  )
}

export default FooterLogo 