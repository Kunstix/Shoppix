import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cartActions';

import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import './cartIcon.scss';

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    itemCount: cartItems.reduce(
      (currentSum, cartItem) => currentSum + cartItem.quantity,
      0
    )
  };
};

const mapDispatchToProps = { toggleCartHidden };

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
