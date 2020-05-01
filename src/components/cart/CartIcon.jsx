import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cartActions';
import { selectCartItemsCount } from '../../redux/selectors/cartSelectors';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import './cartIcon.scss';

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = state => {
  return {
    itemCount: selectCartItemsCount(state)
  };
};

const mapDispatchToProps = { toggleCartHidden };

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
