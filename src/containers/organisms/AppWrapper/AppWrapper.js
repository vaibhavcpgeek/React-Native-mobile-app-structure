import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {fetchData} from './actions';
import AppWrapper from '../../../components/organisms/AppWrapper';
import {selectAppData} from './selectors';

const mapStateToProps = createStructuredSelector({
  data: selectAppData,
});

export const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
