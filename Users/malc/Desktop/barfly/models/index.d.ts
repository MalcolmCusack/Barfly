import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MixerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MixerCocktailMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CocktailMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LiquorTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LiquorTypeShotMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ShotMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LiquorTypeCocktailMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LiquorTypeSpecialMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SpecialMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MixerSpecialMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WineMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BeerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FoodMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MenuMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EmployeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'updatedAt';
}

type BarMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Mixer {
  readonly id: string;
  readonly name?: string;
  readonly price?: number;
  readonly brand?: string;
  readonly img?: string;
  readonly specialID?: string;
  readonly cocktailID?: string;
  readonly shotID?: string;
  readonly MixerCocktails?: (MixerCocktail | null)[];
  readonly MixerSpecials?: (MixerSpecial | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Mixer, MixerMetaData>);
  static copyOf(source: Mixer, mutator: (draft: MutableModel<Mixer, MixerMetaData>) => MutableModel<Mixer, MixerMetaData> | void): Mixer;
}

export declare class MixerCocktail {
  readonly id: string;
  readonly mixer: Mixer;
  readonly cocktail: Cocktail;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MixerCocktail, MixerCocktailMetaData>);
  static copyOf(source: MixerCocktail, mutator: (draft: MutableModel<MixerCocktail, MixerCocktailMetaData>) => MutableModel<MixerCocktail, MixerCocktailMetaData> | void): MixerCocktail;
}

export declare class Cocktail {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly description?: string;
  readonly img?: string;
  readonly LiquorTypes?: (LiquorType | null)[];
  readonly Mixers?: (Mixer | null)[];
  readonly menuID?: string;
  readonly liquortypes?: (LiquorTypeCocktail | null)[];
  readonly mixers?: (MixerCocktail | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Cocktail, CocktailMetaData>);
  static copyOf(source: Cocktail, mutator: (draft: MutableModel<Cocktail, CocktailMetaData>) => MutableModel<Cocktail, CocktailMetaData> | void): Cocktail;
}

export declare class LiquorType {
  readonly id: string;
  readonly name?: string;
  readonly type?: string;
  readonly price?: number;
  readonly brand?: string;
  readonly img?: string;
  readonly specialID?: string;
  readonly cocktailID?: string;
  readonly shotID?: string;
  readonly LiquorTypeShots?: (LiquorTypeShot | null)[];
  readonly LiquorTypeCocktails?: (LiquorTypeCocktail | null)[];
  readonly LiquorTypeSpecials?: (LiquorTypeSpecial | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LiquorType, LiquorTypeMetaData>);
  static copyOf(source: LiquorType, mutator: (draft: MutableModel<LiquorType, LiquorTypeMetaData>) => MutableModel<LiquorType, LiquorTypeMetaData> | void): LiquorType;
}

export declare class LiquorTypeShot {
  readonly id: string;
  readonly liquortype: LiquorType;
  readonly shot: Shot;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LiquorTypeShot, LiquorTypeShotMetaData>);
  static copyOf(source: LiquorTypeShot, mutator: (draft: MutableModel<LiquorTypeShot, LiquorTypeShotMetaData>) => MutableModel<LiquorTypeShot, LiquorTypeShotMetaData> | void): LiquorTypeShot;
}

export declare class Shot {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly description?: string;
  readonly img?: string;
  readonly menuID?: string;
  readonly LiquorTypes?: (LiquorType | null)[];
  readonly Mixers?: (Mixer | null)[];
  readonly liquortypes?: (LiquorTypeShot | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Shot, ShotMetaData>);
  static copyOf(source: Shot, mutator: (draft: MutableModel<Shot, ShotMetaData>) => MutableModel<Shot, ShotMetaData> | void): Shot;
}

export declare class LiquorTypeCocktail {
  readonly id: string;
  readonly liquortype: LiquorType;
  readonly cocktail: Cocktail;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LiquorTypeCocktail, LiquorTypeCocktailMetaData>);
  static copyOf(source: LiquorTypeCocktail, mutator: (draft: MutableModel<LiquorTypeCocktail, LiquorTypeCocktailMetaData>) => MutableModel<LiquorTypeCocktail, LiquorTypeCocktailMetaData> | void): LiquorTypeCocktail;
}

