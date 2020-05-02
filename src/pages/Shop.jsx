import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import axios from 'axios';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../firebase/firebaseUtils';
import CollectionsOverview from '../components/shop/CollectionsOverview';
import Collection from '../pages/Collection';
import WithSpinner from '../components/spinner/WithSpinner';
import { updateCollections } from '../redux/actions/collectionActions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends Component {
  state = {
    loading: true
  };
  unsubsribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then(snapshot => {
      this.props.updateCollections(convertCollectionsSnapshotToMap(snapshot));
      this.setState({ loading: false });
    });
    /*     collectionRef.onSnapshot(async snapshot => {
      this.props.updateCollections(convertCollectionsSnapshotToMap(snapshot));
      this.setState({ loading: false });
    }); */
    /*     axios
      .get(
        'https://firestore.googleapis.com/v1/projects/shoppix-df2b1/databases/(default)/documents/collections'
      )
      .then(res => console.log(res)); */
  }

  componentWillUnmount() {}

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className='shop'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

export default connect(null, { updateCollections })(Shop);
