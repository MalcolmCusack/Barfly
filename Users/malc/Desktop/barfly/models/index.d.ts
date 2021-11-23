import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





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
  constructor(init: ModelInit<Mixer>);
  static copyOf(source: Mixer, mutator: (draft: MutableModel<Mixer>) => MutableModel<Mixer> | void): Mixer;
}

export declare class MixerCocktail {
  readonly id: string;
  readonly mixer: Mixer;
  readonly cocktail: Cocktail;
  constructor(init: ModelInit<MixerCocktail>);
  static copyOf(source: MixerCocktail, mutator: (draft: MutableModel<MixerCocktail>) => MutableModel<MixerCocktail> | void): MixerCocktail;
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
  constructor(init: ModelInit<Cocktail>);
  static copyOf(source: Cocktail, mutator: (draft: MutableModel<Cocktail>) => MutableModel<Cocktail> | void): Cocktail;
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
  constructor(init: ModelInit<LiquorType>);
  static copyOf(source: LiquorType, mutator: (draft: MutableModel<LiquorType>) => MutableModel<LiquorType> | void): LiquorType;
}

export declare class LiquorTypeShot {
  readonly id: string;
  readonly liquortype: LiquorType;
  readonly shot: Shot;
  constructor(init: ModelInit<LiquorTypeShot>);
  static copyOf(source: LiquorTypeShot, mutator: (draft: MutableModel<LiquorTypeShot>) => MutableModel<LiquorTypeShot> | void): LiquorTypeShot;
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
  constructor(init: ModelInit<Shot>);
  static copyOf(source: Shot, mutator: (draft: MutableModel<Shot>) => MutableModel<Shot> | void): Shot;
}

export declare class LiquorTypeCocktail {
  readonly id: string;
  readonly liquortype: LiquorType;
  readonly cocktail: Cocktail;
  constructor(init: ModelInit<LiquorTypeCocktail>);
  static copyOf(source: LiquorTypeCocktail, mutator: (draft: MutableModel<LiquorTypeCocktail>) => MutableModel<LiquorTypeCocktail> | void): LiquorTypeCocktail;
}

export declare class LiquorTypeSpecial {
  readonly id: string;
  readonly liquortype: LiquorType;
  readonly special: Special;
  constructor(init: ModelInit<LiquorTypeSpecial>);
  static copyOf(source: LiquorTypeSpecial, mutator: (draft: MutableModel<LiquorTypeSpecial>) => MutableModel<LiquorTypeSpecial> | void): LiquorTypeSpecial;
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
  constructor(init: ModelInit<Special>);
  static copyOf(source: Special, mutator: (draft: MutableModel<Special>) => MutableModel<Special> | void): Special;
}

export declare class MixerSpecial {
  readonly id: string;
  readonly mixer: Mixer;
  readonly special: Special;
  constructor(init: ModelInit<MixerSpecial>);
  static copyOf(source: MixerSpecial, mutator: (draft: MutableModel<MixerSpecial>) => MutableModel<MixerSpecial> | void): MixerSpecial;
}

export declare class Wine {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly description?: string;
  readonly img?: string;
  readonly brand?: string;
  readonly menuID?: string;
  constructor(init: ModelInit<Wine>);
  static copyOf(source: Wine, mutator: (draft: MutableModel<Wine>) => MutableModel<Wine> | void): Wine;
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
  constructor(init: ModelInit<Beer>);
  static copyOf(source: Beer, mutator: (draft: MutableModel<Beer>) => MutableModel<Beer> | void): Beer;
}

export declare class Food {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly type?: string;
  readonly img?: string;
  readonly description?: string;
  readonly menuID?: string;
  constructor(init: ModelInit<Food>);
  static copyOf(source: Food, mutator: (draft: MutableModel<Food>) => MutableModel<Food> | void): Food;
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
  constructor(init: ModelInit<Menu>);
  static copyOf(source: Menu, mutator: (draft: MutableModel<Menu>) => MutableModel<Menu> | void): Menu;
}

export declare class Employee {
  readonly id: string;
  readonly name: string;
  readonly Orders?: (Order | null)[];
  readonly barID?: string;
  readonly Bar?: Bar;
  constructor(init: ModelInit<Employee>);
  static copyOf(source: Employee, mutator: (draft: MutableModel<Employee>) => MutableModel<Employee> | void): Employee;
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
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
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
  readonly order?: string;
  readonly Orders?: (Order | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
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
  constructor(init: ModelInit<Bar>);
  static copyOf(source: Bar, mutator: (draft: MutableModel<Bar>) => MutableModel<Bar> | void): Bar;
}