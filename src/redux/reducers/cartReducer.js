import {
  TOGGLE_CART,
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  CLEAR_CART,
  REMOVE_CART_ITEM
} from '../actions/types';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

const addItemToCart = (cartItems, newItem) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === newItem.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
  }

  if (existingCartItem.quantity > 0) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return [...cartItems];
};

export default cartReducer;
