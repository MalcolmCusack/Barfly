export const initialState = {
    order: [],
    user: null,
};

export const getOrderTotal = (order: any) =>
    order?.reduce((amount: any, item: any) => item.price + amount, 0);
// This goes through all the items in the basket and adds them up starting from 0
// reduces the array to one value

const reducer = (state: any, action: any) => {
    console.log(action);
    function getOrderStoragekey(state) {
        return `${state?.user?.username ?? ""}-order-state`;
    }
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

        case "FETCH_USER_DATA_FAILURE":
            return { ...state, isLoading: false, isError: true };

        case "RESET_USER_DATA":
            return { ...state, user: null };

        case "ADD_TO_ORDER":
            //Logic for order
            return {
                ...state,
                order: [...state.order, action.item],
                // returning the current state of the basket plus the new state
            };
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

            return { ...state, order: newOrder };

        case "EMPTY_ORDER":
            return {
                ...state,
                order: [],
            };

        case "SAVE_ORDER":
            localStorage.setItem(
                getOrderStoragekey(state),
                JSON.stringify(state?.order)
            );
            return { ...state };

        case "LOAD_ORDER":
            const order_str = localStorage.getItem(getOrderStoragekey(state));
            const order = (() => {
                try {
                    return JSON.parse(order_str) ?? [];
                } catch (e) {
                    if (e instanceof SyntaxError) {
                        return [];
                    } else {
                        throw e;
                    }
                }
            })();
            return {
                ...state,
                order: order,
            };

        default:
            return state;
    }
};

export default reducer;
