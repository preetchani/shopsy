import CartActionTypes from "./cart.types";

export const toggleCartHidden = ()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item=>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
});

export const removeCartItem = item=>({
    type:CartActionTypes.CART_ITEM_REMOVE,
    payload:item
});

