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
import chickenImage from '../../assets/chicken.jpg'

const Menu = () => {
  const items = menuItems
  
  const sectionImages = {
    'SALADS': saladImage,
    'APPETIZERS/ STARTERS': starterImage,
    'PIZZA': pizzaImage,
    'PASTA': pastaImage,
    'CHICKEN': chickenImage,
    'BEEF': beefImage,
    'SEA FOOD': seaFoodImage,
    'SOUP': soupImage,
    'DESSERT': dessertImage,
    'ICE CREAM': null,
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
        Welcome to Eden de Terbol, where culinary artistry meets the warmth of Lebanese hospitality.
         Nestled in the heart of Terbol, our resto-café invites you to embark on a gastronomic journey
          that celebrates both international flavors and local traditions. Each dish is thoughtfully
           crafted using the finest ingredients, creating an oasis of taste that reflects our commitment
            to excellence and our passion for bringing people together over exceptional food.
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
