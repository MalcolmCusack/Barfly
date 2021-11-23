/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNoteInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type ModelNoteConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Note = {
  __typename: "Note",
  id: string,
  name: string,
  description?: string | null,
  image?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNoteInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type DeleteNoteInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrderHistoryInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelOrderHistoryConditionInput = {
  and?: Array< ModelOrderHistoryConditionInput | null > | null,
  or?: Array< ModelOrderHistoryConditionInput | null > | null,
  not?: ModelOrderHistoryConditionInput | null,
};

export type OrderHistory = {
  __typename: "OrderHistory",
  id: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Orders?: ModelOrderConnection | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items?:  Array<Order | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  timestamp: number,
  items?: Array< string > | null,
  completed: boolean,
  userID?: string | null,
  tabID?: string | null,
  barID?: string | null,
  employeeID?: string | null,
  orderhistoryID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  User?: User | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  phone: string,
  profileImg?: string | null,
  location?: string | null,
  payment?: number | null,
  age: string,
  createdAt: number,
  name: string,
  address?: string | null,
  order?: string | null,
  orderHistory?: string | null,
  tabID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  updatedAt: string,
  Orders?: ModelOrderConnection | null,
  Tab?: Tab | null,
};

export type Tab = {
  __typename: "Tab",
  id: string,
  paid: boolean,
  tip?: string | null,
  timestamp: number,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Orders?: ModelOrderConnection | null,
  Users?: ModelUserConnection | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateOrderHistoryInput = {
  id: string,
  _version?: number | null,
};

export type DeleteOrderHistoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateMixerInput = {
  id?: string | null,
  name?: string | null,
  price?: number | null,
  request?: string | null,
  brand?: string | null,
  img?: string | null,
  specialID?: string | null,
  cocktailID?: string | null,
  shotID?: string | null,
  _version?: number | null,
};

export type ModelMixerConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  request?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  img?: ModelStringInput | null,
  specialID?: ModelIDInput | null,
  cocktailID?: ModelIDInput | null,
  shotID?: ModelIDInput | null,
  and?: Array< ModelMixerConditionInput | null > | null,
  or?: Array< ModelMixerConditionInput | null > | null,
  not?: ModelMixerConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Mixer = {
  __typename: "Mixer",
  id: string,
  name?: string | null,
  price?: number | null,
  request?: string | null,
  brand?: string | null,
  img?: string | null,
  specialID?: string | null,
  cocktailID?: string | null,
  shotID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  MixerCocktails?: ModelMixerCocktailConnection | null,
  MixerSpecials?: ModelMixerSpecialConnection | null,
};

export type ModelMixerCocktailConnection = {
  __typename: "ModelMixerCocktailConnection",
  items?:  Array<MixerCocktail | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type MixerCocktail = {
  __typename: "MixerCocktail",
  id: string,
  mixerID: string,
  cocktailID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  mixer: Mixer,
  cocktail: Cocktail,
};

export type Cocktail = {
  __typename: "Cocktail",
  id: string,
  name: string,
  price: number,
  description?: string | null,
  img?: string | null,
  menuID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Mixers?: ModelMixerConnection | null,
  LiquorTypes?: ModelLiquorTypeConnection | null,
  liquortypes?: ModelLiquorTypeCocktailConnection | null,
  mixers?: ModelMixerCocktailConnection | null,
};

export type ModelMixerConnection = {
  __typename: "ModelMixerConnection",
  items?:  Array<Mixer | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLiquorTypeConnection = {
  __typename: "ModelLiquorTypeConnection",
  items?:  Array<LiquorType | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type LiquorType = {
  __typename: "LiquorType",
  id: string,
  name?: string | null,
  well?: string | null,
  type?: string | null,
  price?: number | null,
  brand?: string | null,
  img?: string | null,
  specialID?: string | null,
  cocktailID?: string | null,
  shotID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  LiquorTypeShots?: ModelLiquorTypeShotConnection | null,
  LiquorTypeCocktails?: ModelLiquorTypeCocktailConnection | null,
  LiquorTypeSpecials?: ModelLiquorTypeSpecialConnection | null,
};

export type ModelLiquorTypeShotConnection = {
  __typename: "ModelLiquorTypeShotConnection",
  items?:  Array<LiquorTypeShot | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type LiquorTypeShot = {
  __typename: "LiquorTypeShot",
  id: string,
  liquortypeID: string,
  shotID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  liquortype: LiquorType,
  shot: Shot,
};

export type Shot = {
  __typename: "Shot",
  id: string,
  name: string,
  price: number,
  description?: string | null,
  img?: string | null,
  menuID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Mixers?: ModelMixerConnection | null,
  LiquorTypes?: ModelLiquorTypeConnection | null,
  liquortypes?: ModelLiquorTypeShotConnection | null,
};

export type ModelLiquorTypeCocktailConnection = {
  __typename: "ModelLiquorTypeCocktailConnection",
  items?:  Array<LiquorTypeCocktail | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type LiquorTypeCocktail = {
  __typename: "LiquorTypeCocktail",
  id: string,
  liquortypeID: string,
  cocktailID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  liquortype: LiquorType,
  cocktail: Cocktail,
};

export type ModelLiquorTypeSpecialConnection = {
  __typename: "ModelLiquorTypeSpecialConnection",
  items?:  Array<LiquorTypeSpecial | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type LiquorTypeSpecial = {
  __typename: "LiquorTypeSpecial",
  id: string,
  liquortypeID: string,
  specialID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  liquortype: LiquorType,
  special: Special,
};

export type Special = {
  __typename: "Special",
  id: string,
  name: string,
  price: number,
  img?: string | null,
  discription?: string | null,
  menuID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Mixers?: ModelMixerConnection | null,
  LiquorTypes?: ModelLiquorTypeConnection | null,
  liquortypes?: ModelLiquorTypeSpecialConnection | null,
  mixers?: ModelMixerSpecialConnection | null,
};

export type ModelMixerSpecialConnection = {
  __typename: "ModelMixerSpecialConnection",
  items?:  Array<MixerSpecial | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type MixerSpecial = {
  __typename: "MixerSpecial",
  id: string,
  mixerID: string,
  specialID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  mixer: Mixer,
  special: Special,
};

export type UpdateMixerInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  request?: string | null,
  brand?: string | null,
  img?: string | null,
  specialID?: string | null,
  cocktailID?: string | null,
  shotID?: string | null,
  _version?: number | null,
};

export type DeleteMixerInput = {
  id: string,
  _version?: number | null,
};

export type CreateLiquorTypeInput = {
  id?: string | null,
  name?: string | null,
  well?: string | null,
  type?: string | null,
  price?: number | null,
  brand?: string | null,
  img?: string | null,
  specialID?: string | null,
  cocktailID?: string | null,
  shotID?: string | null,
  _version?: number | null,
};

export type ModelLiquorTypeConditionInput = {
  name?: ModelStringInput | null,
  well?: ModelStringInput | null,
  type?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  brand?: ModelStringInput | null,
  img?: ModelStringInput | null,
  specialID?: ModelIDInput | null,
  cocktailID?: ModelIDInput | null,
  shotID?: ModelIDInput | null,
  and?: Array< ModelLiquorTypeConditionInput | null > | null,
  or?: Array< ModelLiquorTypeConditionInput | null > | null,
  not?: ModelLiquorTypeConditionInput | null,
};

export type UpdateLiquorTypeInput = {
  id: string,
  name?: string | null,
  well?: string | null,
  type?: string | null,
  price?: number | null,
  brand?: string | null,
  img?: string | null,
  specialID?: string | null,
  cocktailID?: string | null,
  shotID?: string | null,
  _version?: number | null,
};

export type DeleteLiquorTypeInput = {
  id: string,
  _version?: number | null,
};

export type CreateSpecialInput = {
  id?: string | null,
  name: string,
  price: number,
  img?: string | null,
  discription?: string | null,
  menuID?: string | null,
  _version?: number | null,
};

export type ModelSpecialConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  img?: ModelStringInput | null,
  discription?: ModelStringInput | null,
  menuID?: ModelIDInput | null,
  and?: Array< ModelSpecialConditionInput | null > | null,
  or?: Array< ModelSpecialConditionInput | null > | null,
  not?: ModelSpecialConditionInput | null,
};

export type UpdateSpecialInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  img?: string | null,
  discription?: string | null,
  menuID?: string | null,
  _version?: number | null,
};

export type DeleteSpecialInput = {
  id: string,
  _version?: number | null,
};

export type CreateWineInput = {
  id?: string | null,
  name: string,
  price: number,
  description?: string | null,
  img?: string | null,
  brand?: string | null,
  menuID?: string | null,
  _version?: number | null,
};

export type ModelWineConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  menuID?: ModelIDInput | null,
  and?: Array< ModelWineConditionInput | null > | null,
  or?: Array< ModelWineConditionInput | null > | null,
  not?: ModelWineConditionInput | null,
};

export type Wine = {
  __typename: "Wine",
  id: string,
  name: string,
  price: number,
  description?: string | null,
  img?: string | null,
  brand?: string | null,
  menuID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWineInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  description?: string | null,
  img?: string | null,
  brand?: string | null,
  menuID?: string | null,
  _version?: number | null,
};

export type DeleteWineInput = {
  id: string,
  _version?: number | null,
};

export type CreateBeerInput = {
  id?: string | null,
  name: string,
  price: number,
  request?: string | null,
  img?: string | null,
  brand?: string | null,
  menuID?: string | null,
  _version?: number | null,
};

export type ModelBeerConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  request?: ModelStringInput | null,
  img?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  menuID?: ModelIDInput | null,
  and?: Array< ModelBeerConditionInput | null > | null,
  or?: Array< ModelBeerConditionInput | null > | null,
  not?: ModelBeerConditionInput | null,
};

export type Beer = {
  __typename: "Beer",
  id: string,
  name: string,
  price: number,
  request?: string | null,
  img?: string | null,
  brand?: string | null,
  menuID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBeerInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  request?: string | null,
  img?: string | null,
  brand?: string | null,
  menuID?: string | null,
  _version?: number | null,
};

export type DeleteBeerInput = {
  id: string,
  _version?: number | null,
};

export type CreateCocktailInput = {
  id?: string | null,
  name: string,
  price: number,
  description?: string | null,
  img?: string | null,
  menuID?: string | null,
  _version?: number | null,
};

export type ModelCocktailConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  menuID?: ModelIDInput | null,
  and?: Array< ModelCocktailConditionInput | null > | null,
  or?: Array< ModelCocktailConditionInput | null > | null,
  not?: ModelCocktailConditionInput | null,
};

export type UpdateCocktailInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  description?: string | null,
  img?: string | null,
  menuID?: string | null,
  _version?: number | null,
};

export type DeleteCocktailInput = {
  id: string,
  _version?: number | null,
};

export type CreateShotInput = {
  id?: string | null,
  name: string,
  price: number,
  description?: string | null,
  img?: string | null,
  menuID?: string | null,
  _version?: number | null,
};

export type ModelShotConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  menuID?: ModelIDInput | null,
  and?: Array< ModelShotConditionInput | null > | null,
  or?: Array< ModelShotConditionInput | null > | null,
  not?: ModelShotConditionInput | null,
};

export type UpdateShotInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  description?: string | null,
  img?: string | null,
  menuID?: string | null,
  _version?: number | null,
};

