import React from 'react'
import { FaClock } from 'react-icons/fa'
import styles from './FooterHours.module.css'

const FooterHours = () => {
  return (
    <div className={styles.hoursSection}>
      <h3 className={styles.sectionTitle}>
        <FaClock className={styles.titleIcon} />
        Opening Hours
      </h3>
      <div className={styles.hoursGrid}>
          <div className={styles.dayGroup}>
            <div className={styles.days}>Monday - Sunday</div>
            <div className={styles.hours}>12:00 PM - 12:00 AM</div>
          </div>
      </div>
      <div className={styles.specialNote}>
        Kitchen closes 30 minutes before closing time
      </div>
    </div>
  )
}

export default FooterHours 