export declare class LiquorTypeSpecial {
  readonly id: string;
  readonly liquortype: LiquorType;
  readonly special: Special;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LiquorTypeSpecial, LiquorTypeSpecialMetaData>);
  static copyOf(source: LiquorTypeSpecial, mutator: (draft: MutableModel<LiquorTypeSpecial, LiquorTypeSpecialMetaData>) => MutableModel<LiquorTypeSpecial, LiquorTypeSpecialMetaData> | void): LiquorTypeSpecial;
}

export declare class Special {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly img?: string;
  readonly description?: string;
  readonly LiquorTypes?: (LiquorType | null)[];
  readonly Mixers?: (Mixer | null)[];
  readonly menuID?: string;
  readonly liquortypes?: (LiquorTypeSpecial | null)[];
  readonly mixers?: (MixerSpecial | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Special, SpecialMetaData>);
  static copyOf(source: Special, mutator: (draft: MutableModel<Special, SpecialMetaData>) => MutableModel<Special, SpecialMetaData> | void): Special;
}

export declare class MixerSpecial {
  readonly id: string;
  readonly mixer: Mixer;
  readonly special: Special;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MixerSpecial, MixerSpecialMetaData>);
  static copyOf(source: MixerSpecial, mutator: (draft: MutableModel<MixerSpecial, MixerSpecialMetaData>) => MutableModel<MixerSpecial, MixerSpecialMetaData> | void): MixerSpecial;
}

export declare class Wine {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly description?: string;
  readonly img?: string;
  readonly brand?: string;
  readonly menuID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Wine, WineMetaData>);
  static copyOf(source: Wine, mutator: (draft: MutableModel<Wine, WineMetaData>) => MutableModel<Wine, WineMetaData> | void): Wine;
}

export declare class Beer {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly request?: string;
  readonly img?: string;
  readonly brand?: string;
  readonly menuID?: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Beer, BeerMetaData>);
  static copyOf(source: Beer, mutator: (draft: MutableModel<Beer, BeerMetaData>) => MutableModel<Beer, BeerMetaData> | void): Beer;
}

export declare class Food {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly type?: string;
  readonly img?: string;
  readonly description?: string;
  readonly menuID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Food, FoodMetaData>);
  static copyOf(source: Food, mutator: (draft: MutableModel<Food, FoodMetaData>) => MutableModel<Food, FoodMetaData> | void): Food;
}

export declare class Menu {
  readonly id: string;
  readonly barID?: string;
  readonly Foods?: (Food | null)[];
  readonly Shots?: (Shot | null)[];
  readonly Cocktails?: (Cocktail | null)[];
  readonly Beers?: (Beer | null)[];
  readonly Wines?: (Wine | null)[];
  readonly Specials?: (Special | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Menu, MenuMetaData>);
  static copyOf(source: Menu, mutator: (draft: MutableModel<Menu, MenuMetaData>) => MutableModel<Menu, MenuMetaData> | void): Menu;
}

export declare class Employee {
  readonly id: string;
  readonly name: string;
  readonly Orders?: (Order | null)[];
  readonly barID?: string;
  readonly Bar?: Bar;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Employee, EmployeeMetaData>);
  static copyOf(source: Employee, mutator: (draft: MutableModel<Employee, EmployeeMetaData>) => MutableModel<Employee, EmployeeMetaData> | void): Employee;
}

export declare class Order {
  readonly id: string;
  readonly timestamp?: string;
  readonly items?: string[];
  readonly completed: boolean;
  readonly userID?: string;
  readonly User?: User;
  readonly barID?: string;
  readonly employeeID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly phone?: string;
  readonly profileImg?: string;
  readonly location?: string;
  readonly age?: string;
  readonly createdAt?: string;
  readonly name: string;
  readonly address?: string;
  readonly Orders?: (Order | null)[];
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Bar {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone?: string;
  readonly profileImg?: string;
  readonly location?: string;
  readonly payment?: string;
  readonly event?: string;
  readonly address?: string;
  readonly nightSummary?: string;
  readonly Orders?: (Order | null)[];
  readonly Employees?: (Employee | null)[];
  readonly Menu?: (Menu | null)[];
  readonly bio?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Bar, BarMetaData>);
  static copyOf(source: Bar, mutator: (draft: MutableModel<Bar, BarMetaData>) => MutableModel<Bar, BarMetaData> | void): Bar;
}