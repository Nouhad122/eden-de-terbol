import React from 'react'
import { FaClock } from 'react-icons/fa'
import styles from './FooterHours.module.css'

const FooterHours = () => {
  const hoursData = [
    { days: 'Monday - Thursday', hours: '11:00 AM - 10:00 PM' },
    { days: 'Friday - Saturday', hours: '11:00 AM - 11:00 PM' },
    { days: 'Sunday', hours: '12:00 PM - 9:00 PM' }
  ]

  return (
    <div className={styles.hoursSection}>
      <h3 className={styles.sectionTitle}>
        <FaClock className={styles.titleIcon} />
        Opening Hours
      </h3>
      <div className={styles.hoursGrid}>
        {hoursData.map((schedule, index) => (
          <div key={index} className={styles.dayGroup}>
            <div className={styles.days}>{schedule.days}</div>
            <div className={styles.hours}>{schedule.hours}</div>
          </div>
        ))}
      </div>
      <div className={styles.specialNote}>
        Kitchen closes 30 minutes before closing time
      </div>
    </div>
  )
}

export default FooterHours 