import {FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from './constants';

const initialState = {
  isFetching: false,
  data: {},
};

const appReducer = (state = initialState, {type, data, error}) => {
  switch (type) {
    case FETCH_DATA:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data,
      });
    case FETCH_DATA_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error,
      });
    default:
      return state;
  }
};

export default appReducer;
