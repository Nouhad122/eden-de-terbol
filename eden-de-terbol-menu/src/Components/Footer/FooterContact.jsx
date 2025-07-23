import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import styles from './FooterContact.module.css'

const FooterContact = () => {
  const contactData = {
    address: [
      '123 Culinary Boulevard',
      'Gourmet District',
      'Terbol City, TC 12345'
    ],
    phone: '(555) 123-EDEN',
    email: 'hello@edendeterbol.com'
  }

  return (
    <div className={styles.contactSection}>
      <h3 className={styles.sectionTitle}>
        <FaMapMarkerAlt className={styles.titleIcon} />
        Visit Us
      </h3>
      
      <div className={styles.contactInfo}>
        <div className={styles.address}>
          {contactData.address.map((line, index) => (
            <div key={index} className={styles.addressLine}>{line}</div>
          ))}
        </div>
        
        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <span>{contactData.phone}</span>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <span>{contactData.email}</span>
          </div>
        </div>
      </div>
      
      <div className={styles.reservationNote}>
        Reservations recommended for dinner service
      </div>
    </div>
  )
}

export default FooterContact 