import React from 'react';
import { Navigation } from 'react-native-navigation';

import CMSContainer from '../../src/containers/CMSContainer';
import PinContainer from '../../src/containers/PinContainer'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('pinScreen', () => PinContainer);
  Navigation.registerComponent('cmsScreen', () => CMSContainer);
}
