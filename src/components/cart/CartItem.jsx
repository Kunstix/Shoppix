import React, { memo } from 'react';

import './cartItem.scss';

const CartItem = ({ item: { imgUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imgUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x {price} €
      </span>
    </div>
  </div>
);

export default memo(CartItem);
