import React from 'react'
import styles from './Menu.module.css'
import MenuSection from '../../Components/MenuComps/MenuSection'
import SectionsSlider from '../../Components/SectionsSlider/SectionsSlider'
import menuItems from '../../data/menuItems.json'
import seaFoodImage from '../../assets/seafood.JPG'
import dessertImage from '../../assets/dessert.JPG'
import pastaImage from '../../assets/pasta.JPG'
import starterImage from '../../assets/starter.JPG' 
import saladImage from '../../assets/salad.jpg'
import pizzaImage from '../../assets/pizza.jpg'
import soupImage from '../../assets/soup.jpg'
import coffeeDrinkImage from '../../assets/coffee-drink.jpg'
import coldDrinkImage from '../../assets/cold-drinks.jpg'
import beefImage from '../../assets/beef.jpg'

const Menu = () => {
  const items = menuItems
  
  const sectionImages = {
    'APPETIZERS/ STARTERS': starterImage,
    'SALADS': saladImage,
    'PIZZA': pizzaImage,
    'PASTA': pastaImage,
    'CHICKEN': beefImage,
    'BEEF': null,
    'SEA FOOD': seaFoodImage,
    'SOUP': soupImage,
    'DESSERT': dessertImage,
    'HOT BEVERAGES': coffeeDrinkImage,
    'MILKSHAKES': null,
    'COLD COFFEE & FRAPPE': null,
    'WATER & SOFT': coldDrinkImage,
    'REFRESHERS DRINKS': null,
    'MIXOLOGY DRINKS': null,
    'SMOOTHIES': null,
    'ARGUILE': null
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
             {
                sectionImages[section] !== null && (
                  <div className={styles.menuSectionImage}>
                    <img src={sectionImages[section]} alt={section} />
                  </div>
            )}
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
