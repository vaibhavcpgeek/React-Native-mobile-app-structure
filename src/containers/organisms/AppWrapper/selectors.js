import {createSelector} from 'reselect';

const getAppData = state => {
  return state.response;
};

export const selectAppData = createSelector(getAppData, appData => appData);
