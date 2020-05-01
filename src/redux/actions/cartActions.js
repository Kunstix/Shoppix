import { TOGGLE_CART, ADD_CART_ITEM } from './types';

export const toggleCartHidden = () => {
  return { type: TOGGLE_CART };
};

export const addCartItem = item => {
  return { type: ADD_CART_ITEM, payload: item };
};
