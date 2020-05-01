import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../buttons/CustomButton';
import { addCartItem } from '../../redux/actions/cartActions';
import './collectionItem.scss';

const collectionItem = ({ item, addCartItem }) => {
  const { name, price, imgUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => addCartItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = { addCartItem };

export default connect(mapStateToProps, mapDispatchToProps)(collectionItem);
