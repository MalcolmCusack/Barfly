/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onOrderByUserId = /* GraphQL */`
  subscription OnOrderByUserId($userID: String!) {
    onOrderByUserId(userID: $userID) {
      id
      timestamp
      items
      completed
      userID
      barID
      employeeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
  `;

export const onOrderByOrderId = /* GraphQL */`
  subscription OnOrderByOrderId($id: ID!) {
    onOrderByOrderId(id: $id) {
      id
      items
      
    }
  }
  `;

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      name
      description
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      name
      description
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      name
      description
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;

export const onCreateMixer = /* GraphQL */ `
  subscription OnCreateMixer {
    onCreateMixer {
      id
      name
      price
      request
      brand
      img
      specialID
      cocktailID
      shotID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      MixerCocktails {
        nextToken
        startedAt
      }
      MixerSpecials {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateMixer = /* GraphQL */ `
  subscription OnUpdateMixer {
    onUpdateMixer {
      id
      name
      price
      request
      brand
      img
      specialID
      cocktailID
      shotID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      MixerCocktails {
        nextToken
        startedAt
      }
      MixerSpecials {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteMixer = /* GraphQL */ `
  subscription OnDeleteMixer {
    onDeleteMixer {
      id
      name
      price
      request
      brand
      img
      specialID
      cocktailID
      shotID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      MixerCocktails {
        nextToken
        startedAt
      }
      MixerSpecials {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateLiquorType = /* GraphQL */ `
  subscription OnCreateLiquorType {
    onCreateLiquorType {
      id
      name
      well
      type
      price
      brand
      img
      specialID
      cocktailID
      shotID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LiquorTypeShots {
        nextToken
        startedAt
      }
      LiquorTypeCocktails {
        nextToken
        startedAt
      }
      LiquorTypeSpecials {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateLiquorType = /* GraphQL */ `
  subscription OnUpdateLiquorType {
    onUpdateLiquorType {
      id
      name
      well
      type
      price
      brand
      img
      specialID
      cocktailID
      shotID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LiquorTypeShots {
        nextToken
        startedAt
      }
      LiquorTypeCocktails {
        nextToken
        startedAt
      }
      LiquorTypeSpecials {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteLiquorType = /* GraphQL */ `
  subscription OnDeleteLiquorType {
    onDeleteLiquorType {
      id
      name
      well
      type
      price
      brand
      img
      specialID
      cocktailID
      shotID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LiquorTypeShots {
        nextToken
        startedAt
      }
      LiquorTypeCocktails {
        nextToken
        startedAt
      }
      LiquorTypeSpecials {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateSpecial = /* GraphQL */ `
  subscription OnCreateSpecial {
    onCreateSpecial {
      id
      name
      price
      img
      discription
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Mixers {
        nextToken
        startedAt
      }
      LiquorTypes {
        nextToken
        startedAt
      }
      liquortypes {
        nextToken
        startedAt
      }
      mixers {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateSpecial = /* GraphQL */ `
  subscription OnUpdateSpecial {
    onUpdateSpecial {
      id
      name
      price
      img
      discription
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Mixers {
        nextToken
        startedAt
      }
      LiquorTypes {
        nextToken
        startedAt
      }
      liquortypes {
        nextToken
        startedAt
      }
      mixers {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteSpecial = /* GraphQL */ `
  subscription OnDeleteSpecial {
    onDeleteSpecial {
      id
      name
      price
      img
      discription
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Mixers {
        nextToken
        startedAt
      }
      LiquorTypes {
        nextToken
        startedAt
      }
      liquortypes {
        nextToken
        startedAt
      }
      mixers {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateWine = /* GraphQL */ `
  subscription OnCreateWine {
    onCreateWine {
      id
      name
      price
      description
      img
      brand
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWine = /* GraphQL */ `
  subscription OnUpdateWine {
    onUpdateWine {
      id
      name
      price
      description
      img
      brand
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWine = /* GraphQL */ `
  subscription OnDeleteWine {
    onDeleteWine {
      id
      name
      price
      description
      img
      brand
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBeer = /* GraphQL */ `
  subscription OnCreateBeer {
    onCreateBeer {
      id
      name
      price
      request
      img
      brand
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBeer = /* GraphQL */ `
  subscription OnUpdateBeer {
    onUpdateBeer {
      id
      name
      price
      request
      img
      brand
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBeer = /* GraphQL */ `
  subscription OnDeleteBeer {
    onDeleteBeer {
      id
      name
      price
      request
      img
      brand
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCocktail = /* GraphQL */ `
  subscription OnCreateCocktail {
    onCreateCocktail {
      id
      name
      price
      description
      img
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Mixers {
        nextToken
        startedAt
      }
      LiquorTypes {
        nextToken
        startedAt
      }
      liquortypes {
        nextToken
        startedAt
      }
      mixers {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateCocktail = /* GraphQL */ `
  subscription OnUpdateCocktail {
    onUpdateCocktail {
      id
      name
      price
      description
      img
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Mixers {
        nextToken
        startedAt
      }
      LiquorTypes {
        nextToken
        startedAt
      }
      liquortypes {
        nextToken
        startedAt
      }
      mixers {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteCocktail = /* GraphQL */ `
  subscription OnDeleteCocktail {
    onDeleteCocktail {
      id
      name
      price
      description
      img
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Mixers {
        nextToken
        startedAt
      }
      LiquorTypes {
        nextToken
        startedAt
      }
      liquortypes {
        nextToken
        startedAt
      }
      mixers {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateShot = /* GraphQL */ `
  subscription OnCreateShot {
    onCreateShot {
      id
      name
      price
      description
      img
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Mixers {
        nextToken
        startedAt
      }
      LiquorTypes {
        nextToken
        startedAt
      }
      liquortypes {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateShot = /* GraphQL */ `
  subscription OnUpdateShot {
    onUpdateShot {
      id
      name
      price
      description
      img
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Mixers {
        nextToken
        startedAt
      }
      LiquorTypes {
        nextToken
        startedAt
      }
      liquortypes {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteShot = /* GraphQL */ `
  subscription OnDeleteShot {
    onDeleteShot {
      id
      name
      price
      description
      img
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Mixers {
        nextToken
        startedAt
      }
      LiquorTypes {
        nextToken
        startedAt
      }
      liquortypes {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateFood = /* GraphQL */ `
  subscription OnCreateFood {
    onCreateFood {
      id
      name
      price
      type
      img
      description
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFood = /* GraphQL */ `
  subscription OnUpdateFood {
    onUpdateFood {
      id
      name
      price
      type
      img
      description
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFood = /* GraphQL */ `
  subscription OnDeleteFood {
    onDeleteFood {
      id
      name
      price
      type
      img
      description
      menuID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu {
    onCreateMenu {
      id
      barID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Specials {
        nextToken
        startedAt
      }
      Wines {
        nextToken
        startedAt
      }
      Beers {
        nextToken
        startedAt
      }
      Cocktails {
        nextToken
        startedAt
      }
      Shots {
        nextToken
        startedAt
      }
      Foods {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu {
    onUpdateMenu {
      id
      barID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Specials {
        nextToken
        startedAt
      }
      Wines {
        nextToken
        startedAt
      }
      Beers {
        nextToken
        startedAt
      }
      Cocktails {
        nextToken
        startedAt
      }
      Shots {
        nextToken
        startedAt
      }
      Foods {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu {
    onDeleteMenu {
      id
      barID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Specials {
        nextToken
        startedAt
      }
      Wines {
        nextToken
        startedAt
      }
      Beers {
        nextToken
        startedAt
      }
      Cocktails {
        nextToken
        startedAt
      }
      Shots {
        nextToken
        startedAt
      }
      Foods {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
      id
      name
      barID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Bar {
        id
        name
        email
        phone
        profileImg
        location
        payment
        event
        createdAt
        address
        nightSummary
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      Orders {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
      id
      name
      barID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Bar {
        id
        name
        email
        phone
        profileImg
        location
        payment
        event
        createdAt
        address
        nightSummary
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      Orders {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
      id
      name
      barID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Bar {
        id
        name
        email
        phone
        profileImg
        location
        payment
        event
        createdAt
        address
        nightSummary
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      Orders {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateBar = /* GraphQL */ `
  subscription OnCreateBar {
    onCreateBar {
      id
      name
      email
      phone
      profileImg
      location
      payment
      event
      createdAt
      address
      nightSummary
      _version
      _deleted
      _lastChangedAt
      updatedAt
      Menu {
        nextToken
        startedAt
      }
      Employees {
        nextToken
        startedAt
      }
      Orders {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateBar = /* GraphQL */ `
  subscription OnUpdateBar {
    onUpdateBar {
      id
      name
      email
      phone
      profileImg
      location
      payment
      event
      createdAt
      address
      nightSummary
      _version
      _deleted
      _lastChangedAt
      updatedAt
      Menu {
        nextToken
        startedAt
      }
      Employees {
        nextToken
        startedAt
      }
      Orders {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteBar = /* GraphQL */ `
  subscription OnDeleteBar {
    onDeleteBar {
      id
      name
      email
      phone
      profileImg
      location
      payment
      event
      createdAt
      address
      nightSummary
      _version
      _deleted
      _lastChangedAt
      updatedAt
      Menu {
        nextToken
        startedAt
      }
      Employees {
        nextToken
        startedAt
      }
      Orders {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      timestamp
      items
      completed
      userID
      barID
      employeeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      User {
        id
        email
        phone
        profileImg
        location
        age
        createdAt
        name
        address
        order
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      timestamp
      items
      completed
      userID
      tabID
      barID
      employeeID
      orderhistoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      User {
        id
        email
        phone
        profileImg
        location
        payment
        age
        createdAt
        name
        address
        order
        orderHistory
        tabID
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      timestamp
      items
      completed
      userID
      tabID
      barID
      employeeID
      orderhistoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      User {
        id
        email
        phone
        profileImg
        location
        payment
        age
        createdAt
        name
        address
        order
        orderHistory
        tabID
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
    }
  }
`;
export const onCreateTab = /* GraphQL */ `
  subscription OnCreateTab {
    onCreateTab {
      id
      paid
      tip
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Orders {
        nextToken
        startedAt
      }
      Users {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateTab = /* GraphQL */ `
  subscription OnUpdateTab {
    onUpdateTab {
      id
      paid
      tip
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Orders {
        nextToken
        startedAt
      }
      Users {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteTab = /* GraphQL */ `
  subscription OnDeleteTab {
    onDeleteTab {
      id
      paid
      tip
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Orders {
        nextToken
        startedAt
      }
      Users {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      phone
      profileImg
      location
      payment
      age
      createdAt
      name
      address
      order
      orderHistory
      tabID
      _version
      _deleted
      _lastChangedAt
      updatedAt
      Orders {
        nextToken
        startedAt
      }
      Tab {
        id
        paid
        tip
        timestamp
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      phone
      profileImg
      location
      payment
      age
      createdAt
      name
      address
      order
      orderHistory
      tabID
      _version
      _deleted
      _lastChangedAt
      updatedAt
      Orders {
        nextToken
        startedAt
      }
      Tab {
        id
        paid
        tip
        timestamp
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      phone
      profileImg
      location
      payment
      age
      createdAt
      name
      address
      order
      orderHistory
      tabID
      _version
      _deleted
      _lastChangedAt
      updatedAt
      Orders {
        nextToken
        startedAt
      }
      Tab {
        id
        paid
        tip
        timestamp
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateLiquorTypeShot = /* GraphQL */ `
  subscription OnCreateLiquorTypeShot {
    onCreateLiquorTypeShot {
      id
      liquortypeID
      shotID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      liquortype {
        id
        name
        well
        type
        price
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      shot {
        id
        name
        price
        description
        img
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateLiquorTypeShot = /* GraphQL */ `
  subscription OnUpdateLiquorTypeShot {
    onUpdateLiquorTypeShot {
      id
      liquortypeID
      shotID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      liquortype {
        id
        name
        well
        type
        price
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      shot {
        id
        name
        price
        description
        img
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteLiquorTypeShot = /* GraphQL */ `
  subscription OnDeleteLiquorTypeShot {
    onDeleteLiquorTypeShot {
      id
      liquortypeID
      shotID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      liquortype {
        id
        name
        well
        type
        price
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      shot {
        id
        name
        price
        description
        img
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateLiquorTypeCocktail = /* GraphQL */ `
  subscription OnCreateLiquorTypeCocktail {
    onCreateLiquorTypeCocktail {
      id
      liquortypeID
      cocktailID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      liquortype {
        id
        name
        well
        type
        price
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      cocktail {
        id
        name
        price
        description
        img
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateLiquorTypeCocktail = /* GraphQL */ `
  subscription OnUpdateLiquorTypeCocktail {
    onUpdateLiquorTypeCocktail {
      id
      liquortypeID
      cocktailID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      liquortype {
        id
        name
        well
        type
        price
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      cocktail {
        id
        name
        price
        description
        img
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteLiquorTypeCocktail = /* GraphQL */ `
  subscription OnDeleteLiquorTypeCocktail {
    onDeleteLiquorTypeCocktail {
      id
      liquortypeID
      cocktailID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      liquortype {
        id
        name
        well
        type
        price
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      cocktail {
        id
        name
        price
        description
        img
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateLiquorTypeSpecial = /* GraphQL */ `
  subscription OnCreateLiquorTypeSpecial {
    onCreateLiquorTypeSpecial {
      id
      liquortypeID
      specialID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      liquortype {
        id
        name
        well
        type
        price
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      special {
        id
        name
        price
        img
        discription
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateLiquorTypeSpecial = /* GraphQL */ `
  subscription OnUpdateLiquorTypeSpecial {
    onUpdateLiquorTypeSpecial {
      id
      liquortypeID
      specialID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      liquortype {
        id
        name
        well
        type
        price
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      special {
        id
        name
        price
        img
        discription
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteLiquorTypeSpecial = /* GraphQL */ `
  subscription OnDeleteLiquorTypeSpecial {
    onDeleteLiquorTypeSpecial {
      id
      liquortypeID
      specialID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      liquortype {
        id
        name
        well
        type
        price
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      special {
        id
        name
        price
        img
        discription
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateMixerCocktail = /* GraphQL */ `
  subscription OnCreateMixerCocktail {
    onCreateMixerCocktail {
      id
      mixerID
      cocktailID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      mixer {
        id
        name
        price
        request
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      cocktail {
        id
        name
        price
        description
        img
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateMixerCocktail = /* GraphQL */ `
  subscription OnUpdateMixerCocktail {
    onUpdateMixerCocktail {
      id
      mixerID
      cocktailID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      mixer {
        id
        name
        price
        request
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      cocktail {
        id
        name
        price
        description
        img
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteMixerCocktail = /* GraphQL */ `
  subscription OnDeleteMixerCocktail {
    onDeleteMixerCocktail {
      id
      mixerID
      cocktailID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      mixer {
        id
        name
        price
        request
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      cocktail {
        id
        name
        price
        description
        img
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateMixerSpecial = /* GraphQL */ `
  subscription OnCreateMixerSpecial {
    onCreateMixerSpecial {
      id
      mixerID
      specialID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      mixer {
        id
        name
        price
        request
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      special {
        id
        name
        price
        img
        discription
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateMixerSpecial = /* GraphQL */ `
  subscription OnUpdateMixerSpecial {
    onUpdateMixerSpecial {
      id
      mixerID
      specialID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      mixer {
        id
        name
        price
        request
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      special {
        id
        name
        price
        img
        discription
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteMixerSpecial = /* GraphQL */ `
  subscription OnDeleteMixerSpecial {
    onDeleteMixerSpecial {
      id
      mixerID
      specialID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      mixer {
        id
        name
        price
        request
        brand
        img
        specialID
        cocktailID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      special {
        id
        name
        price
        img
        discription
        menuID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