export type DeleteShotInput = {
  id: string,
  _version?: number | null,
};

export type CreateFoodInput = {
  id?: string | null,
  name: string,
  price: number,
  type?: string | null,
  img?: string | null,
  description?: string | null,
  menuID?: string | null,
  _version?: number | null,
};

export type ModelFoodConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  type?: ModelStringInput | null,
  img?: ModelStringInput | null,
  description?: ModelStringInput | null,
  menuID?: ModelIDInput | null,
  and?: Array< ModelFoodConditionInput | null > | null,
  or?: Array< ModelFoodConditionInput | null > | null,
  not?: ModelFoodConditionInput | null,
};

export type Food = {
  __typename: "Food",
  id: string,
  name: string,
  price: number,
  type?: string | null,
  img?: string | null,
  description?: string | null,
  menuID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFoodInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  type?: string | null,
  img?: string | null,
  description?: string | null,
  menuID?: string | null,
  _version?: number | null,
};

export type DeleteFoodInput = {
  id: string,
  _version?: number | null,
};

export type CreateMenuInput = {
  id?: string | null,
  barID?: string | null,
  _version?: number | null,
};

export type ModelMenuConditionInput = {
  barID?: ModelIDInput | null,
  and?: Array< ModelMenuConditionInput | null > | null,
  or?: Array< ModelMenuConditionInput | null > | null,
  not?: ModelMenuConditionInput | null,
};

export type Menu = {
  __typename: "Menu",
  id: string,
  barID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Specials?: ModelSpecialConnection | null,
  Wines?: ModelWineConnection | null,
  Beers?: ModelBeerConnection | null,
  Cocktails?: ModelCocktailConnection | null,
  Shots?: ModelShotConnection | null,
  Foods?: ModelFoodConnection | null,
};

export type ModelSpecialConnection = {
  __typename: "ModelSpecialConnection",
  items?:  Array<Special | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWineConnection = {
  __typename: "ModelWineConnection",
  items?:  Array<Wine | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBeerConnection = {
  __typename: "ModelBeerConnection",
  items?:  Array<Beer | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCocktailConnection = {
  __typename: "ModelCocktailConnection",
  items?:  Array<Cocktail | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelShotConnection = {
  __typename: "ModelShotConnection",
  items?:  Array<Shot | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelFoodConnection = {
  __typename: "ModelFoodConnection",
  items?:  Array<Food | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateMenuInput = {
  id: string,
  barID?: string | null,
  _version?: number | null,
};

export type DeleteMenuInput = {
  id: string,
  _version?: number | null,
};

export type CreateEmployeeInput = {
  id?: string | null,
  name: string,
  barID?: string | null,
  _version?: number | null,
  employeeBarId?: string | null,
};

export type ModelEmployeeConditionInput = {
  name?: ModelStringInput | null,
  barID?: ModelIDInput | null,
  and?: Array< ModelEmployeeConditionInput | null > | null,
  or?: Array< ModelEmployeeConditionInput | null > | null,
  not?: ModelEmployeeConditionInput | null,
};

export type Employee = {
  __typename: "Employee",
  id: string,
  name: string,
  barID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Bar?: Bar | null,
  Orders?: ModelOrderConnection | null,
};

export type Bar = {
  __typename: "Bar",
  id: string,
  name: string,
  email: string,
  phone: string,
  profileImg?: string | null,
  location?: string | null,
  payment?: string | null,
  event?: string | null,
  createdAt: number,
  address?: string | null,
  nightSummary?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  updatedAt: string,
  Menu?: ModelMenuConnection | null,
  Employees?: ModelEmployeeConnection | null,
  Orders?: ModelOrderConnection | null,
};

export type ModelMenuConnection = {
  __typename: "ModelMenuConnection",
  items?:  Array<Menu | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection",
  items?:  Array<Employee | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateEmployeeInput = {
  id: string,
  name?: string | null,
  barID?: string | null,
  _version?: number | null,
  employeeBarId?: string | null,
};

export type DeleteEmployeeInput = {
  id: string,
  _version?: number | null,
};

export type CreateBarInput = {
  id?: string | null,
  name: string,
  email: string,
  phone: string,
  profileImg?: string | null,
  location?: string | null,
  payment?: string | null,
  event?: string | null,
  createdAt: number,
  address?: string | null,
  nightSummary?: string | null,
  _version?: number | null,
};

export type ModelBarConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  profileImg?: ModelStringInput | null,
  location?: ModelStringInput | null,
  payment?: ModelStringInput | null,
  event?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  address?: ModelStringInput | null,
  nightSummary?: ModelStringInput | null,
  and?: Array< ModelBarConditionInput | null > | null,
  or?: Array< ModelBarConditionInput | null > | null,
  not?: ModelBarConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateBarInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  profileImg?: string | null,
  location?: string | null,
  payment?: string | null,
  event?: string | null,
  createdAt?: number | null,
  address?: string | null,
  nightSummary?: string | null,
  _version?: number | null,
};

export type DeleteBarInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrderInput = {
  id?: string | null,
  timestamp: number,
  items?: Array< string > | null,
  completed: boolean,
  userID?: string | null,
  tabID?: string | null,
  barID?: string | null,
  employeeID?: string | null,
  orderhistoryID?: string | null,
  _version?: number | null,
  orderUserId?: string | null,
};

export type ModelOrderConditionInput = {
  timestamp?: ModelIntInput | null,
  items?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  tabID?: ModelIDInput | null,
  barID?: ModelIDInput | null,
  employeeID?: ModelIDInput | null,
  orderhistoryID?: ModelIDInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateOrderInput = {
  id: string,
  timestamp?: number | null,
  items?: Array< string > | null,
  completed?: boolean | null,
  userID?: string | null,
  tabID?: string | null,
  barID?: string | null,
  employeeID?: string | null,
  orderhistoryID?: string | null,
  _version?: number | null,
  orderUserId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
  _version?: number | null,
};

export type CreateTabInput = {
  id?: string | null,
  paid: boolean,
  tip?: string | null,
  timestamp: number,
  _version?: number | null,
};

export type ModelTabConditionInput = {
  paid?: ModelBooleanInput | null,
  tip?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelTabConditionInput | null > | null,
  or?: Array< ModelTabConditionInput | null > | null,
  not?: ModelTabConditionInput | null,
};

export type UpdateTabInput = {
  id: string,
  paid?: boolean | null,
  tip?: string | null,
  timestamp?: number | null,
  _version?: number | null,
};

export type DeleteTabInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  email: string,
  phone: string,
  profileImg?: string | null,
  location?: string | null,
  payment?: number | null,
  age: string,
  createdAt: number,
  name: string,
  address?: string | null,
  order?: string | null,
  orderHistory?: string | null,
  tabID?: string | null,
  _version?: number | null,
  userTabId?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  profileImg?: ModelStringInput | null,
  location?: ModelStringInput | null,
  payment?: ModelIntInput | null,
  age?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  order?: ModelStringInput | null,
  orderHistory?: ModelStringInput | null,
  tabID?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  phone?: string | null,
  profileImg?: string | null,
  location?: string | null,
  payment?: number | null,
  age?: string | null,
  createdAt?: number | null,
  name?: string | null,
  address?: string | null,
  order?: string | null,
  orderHistory?: string | null,
  tabID?: string | null,
  _version?: number | null,
  userTabId?: string | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateLiquorTypeShotInput = {
  id?: string | null,
  liquortypeID: string,
  shotID: string,
  _version?: number | null,
};

export type ModelLiquorTypeShotConditionInput = {
  liquortypeID?: ModelIDInput | null,
  shotID?: ModelIDInput | null,
  and?: Array< ModelLiquorTypeShotConditionInput | null > | null,
  or?: Array< ModelLiquorTypeShotConditionInput | null > | null,
  not?: ModelLiquorTypeShotConditionInput | null,
};

export type UpdateLiquorTypeShotInput = {
  id: string,
  liquortypeID?: string | null,
  shotID?: string | null,
  _version?: number | null,
};

export type DeleteLiquorTypeShotInput = {
  id: string,
  _version?: number | null,
};

export type CreateLiquorTypeCocktailInput = {
  id?: string | null,
  liquortypeID: string,
  cocktailID: string,
  _version?: number | null,
};

export type ModelLiquorTypeCocktailConditionInput = {
  liquortypeID?: ModelIDInput | null,
  cocktailID?: ModelIDInput | null,
  and?: Array< ModelLiquorTypeCocktailConditionInput | null > | null,
  or?: Array< ModelLiquorTypeCocktailConditionInput | null > | null,
  not?: ModelLiquorTypeCocktailConditionInput | null,
};

export type UpdateLiquorTypeCocktailInput = {
  id: string,
  liquortypeID?: string | null,
  cocktailID?: string | null,
  _version?: number | null,
};

export type DeleteLiquorTypeCocktailInput = {
  id: string,
  _version?: number | null,
};

export type CreateLiquorTypeSpecialInput = {
  id?: string | null,
  liquortypeID: string,
  specialID: string,
  _version?: number | null,
};

export type ModelLiquorTypeSpecialConditionInput = {
  liquortypeID?: ModelIDInput | null,
  specialID?: ModelIDInput | null,
  and?: Array< ModelLiquorTypeSpecialConditionInput | null > | null,
  or?: Array< ModelLiquorTypeSpecialConditionInput | null > | null,
  not?: ModelLiquorTypeSpecialConditionInput | null,
};

export type UpdateLiquorTypeSpecialInput = {
  id: string,
  liquortypeID?: string | null,
  specialID?: string | null,
  _version?: number | null,
};

export type DeleteLiquorTypeSpecialInput = {
  id: string,
  _version?: number | null,
};

export type CreateMixerCocktailInput = {
  id?: string | null,
  mixerID: string,
  cocktailID: string,
  _version?: number | null,
};

export type ModelMixerCocktailConditionInput = {
  mixerID?: ModelIDInput | null,
  cocktailID?: ModelIDInput | null,
  and?: Array< ModelMixerCocktailConditionInput | null > | null,
  or?: Array< ModelMixerCocktailConditionInput | null > | null,
  not?: ModelMixerCocktailConditionInput | null,
};

export type UpdateMixerCocktailInput = {
  id: string,
  mixerID?: string | null,
  cocktailID?: string | null,
  _version?: number | null,
};

export type DeleteMixerCocktailInput = {
  id: string,
  _version?: number | null,
};

export type CreateMixerSpecialInput = {
  id?: string | null,
  mixerID: string,
  specialID: string,
  _version?: number | null,
};

export type ModelMixerSpecialConditionInput = {
  mixerID?: ModelIDInput | null,
  specialID?: ModelIDInput | null,
  and?: Array< ModelMixerSpecialConditionInput | null > | null,
  or?: Array< ModelMixerSpecialConditionInput | null > | null,
  not?: ModelMixerSpecialConditionInput | null,
};

export type UpdateMixerSpecialInput = {
  id: string,
  mixerID?: string | null,
  specialID?: string | null,
  _version?: number | null,
};

export type DeleteMixerSpecialInput = {
  id: string,
  _version?: number | null,
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items?:  Array<Note | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrderHistoryFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelOrderHistoryFilterInput | null > | null,
  or?: Array< ModelOrderHistoryFilterInput | null > | null,
  not?: ModelOrderHistoryFilterInput | null,
};

export type ModelOrderHistoryConnection = {
  __typename: "ModelOrderHistoryConnection",
  items?:  Array<OrderHistory | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMixerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  request?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  img?: ModelStringInput | null,
  specialID?: ModelIDInput | null,
  cocktailID?: ModelIDInput | null,
  shotID?: ModelIDInput | null,
  and?: Array< ModelMixerFilterInput | null > | null,
  or?: Array< ModelMixerFilterInput | null > | null,
  not?: ModelMixerFilterInput | null,
};

export type ModelLiquorTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  well?: ModelStringInput | null,
  type?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  brand?: ModelStringInput | null,
  img?: ModelStringInput | null,
  specialID?: ModelIDInput | null,
  cocktailID?: ModelIDInput | null,
  shotID?: ModelIDInput | null,
  and?: Array< ModelLiquorTypeFilterInput | null > | null,
  or?: Array< ModelLiquorTypeFilterInput | null > | null,
  not?: ModelLiquorTypeFilterInput | null,
};

export type ModelSpecialFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  img?: ModelStringInput | null,
  discription?: ModelStringInput | null,
  menuID?: ModelIDInput | null,
  and?: Array< ModelSpecialFilterInput | null > | null,
  or?: Array< ModelSpecialFilterInput | null > | null,
  not?: ModelSpecialFilterInput | null,
};

export type ModelWineFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  menuID?: ModelIDInput | null,
  and?: Array< ModelWineFilterInput | null > | null,
  or?: Array< ModelWineFilterInput | null > | null,
  not?: ModelWineFilterInput | null,
};

export type ModelBeerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  request?: ModelStringInput | null,
  img?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  menuID?: ModelIDInput | null,
  and?: Array< ModelBeerFilterInput | null > | null,
  or?: Array< ModelBeerFilterInput | null > | null,
  not?: ModelBeerFilterInput | null,
};

export type ModelCocktailFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  menuID?: ModelIDInput | null,
  and?: Array< ModelCocktailFilterInput | null > | null,
  or?: Array< ModelCocktailFilterInput | null > | null,
  not?: ModelCocktailFilterInput | null,
};

export type ModelShotFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  img?: ModelStringInput | null,
  menuID?: ModelIDInput | null,
  and?: Array< ModelShotFilterInput | null > | null,
  or?: Array< ModelShotFilterInput | null > | null,
  not?: ModelShotFilterInput | null,
};

export type ModelFoodFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  type?: ModelStringInput | null,
  img?: ModelStringInput | null,
  description?: ModelStringInput | null,
  menuID?: ModelIDInput | null,
  and?: Array< ModelFoodFilterInput | null > | null,
  or?: Array< ModelFoodFilterInput | null > | null,
  not?: ModelFoodFilterInput | null,
};

