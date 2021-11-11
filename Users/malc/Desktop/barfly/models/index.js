// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, OrderHistory, Order, User, Tab, Mixer, MixerCocktail, Cocktail, LiquorType, LiquorTypeShot, Shot, LiquorTypeCocktail, LiquorTypeSpecial, Special, MixerSpecial, Wine, Beer, Food, Menu, Employee, Bar } = initSchema(schema);

export {
  Note,
  OrderHistory,
  Order,
  User,
  Tab,
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
  Bar
};