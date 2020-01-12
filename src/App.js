/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';
import AppWrapper from './containers/organisms/AppWrapper/AppWrapper';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppWrapper />
      </Provider>
    );
  }
}
