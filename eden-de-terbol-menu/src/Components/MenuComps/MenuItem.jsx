import React from 'react'
import styles from '../../Pages/Menu/Menu.module.css'
import SaladImg from '../../assets/salad.jpg'
import { Image } from 'antd'
const MenuItem = ({ item }) => {
  return (
        <div className={styles.menuItem}>
            <div className={styles.itemHeader}>
                <div className={styles.nameImageContainer}>
                {/* {
                    item.imageId && (
                        <Image
                        width={60}
                        src={SaladImg}
                        alt={item.itemName}
                        preview={{
                            mask: null,
                            movable: false,
                            zoom: false,
                            rotatable: false,
                            scalable: false,
                            toolbarRender: () => null,
                        }}
                        style={{ cursor: 'pointer'  }}
                        />
                    )
                } */}
                    <h3 className={styles.itemName}>{item.itemName}</h3>
                </div>
                <span className={styles.price}>{item.price}</span>
            </div>
            <p className={styles.itemDescription}>
                {item.description}
            </p>
        </div>
  )
}

export default MenuItem
