import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollections } from '../redux/actions/collectionActions';
import Spinner from '../components/spinner/Spinner';

const CollectionContainer = lazy(() => import('./CollectionContainer'));
const CollectionsOverviewContainer = lazy(() =>
  import('../components/shop/CollectionsOverviewContainer')
);

const Shop = ({ fetchCollections, match }) => {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div className='shop'>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </div>
  );
};

export default connect(null, { fetchCollections })(Shop);
