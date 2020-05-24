import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatorcount, currentValue) =>
            accumulatorcount+currentValue.quantity,
        0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatortotal, currentValue) =>
            accumulatortotal+currentValue.quantity*currentValue.price,
        0
    )
)
