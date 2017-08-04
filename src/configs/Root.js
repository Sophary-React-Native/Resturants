//library
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
// import { Provider } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
// import configureStore from '../store/configureStore';

//components
import App from '../containers/App';

// const store = configureStore();
export default class Root extends Component {
  render () {
    return (
        <App />
    )
  }
}
