import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import CustomButton from '../buttons/CustomButton';
import { selectCartItems } from '../../redux/selectors/cartSelectors';

import './cartDropDown.scss';

const CartDropDown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state)
  };
};

export default connect(mapStateToProps)(CartDropDown);
