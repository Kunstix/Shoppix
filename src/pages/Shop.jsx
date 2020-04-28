import React, { Component } from 'react';

import CollectionPreview from '../components/shop/CollectionPreview';
import SHOP_DATA from './shopData.js';

class Shop extends Component {
  state = { collections: SHOP_DATA };

  render() {
    const { collections } = this.state;
    return (
      <div className='shop'>
        {collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
