import React from 'react'
import styles from './Menu.module.css'
import MenuSection from '../../Components/MenuComps/MenuSection'
import SectionsSlider from '../../Components/SectionsSlider/SectionsSlider'
import menuItems from '../../data/menuItems.json'
import seaFoodImage from '../../assets/seafood.JPG'
import dessertImage from '../../assets/dessert.JPG'
import pastaImage from '../../assets/pasta.JPG'
import starterImage from '../../assets/starter.JPG'
import drinkImage from '../../assets/drink.JPG'
import burgerImage from '../../assets/burger.JPG'
import shrimpImage from '../../assets/shrimp.JPG'
const Menu = () => {
  const items = menuItems
  
  // Image mapping for each section
  const sectionImages = {
    'APPETIZERS/ STARTERS': shrimpImage,
    'SALADS': starterImage,
    'PIZZA': burgerImage,
    'PASTA': pastaImage,
    'CHICKEN': burgerImage,
    'BEEF': burgerImage,
    'SEA FOOD': seaFoodImage,
    'SOUP': starterImage,
    'DESSERT': dessertImage,
    'HOT BEVERAGES': drinkImage,
    'MILKSHAKES': drinkImage,
    'COLD COFFEE & FRAPPE': drinkImage,
    'REFRESHERS DRINKS': drinkImage,
    'Mixology Drinks': drinkImage,
    'SMOOTHIES': drinkImage
  }
  
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
            <div className={styles.menuSectionImage}>
              <img src={sectionImages[section] || starterImage} alt={section} />
            </div>
            <div className={styles.menuSectionWrapper}>
            <MenuSection 
              sectionTitle={section} 
              items={items.filter(item => item.section === section)}
            />
            </div>
          </section>
        ))
      }

    </div>
  )
}

export default Menu
