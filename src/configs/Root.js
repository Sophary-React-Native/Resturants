//library
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './Route';
// import { Provider } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
// import configureStore from '../store/configureStore';

registerScreens();


// const store = configureStore();
export default class Root extends Component {
  constructor (props) {
    super(props)
    this.startApplication()
  }

  startApplication () {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'pinScreen',
        navigatorStyle: {
          navBarHidden: true
        }
      }
    });
  }
}
