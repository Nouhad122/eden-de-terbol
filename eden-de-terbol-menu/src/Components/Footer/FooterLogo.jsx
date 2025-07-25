import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import styles from './FooterLogo.module.css'
import edenLogo from '../../assets/eden-logo.png'

const FooterLogo = () => {
  return (
    <div className={styles.logoSection}>
      <div className={styles.logo}>
        <img src={edenLogo} alt="Eden de Terbol" className={styles.logoImage} />
        <div className={styles.logoSubtitle}>A Culinary Haven</div>
      </div>
      <p className={styles.description}>
        At Eden de Terbol, we craft more than just meals – we create experiences that celebrate
         the art of fine dining, the warmth of Lebanese hospitality, and the joy of sharing
          exceptional food with those who matter most.
      </p>
      <div className={styles.socialIcons}>
        <div className={styles.socialIcon}>
          <a href="https://www.instagram.com/edendeterbol?igsh=YTZqanQ3cWM0YzJo" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          </a>
        </div>

        <div className={styles.socialIcon}>
          <a href="https://wa.me/96181205201" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  )
}

export default FooterLogo 