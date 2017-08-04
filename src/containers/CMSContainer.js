import React, { Component } from 'react';
import { WebView, Dimensions } from 'react-native';

class CMSContainer extends Component {
  render () {
    return (
      <WebView
        source={{uri: 'https://www.youtube.com/'}}
        style={{width: Dimensions.get('window').width}}
        scalesPageToFit
      />
    )
  }
}

export default CMSContainer;
