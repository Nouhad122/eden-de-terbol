import React, { useState, useRef, useEffect } from 'react'
import styles from '../../Pages/Menu/Menu.module.css'
import { Image } from 'antd'
import { getImageByImageId } from '../../assets/imageMapping'

const MenuItem = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const itemRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.menuItem} ref={itemRef}>
      <div className={styles.itemHeader}>
        <div className={styles.nameImageContainer}>
          {item.imageId && getImageByImageId(item.imageId) && isVisible ? (
            <Image
              width={60}
              src={getImageByImageId(item.imageId)}
              alt={item.itemName}
              onLoad={() => setImageLoaded(true)}
              preview={{
                mask: null,
                movable: false,
                zoom: false,
                rotatable: false,
                scalable: false,
                toolbarRender: () => null,
              }}
              style={{ 
                cursor: 'pointer',
                opacity: imageLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            />
          ) : null}
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
