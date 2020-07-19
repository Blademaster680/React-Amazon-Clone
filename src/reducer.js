export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // Logic for adding item to the basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from the basket

            // we cloned the basket
            let newBasket = [...state.basket];

            // we check if the item exists in the basket
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // if the item exists, remove it...
                newBasket.splice(index, 1);
            } else {
                // else show a warning
                console.warn(
                    "Cant remove product (id: ${action.id}) as its not in your basket."
                )
            }

            // returning the state with the new basket 
            return { ...state, basket: newBasket }
        default:
            return state;
    }
}

export default reducer;