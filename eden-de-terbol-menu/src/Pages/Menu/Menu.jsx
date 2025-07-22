import React from 'react'
import styles from './Menu.module.css'
import MenuSection from '../../Components/MenuComps/MenuSection'
import SectionsSlider from '../../Components/SectionsSlider/SectionsSlider'

const Menu = () => {
  const items = [
    {
      id: 1,
      section: "SALADS",
      itemName: "Kale Salad",
      price: "$ 30.00",
      description: `Kale, shredded carrots, red cabbage, sauce, pumpkin
                  seeds, roasted sesame, edamame, pamelo`
    },
    {
      id: 2,
      section: "SALADS",
      itemName: "Quinoa Salad",
      price: "$ 30.00",
      description: `Rocca, green onions, persil, red beans, quinoa, cashew,
                  sauce`
    },
    {
      id: 3,
      section: "SALADS",
      itemName: "Eden Salad",
      price: "$ 30.00",
      description: `Kale, rocca, spinach, sauce, apples, dried cherries, parme-
                  san cheese, strawberries, mango, roasted hazelnut`
    },
    {
      id: 4,
      section: "SALADS",
      itemName: "Caesar Salad",
      price: "$ 30.00",
      description: `Lettuce, croutons, sauce, grilled chicken, parmesan
                  cheese`
    },
    {
      id: 5,
      section: "SALADS",
      itemName: "Mediterranean Halloumi Salad",
      price: "$ 30.00",
      description: `Tomatoes, green pepper, red pepper, cucumbers, red
                  onions, black olives, oregano, olive oil, balsamic vinegar,
                  croutons, salt, grilled halloumi cheese`
    },
    {
      id: 6,
      section: "SALADS",
      itemName: "Burata Salad",
      price: "$ 30.00",
      description: `Wild rocca, caramelised apples, balsamic sauce, olive oil,
                  burata, cherry tomatoes`
    },
    {
      id: 7,
      section: "SALADS",
      itemName: "Capriza Salad",
      price: "$ 30.00",
      description: `Mozzarella fresh, pesto sauce, tomatoes, baby rocca, olive
                  oil, salt`
    },
    {
      id: 8,
      section: "PIZZA",
      itemName: "Burrata Pizza",
      price: "$ 30.00",
      description: `Tomatoes sauce, burrata cheese, wild rocca, balsamic
                  sauce, tomatoes cerises`
    },
    {
      id: 9,
      section: "PIZZA",
      itemName: "Vegetarian Pizza",
      price: "$ 30.00",
      description: `Tomato sauce, mozzarella fresh, mushroom, white onion,
                  colorful peppers, black olives, cherry tomatoes`
    },
    {
      id: 10,
      section: "PIZZA",
      itemName: "Pepperoni Pizza",
      price: "$ 30.00",
      description: `Tomato sauce, mozzarella fresh, beef pepperoni`
    },
    {
      id: 11,
      section: "PIZZA",
      itemName: "Chicken Mushroom Truffle Pizza",
      price: "$ 30.00",
      description: `Truffle sauce, fresh mozzarella, mushroom, parmesan,
                  chicken, truffle oil`
    },
    {
      id: 12,
      section: "PIZZA",
      itemName: "Shrimp Mushroom Truffle Pizza",
      price: "$ 30.00",
      description: `Truffle sauce, mozzarella fresh, mushroom, parmesan
                  cheese, shrimp, truffle oil`
    },
    {
      id: 13,
      section: "PIZZA",
      itemName: "Eden Pizza",
      price: "$ 30.00",
      description: `Tomato sauce, fresh mozzarella, grilled red peppers, basil`
    },
    {
      id: 14,
      section: "PIZZA",
      itemName: "Pesto Pizza",
      price: "$ 30.00",
      description: `Pesto sauce, fresh mozzarella, basil, parmesan cheese,
                  cherry tomatoes`
    },
    {
      id: 15,
      section: "PIZZA",
      itemName: "Mexican Pizza",
      price: "$ 30.00",
      description: `Tomato sauce, chicken, cheddar cheese, nachos`
    },
    {
      id: 16,
      section: "PASTA",
      itemName: "Chef Special",
      price: "$ 30.00",
      description: `Pasta rigatoni, mushroom 3 ways, parmesan cheese,
                  fried onion, fried kale`
    },
    {
      id: 17,
      section: "PASTA",
      itemName: "Spaghetti Bolognese",
      price: "$ 30.00",
      description: `Spaghetti, bolognese sauce, parmesan sauce, parmesan
                  sauce, salmon`
    },
    {
      id: 18,
      section: "PASTA",
      itemName: "Lasagna",
      price: "$ 30.00",
      description: `Pasta lasagna, bolognese sauce, mushroom sauce, fresh
                  mozzarella, parmesan cheese, basil`
    },
    {
      id: 19,
      section: "PASTA",
      itemName: "Gnocchi Pesto",
      price: "$ 30.00",
      description: `Gnocchi pasta, pesto sauce, mushroom sauce, parmesan
                  cheese`
    },
    {
      id: 20,
      section: "PASTA",
      itemName: "Tagliatelle Alfredo",
      price: "$ 30.00",
      description: `Tagliatelle pasta, mushroom, chicken, parmesan cheese,
                  white sauce`
    },
    {
      id: 21,
      section: "PASTA",
      itemName: "Truffle Mushroom",
      price: "$ 30.00",
      description: `Tagliatelle pasta, mushroom, truffle oil, parmesan cheese,
                  white sauce`
    },
    {
      id: 22,
      section: "PASTA",
      itemName: "Cream Shrimp Penne",
      price: "$ 30.00",
      description: `Penne pasta, white sauce, shrimp five pieces, parmesan
                  cheese`
    },
    {
      id: 23,
      section: "PASTA",
      itemName: "Lemon Salmon Spaghetti",
      price: "$ 30.00",
      description: `Spaghetti, white sauce, smoked salmon, parmesan`
    },
    {
      id: 24,
      section: "PASTA",
      itemName: "Penne Arabiata",
      price: "$ 30.00",
      description: `Penne pasta, red sauce, parmesan cheese, black olives,
                  medium spicy`
    },
    {
      id: 25,
      section: "PASTA",
      itemName: "Bocconcini Pasta",
      price: "$ 30.00",
      description: `Spaghetti, red sauce, mozzarella fresh, parmesan cheese,
                  fried eggplant, spanish basil`
    },
    {
      id: 26,
      section: "CHICKEN",
      itemName: "Chicken Mushroom",
      price: "$ 30.00",
      description: `Sautéed vegetables, white sauce, mushroom, wedges`
    },
    {
      id: 27,
      section: "CHICKEN",
      itemName: "Romania Chicken",
      price: "$ 30.00",
      description: `Breaded chicken, mixed organic salad, fries`
    },
    {
      id: 28,
      section: "CHICKEN",
      itemName: "Grilled Chicken",
      price: "$ 30.00",
      description: `Chicken, mixed organic salad, grilled potatoes, sauce`
    },
    {
      id: 29,
      section: "BEEF",
      itemName: "Beef Stroganoff",
      price: "$ 30.00",
      description: `Rice, special sauce, beef, onions, mushroom`
    },
    {
      id: 30,
      section: "BEEF",
      itemName: "Australian Fillet Steak",
      price: "$ 30.00",
      description: `Grilled vegetables, mashed potato, sauce (herb) (mushroom), steak`
    },
    {
      id: 31,
      section: "SEA FOOD",
      itemName: "Salmon Fillet",
      price: "$ 30.00",
      description: `Salmon, mashed potato, sautéed vegetables`
    },
    {
      id: 32,
      section: "SEA FOOD",
      itemName: "Nile Perch Filet",
      price: "$ 30.00",
      description: `Lemon sauce, mashed potato, asparagus, sautéed vegetables`
    },
    {
      id: 33,
      section: "SEA FOOD",
      itemName: "Risoto",
      price: "$ 30.00",
      description: `Arborio rice, special sauce shrimp`
    },
    {
      id: 34,
      section: "DESSERT",
      itemName: "Eden Cheese Cake",
      price: "$ 30.00",
      description: `Baklava, pistachio sauce, cream cheese`
    },
    {
      id: 35,
      section: "DESSERT",
      itemName: "Tiramisu",
      price: "$ 30.00",
      description: `Biscuit, cream tiramisu, cocoa, chocolate`
    },
    {
      id: 36,
      section: "DESSERT",
      itemName: "Strawberry Panna Cotta",
      price: "$ 30.00",
      description: `Stawberry sauce, panna cotta, pecan nuts, macarponi
                  cheese`
    },
    {
      id: 37,
      section: "DESSERT",
      itemName: "Caramel Panna Cotta",
      price: "$ 30.00",
      description: `Caramel sauce, panna cotta, pecan nuts, macarponi
                  cheese`
    },
    {
      id: 38,
      section: "DESSERT",
      itemName: "Eden Crepe",
      price: "$ 30.00",
      description: `Pistachio sauce, chocolate`
    },
    {
      id: 39,
      section: "DESSERT",
      itemName: "Meringue Mixed Berries",
      price: "$ 30.00",
      description: `Vanilla ice cream, meringue, mixed berry sauce`
    },
    {
      id: 40,
      section: "DESSERT",
      itemName: "Pain Perdu",
      price: "$ 30.00",
      description: `Vanilla ice cream, caramel sauce`
    },
    {
      id: 41,
      section: "SOUP",
      itemName: "Pumpkin Soup",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 42,
      section: "SOUP",
      itemName: "Asparagus Soup",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 43,
      section: "HOT BEVERAGES",
      itemName: "Espresso",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 44,
      section: "HOT BEVERAGES",
      itemName: "Turkish Coffee",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 45,
      section: "HOT BEVERAGES",
      itemName: "Cappuccino",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 46,
      section: "HOT BEVERAGES",
      itemName: "Caffé latte",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 47,
      section: "HOT BEVERAGES",
      itemName: "Piccolo",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 48,
      section: "HOT BEVERAGES",
      itemName: "Machiato",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 49,
      section: "HOT BEVERAGES",
      itemName: "Matcha Latte",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 50,
      section: "HOT BEVERAGES",
      itemName: "Doppio",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 51,
      section: "HOT BEVERAGES",
      itemName: "Hot Chocolate",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 52,
      section: "HOT BEVERAGES",
      itemName: "Nescafe",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 53,
      section: "HOT BEVERAGES",
      itemName: "Tea",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 54,
      section: "HOT BEVERAGES",
      itemName: "Cramel Machiato",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 55,
      section: "HOT BEVERAGES",
      itemName: "Mocha Latte",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 56,
      section: "MILKSHAKES",
      itemName: "Chocolate Milkshake",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 57,
      section: "MILKSHAKES",
      itemName: "Cinnamon Lotus Shake",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 58,
      section: "MILKSHAKES",
      itemName: "Strawberry Shake",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 59,
      section: "MILKSHAKES",
      itemName: "Caramel Shake",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 60,
      section: "MILKSHAKES",
      itemName: "Vanilla Shake",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 61,
      section: "MILKSHAKES",
      itemName: "Oreo Shake",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 62,
      section: "COLD COFFEE & FRAPPE",
      itemName: "Iced Latte",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 63,
      section: "COLD COFFEE & FRAPPE",
      itemName: "Iced Nescafe",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 64,
      section: "COLD COFFEE & FRAPPE",
      itemName: "Iced Matcha Latte",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 65,
      section: "COLD COFFEE & FRAPPE",
      itemName: "Flavored Iced Latte",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 66,
      section: "COLD COFFEE & FRAPPE",
      itemName: "Caramel Frappe",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 67,
      section: "COLD COFFEE & FRAPPE",
      itemName: "Mocha Frappe",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 68,
      section: "COLD COFFEE & FRAPPE",
      itemName: "White Chocolate Frappe",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 69,
      section: "REFRESHERS DRINKS",
      itemName: "Dragon Fruit",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 70,
      section: "REFRESHERS DRINKS",
      itemName: "Passion Pomegranate",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 71,
      section: "REFRESHERS DRINKS",
      itemName: "Passion Fruit",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 72,
      section: "REFRESHERS DRINKS",
      itemName: "Zaatar Lemonade",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 73,
      section: "REFRESHERS DRINKS",
      itemName: "Basel Lemonade",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 74,
      section: "REFRESHERS DRINKS",
      itemName: "Eclipse Drink",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 75,
      section: "REFRESHERS DRINKS",
      itemName: "Mojito Strawberry",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 76,
      section: "REFRESHERS DRINKS",
      itemName: "Mojito Mango",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 77,
      section: "Mixology Drinks",
      itemName: "Gin Basel",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 78,
      section: "Mixology Drinks",
      itemName: "Passion Pomegranate Liqueur",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 79,
      section: "Mixology Drinks",
      itemName: "Flower V Energy Drink",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 80,
      section: "Mixology Drinks",
      itemName: "V Energy Cherry Liqueur",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 81,
      section: "Mixology Drinks",
      itemName: "V energy Mix Berry Liqueur",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 82,
      section: "Mixology Drinks",
      itemName: "Pina Colada",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 83,
      section: "SMOOTHIES",
      itemName: "Mango Smoothie",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 84,
      section: "SMOOTHIES",
      itemName: "Peach Smoothie",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 85,
      section: "SMOOTHIES",
      itemName: "Mix Berry Smoothie",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 86,
      section: "SMOOTHIES",
      itemName: "Strawberry Smoothie",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 87,
      section: "SMOOTHIES",
      itemName: "Hot Mango Smoothie",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 88,
      section: "SMOOTHIES",
      itemName: "Strawberry Passion Lychee Smoothie",
      price: "$ 30.00",
      description: ``
    },
    {
      id: 89,
      section: "APPETIZERS/ STARTERS",
      itemName: "Smoked Salmon Bread",
      price: "$ 30.00",
      description: `Five french brown bread, five smoked salmon, sauce,
                  baby rocca, lemon slice, schumer`
    },
    {
      id: 90,
      section: "APPETIZERS/ STARTERS",
      itemName: "Truffle Fries",
      price: "$ 30.00",
      description: `Fries, truffle oil, parmesan cheese, sauce`
    },
    {
      id: 91,
      section: "APPETIZERS/ STARTERS",
      itemName: "Bruschetta",
      price: "$ 30.00",
      description: `Five french brown bread, tomatoes, black olives, spanish
                  basil, red onions, olive oil, balsamic vinegar, salt`
    },
    {
      id: 92,
      section: "APPETIZERS/ STARTERS",
      itemName: "Curly Fries",
      price: "$ 30.00",
      description: `Curly fries, cheddar sauce`
    },
    {
      id: 93,
      section: "APPETIZERS/ STARTERS",
      itemName: "Mozarella Sticks",
      price: "$ 30.00",
      description: `Mozarella, sauce`
    },
    {
      id: 94,
      section: "APPETIZERS/ STARTERS",
      itemName: "Mini Burgers/ Silders",
      price: "$ 30.00",
      description: `Meat, tomatoes, onion, pickles, cheddar cheese, mushroom,
                  chef's special sauce, mushroom sauce`
    },
    {
      id: 95,
      section: "APPETIZERS/ STARTERS",
      itemName: "Dynamite Shrimp",
      price: "$ 30.00",
      description: `Five shrimp, dynamite sauce, lettuce, green onion`
    },
  ]
  return (
    <div className={styles.menuContainer}>
      <div className={styles.restaurantDescription}>
        <p>
          Tranquilo Cuisine draws its name and soul from the peaceful Picos de Europa mountains in Spain. At 
          the heart of the restaurant's philosophy lies a simple doorway to serenity. Inside it, delicate 
          mountain lines on the Spain's northern range remind guests of nature's calm depth.
        </p>
      </div>

      <SectionsSlider />

      {
        [...new Set(items.map(item => item.section))].map(section => (
          <MenuSection 
            key={section} 
            sectionTitle={section} 
            items={items.filter(item => item.section === section)}
            id={section.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}
          />
        ))
      }

    </div>
  )
}

export default Menu
