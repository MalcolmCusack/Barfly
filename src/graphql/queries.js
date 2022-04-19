/* eslint-disable */
// this is an auto generated file. This will be overwritten




export const listWholeMenu =  /* GraphQL */ `
  query MyQuery {
  listMenus {
    items {
      Beers {
        items {
          price
          name
          id
          brand
          description
        }
      }
      Cocktails {
        items {
          LiquorTypes {
            items {
              name
              price
              type
              brand
            }
          }
          Mixers {
            items {
              brand
              name
              price
              id
            }
          }
          id
          description
          name
          price
        }
      }
      Foods {
        items {
          description
          id
          name
          price
          type
        }
      }
      Shots {
        items {
          name
          price
          id
          description
          liquortypes {
            items {
              liquortype {
                name
                price
                type
                id
                brand
              }
            }
          }
        }
      }
    
    }
  }
}

`;


export const getWholeMenu = /* GraphQL */ `
query MyQuery($id: ID!) {
  getMenu(id: $id) {
    id
    Beers {
      items {
        name
        brand
        id
        price
        description
        _deleted
      }
    }
    Cocktails {
      items {
        description
        id
        name
        price
        _deleted
        mixers {
          items {
            cocktail {
              name
              price
              id
              description
              _deleted
            }
          }
        }
      }
    }
    Foods {
      items {
        name
        price
        type
        description
        id
        _deleted
      }
    }
    Shots {
      items {
        name
        price
        description
        id
        _deleted
      }
    }
  }
}
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrderHistory = /* GraphQL */ `
  query GetOrderHistory($id: ID!) {
    getOrderHistory(id: $id) {
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
export const listOrderHistories = /* GraphQL */ `
  query ListOrderHistories(
    $filter: ModelOrderHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrderHistories = /* GraphQL */ `
  query SyncOrderHistories(
    $filter: ModelOrderHistoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMixer = /* GraphQL */ `
  query GetMixer($id: ID!) {
    getMixer(id: $id) {
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
export const listMixers = /* GraphQL */ `
  query ListMixers(
    $filter: ModelMixerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMixers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMixers = /* GraphQL */ `
  query SyncMixers(
    $filter: ModelMixerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMixers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLiquorType = /* GraphQL */ `
  query GetLiquorType($id: ID!) {
    getLiquorType(id: $id) {
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
export const listLiquorTypes = /* GraphQL */ `
  query ListLiquorTypes(
    $filter: ModelLiquorTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLiquorTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLiquorTypes = /* GraphQL */ `
  query SyncLiquorTypes(
    $filter: ModelLiquorTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLiquorTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSpecial = /* GraphQL */ `
  query GetSpecial($id: ID!) {
    getSpecial(id: $id) {
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
export const listSpecials = /* GraphQL */ `
  query ListSpecials(
    $filter: ModelSpecialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSpecials = /* GraphQL */ `
  query SyncSpecials(
    $filter: ModelSpecialFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSpecials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWine = /* GraphQL */ `
  query GetWine($id: ID!) {
    getWine(id: $id) {
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
export const listWines = /* GraphQL */ `
  query ListWines(
    $filter: ModelWineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWines = /* GraphQL */ `
  query SyncWines(
    $filter: ModelWineFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBeer = /* GraphQL */ `
  query GetBeer($id: ID!) {
    getBeer(id: $id) {
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
export const listBeers = /* GraphQL */ `
  query ListBeers(
    $filter: ModelBeerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBeers = /* GraphQL */ `
  query SyncBeers(
    $filter: ModelBeerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBeers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCocktail = /* GraphQL */ `
  query GetCocktail($id: ID!) {
    getCocktail(id: $id) {
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
export const listCocktails = /* GraphQL */ `
  query ListCocktails(
    $filter: ModelCocktailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCocktails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCocktails = /* GraphQL */ `
  query SyncCocktails(
    $filter: ModelCocktailFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCocktails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getShot = /* GraphQL */ `
  query GetShot($id: ID!) {
    getShot(id: $id) {
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
export const listShots = /* GraphQL */ `
  query ListShots(
    $filter: ModelShotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncShots = /* GraphQL */ `
  query SyncShots(
    $filter: ModelShotFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getFood = /* GraphQL */ `
  query GetFood($id: ID!) {
    getFood(id: $id) {
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
export const listFoods = /* GraphQL */ `
  query ListFoods(
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncFoods = /* GraphQL */ `
  query SyncFoods(
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFoods(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
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
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        barID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMenus = /* GraphQL */ `
  query SyncMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMenus(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        barID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        barID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEmployees = /* GraphQL */ `
  query SyncEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEmployees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        barID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBar = /* GraphQL */ `
  query GetBar($id: ID!) {
    getBar(id: $id) {
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
export const listBars = /* GraphQL */ `
  query ListBars(
    $filter: ModelBarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        bio
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
      nextToken
      startedAt
    }
  }
`;
export const syncBars = /* GraphQL */ `
  query SyncBars(
    $filter: ModelBarFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBars(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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

//Not finished
export const listOrdersByCompletedAndUserId = /* GraphQL */`
  query listOrdersByCompletedAndUserId($completed: completed, $userID: userID){
    listOrders(filter: {completed: {eq: $$completed}, userID: {eq: "7b91aced-aa0f-44f8-b436-9dbe35862c8e"}}) {
      items {
        completed
        barID
        createdAt
        employeeID
        id
        items
        orderStatus
        updatedAt
        userID
        _deleted
        _lastChangedAt
        _version
      }
    }
  }
`;

export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items
        completed
        orderStatus
        userID
        barID
        employeeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getTab = /* GraphQL */ `
  query GetTab($id: ID!) {
    getTab(id: $id) {
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
export const listTabs = /* GraphQL */ `
  query ListTabs(
    $filter: ModelTabFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTabs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTabs = /* GraphQL */ `
  query SyncTabs(
    $filter: ModelTabFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTabs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      phone
      profileImg
      location
      age
      createdAt
      name
      address
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        phone
        profileImg
        location
        age
        name
        address
        
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLiquorTypeShots = /* GraphQL */ `
  query SyncLiquorTypeShots(
    $filter: ModelLiquorTypeShotFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLiquorTypeShots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        liquortypeID
        shotID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLiquorTypeCocktails = /* GraphQL */ `
  query SyncLiquorTypeCocktails(
    $filter: ModelLiquorTypeCocktailFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLiquorTypeCocktails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        liquortypeID
        cocktailID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLiquorTypeSpecials = /* GraphQL */ `
  query SyncLiquorTypeSpecials(
    $filter: ModelLiquorTypeSpecialFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLiquorTypeSpecials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        liquortypeID
        specialID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMixerCocktails = /* GraphQL */ `
  query SyncMixerCocktails(
    $filter: ModelMixerCocktailFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMixerCocktails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        mixerID
        cocktailID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMixerSpecials = /* GraphQL */ `
  query SyncMixerSpecials(
    $filter: ModelMixerSpecialFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMixerSpecials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        mixerID
        specialID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
