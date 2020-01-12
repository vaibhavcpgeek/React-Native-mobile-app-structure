import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import allSagas from './rootSaga';
import rootReducer from './reducers';
import {composeWithDevTools} from 'remote-redux-devtools';

const sagaMiddleware = createSagaMiddleware();

// The following enables Redux debugging in React Native Debugger with a fallback for the browser.
// Why? React Native Debugger allows for inspecting network requests.
const composer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools;

const composeEnhancer = composer({
  realtime: true,
  hostname: 'localhost',
  name: Platform.OS,
  port: 56789,
});

const enhancers = composeEnhancer(applyMiddleware(sagaMiddleware));

const configureStore = () => {
  const store = createStore(rootReducer, enhancers);
  sagaMiddleware.run(allSagas);
  return store;
};

export default configureStore;
