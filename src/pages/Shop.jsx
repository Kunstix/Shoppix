import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../components/shop/CollectionsOverview';
import Collection from '../pages/Collection';

const Shop = ({ match }) => {
  return (
    <div className='shop'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
