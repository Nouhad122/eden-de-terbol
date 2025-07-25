import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import styles from './FooterContact.module.css'

const FooterContact = () => {
  const contactData = {
    address: [
        'El MIRADOR DE TERBOL',
        <a 
         href="https://maps.app.goo.gl/F3D383mXV1gRzoFZ7?g_st=ipc" 
         target="_blank" 
         rel="noopener noreferrer" 
         className={styles.addressLink}>
          https://maps.app.goo.gl/F3D383mXV1gRzoFZ7?g_st=ipc
        </a>
    ],
    phone: '+961 81 205 201',
    email: 'eden.resto25@gmail.com'
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