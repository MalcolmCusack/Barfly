export const initialState = {
    order: [],
    user: null,
    currentBar: null
};

export const getOrderTotal = (order: any) =>
    order?.reduce((amount: any, item: any) => item.price + amount, 0);

function getOrderStoragekey(state) {
    return `${state?.user?.username ?? ""}-order-state`;
}

/**
 * Takes the order data from state and saves it to local storage with a key based on the username.
 */
function saveOrder(state) {
    const orderToSave = state?.order;
    const key = getOrderStoragekey(state);
    if (orderToSave.length === 0 || orderToSave == null) {
        localStorage.removeItem(key);
    } else {
        localStorage.setItem(key, JSON.stringify(orderToSave));
    }
    return state;
}

/**
 * Loads the user's order based on state and returns a new state with the loaded order.
 */
function loadOrder(state) {
    const order_str = localStorage.getItem(getOrderStoragekey(state));
    if (order_str == null) {
        return { ...state };
    }

    const order = (() => {
        try {
            return JSON.parse(order_str);
        } catch (e) {
            if (e instanceof SyntaxError) {
                return null;
            } else {
                throw e;
            }
        }
    })();

    if (order == null) {
        return {
            ...state,
        };
    } else {
        return {
            ...state,
            order: order,
        };
    }
}

// This goes through all the items in the basket and adds them up starting from 0
// reduces the array to one value

const reducer = (state: any, action: any) => {
    //console.log(action);

    switch (
        action.type //mutable updates
    ) {
        case "FETCH_USER_DATA_INIT":
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case "FETCH_USER_DATA_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isError: false,
                user: action.payload.user,
            };

        case "SET_BAR":
            return {
                ...state,
                currentBar : action.bar
            };

        case "FETCH_USER_DATA_FAILURE":
            return { ...state, isLoading: false, isError: true };

        case "RESET_USER_DATA":
            return { ...state, user: null };

        case "ADD_TO_ORDER":
            //Logic for order
            return saveOrder({
                ...state,
                order: [...state.order, action.item],
            });

        case "REMOVE_FROM_ORDER":
            let newOrder = [...state.order]; //copying the basket state to new basket

            // checking to see if product exists
            const index = state.order.findIndex(
                (orderItem: any) => orderItem.id === action.id
            );

            if (index >= 0) {
                newOrder.splice(index, 1); //remove from basket
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in the order`
                );
            }

            return saveOrder({ ...state, order: newOrder });

        case "EMPTY_ORDER":
            return saveOrder({
                ...state,
                order: [],
            });

        case "SAVE_ORDER":
            return saveOrder({ ...state });

        case "LOAD_ORDER":
            return loadOrder(state);

        default:
            return state;
    }
};

export default reducer;
