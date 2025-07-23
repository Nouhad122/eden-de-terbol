import React from 'react'
import styles from './FooterBottom.module.css'

const FooterBottom = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className={styles.footerBottom}>
      <div className={styles.footerBottomContent}>
        <p className={styles.copyright}>
          © {currentYear} Eden de Terbol. All rights reserved.
        </p>
        <p className={styles.tagline}>
          Crafted with passion • Served with love
        </p>
      </div>
    </div>
  )
}

export default FooterBottom 