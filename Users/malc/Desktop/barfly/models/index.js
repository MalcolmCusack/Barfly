// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Mixer, MixerCocktail, Cocktail, LiquorType, LiquorTypeShot, Shot, LiquorTypeCocktail, LiquorTypeSpecial, Special, MixerSpecial, Wine, Beer, Food, Menu, Employee, Order, User, Bar } = initSchema(schema);

export {
  Mixer,
  MixerCocktail,
  Cocktail,
  LiquorType,
  LiquorTypeShot,
  Shot,
  LiquorTypeCocktail,
  LiquorTypeSpecial,
  Special,
  MixerSpecial,
  Wine,
  Beer,
  Food,
  Menu,
  Employee,
  Order,
  User,
  Bar
};