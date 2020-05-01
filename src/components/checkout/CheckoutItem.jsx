import React from 'react';
import { connect } from 'react-redux';
import {
  clearCartItem,
  addCartItem,
  removeCartItem
} from '../../redux/actions/cartActions';

import './checkoutItem.scss';

const CheckoutItem = ({
  cartItem,
  addCartItem,
  removeCartItem,
  clearCartItem
}) => {
  const { name, imgUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imgUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeCartItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { clearCartItem, addCartItem, removeCartItem })(
  CheckoutItem
);
