import React, { useRef } from 'react'
import { 
  GiKnifeFork, 
  GiNoodles, 
  GiChickenOven, 
  GiFishCooked, 
  GiCakeSlice,  
  GiBlender ,
  GiFullPizza,
  GiOrange,
  GiSmokingOrb,
  GiAlmond,
} from 'react-icons/gi'
import { LuSalad, LuBeef  } from "react-icons/lu";
import { TbSoupFilled, TbMilkshake  } from "react-icons/tb";
import { FaMugHot } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { RiDrinks2Fill } from "react-icons/ri";
import { FaBottleWater } from "react-icons/fa6";
import { IoIosIceCream } from "react-icons/io";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import styles from './SectionsSlider.module.css'
import sectionsData from '../../data/sections.json'

const SectionsSlider = () => {
  const sliderRef = useRef(null)
  
  // Icon mapping object
  const iconMap = {
    knifeFork: <GiKnifeFork />,
    salad: <LuSalad />,
    pasta: <GiNoodles />,
    pizza: <GiFullPizza />,
    chicken: <GiChickenOven />,
    beef: <LuBeef />,
    fish: <GiFishCooked />,
    soup: <TbSoupFilled />,
    dessert: <GiCakeSlice />,
    iceCream: <IoIosIceCream />,
    hotDrink: <FaMugHot />,
    milkshake: <TbMilkshake />,
    coffee: <SiBuymeacoffee />,
    orange: <GiOrange />,
    drinks: <RiDrinks2Fill />,
    blender: <GiBlender />,
    water: <FaBottleWater />,
    smoking: <GiSmokingOrb />,
    nuts: <GiAlmond />
  }
  
  const sections = sectionsData.map(section => ({
    name: section.name,
    icon: iconMap[section.iconId]
  }))

  const getSectionId = (sectionName) => {
    return sectionName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
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
            <a
              key={index}
              href={`#${getSectionId(section.name)}`}
              className={styles.sectionButton}
            >
              <span className={styles.sectionIcon}>{section.icon}</span>
              <span className={styles.sectionText}>{section.name}</span>
            </a>
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
