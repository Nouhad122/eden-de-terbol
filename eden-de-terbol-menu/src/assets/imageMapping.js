import kaleSalad from './items/kale salad.jpg'
import caprizaSalad from './items/capriza salad.jpg'
import burrataSalad from './items/burata salad.jpg'
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
import spaghettiBolognese from './items/spagetti bolognese.jpg'
import tagliatelleAlfredo from './items/tagliatelle alfredo.jpg'
import quinoaSalad from './items/quinoa salad.jpg'
import crabSalad from './items/Crab Salad.jpg'
import creamShrimpPenne from './items/cream shrimp penne.jpg'
import penneArabiata from './items/penne arabiata.jpg'
import burgerPizza from './items/Burger Pizza.jpg'
import shrimpMushroomTrufflePizza from './items/Shrimp Mushroom Truffle Pizza.jpg'
import barbecueChickenPizza from './items/Barbecue Chicken Pizza.jpg'
import meatLoversPizza from './items/Meat Lovers Pizza.jpg'
import brazilianFilletSteak from './items/brazilian steak.jpg'
import meringueMixedBerries from './items/Meringue Mixed Berries.jpg'
import bocconciniPasta from './items/boconcini pasta.jpg'
import shrimpTomYum from './items/Shrimp Tom Yum.jpg'
import spaghettiAglioEolio from './items/Spaghetti Aglio e olio.jpg'
import shrimpCaesarSalad from './items/Shrimp Caesar Salad.jpg'
import dynamiteSalmon from './items/Dynamite Salmon.jpg'
import cannelloniSpinachPasta from './items/Cannelloni Spinach Pasta.jpg'
import australianEntrecoteSteak from './items/Australian entrecote steak.jpg'

export const imageMapping = {
  kaleSalad,
  caprizaSalad,
  burrataSalad,
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
  painPerdu,
  quinoaSalad,
  crabSalad,
  creamShrimpPenne,
  penneArabiata,
  burgerPizza,
  shrimpMushroomTrufflePizza,
  barbecueChickenPizza,
  meatLoversPizza,
  brazilianFilletSteak,
  meringueMixedBerries,
  shrimpTomYum,
  spaghettiAglioEolio,
  shrimpCaesarSalad,
  dynamiteSalmon,
  cannelloniSpinachPasta,
  australianEntrecoteSteak,
}

export const getImageByImageId = (imageId) => {
  return imageMapping[imageId] || null
}