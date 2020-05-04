import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsFetching } from '../redux/selectors/shopSelector';
import WithSpinner from '../components/spinner/WithSpinner';
import Collection from './Collection';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
