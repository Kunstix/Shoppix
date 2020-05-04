import {
  TOGGLE_CART,
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  CLEAR_CART,
  REMOVE_CART_ITEM
} from './types';

export const toggleCartHidden = () => {
  return { type: TOGGLE_CART };
};

export const addCartItem = item => {
  return { type: ADD_CART_ITEM, payload: item };
};

export const clearCartItem = item => {
  return { type: CLEAR_CART_ITEM, payload: item };
};

export const removeCartItem = item => {
  return { type: REMOVE_CART_ITEM, payload: item };
};

export const clearCart = () => {
  return { type: CLEAR_CART };
};
