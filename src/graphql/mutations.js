/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createOrderHistory = /* GraphQL */ `
  mutation CreateOrderHistory(
    $input: CreateOrderHistoryInput!
    $condition: ModelOrderHistoryConditionInput
  ) {
    createOrderHistory(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Orders {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateOrderHistory = /* GraphQL */ `
  mutation UpdateOrderHistory(
    $input: UpdateOrderHistoryInput!
    $condition: ModelOrderHistoryConditionInput
  ) {
    updateOrderHistory(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Orders {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteOrderHistory = /* GraphQL */ `
  mutation DeleteOrderHistory(
    $input: DeleteOrderHistoryInput!
    $condition: ModelOrderHistoryConditionInput
  ) {
    deleteOrderHistory(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Orders {
        nextToken
        startedAt
      }
    }
  }
`;
export const createMixer = /* GraphQL */ `
  mutation CreateMixer(
    $input: CreateMixerInput!
    $condition: ModelMixerConditionInput
  ) {
    createMixer(input: $input, condition: $condition) {
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
export const updateMixer = /* GraphQL */ `
  mutation UpdateMixer(
    $input: UpdateMixerInput!
    $condition: ModelMixerConditionInput
  ) {
    updateMixer(input: $input, condition: $condition) {
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
export const deleteMixer = /* GraphQL */ `
  mutation DeleteMixer(
    $input: DeleteMixerInput!
    $condition: ModelMixerConditionInput
  ) {
    deleteMixer(input: $input, condition: $condition) {
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
export const createLiquorType = /* GraphQL */ `
  mutation CreateLiquorType(
    $input: CreateLiquorTypeInput!
    $condition: ModelLiquorTypeConditionInput
  ) {
    createLiquorType(input: $input, condition: $condition) {
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
export const updateLiquorType = /* GraphQL */ `
  mutation UpdateLiquorType(
    $input: UpdateLiquorTypeInput!
    $condition: ModelLiquorTypeConditionInput
  ) {
    updateLiquorType(input: $input, condition: $condition) {
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
export const deleteLiquorType = /* GraphQL */ `
  mutation DeleteLiquorType(
    $input: DeleteLiquorTypeInput!
    $condition: ModelLiquorTypeConditionInput
  ) {
    deleteLiquorType(input: $input, condition: $condition) {
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
export const createSpecial = /* GraphQL */ `
  mutation CreateSpecial(
    $input: CreateSpecialInput!
    $condition: ModelSpecialConditionInput
  ) {
    createSpecial(input: $input, condition: $condition) {
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
export const updateSpecial = /* GraphQL */ `
  mutation UpdateSpecial(
    $input: UpdateSpecialInput!
    $condition: ModelSpecialConditionInput
  ) {
    updateSpecial(input: $input, condition: $condition) {
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
export const deleteSpecial = /* GraphQL */ `
  mutation DeleteSpecial(
    $input: DeleteSpecialInput!
    $condition: ModelSpecialConditionInput
  ) {
    deleteSpecial(input: $input, condition: $condition) {
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
export const createWine = /* GraphQL */ `
  mutation CreateWine(
    $input: CreateWineInput!
    $condition: ModelWineConditionInput
  ) {
    createWine(input: $input, condition: $condition) {
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
export const updateWine = /* GraphQL */ `
  mutation UpdateWine(
    $input: UpdateWineInput!
    $condition: ModelWineConditionInput
  ) {
    updateWine(input: $input, condition: $condition) {
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
export const deleteWine = /* GraphQL */ `
  mutation DeleteWine(
    $input: DeleteWineInput!
    $condition: ModelWineConditionInput
  ) {
    deleteWine(input: $input, condition: $condition) {
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
export const createBeer = /* GraphQL */ `
  mutation CreateBeer(
    $input: CreateBeerInput!
    $condition: ModelBeerConditionInput
  ) {
    createBeer(input: $input, condition: $condition) {
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
export const updateBeer = /* GraphQL */ `
  mutation UpdateBeer(
    $input: UpdateBeerInput!
    $condition: ModelBeerConditionInput
  ) {
    updateBeer(input: $input, condition: $condition) {
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
export const deleteBeer = /* GraphQL */ `
  mutation DeleteBeer(
    $input: DeleteBeerInput!
    $condition: ModelBeerConditionInput
  ) {
    deleteBeer(input: $input, condition: $condition) {
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
export const createCocktail = /* GraphQL */ `
  mutation CreateCocktail(
    $input: CreateCocktailInput!
    $condition: ModelCocktailConditionInput
  ) {
    createCocktail(input: $input, condition: $condition) {
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
export const updateCocktail = /* GraphQL */ `
  mutation UpdateCocktail(
    $input: UpdateCocktailInput!
    $condition: ModelCocktailConditionInput
  ) {
    updateCocktail(input: $input, condition: $condition) {
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
export const deleteCocktail = /* GraphQL */ `
  mutation DeleteCocktail(
    $input: DeleteCocktailInput!
    $condition: ModelCocktailConditionInput
  ) {
    deleteCocktail(input: $input, condition: $condition) {
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
export const createShot = /* GraphQL */ `
  mutation CreateShot(
    $input: CreateShotInput!
    $condition: ModelShotConditionInput
  ) {
    createShot(input: $input, condition: $condition) {
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
export const updateShot = /* GraphQL */ `
  mutation UpdateShot(
    $input: UpdateShotInput!
    $condition: ModelShotConditionInput
  ) {
    updateShot(input: $input, condition: $condition) {
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
export const deleteShot = /* GraphQL */ `
  mutation DeleteShot(
    $input: DeleteShotInput!
    $condition: ModelShotConditionInput
  ) {
    deleteShot(input: $input, condition: $condition) {
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
export const createFood = /* GraphQL */ `
  mutation CreateFood(
    $input: CreateFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    createFood(input: $input, condition: $condition) {
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
export const updateFood = /* GraphQL */ `
  mutation UpdateFood(
    $input: UpdateFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    updateFood(input: $input, condition: $condition) {
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
export const deleteFood = /* GraphQL */ `
  mutation DeleteFood(
    $input: DeleteFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    deleteFood(input: $input, condition: $condition) {
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
export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
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
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
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
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
export const createBar = /* GraphQL */ `
  mutation CreateBar(
    $input: CreateBarInput!
    $condition: ModelBarConditionInput
  ) {
    createBar(input: $input, condition: $condition) {
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
export const updateBar = /* GraphQL */ `
  mutation UpdateBar(
    $input: UpdateBarInput!
    $condition: ModelBarConditionInput
  ) {
    updateBar(input: $input, condition: $condition) {
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
export const deleteBar = /* GraphQL */ `
  mutation DeleteBar(
    $input: DeleteBarInput!
    $condition: ModelBarConditionInput
  ) {
    deleteBar(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createTab = /* GraphQL */ `
  mutation CreateTab(
    $input: CreateTabInput!
    $condition: ModelTabConditionInput
  ) {
    createTab(input: $input, condition: $condition) {
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
export const updateTab = /* GraphQL */ `
  mutation UpdateTab(
    $input: UpdateTabInput!
    $condition: ModelTabConditionInput
  ) {
    updateTab(input: $input, condition: $condition) {
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
export const deleteTab = /* GraphQL */ `
  mutation DeleteTab(
    $input: DeleteTabInput!
    $condition: ModelTabConditionInput
  ) {
    deleteTab(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createLiquorTypeShot = /* GraphQL */ `
  mutation CreateLiquorTypeShot(
    $input: CreateLiquorTypeShotInput!
    $condition: ModelLiquorTypeShotConditionInput
  ) {
    createLiquorTypeShot(input: $input, condition: $condition) {
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
export const updateLiquorTypeShot = /* GraphQL */ `
  mutation UpdateLiquorTypeShot(
    $input: UpdateLiquorTypeShotInput!
    $condition: ModelLiquorTypeShotConditionInput
  ) {
    updateLiquorTypeShot(input: $input, condition: $condition) {
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
export const deleteLiquorTypeShot = /* GraphQL */ `
  mutation DeleteLiquorTypeShot(
    $input: DeleteLiquorTypeShotInput!
    $condition: ModelLiquorTypeShotConditionInput
  ) {
    deleteLiquorTypeShot(input: $input, condition: $condition) {
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
export const createLiquorTypeCocktail = /* GraphQL */ `
  mutation CreateLiquorTypeCocktail(
    $input: CreateLiquorTypeCocktailInput!
    $condition: ModelLiquorTypeCocktailConditionInput
  ) {
    createLiquorTypeCocktail(input: $input, condition: $condition) {
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
export const updateLiquorTypeCocktail = /* GraphQL */ `
  mutation UpdateLiquorTypeCocktail(
    $input: UpdateLiquorTypeCocktailInput!
    $condition: ModelLiquorTypeCocktailConditionInput
  ) {
    updateLiquorTypeCocktail(input: $input, condition: $condition) {
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
export const deleteLiquorTypeCocktail = /* GraphQL */ `
  mutation DeleteLiquorTypeCocktail(
    $input: DeleteLiquorTypeCocktailInput!
    $condition: ModelLiquorTypeCocktailConditionInput
  ) {
    deleteLiquorTypeCocktail(input: $input, condition: $condition) {
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
export const createLiquorTypeSpecial = /* GraphQL */ `
  mutation CreateLiquorTypeSpecial(
    $input: CreateLiquorTypeSpecialInput!
    $condition: ModelLiquorTypeSpecialConditionInput
  ) {
    createLiquorTypeSpecial(input: $input, condition: $condition) {
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
export const updateLiquorTypeSpecial = /* GraphQL */ `
  mutation UpdateLiquorTypeSpecial(
    $input: UpdateLiquorTypeSpecialInput!
    $condition: ModelLiquorTypeSpecialConditionInput
  ) {
    updateLiquorTypeSpecial(input: $input, condition: $condition) {
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
export const deleteLiquorTypeSpecial = /* GraphQL */ `
  mutation DeleteLiquorTypeSpecial(
    $input: DeleteLiquorTypeSpecialInput!
    $condition: ModelLiquorTypeSpecialConditionInput
  ) {
    deleteLiquorTypeSpecial(input: $input, condition: $condition) {
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
export const createMixerCocktail = /* GraphQL */ `
  mutation CreateMixerCocktail(
    $input: CreateMixerCocktailInput!
    $condition: ModelMixerCocktailConditionInput
  ) {
    createMixerCocktail(input: $input, condition: $condition) {
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
export const updateMixerCocktail = /* GraphQL */ `
  mutation UpdateMixerCocktail(
    $input: UpdateMixerCocktailInput!
    $condition: ModelMixerCocktailConditionInput
  ) {
    updateMixerCocktail(input: $input, condition: $condition) {
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
export const deleteMixerCocktail = /* GraphQL */ `
  mutation DeleteMixerCocktail(
    $input: DeleteMixerCocktailInput!
    $condition: ModelMixerCocktailConditionInput
  ) {
    deleteMixerCocktail(input: $input, condition: $condition) {
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
export const createMixerSpecial = /* GraphQL */ `
  mutation CreateMixerSpecial(
    $input: CreateMixerSpecialInput!
    $condition: ModelMixerSpecialConditionInput
  ) {
    createMixerSpecial(input: $input, condition: $condition) {
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
export const updateMixerSpecial = /* GraphQL */ `
  mutation UpdateMixerSpecial(
    $input: UpdateMixerSpecialInput!
    $condition: ModelMixerSpecialConditionInput
  ) {
    updateMixerSpecial(input: $input, condition: $condition) {
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
export const deleteMixerSpecial = /* GraphQL */ `
  mutation DeleteMixerSpecial(
    $input: DeleteMixerSpecialInput!
    $condition: ModelMixerSpecialConditionInput
  ) {
    deleteMixerSpecial(input: $input, condition: $condition) {
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
