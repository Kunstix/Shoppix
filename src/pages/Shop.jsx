import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../components/shop/CollectionsOverviewContainer';
import CollectionContainer from '../pages/CollectionContainer';
import { fetchCollections } from '../redux/actions/collectionActions';

class Shop extends Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

export default connect(null, { fetchCollections })(Shop);
