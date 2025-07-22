import React from 'react'
import MenuItem from './MenuItem'
import styles from '../../Pages/Menu/Menu.module.css'

const MenuSection = ({ sectionTitle, items, id }) => {
  return (
    <div className={styles.menuSection} id={id}>
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        {
            items.map(item => (
                <MenuItem key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default MenuSection
