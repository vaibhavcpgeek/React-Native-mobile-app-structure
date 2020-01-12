import {FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from './constants';

export const fetchData = () => ({
  type: FETCH_DATA,
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  data,
});

export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  error,
});
