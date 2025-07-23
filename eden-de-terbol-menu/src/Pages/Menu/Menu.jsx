import React from 'react'
import styles from './Menu.module.css'
import MenuSection from '../../Components/MenuComps/MenuSection'
import SectionsSlider from '../../Components/SectionsSlider/SectionsSlider'
import menuItems from '../../data/menuItems.json'

const Menu = () => {
  const items = menuItems
  return (
    <div className={styles.menuContainer}>
      <div className={styles.restaurantDescription}>
        <p>
        Eden de Terbol invites guests into a culinary sanctuary where nature's bounty meets refined dining.
         Nestled in an atmosphere of verdant tranquility, the restaurant embodies the essence of its name - a peaceful
          grove where exceptional flavors flourish. Here, each dish is crafted as a celebration of fresh,
           seasonal ingredients, creating an Eden-like experience that nourishes both body and soul in
            perfect harmony with the natural world.
        </p>
      </div>

      <SectionsSlider />

      {
        [...new Set(items.map(item => item.section))].map(section => (
          <section 
            key={section}
            id={section.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}
          >
            <MenuSection 
              sectionTitle={section} 
              items={items.filter(item => item.section === section)}
            />
            <div className={styles.menuSectionImage}>
              <img src="https://feelgoodfoodie.net/wp-content/uploads/2020/04/Caesar-Salad-TIMG.jpg" alt={section} />
            </div>
          </section>
        ))
      }

    </div>
  )
}

export default Menu
