import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from './CollectionsOverview';
import WithSpinner from '../../components/spinner/WithSpinner';
import { selectIsFetching } from '../../redux/selectors/shopSelector';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
