import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CartItem from './CartItem';
import CustomButton from '../buttons/CustomButton';
import { selectCartItems } from '../../redux/selectors/cartSelectors';
import { toggleCartHidden } from '../../redux/actions/cartActions';

import './cartDropDown.scss';

const CartDropDown = ({ cartItems, history, toggleCartHidden }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleCartHidden();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropDown)
);
