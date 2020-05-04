import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../components/shop/CollectionItem';
import { selectCollection } from '../redux/selectors/shopSelector';

import {
  CollectionContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