export type ModelMenuFilterInput = {
  id?: ModelIDInput | null,
  barID?: ModelIDInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  barID?: ModelIDInput | null,
  and?: Array< ModelEmployeeFilterInput | null > | null,
  or?: Array< ModelEmployeeFilterInput | null > | null,
  not?: ModelEmployeeFilterInput | null,
};

export type ModelBarFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  profileImg?: ModelStringInput | null,
  location?: ModelStringInput | null,
  payment?: ModelStringInput | null,
  event?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  address?: ModelStringInput | null,
  nightSummary?: ModelStringInput | null,
  and?: Array< ModelBarFilterInput | null > | null,
  or?: Array< ModelBarFilterInput | null > | null,
  not?: ModelBarFilterInput | null,
};

export type ModelBarConnection = {
  __typename: "ModelBarConnection",
  items?:  Array<Bar | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  timestamp?: ModelIntInput | null,
  items?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  tabID?: ModelIDInput | null,
  barID?: ModelIDInput | null,
  employeeID?: ModelIDInput | null,
  orderhistoryID?: ModelIDInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelTabFilterInput = {
  id?: ModelIDInput | null,
  paid?: ModelBooleanInput | null,
  tip?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelTabFilterInput | null > | null,
  or?: Array< ModelTabFilterInput | null > | null,
  not?: ModelTabFilterInput | null,
};

export type ModelTabConnection = {
  __typename: "ModelTabConnection",
  items?:  Array<Tab | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  profileImg?: ModelStringInput | null,
  location?: ModelStringInput | null,
  payment?: ModelIntInput | null,
  age?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  order?: ModelStringInput | null,
  orderHistory?: ModelStringInput | null,
  tabID?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelLiquorTypeShotFilterInput = {
  id?: ModelIDInput | null,
  liquortypeID?: ModelIDInput | null,
  shotID?: ModelIDInput | null,
  and?: Array< ModelLiquorTypeShotFilterInput | null > | null,
  or?: Array< ModelLiquorTypeShotFilterInput | null > | null,
  not?: ModelLiquorTypeShotFilterInput | null,
};

export type ModelLiquorTypeCocktailFilterInput = {
  id?: ModelIDInput | null,
  liquortypeID?: ModelIDInput | null,
  cocktailID?: ModelIDInput | null,
  and?: Array< ModelLiquorTypeCocktailFilterInput | null > | null,
  or?: Array< ModelLiquorTypeCocktailFilterInput | null > | null,
  not?: ModelLiquorTypeCocktailFilterInput | null,
};

export type ModelLiquorTypeSpecialFilterInput = {
  id?: ModelIDInput | null,
  liquortypeID?: ModelIDInput | null,
  specialID?: ModelIDInput | null,
  and?: Array< ModelLiquorTypeSpecialFilterInput | null > | null,
  or?: Array< ModelLiquorTypeSpecialFilterInput | null > | null,
  not?: ModelLiquorTypeSpecialFilterInput | null,
};

export type ModelMixerCocktailFilterInput = {
  id?: ModelIDInput | null,
  mixerID?: ModelIDInput | null,
  cocktailID?: ModelIDInput | null,
  and?: Array< ModelMixerCocktailFilterInput | null > | null,
  or?: Array< ModelMixerCocktailFilterInput | null > | null,
  not?: ModelMixerCocktailFilterInput | null,
};

export type ModelMixerSpecialFilterInput = {
  id?: ModelIDInput | null,
  mixerID?: ModelIDInput | null,
  specialID?: ModelIDInput | null,
  and?: Array< ModelMixerSpecialFilterInput | null > | null,
  or?: Array< ModelMixerSpecialFilterInput | null > | null,
  not?: ModelMixerSpecialFilterInput | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderHistoryMutationVariables = {
  input: CreateOrderHistoryInput,
  condition?: ModelOrderHistoryConditionInput | null,
};

export type CreateOrderHistoryMutation = {
  createOrderHistory?:  {
    __typename: "OrderHistory",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateOrderHistoryMutationVariables = {
  input: UpdateOrderHistoryInput,
  condition?: ModelOrderHistoryConditionInput | null,
};

export type UpdateOrderHistoryMutation = {
  updateOrderHistory?:  {
    __typename: "OrderHistory",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteOrderHistoryMutationVariables = {
  input: DeleteOrderHistoryInput,
  condition?: ModelOrderHistoryConditionInput | null,
};

export type DeleteOrderHistoryMutation = {
  deleteOrderHistory?:  {
    __typename: "OrderHistory",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateMixerMutationVariables = {
  input: CreateMixerInput,
  condition?: ModelMixerConditionInput | null,
};

export type CreateMixerMutation = {
  createMixer?:  {
    __typename: "Mixer",
    id: string,
    name?: string | null,
    price?: number | null,
    request?: string | null,
    brand?: string | null,
    img?: string | null,
    specialID?: string | null,
    cocktailID?: string | null,
    shotID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    MixerCocktails?:  {
      __typename: "ModelMixerCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MixerSpecials?:  {
      __typename: "ModelMixerSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateMixerMutationVariables = {
  input: UpdateMixerInput,
  condition?: ModelMixerConditionInput | null,
};

export type UpdateMixerMutation = {
  updateMixer?:  {
    __typename: "Mixer",
    id: string,
    name?: string | null,
    price?: number | null,
    request?: string | null,
    brand?: string | null,
    img?: string | null,
    specialID?: string | null,
    cocktailID?: string | null,
    shotID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    MixerCocktails?:  {
      __typename: "ModelMixerCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MixerSpecials?:  {
      __typename: "ModelMixerSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteMixerMutationVariables = {
  input: DeleteMixerInput,
  condition?: ModelMixerConditionInput | null,
};

export type DeleteMixerMutation = {
  deleteMixer?:  {
    __typename: "Mixer",
    id: string,
    name?: string | null,
    price?: number | null,
    request?: string | null,
    brand?: string | null,
    img?: string | null,
    specialID?: string | null,
    cocktailID?: string | null,
    shotID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    MixerCocktails?:  {
      __typename: "ModelMixerCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MixerSpecials?:  {
      __typename: "ModelMixerSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateLiquorTypeMutationVariables = {
  input: CreateLiquorTypeInput,
  condition?: ModelLiquorTypeConditionInput | null,
};

export type CreateLiquorTypeMutation = {
  createLiquorType?:  {
    __typename: "LiquorType",
    id: string,
    name?: string | null,
    well?: string | null,
    type?: string | null,
    price?: number | null,
    brand?: string | null,
    img?: string | null,
    specialID?: string | null,
    cocktailID?: string | null,
    shotID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LiquorTypeShots?:  {
      __typename: "ModelLiquorTypeShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypeCocktails?:  {
      __typename: "ModelLiquorTypeCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypeSpecials?:  {
      __typename: "ModelLiquorTypeSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateLiquorTypeMutationVariables = {
  input: UpdateLiquorTypeInput,
  condition?: ModelLiquorTypeConditionInput | null,
};

export type UpdateLiquorTypeMutation = {
  updateLiquorType?:  {
    __typename: "LiquorType",
    id: string,
    name?: string | null,
    well?: string | null,
    type?: string | null,
    price?: number | null,
    brand?: string | null,
    img?: string | null,
    specialID?: string | null,
    cocktailID?: string | null,
    shotID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LiquorTypeShots?:  {
      __typename: "ModelLiquorTypeShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypeCocktails?:  {
      __typename: "ModelLiquorTypeCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypeSpecials?:  {
      __typename: "ModelLiquorTypeSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteLiquorTypeMutationVariables = {
  input: DeleteLiquorTypeInput,
  condition?: ModelLiquorTypeConditionInput | null,
};

export type DeleteLiquorTypeMutation = {
  deleteLiquorType?:  {
    __typename: "LiquorType",
    id: string,
    name?: string | null,
    well?: string | null,
    type?: string | null,
    price?: number | null,
    brand?: string | null,
    img?: string | null,
    specialID?: string | null,
    cocktailID?: string | null,
    shotID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LiquorTypeShots?:  {
      __typename: "ModelLiquorTypeShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypeCocktails?:  {
      __typename: "ModelLiquorTypeCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypeSpecials?:  {
      __typename: "ModelLiquorTypeSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateSpecialMutationVariables = {
  input: CreateSpecialInput,
  condition?: ModelSpecialConditionInput | null,
};

export type CreateSpecialMutation = {
  createSpecial?:  {
    __typename: "Special",
    id: string,
    name: string,
    price: number,
    img?: string | null,
    discription?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mixers?:  {
      __typename: "ModelMixerSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateSpecialMutationVariables = {
  input: UpdateSpecialInput,
  condition?: ModelSpecialConditionInput | null,
};

export type UpdateSpecialMutation = {
  updateSpecial?:  {
    __typename: "Special",
    id: string,
    name: string,
    price: number,
    img?: string | null,
    discription?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mixers?:  {
      __typename: "ModelMixerSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteSpecialMutationVariables = {
  input: DeleteSpecialInput,
  condition?: ModelSpecialConditionInput | null,
};

export type DeleteSpecialMutation = {
  deleteSpecial?:  {
    __typename: "Special",
    id: string,
    name: string,
    price: number,
    img?: string | null,
    discription?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mixers?:  {
      __typename: "ModelMixerSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateWineMutationVariables = {
  input: CreateWineInput,
  condition?: ModelWineConditionInput | null,
};

export type CreateWineMutation = {
  createWine?:  {
    __typename: "Wine",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    brand?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWineMutationVariables = {
  input: UpdateWineInput,
  condition?: ModelWineConditionInput | null,
};

export type UpdateWineMutation = {
  updateWine?:  {
    __typename: "Wine",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    brand?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWineMutationVariables = {
  input: DeleteWineInput,
  condition?: ModelWineConditionInput | null,
};

export type DeleteWineMutation = {
  deleteWine?:  {
    __typename: "Wine",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    brand?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBeerMutationVariables = {
  input: CreateBeerInput,
  condition?: ModelBeerConditionInput | null,
};

export type CreateBeerMutation = {
  createBeer?:  {
    __typename: "Beer",
    id: string,
    name: string,
    price: number,
    request?: string | null,
    img?: string | null,
    brand?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBeerMutationVariables = {
  input: UpdateBeerInput,
  condition?: ModelBeerConditionInput | null,
};

export type UpdateBeerMutation = {
  updateBeer?:  {
    __typename: "Beer",
    id: string,
    name: string,
    price: number,
    request?: string | null,
    img?: string | null,
    brand?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBeerMutationVariables = {
  input: DeleteBeerInput,
  condition?: ModelBeerConditionInput | null,
};

export type DeleteBeerMutation = {
  deleteBeer?:  {
    __typename: "Beer",
    id: string,
    name: string,
    price: number,
    request?: string | null,
    img?: string | null,
    brand?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCocktailMutationVariables = {
  input: CreateCocktailInput,
  condition?: ModelCocktailConditionInput | null,
};

export type CreateCocktailMutation = {
  createCocktail?:  {
    __typename: "Cocktail",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mixers?:  {
      __typename: "ModelMixerCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateCocktailMutationVariables = {
  input: UpdateCocktailInput,
  condition?: ModelCocktailConditionInput | null,
};

export type UpdateCocktailMutation = {
  updateCocktail?:  {
    __typename: "Cocktail",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mixers?:  {
      __typename: "ModelMixerCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteCocktailMutationVariables = {
  input: DeleteCocktailInput,
  condition?: ModelCocktailConditionInput | null,
};

export type DeleteCocktailMutation = {
  deleteCocktail?:  {
    __typename: "Cocktail",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mixers?:  {
      __typename: "ModelMixerCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateShotMutationVariables = {
  input: CreateShotInput,
  condition?: ModelShotConditionInput | null,
};

export type CreateShotMutation = {
  createShot?:  {
    __typename: "Shot",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateShotMutationVariables = {
  input: UpdateShotInput,
  condition?: ModelShotConditionInput | null,
};

export type UpdateShotMutation = {
  updateShot?:  {
    __typename: "Shot",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteShotMutationVariables = {
  input: DeleteShotInput,
  condition?: ModelShotConditionInput | null,
};

export type DeleteShotMutation = {
  deleteShot?:  {
    __typename: "Shot",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateFoodMutationVariables = {
  input: CreateFoodInput,
  condition?: ModelFoodConditionInput | null,
};

export type CreateFoodMutation = {
  createFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    price: number,
    type?: string | null,
    img?: string | null,
    description?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFoodMutationVariables = {
  input: UpdateFoodInput,
  condition?: ModelFoodConditionInput | null,
};

export type UpdateFoodMutation = {
  updateFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    price: number,
    type?: string | null,
    img?: string | null,
    description?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFoodMutationVariables = {
  input: DeleteFoodInput,
  condition?: ModelFoodConditionInput | null,
};

export type DeleteFoodMutation = {
  deleteFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    price: number,
    type?: string | null,
    img?: string | null,
    description?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMenuMutationVariables = {
  input: CreateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type CreateMenuMutation = {
  createMenu?:  {
    __typename: "Menu",
    id: string,
    barID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Specials?:  {
      __typename: "ModelSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Wines?:  {
      __typename: "ModelWineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Beers?:  {
      __typename: "ModelBeerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Cocktails?:  {
      __typename: "ModelCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Shots?:  {
      __typename: "ModelShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Foods?:  {
      __typename: "ModelFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateMenuMutationVariables = {
  input: UpdateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type UpdateMenuMutation = {
  updateMenu?:  {
    __typename: "Menu",
    id: string,
    barID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Specials?:  {
      __typename: "ModelSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Wines?:  {
      __typename: "ModelWineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Beers?:  {
      __typename: "ModelBeerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Cocktails?:  {
      __typename: "ModelCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Shots?:  {
      __typename: "ModelShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Foods?:  {
      __typename: "ModelFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteMenuMutationVariables = {
  input: DeleteMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type DeleteMenuMutation = {
  deleteMenu?:  {
    __typename: "Menu",
    id: string,
    barID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Specials?:  {
      __typename: "ModelSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Wines?:  {
      __typename: "ModelWineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Beers?:  {
      __typename: "ModelBeerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Cocktails?:  {
      __typename: "ModelCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Shots?:  {
      __typename: "ModelShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Foods?:  {
      __typename: "ModelFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateEmployeeMutationVariables = {
  input: CreateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type CreateEmployeeMutation = {
  createEmployee?:  {
    __typename: "Employee",
    id: string,
    name: string,
    barID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Bar?:  {
      __typename: "Bar",
      id: string,
      name: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: string | null,
      event?: string | null,
      createdAt: number,
      address?: string | null,
      nightSummary?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateEmployeeMutationVariables = {
  input: UpdateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type UpdateEmployeeMutation = {
  updateEmployee?:  {
    __typename: "Employee",
    id: string,
    name: string,
    barID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Bar?:  {
      __typename: "Bar",
      id: string,
      name: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: string | null,
      event?: string | null,
      createdAt: number,
      address?: string | null,
      nightSummary?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteEmployeeMutationVariables = {
  input: DeleteEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type DeleteEmployeeMutation = {
  deleteEmployee?:  {
    __typename: "Employee",
    id: string,
    name: string,
    barID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Bar?:  {
      __typename: "Bar",
      id: string,
      name: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: string | null,
      event?: string | null,
      createdAt: number,
      address?: string | null,
      nightSummary?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateBarMutationVariables = {
  input: CreateBarInput,
  condition?: ModelBarConditionInput | null,
};

export type CreateBarMutation = {
  createBar?:  {
    __typename: "Bar",
    id: string,
    name: string,
    email: string,
    phone: string,
    profileImg?: string | null,
    location?: string | null,
    payment?: string | null,
    event?: string | null,
    createdAt: number,
    address?: string | null,
    nightSummary?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    Menu?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Employees?:  {
      __typename: "ModelEmployeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateBarMutationVariables = {
  input: UpdateBarInput,
  condition?: ModelBarConditionInput | null,
};

export type UpdateBarMutation = {
  updateBar?:  {
    __typename: "Bar",
    id: string,
    name: string,
    email: string,
    phone: string,
    profileImg?: string | null,
    location?: string | null,
    payment?: string | null,
    event?: string | null,
    createdAt: number,
    address?: string | null,
    nightSummary?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    Menu?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Employees?:  {
      __typename: "ModelEmployeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteBarMutationVariables = {
  input: DeleteBarInput,
  condition?: ModelBarConditionInput | null,
};

export type DeleteBarMutation = {
  deleteBar?:  {
    __typename: "Bar",
    id: string,
    name: string,
    email: string,
    phone: string,
    profileImg?: string | null,
    location?: string | null,
    payment?: string | null,
    event?: string | null,
    createdAt: number,
    address?: string | null,
    nightSummary?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    Menu?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Employees?:  {
      __typename: "ModelEmployeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    timestamp: number,
    items?: Array< string > | null,
    completed: boolean,
    userID?: string | null,
    tabID?: string | null,
    barID?: string | null,
    employeeID?: string | null,
    orderhistoryID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    User?:  {
      __typename: "User",
      id: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: number | null,
      age: string,
      createdAt: number,
      name: string,
      address?: string | null,
      order?: string | null,
      orderHistory?: string | null,
      tabID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    timestamp: number,
    items?: Array< string > | null,
    completed: boolean,
    userID?: string | null,
    tabID?: string | null,
    barID?: string | null,
    employeeID?: string | null,
    orderhistoryID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    User?:  {
      __typename: "User",
      id: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: number | null,
      age: string,
      createdAt: number,
      name: string,
      address?: string | null,
      order?: string | null,
      orderHistory?: string | null,
      tabID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    timestamp: number,
    items?: Array< string > | null,
    completed: boolean,
    userID?: string | null,
    tabID?: string | null,
    barID?: string | null,
    employeeID?: string | null,
    orderhistoryID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    User?:  {
      __typename: "User",
      id: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: number | null,
      age: string,
      createdAt: number,
      name: string,
      address?: string | null,
      order?: string | null,
      orderHistory?: string | null,
      tabID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateTabMutationVariables = {
  input: CreateTabInput,
  condition?: ModelTabConditionInput | null,
};

export type CreateTabMutation = {
  createTab?:  {
    __typename: "Tab",
    id: string,
    paid: boolean,
    tip?: string | null,
    timestamp: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateTabMutationVariables = {
  input: UpdateTabInput,
  condition?: ModelTabConditionInput | null,
};

export type UpdateTabMutation = {
  updateTab?:  {
    __typename: "Tab",
    id: string,
    paid: boolean,
    tip?: string | null,
    timestamp: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteTabMutationVariables = {
  input: DeleteTabInput,
  condition?: ModelTabConditionInput | null,
};

export type DeleteTabMutation = {
  deleteTab?:  {
    __typename: "Tab",
    id: string,
    paid: boolean,
    tip?: string | null,
    timestamp: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone: string,
    profileImg?: string | null,
    location?: string | null,
    payment?: number | null,
    age: string,
    createdAt: number,
    name: string,
    address?: string | null,
    order?: string | null,
    orderHistory?: string | null,
    tabID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Tab?:  {
      __typename: "Tab",
      id: string,
      paid: boolean,
      tip?: string | null,
      timestamp: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone: string,
    profileImg?: string | null,
    location?: string | null,
    payment?: number | null,
    age: string,
    createdAt: number,
    name: string,
    address?: string | null,
    order?: string | null,
    orderHistory?: string | null,
    tabID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Tab?:  {
      __typename: "Tab",
      id: string,
      paid: boolean,
      tip?: string | null,
      timestamp: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone: string,
    profileImg?: string | null,
    location?: string | null,
    payment?: number | null,
    age: string,
    createdAt: number,
    name: string,
    address?: string | null,
    order?: string | null,
    orderHistory?: string | null,
    tabID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Tab?:  {
      __typename: "Tab",
      id: string,
      paid: boolean,
      tip?: string | null,
      timestamp: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateLiquorTypeShotMutationVariables = {
  input: CreateLiquorTypeShotInput,
  condition?: ModelLiquorTypeShotConditionInput | null,
};

export type CreateLiquorTypeShotMutation = {
  createLiquorTypeShot?:  {
    __typename: "LiquorTypeShot",
    id: string,
    liquortypeID: string,
    shotID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    shot:  {
      __typename: "Shot",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateLiquorTypeShotMutationVariables = {
  input: UpdateLiquorTypeShotInput,
  condition?: ModelLiquorTypeShotConditionInput | null,
};

export type UpdateLiquorTypeShotMutation = {
  updateLiquorTypeShot?:  {
    __typename: "LiquorTypeShot",
    id: string,
    liquortypeID: string,
    shotID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    shot:  {
      __typename: "Shot",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteLiquorTypeShotMutationVariables = {
  input: DeleteLiquorTypeShotInput,
  condition?: ModelLiquorTypeShotConditionInput | null,
};

export type DeleteLiquorTypeShotMutation = {
  deleteLiquorTypeShot?:  {
    __typename: "LiquorTypeShot",
    id: string,
    liquortypeID: string,
    shotID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    shot:  {
      __typename: "Shot",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type CreateLiquorTypeCocktailMutationVariables = {
  input: CreateLiquorTypeCocktailInput,
  condition?: ModelLiquorTypeCocktailConditionInput | null,
};

export type CreateLiquorTypeCocktailMutation = {
  createLiquorTypeCocktail?:  {
    __typename: "LiquorTypeCocktail",
    id: string,
    liquortypeID: string,
    cocktailID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cocktail:  {
      __typename: "Cocktail",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateLiquorTypeCocktailMutationVariables = {
  input: UpdateLiquorTypeCocktailInput,
  condition?: ModelLiquorTypeCocktailConditionInput | null,
};

export type UpdateLiquorTypeCocktailMutation = {
  updateLiquorTypeCocktail?:  {
    __typename: "LiquorTypeCocktail",
    id: string,
    liquortypeID: string,
    cocktailID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cocktail:  {
      __typename: "Cocktail",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteLiquorTypeCocktailMutationVariables = {
  input: DeleteLiquorTypeCocktailInput,
  condition?: ModelLiquorTypeCocktailConditionInput | null,
};

export type DeleteLiquorTypeCocktailMutation = {
  deleteLiquorTypeCocktail?:  {
    __typename: "LiquorTypeCocktail",
    id: string,
    liquortypeID: string,
    cocktailID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cocktail:  {
      __typename: "Cocktail",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type CreateLiquorTypeSpecialMutationVariables = {
  input: CreateLiquorTypeSpecialInput,
  condition?: ModelLiquorTypeSpecialConditionInput | null,
};

export type CreateLiquorTypeSpecialMutation = {
  createLiquorTypeSpecial?:  {
    __typename: "LiquorTypeSpecial",
    id: string,
    liquortypeID: string,
    specialID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    special:  {
      __typename: "Special",
      id: string,
      name: string,
      price: number,
      img?: string | null,
      discription?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateLiquorTypeSpecialMutationVariables = {
  input: UpdateLiquorTypeSpecialInput,
  condition?: ModelLiquorTypeSpecialConditionInput | null,
};

export type UpdateLiquorTypeSpecialMutation = {
  updateLiquorTypeSpecial?:  {
    __typename: "LiquorTypeSpecial",
    id: string,
    liquortypeID: string,
    specialID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    special:  {
      __typename: "Special",
      id: string,
      name: string,
      price: number,
      img?: string | null,
      discription?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteLiquorTypeSpecialMutationVariables = {
  input: DeleteLiquorTypeSpecialInput,
  condition?: ModelLiquorTypeSpecialConditionInput | null,
};

export type DeleteLiquorTypeSpecialMutation = {
  deleteLiquorTypeSpecial?:  {
    __typename: "LiquorTypeSpecial",
    id: string,
    liquortypeID: string,
    specialID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    special:  {
      __typename: "Special",
      id: string,
      name: string,
      price: number,
      img?: string | null,
      discription?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type CreateMixerCocktailMutationVariables = {
  input: CreateMixerCocktailInput,
  condition?: ModelMixerCocktailConditionInput | null,
};

export type CreateMixerCocktailMutation = {
  createMixerCocktail?:  {
    __typename: "MixerCocktail",
    id: string,
    mixerID: string,
    cocktailID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    mixer:  {
      __typename: "Mixer",
      id: string,
      name?: string | null,
      price?: number | null,
      request?: string | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cocktail:  {
      __typename: "Cocktail",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateMixerCocktailMutationVariables = {
  input: UpdateMixerCocktailInput,
  condition?: ModelMixerCocktailConditionInput | null,
};

export type UpdateMixerCocktailMutation = {
  updateMixerCocktail?:  {
    __typename: "MixerCocktail",
    id: string,
    mixerID: string,
    cocktailID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    mixer:  {
      __typename: "Mixer",
      id: string,
      name?: string | null,
      price?: number | null,
      request?: string | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cocktail:  {
      __typename: "Cocktail",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteMixerCocktailMutationVariables = {
  input: DeleteMixerCocktailInput,
  condition?: ModelMixerCocktailConditionInput | null,
};

export type DeleteMixerCocktailMutation = {
  deleteMixerCocktail?:  {
    __typename: "MixerCocktail",
    id: string,
    mixerID: string,
    cocktailID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    mixer:  {
      __typename: "Mixer",
      id: string,
      name?: string | null,
      price?: number | null,
      request?: string | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cocktail:  {
      __typename: "Cocktail",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type CreateMixerSpecialMutationVariables = {
  input: CreateMixerSpecialInput,
  condition?: ModelMixerSpecialConditionInput | null,
};

export type CreateMixerSpecialMutation = {
  createMixerSpecial?:  {
    __typename: "MixerSpecial",
    id: string,
    mixerID: string,
    specialID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    mixer:  {
      __typename: "Mixer",
      id: string,
      name?: string | null,
      price?: number | null,
      request?: string | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    special:  {
      __typename: "Special",
      id: string,
      name: string,
      price: number,
      img?: string | null,
      discription?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateMixerSpecialMutationVariables = {
  input: UpdateMixerSpecialInput,
  condition?: ModelMixerSpecialConditionInput | null,
};

export type UpdateMixerSpecialMutation = {
  updateMixerSpecial?:  {
    __typename: "MixerSpecial",
    id: string,
    mixerID: string,
    specialID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    mixer:  {
      __typename: "Mixer",
      id: string,
      name?: string | null,
      price?: number | null,
      request?: string | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    special:  {
      __typename: "Special",
      id: string,
      name: string,
      price: number,
      img?: string | null,
      discription?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteMixerSpecialMutationVariables = {
  input: DeleteMixerSpecialInput,
  condition?: ModelMixerSpecialConditionInput | null,
};

export type DeleteMixerSpecialMutation = {
  deleteMixerSpecial?:  {
    __typename: "MixerSpecial",
    id: string,
    mixerID: string,
    specialID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    mixer:  {
      __typename: "Mixer",
      id: string,
      name?: string | null,
      price?: number | null,
      request?: string | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    special:  {
      __typename: "Special",
      id: string,
      name: string,
      price: number,
      img?: string | null,
      discription?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type SyncNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNotesQuery = {
  syncNotes?:  {
    __typename: "ModelNoteConnection",
    items?:  Array< {
      __typename: "Note",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items?:  Array< {
      __typename: "Note",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderHistoryQueryVariables = {
  id: string,
};

export type GetOrderHistoryQuery = {
  getOrderHistory?:  {
    __typename: "OrderHistory",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListOrderHistoriesQueryVariables = {
  filter?: ModelOrderHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderHistoriesQuery = {
  listOrderHistories?:  {
    __typename: "ModelOrderHistoryConnection",
    items?:  Array< {
      __typename: "OrderHistory",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrderHistoriesQueryVariables = {
  filter?: ModelOrderHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrderHistoriesQuery = {
  syncOrderHistories?:  {
    __typename: "ModelOrderHistoryConnection",
    items?:  Array< {
      __typename: "OrderHistory",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMixerQueryVariables = {
  id: string,
};

export type GetMixerQuery = {
  getMixer?:  {
    __typename: "Mixer",
    id: string,
    name?: string | null,
    price?: number | null,
    request?: string | null,
    brand?: string | null,
    img?: string | null,
    specialID?: string | null,
    cocktailID?: string | null,
    shotID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    MixerCocktails?:  {
      __typename: "ModelMixerCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MixerSpecials?:  {
      __typename: "ModelMixerSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListMixersQueryVariables = {
  filter?: ModelMixerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMixersQuery = {
  listMixers?:  {
    __typename: "ModelMixerConnection",
    items?:  Array< {
      __typename: "Mixer",
      id: string,
      name?: string | null,
      price?: number | null,
      request?: string | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMixersQueryVariables = {
  filter?: ModelMixerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMixersQuery = {
  syncMixers?:  {
    __typename: "ModelMixerConnection",
    items?:  Array< {
      __typename: "Mixer",
      id: string,
      name?: string | null,
      price?: number | null,
      request?: string | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLiquorTypeQueryVariables = {
  id: string,
};

export type GetLiquorTypeQuery = {
  getLiquorType?:  {
    __typename: "LiquorType",
    id: string,
    name?: string | null,
    well?: string | null,
    type?: string | null,
    price?: number | null,
    brand?: string | null,
    img?: string | null,
    specialID?: string | null,
    cocktailID?: string | null,
    shotID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LiquorTypeShots?:  {
      __typename: "ModelLiquorTypeShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypeCocktails?:  {
      __typename: "ModelLiquorTypeCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypeSpecials?:  {
      __typename: "ModelLiquorTypeSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListLiquorTypesQueryVariables = {
  filter?: ModelLiquorTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLiquorTypesQuery = {
  listLiquorTypes?:  {
    __typename: "ModelLiquorTypeConnection",
    items?:  Array< {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLiquorTypesQueryVariables = {
  filter?: ModelLiquorTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLiquorTypesQuery = {
  syncLiquorTypes?:  {
    __typename: "ModelLiquorTypeConnection",
    items?:  Array< {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSpecialQueryVariables = {
  id: string,
};

export type GetSpecialQuery = {
  getSpecial?:  {
    __typename: "Special",
    id: string,
    name: string,
    price: number,
    img?: string | null,
    discription?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mixers?:  {
      __typename: "ModelMixerSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListSpecialsQueryVariables = {
  filter?: ModelSpecialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpecialsQuery = {
  listSpecials?:  {
    __typename: "ModelSpecialConnection",
    items?:  Array< {
      __typename: "Special",
      id: string,
      name: string,
      price: number,
      img?: string | null,
      discription?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSpecialsQueryVariables = {
  filter?: ModelSpecialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSpecialsQuery = {
  syncSpecials?:  {
    __typename: "ModelSpecialConnection",
    items?:  Array< {
      __typename: "Special",
      id: string,
      name: string,
      price: number,
      img?: string | null,
      discription?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWineQueryVariables = {
  id: string,
};

export type GetWineQuery = {
  getWine?:  {
    __typename: "Wine",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    brand?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWinesQueryVariables = {
  filter?: ModelWineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWinesQuery = {
  listWines?:  {
    __typename: "ModelWineConnection",
    items?:  Array< {
      __typename: "Wine",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      brand?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWinesQueryVariables = {
  filter?: ModelWineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWinesQuery = {
  syncWines?:  {
    __typename: "ModelWineConnection",
    items?:  Array< {
      __typename: "Wine",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      brand?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBeerQueryVariables = {
  id: string,
};

export type GetBeerQuery = {
  getBeer?:  {
    __typename: "Beer",
    id: string,
    name: string,
    price: number,
    request?: string | null,
    img?: string | null,
    brand?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBeersQueryVariables = {
  filter?: ModelBeerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBeersQuery = {
  listBeers?:  {
    __typename: "ModelBeerConnection",
    items?:  Array< {
      __typename: "Beer",
      id: string,
      name: string,
      price: number,
      request?: string | null,
      img?: string | null,
      brand?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBeersQueryVariables = {
  filter?: ModelBeerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBeersQuery = {
  syncBeers?:  {
    __typename: "ModelBeerConnection",
    items?:  Array< {
      __typename: "Beer",
      id: string,
      name: string,
      price: number,
      request?: string | null,
      img?: string | null,
      brand?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCocktailQueryVariables = {
  id: string,
};

export type GetCocktailQuery = {
  getCocktail?:  {
    __typename: "Cocktail",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mixers?:  {
      __typename: "ModelMixerCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListCocktailsQueryVariables = {
  filter?: ModelCocktailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCocktailsQuery = {
  listCocktails?:  {
    __typename: "ModelCocktailConnection",
    items?:  Array< {
      __typename: "Cocktail",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCocktailsQueryVariables = {
  filter?: ModelCocktailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCocktailsQuery = {
  syncCocktails?:  {
    __typename: "ModelCocktailConnection",
    items?:  Array< {
      __typename: "Cocktail",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetShotQueryVariables = {
  id: string,
};

export type GetShotQuery = {
  getShot?:  {
    __typename: "Shot",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListShotsQueryVariables = {
  filter?: ModelShotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShotsQuery = {
  listShots?:  {
    __typename: "ModelShotConnection",
    items?:  Array< {
      __typename: "Shot",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncShotsQueryVariables = {
  filter?: ModelShotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncShotsQuery = {
  syncShots?:  {
    __typename: "ModelShotConnection",
    items?:  Array< {
      __typename: "Shot",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFoodQueryVariables = {
  id: string,
};

export type GetFoodQuery = {
  getFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    price: number,
    type?: string | null,
    img?: string | null,
    description?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFoodsQueryVariables = {
  filter?: ModelFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFoodsQuery = {
  listFoods?:  {
    __typename: "ModelFoodConnection",
    items?:  Array< {
      __typename: "Food",
      id: string,
      name: string,
      price: number,
      type?: string | null,
      img?: string | null,
      description?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFoodsQueryVariables = {
  filter?: ModelFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFoodsQuery = {
  syncFoods?:  {
    __typename: "ModelFoodConnection",
    items?:  Array< {
      __typename: "Food",
      id: string,
      name: string,
      price: number,
      type?: string | null,
      img?: string | null,
      description?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMenuQueryVariables = {
  id: string,
};

export type GetMenuQuery = {
  getMenu?:  {
    __typename: "Menu",
    id: string,
    barID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Specials?:  {
      __typename: "ModelSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Wines?:  {
      __typename: "ModelWineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Beers?:  {
      __typename: "ModelBeerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Cocktails?:  {
      __typename: "ModelCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Shots?:  {
      __typename: "ModelShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Foods?:  {
      __typename: "ModelFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListMenusQueryVariables = {
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenusQuery = {
  listMenus?:  {
    __typename: "ModelMenuConnection",
    items?:  Array< {
      __typename: "Menu",
      id: string,
      barID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMenusQueryVariables = {
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMenusQuery = {
  syncMenus?:  {
    __typename: "ModelMenuConnection",
    items?:  Array< {
      __typename: "Menu",
      id: string,
      barID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEmployeeQueryVariables = {
  id: string,
};

export type GetEmployeeQuery = {
  getEmployee?:  {
    __typename: "Employee",
    id: string,
    name: string,
    barID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Bar?:  {
      __typename: "Bar",
      id: string,
      name: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: string | null,
      event?: string | null,
      createdAt: number,
      address?: string | null,
      nightSummary?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListEmployeesQueryVariables = {
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeesQuery = {
  listEmployees?:  {
    __typename: "ModelEmployeeConnection",
    items?:  Array< {
      __typename: "Employee",
      id: string,
      name: string,
      barID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEmployeesQueryVariables = {
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEmployeesQuery = {
  syncEmployees?:  {
    __typename: "ModelEmployeeConnection",
    items?:  Array< {
      __typename: "Employee",
      id: string,
      name: string,
      barID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBarQueryVariables = {
  id: string,
};

export type GetBarQuery = {
  getBar?:  {
    __typename: "Bar",
    id: string,
    name: string,
    email: string,
    phone: string,
    profileImg?: string | null,
    location?: string | null,
    payment?: string | null,
    event?: string | null,
    createdAt: number,
    address?: string | null,
    nightSummary?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    Menu?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Employees?:  {
      __typename: "ModelEmployeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListBarsQueryVariables = {
  filter?: ModelBarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBarsQuery = {
  listBars?:  {
    __typename: "ModelBarConnection",
    items?:  Array< {
      __typename: "Bar",
      id: string,
      name: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: string | null,
      event?: string | null,
      createdAt: number,
      address?: string | null,
      nightSummary?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBarsQueryVariables = {
  filter?: ModelBarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBarsQuery = {
  syncBars?:  {
    __typename: "ModelBarConnection",
    items?:  Array< {
      __typename: "Bar",
      id: string,
      name: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: string | null,
      event?: string | null,
      createdAt: number,
      address?: string | null,
      nightSummary?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    timestamp: number,
    items?: Array< string > | null,
    completed: boolean,
    userID?: string | null,
    tabID?: string | null,
    barID?: string | null,
    employeeID?: string | null,
    orderhistoryID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    User?:  {
      __typename: "User",
      id: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: number | null,
      age: string,
      createdAt: number,
      name: string,
      address?: string | null,
      order?: string | null,
      orderHistory?: string | null,
      tabID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      timestamp: number,
      items?: Array< string > | null,
      completed: boolean,
      userID?: string | null,
      tabID?: string | null,
      barID?: string | null,
      employeeID?: string | null,
      orderhistoryID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrdersQuery = {
  syncOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      timestamp: number,
      items?: Array< string > | null,
      completed: boolean,
      userID?: string | null,
      tabID?: string | null,
      barID?: string | null,
      employeeID?: string | null,
      orderhistoryID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTabQueryVariables = {
  id: string,
};

export type GetTabQuery = {
  getTab?:  {
    __typename: "Tab",
    id: string,
    paid: boolean,
    tip?: string | null,
    timestamp: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListTabsQueryVariables = {
  filter?: ModelTabFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTabsQuery = {
  listTabs?:  {
    __typename: "ModelTabConnection",
    items?:  Array< {
      __typename: "Tab",
      id: string,
      paid: boolean,
      tip?: string | null,
      timestamp: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTabsQueryVariables = {
  filter?: ModelTabFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTabsQuery = {
  syncTabs?:  {
    __typename: "ModelTabConnection",
    items?:  Array< {
      __typename: "Tab",
      id: string,
      paid: boolean,
      tip?: string | null,
      timestamp: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone: string,
    profileImg?: string | null,
    location?: string | null,
    payment?: number | null,
    age: string,
    createdAt: number,
    name: string,
    address?: string | null,
    order?: string | null,
    orderHistory?: string | null,
    tabID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Tab?:  {
      __typename: "Tab",
      id: string,
      paid: boolean,
      tip?: string | null,
      timestamp: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: number | null,
      age: string,
      createdAt: number,
      name: string,
      address?: string | null,
      order?: string | null,
      orderHistory?: string | null,
      tabID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: number | null,
      age: string,
      createdAt: number,
      name: string,
      address?: string | null,
      order?: string | null,
      orderHistory?: string | null,
      tabID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLiquorTypeShotsQueryVariables = {
  filter?: ModelLiquorTypeShotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLiquorTypeShotsQuery = {
  syncLiquorTypeShots?:  {
    __typename: "ModelLiquorTypeShotConnection",
    items?:  Array< {
      __typename: "LiquorTypeShot",
      id: string,
      liquortypeID: string,
      shotID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLiquorTypeCocktailsQueryVariables = {
  filter?: ModelLiquorTypeCocktailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLiquorTypeCocktailsQuery = {
  syncLiquorTypeCocktails?:  {
    __typename: "ModelLiquorTypeCocktailConnection",
    items?:  Array< {
      __typename: "LiquorTypeCocktail",
      id: string,
      liquortypeID: string,
      cocktailID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLiquorTypeSpecialsQueryVariables = {
  filter?: ModelLiquorTypeSpecialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLiquorTypeSpecialsQuery = {
  syncLiquorTypeSpecials?:  {
    __typename: "ModelLiquorTypeSpecialConnection",
    items?:  Array< {
      __typename: "LiquorTypeSpecial",
      id: string,
      liquortypeID: string,
      specialID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMixerCocktailsQueryVariables = {
  filter?: ModelMixerCocktailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMixerCocktailsQuery = {
  syncMixerCocktails?:  {
    __typename: "ModelMixerCocktailConnection",
    items?:  Array< {
      __typename: "MixerCocktail",
      id: string,
      mixerID: string,
      cocktailID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMixerSpecialsQueryVariables = {
  filter?: ModelMixerSpecialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMixerSpecialsQuery = {
  syncMixerSpecials?:  {
    __typename: "ModelMixerSpecialConnection",
    items?:  Array< {
      __typename: "MixerSpecial",
      id: string,
      mixerID: string,
      specialID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderHistorySubscription = {
  onCreateOrderHistory?:  {
    __typename: "OrderHistory",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateOrderHistorySubscription = {
  onUpdateOrderHistory?:  {
    __typename: "OrderHistory",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteOrderHistorySubscription = {
  onDeleteOrderHistory?:  {
    __typename: "OrderHistory",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateMixerSubscription = {
  onCreateMixer?:  {
    __typename: "Mixer",
    id: string,
    name?: string | null,
    price?: number | null,
    request?: string | null,
    brand?: string | null,
    img?: string | null,
    specialID?: string | null,
    cocktailID?: string | null,
    shotID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    MixerCocktails?:  {
      __typename: "ModelMixerCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MixerSpecials?:  {
      __typename: "ModelMixerSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateMixerSubscription = {
  onUpdateMixer?:  {
    __typename: "Mixer",
    id: string,
    name?: string | null,
    price?: number | null,
    request?: string | null,
    brand?: string | null,
    img?: string | null,
    specialID?: string | null,
    cocktailID?: string | null,
    shotID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    MixerCocktails?:  {
      __typename: "ModelMixerCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MixerSpecials?:  {
      __typename: "ModelMixerSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteMixerSubscription = {
  onDeleteMixer?:  {
    __typename: "Mixer",
    id: string,
    name?: string | null,
    price?: number | null,
    request?: string | null,
    brand?: string | null,
    img?: string | null,
    specialID?: string | null,
    cocktailID?: string | null,
    shotID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    MixerCocktails?:  {
      __typename: "ModelMixerCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MixerSpecials?:  {
      __typename: "ModelMixerSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateLiquorTypeSubscription = {
  onCreateLiquorType?:  {
    __typename: "LiquorType",
    id: string,
    name?: string | null,
    well?: string | null,
    type?: string | null,
    price?: number | null,
    brand?: string | null,
    img?: string | null,
    specialID?: string | null,
    cocktailID?: string | null,
    shotID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LiquorTypeShots?:  {
      __typename: "ModelLiquorTypeShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypeCocktails?:  {
      __typename: "ModelLiquorTypeCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypeSpecials?:  {
      __typename: "ModelLiquorTypeSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateLiquorTypeSubscription = {
  onUpdateLiquorType?:  {
    __typename: "LiquorType",
    id: string,
    name?: string | null,
    well?: string | null,
    type?: string | null,
    price?: number | null,
    brand?: string | null,
    img?: string | null,
    specialID?: string | null,
    cocktailID?: string | null,
    shotID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LiquorTypeShots?:  {
      __typename: "ModelLiquorTypeShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypeCocktails?:  {
      __typename: "ModelLiquorTypeCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypeSpecials?:  {
      __typename: "ModelLiquorTypeSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteLiquorTypeSubscription = {
  onDeleteLiquorType?:  {
    __typename: "LiquorType",
    id: string,
    name?: string | null,
    well?: string | null,
    type?: string | null,
    price?: number | null,
    brand?: string | null,
    img?: string | null,
    specialID?: string | null,
    cocktailID?: string | null,
    shotID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LiquorTypeShots?:  {
      __typename: "ModelLiquorTypeShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypeCocktails?:  {
      __typename: "ModelLiquorTypeCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypeSpecials?:  {
      __typename: "ModelLiquorTypeSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateSpecialSubscription = {
  onCreateSpecial?:  {
    __typename: "Special",
    id: string,
    name: string,
    price: number,
    img?: string | null,
    discription?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mixers?:  {
      __typename: "ModelMixerSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateSpecialSubscription = {
  onUpdateSpecial?:  {
    __typename: "Special",
    id: string,
    name: string,
    price: number,
    img?: string | null,
    discription?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mixers?:  {
      __typename: "ModelMixerSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteSpecialSubscription = {
  onDeleteSpecial?:  {
    __typename: "Special",
    id: string,
    name: string,
    price: number,
    img?: string | null,
    discription?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mixers?:  {
      __typename: "ModelMixerSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateWineSubscription = {
  onCreateWine?:  {
    __typename: "Wine",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    brand?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWineSubscription = {
  onUpdateWine?:  {
    __typename: "Wine",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    brand?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWineSubscription = {
  onDeleteWine?:  {
    __typename: "Wine",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    brand?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBeerSubscription = {
  onCreateBeer?:  {
    __typename: "Beer",
    id: string,
    name: string,
    price: number,
    request?: string | null,
    img?: string | null,
    brand?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBeerSubscription = {
  onUpdateBeer?:  {
    __typename: "Beer",
    id: string,
    name: string,
    price: number,
    request?: string | null,
    img?: string | null,
    brand?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBeerSubscription = {
  onDeleteBeer?:  {
    __typename: "Beer",
    id: string,
    name: string,
    price: number,
    request?: string | null,
    img?: string | null,
    brand?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCocktailSubscription = {
  onCreateCocktail?:  {
    __typename: "Cocktail",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mixers?:  {
      __typename: "ModelMixerCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateCocktailSubscription = {
  onUpdateCocktail?:  {
    __typename: "Cocktail",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mixers?:  {
      __typename: "ModelMixerCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteCocktailSubscription = {
  onDeleteCocktail?:  {
    __typename: "Cocktail",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mixers?:  {
      __typename: "ModelMixerCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateShotSubscription = {
  onCreateShot?:  {
    __typename: "Shot",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateShotSubscription = {
  onUpdateShot?:  {
    __typename: "Shot",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteShotSubscription = {
  onDeleteShot?:  {
    __typename: "Shot",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    img?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Mixers?:  {
      __typename: "ModelMixerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LiquorTypes?:  {
      __typename: "ModelLiquorTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    liquortypes?:  {
      __typename: "ModelLiquorTypeShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateFoodSubscription = {
  onCreateFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    price: number,
    type?: string | null,
    img?: string | null,
    description?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFoodSubscription = {
  onUpdateFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    price: number,
    type?: string | null,
    img?: string | null,
    description?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFoodSubscription = {
  onDeleteFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    price: number,
    type?: string | null,
    img?: string | null,
    description?: string | null,
    menuID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMenuSubscription = {
  onCreateMenu?:  {
    __typename: "Menu",
    id: string,
    barID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Specials?:  {
      __typename: "ModelSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Wines?:  {
      __typename: "ModelWineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Beers?:  {
      __typename: "ModelBeerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Cocktails?:  {
      __typename: "ModelCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Shots?:  {
      __typename: "ModelShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Foods?:  {
      __typename: "ModelFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateMenuSubscription = {
  onUpdateMenu?:  {
    __typename: "Menu",
    id: string,
    barID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Specials?:  {
      __typename: "ModelSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Wines?:  {
      __typename: "ModelWineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Beers?:  {
      __typename: "ModelBeerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Cocktails?:  {
      __typename: "ModelCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Shots?:  {
      __typename: "ModelShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Foods?:  {
      __typename: "ModelFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteMenuSubscription = {
  onDeleteMenu?:  {
    __typename: "Menu",
    id: string,
    barID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Specials?:  {
      __typename: "ModelSpecialConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Wines?:  {
      __typename: "ModelWineConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Beers?:  {
      __typename: "ModelBeerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Cocktails?:  {
      __typename: "ModelCocktailConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Shots?:  {
      __typename: "ModelShotConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Foods?:  {
      __typename: "ModelFoodConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee?:  {
    __typename: "Employee",
    id: string,
    name: string,
    barID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Bar?:  {
      __typename: "Bar",
      id: string,
      name: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: string | null,
      event?: string | null,
      createdAt: number,
      address?: string | null,
      nightSummary?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateEmployeeSubscription = {
  onUpdateEmployee?:  {
    __typename: "Employee",
    id: string,
    name: string,
    barID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Bar?:  {
      __typename: "Bar",
      id: string,
      name: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: string | null,
      event?: string | null,
      createdAt: number,
      address?: string | null,
      nightSummary?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteEmployeeSubscription = {
  onDeleteEmployee?:  {
    __typename: "Employee",
    id: string,
    name: string,
    barID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Bar?:  {
      __typename: "Bar",
      id: string,
      name: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: string | null,
      event?: string | null,
      createdAt: number,
      address?: string | null,
      nightSummary?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateBarSubscription = {
  onCreateBar?:  {
    __typename: "Bar",
    id: string,
    name: string,
    email: string,
    phone: string,
    profileImg?: string | null,
    location?: string | null,
    payment?: string | null,
    event?: string | null,
    createdAt: number,
    address?: string | null,
    nightSummary?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    Menu?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Employees?:  {
      __typename: "ModelEmployeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateBarSubscription = {
  onUpdateBar?:  {
    __typename: "Bar",
    id: string,
    name: string,
    email: string,
    phone: string,
    profileImg?: string | null,
    location?: string | null,
    payment?: string | null,
    event?: string | null,
    createdAt: number,
    address?: string | null,
    nightSummary?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    Menu?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Employees?:  {
      __typename: "ModelEmployeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteBarSubscription = {
  onDeleteBar?:  {
    __typename: "Bar",
    id: string,
    name: string,
    email: string,
    phone: string,
    profileImg?: string | null,
    location?: string | null,
    payment?: string | null,
    event?: string | null,
    createdAt: number,
    address?: string | null,
    nightSummary?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    Menu?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Employees?:  {
      __typename: "ModelEmployeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    timestamp: number,
    items?: Array< string > | null,
    completed: boolean,
    userID?: string | null,
    tabID?: string | null,
    barID?: string | null,
    employeeID?: string | null,
    orderhistoryID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    User?:  {
      __typename: "User",
      id: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: number | null,
      age: string,
      createdAt: number,
      name: string,
      address?: string | null,
      order?: string | null,
      orderHistory?: string | null,
      tabID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    timestamp: number,
    items?: Array< string > | null,
    completed: boolean,
    userID?: string | null,
    tabID?: string | null,
    barID?: string | null,
    employeeID?: string | null,
    orderhistoryID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    User?:  {
      __typename: "User",
      id: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: number | null,
      age: string,
      createdAt: number,
      name: string,
      address?: string | null,
      order?: string | null,
      orderHistory?: string | null,
      tabID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    timestamp: number,
    items?: Array< string > | null,
    completed: boolean,
    userID?: string | null,
    tabID?: string | null,
    barID?: string | null,
    employeeID?: string | null,
    orderhistoryID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    User?:  {
      __typename: "User",
      id: string,
      email: string,
      phone: string,
      profileImg?: string | null,
      location?: string | null,
      payment?: number | null,
      age: string,
      createdAt: number,
      name: string,
      address?: string | null,
      order?: string | null,
      orderHistory?: string | null,
      tabID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateTabSubscription = {
  onCreateTab?:  {
    __typename: "Tab",
    id: string,
    paid: boolean,
    tip?: string | null,
    timestamp: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateTabSubscription = {
  onUpdateTab?:  {
    __typename: "Tab",
    id: string,
    paid: boolean,
    tip?: string | null,
    timestamp: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteTabSubscription = {
  onDeleteTab?:  {
    __typename: "Tab",
    id: string,
    paid: boolean,
    tip?: string | null,
    timestamp: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone: string,
    profileImg?: string | null,
    location?: string | null,
    payment?: number | null,
    age: string,
    createdAt: number,
    name: string,
    address?: string | null,
    order?: string | null,
    orderHistory?: string | null,
    tabID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Tab?:  {
      __typename: "Tab",
      id: string,
      paid: boolean,
      tip?: string | null,
      timestamp: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone: string,
    profileImg?: string | null,
    location?: string | null,
    payment?: number | null,
    age: string,
    createdAt: number,
    name: string,
    address?: string | null,
    order?: string | null,
    orderHistory?: string | null,
    tabID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Tab?:  {
      __typename: "Tab",
      id: string,
      paid: boolean,
      tip?: string | null,
      timestamp: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone: string,
    profileImg?: string | null,
    location?: string | null,
    payment?: number | null,
    age: string,
    createdAt: number,
    name: string,
    address?: string | null,
    order?: string | null,
    orderHistory?: string | null,
    tabID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Tab?:  {
      __typename: "Tab",
      id: string,
      paid: boolean,
      tip?: string | null,
      timestamp: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateLiquorTypeShotSubscription = {
  onCreateLiquorTypeShot?:  {
    __typename: "LiquorTypeShot",
    id: string,
    liquortypeID: string,
    shotID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    shot:  {
      __typename: "Shot",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateLiquorTypeShotSubscription = {
  onUpdateLiquorTypeShot?:  {
    __typename: "LiquorTypeShot",
    id: string,
    liquortypeID: string,
    shotID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    shot:  {
      __typename: "Shot",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteLiquorTypeShotSubscription = {
  onDeleteLiquorTypeShot?:  {
    __typename: "LiquorTypeShot",
    id: string,
    liquortypeID: string,
    shotID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    shot:  {
      __typename: "Shot",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnCreateLiquorTypeCocktailSubscription = {
  onCreateLiquorTypeCocktail?:  {
    __typename: "LiquorTypeCocktail",
    id: string,
    liquortypeID: string,
    cocktailID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cocktail:  {
      __typename: "Cocktail",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateLiquorTypeCocktailSubscription = {
  onUpdateLiquorTypeCocktail?:  {
    __typename: "LiquorTypeCocktail",
    id: string,
    liquortypeID: string,
    cocktailID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cocktail:  {
      __typename: "Cocktail",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteLiquorTypeCocktailSubscription = {
  onDeleteLiquorTypeCocktail?:  {
    __typename: "LiquorTypeCocktail",
    id: string,
    liquortypeID: string,
    cocktailID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cocktail:  {
      __typename: "Cocktail",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnCreateLiquorTypeSpecialSubscription = {
  onCreateLiquorTypeSpecial?:  {
    __typename: "LiquorTypeSpecial",
    id: string,
    liquortypeID: string,
    specialID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    special:  {
      __typename: "Special",
      id: string,
      name: string,
      price: number,
      img?: string | null,
      discription?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateLiquorTypeSpecialSubscription = {
  onUpdateLiquorTypeSpecial?:  {
    __typename: "LiquorTypeSpecial",
    id: string,
    liquortypeID: string,
    specialID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    special:  {
      __typename: "Special",
      id: string,
      name: string,
      price: number,
      img?: string | null,
      discription?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteLiquorTypeSpecialSubscription = {
  onDeleteLiquorTypeSpecial?:  {
    __typename: "LiquorTypeSpecial",
    id: string,
    liquortypeID: string,
    specialID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    liquortype:  {
      __typename: "LiquorType",
      id: string,
      name?: string | null,
      well?: string | null,
      type?: string | null,
      price?: number | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    special:  {
      __typename: "Special",
      id: string,
      name: string,
      price: number,
      img?: string | null,
      discription?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnCreateMixerCocktailSubscription = {
  onCreateMixerCocktail?:  {
    __typename: "MixerCocktail",
    id: string,
    mixerID: string,
    cocktailID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    mixer:  {
      __typename: "Mixer",
      id: string,
      name?: string | null,
      price?: number | null,
      request?: string | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cocktail:  {
      __typename: "Cocktail",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateMixerCocktailSubscription = {
  onUpdateMixerCocktail?:  {
    __typename: "MixerCocktail",
    id: string,
    mixerID: string,
    cocktailID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    mixer:  {
      __typename: "Mixer",
      id: string,
      name?: string | null,
      price?: number | null,
      request?: string | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cocktail:  {
      __typename: "Cocktail",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteMixerCocktailSubscription = {
  onDeleteMixerCocktail?:  {
    __typename: "MixerCocktail",
    id: string,
    mixerID: string,
    cocktailID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    mixer:  {
      __typename: "Mixer",
      id: string,
      name?: string | null,
      price?: number | null,
      request?: string | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cocktail:  {
      __typename: "Cocktail",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      img?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnCreateMixerSpecialSubscription = {
  onCreateMixerSpecial?:  {
    __typename: "MixerSpecial",
    id: string,
    mixerID: string,
    specialID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    mixer:  {
      __typename: "Mixer",
      id: string,
      name?: string | null,
      price?: number | null,
      request?: string | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    special:  {
      __typename: "Special",
      id: string,
      name: string,
      price: number,
      img?: string | null,
      discription?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateMixerSpecialSubscription = {
  onUpdateMixerSpecial?:  {
    __typename: "MixerSpecial",
    id: string,
    mixerID: string,
    specialID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    mixer:  {
      __typename: "Mixer",
      id: string,
      name?: string | null,
      price?: number | null,
      request?: string | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    special:  {
      __typename: "Special",
      id: string,
      name: string,
      price: number,
      img?: string | null,
      discription?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteMixerSpecialSubscription = {
  onDeleteMixerSpecial?:  {
    __typename: "MixerSpecial",
    id: string,
    mixerID: string,
    specialID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    mixer:  {
      __typename: "Mixer",
      id: string,
      name?: string | null,
      price?: number | null,
      request?: string | null,
      brand?: string | null,
      img?: string | null,
      specialID?: string | null,
      cocktailID?: string | null,
      shotID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    special:  {
      __typename: "Special",
      id: string,
      name: string,
      price: number,
      img?: string | null,
      discription?: string | null,
      menuID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};
