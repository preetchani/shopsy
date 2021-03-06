import {createSelector} from 'reselect';

const selectCart = state =>state.cart;

export const selectCartItems = createSelector([selectCart],cart=>cart.cartItems);

export const selectCartHidden = createSelector([selectCart],cart=>cart.hidden);

export const selectCartItemCount = createSelector(
    [selectCartItems],cartItems=>
    cartItems.reduce(
        (accumalatedQuantiy, cartItem)=>accumalatedQuantiy+cartItem.quantity,0
    )
);

export const selectCartTotalAmount = createSelector(
    [selectCartItems],cartItems=>
    cartItems.reduce(
        (accumalatedQuantiy, cartItem)=>accumalatedQuantiy+cartItem.quantity * cartItem.price,0
    )
);