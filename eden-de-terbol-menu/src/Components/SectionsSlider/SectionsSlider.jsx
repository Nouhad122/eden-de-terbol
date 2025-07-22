import React, { useRef } from 'react'
import styles from './SectionsSlider.module.css'
import { 
  GiKnifeFork, 
  GiSandwich, 
  GiNoodles, 
  GiChicken, 
  GiCow, 
  GiFishCooked, 
  GiBowlOfRice, 
  GiCakeSlice,  
  GiBlender 
} from 'react-icons/gi'
// import { FaPizzaSlice } from "react-icons/fa6"
// import { IoMdCafe } from 'react-icons/io'
// import { BiCoffeeAlt } from 'react-icons/bi'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const SectionsSlider = () => {
  const sliderRef = useRef(null)
  
  const sections = [
    { name: 'APPETIZERS/ STARTERS', icon: <GiKnifeFork /> },
    { name: 'SALADS', icon: <GiSandwich /> },
    { name: 'PIZZA', icon: null },
    { name: 'PASTA', icon: <GiNoodles /> },
    { name: 'CHICKEN', icon: <GiChicken /> },
    { name: 'BEEF', icon: <GiCow /> },
    { name: 'SEA FOOD', icon: <GiFishCooked /> },
    { name: 'SOUP', icon: <GiBowlOfRice /> },
    { name: 'DESSERT', icon: <GiCakeSlice /> },
    { name: 'HOT BEVERAGES', icon: null },
    { name: 'MILKSHAKES', icon: null },
    { name: 'COLD COFFEE & FRAPPE', icon: null },
    { name: 'REFRESHERS DRINKS', icon: null },
    { name: 'Mixology Drinks', icon: null },
    { name: 'SMOOTHIES', icon: <GiBlender /> }
  ]

  const scrollToSection = (sectionName) => {
    const element = document.getElementById(sectionName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase())
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }

  const scrollLeft = () => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.children[0]?.offsetWidth || 150
      sliderRef.current.scrollBy({
        left: -itemWidth,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.children[0]?.offsetWidth || 150
      sliderRef.current.scrollBy({
        left: itemWidth,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <button 
          className={styles.scrollButton} 
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <MdChevronLeft />
        </button>
        
        <div className={styles.sectionsWrapper} ref={sliderRef}>
          {sections.map((section, index) => (
            <button
              key={index}
              className={styles.sectionButton}
              onClick={() => scrollToSection(section.name)}
            >
              <span className={styles.sectionIcon}>{section.icon}</span>
              <span className={styles.sectionText}>{section.name}</span>
            </button>
          ))}
        </div>
        
        <button 
          className={styles.scrollButton} 
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <MdChevronRight />
        </button>
      </div>
    </div>
  )
}

export default SectionsSlider
