import kaleSalad from './items/kale salad.jpg'
import caprizaSalad from './items/capriza salad.jpg'
import burataSalad from './items/burata salad.jpg'
import caesarSalad from './items/ceaser salad.jpg'
import edenSalad from './items/eden salad.jpg'
import mediterraneanSalad from './items/mediterranean salad.jpg'
import smokedSalmonBread from './items/smoked salmon bread.jpg'
import truffleFries from './items/truffle fries.jpg'
import bruschetta from './items/Bruschetta.jpg'
import curlyFries from './items/curly fries.jpg'
import mozzarellaSticks from './items/mozerella sticks.jpg'
import miniBurgers from './items/mini burgers.jpg'
import dynamiteShrimp from './items/dynamite shrimp.jpg'
import pumpkinSoup from './items/Pumpkin Soup.jpg'
import asparagusSoup from './items/Asparagus Soup.jpg'
import chefSpecial from './items/chef special.jpg'
import lasagna from './items/Lasagna.jpg'
import gnocchiPesto from './items/Gnocchi Pesto.jpg'
import truffleMushroom from './items/Truffle Mushroom.jpg'
import lemonSalmonSpaghetti from './items/lemon salmon spagetti.jpg'
import bocconciniPasta from './items/Bocconcini Pasta.jpg'
import margueritaPizza from './items/Marguerita pizza.jpg'
import edenPizza from './items/eden pizza.jpg'
import burrataPizza from './items/buratta pizza.jpg'
import mexicanPizza from './items/mexican pizza.jpg'
import pestoPizza from './items/pesto pizza.jpg'
import chickenMushroomTrufflePizza from './items/Chicken mushroom truffle pizza.jpg'
import pepperoniPizza from './items/pepperoni pizza.jpg'
import vegetarianPizza from './items/vegetarian pizza.jpg'
import chickenMushroom from './items/chicken mushroom.jpg'
import parmigianaChicken from './items/Parmigiana Chicken.jpg'
import grilledChicken from './items/Grilled Chicken.jpg'
import beefStroganoff from './items/Beef Stroganoff.jpg'
import australianFilletSteak from './items/Australian fillrt steak.jpg'
import salmonFillet from './items/Salmon fillet.jpg'
import nilePerchFilet from './items/Nile perch filet.jpg'
import risotto from './items/Risotto.jpg'
import edenCheeseCake from './items/Eden cheese cake.jpg'
import tiramisu from './items/Tiramisu.jpg'
import strawberryPannaCotta from './items/Strawberry Panna Cotta.jpg'
import caramelPannaCotta from './items/Caramel Panna Cotta.jpg'
import edenCrepe from './items/eden crepe.jpg'
import painPerdu from './items/Pain perdu.jpg'
import spaghettiBolognese from './items/spaghetti bolognese.jpg'
import tagliatelleAlfredo from './items/tagliatelle alfredo.jpg'

export const imageMapping = {
  kaleSalad,
  caprizaSalad,
  burataSalad,
  caesarSalad,
  edenSalad,
  mediterraneanHalloumiSalad: mediterraneanSalad,
  smokedSalmonBread,
  truffleFries,
  bruschetta,
  curlyFries,
  mozzarellaSticks,
  miniBurgersSilders: miniBurgers,
  dynamiteShrimp,
  pumpkinSoup,
  asparagusSoup,
  chefSpecialPasta: chefSpecial,
  spaghettiBolognese,
  tagliatelleAlfredo,
  lasagna,
  gnocchiPesto,
  truffleMushroom,
  lemonSalmonSpaghetti,
  bocconciniPasta,
  margueritaPizza,
  edenPizza,
  burrataPizza,
  mexicanPizza,
  pestoPizza,
  chickenMushroomTrufflePizza,
  pepperoniPizza,
  vegetarianPizza,
  chickenMushroom,
  parmigianaChicken,
  grilledChicken,
  beefStroganoff,
  australianFilletSteak,
  salmonFillet,
  nilePerchFilet,
  seafoodRisotto: risotto,
  edenCheeseCake,
  tiramisu,
  strawberryPannaCotta,
  caramelPannaCotta,
  edenCrepe,
  painPerdu
}

export const getImageByImageId = (imageId) => {
  return imageMapping[imageId] || null
}