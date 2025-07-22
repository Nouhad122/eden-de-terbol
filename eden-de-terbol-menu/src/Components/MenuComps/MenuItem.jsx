import React from 'react'
import styles from '../../Pages/Menu/Menu.module.css'

const MenuItem = ({ item }) => {
  return (
        <div className={styles.menuItem}>
            <div className={styles.itemHeader}>
                <h3 className={styles.itemName}>{item.itemName}</h3>
                <span className={styles.price}>{item.price}</span>
            </div>
            <p className={styles.itemDescription}>
                {item.description}
            </p>
        </div>
  )
}

export default MenuItem
