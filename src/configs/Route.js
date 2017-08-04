import React from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';

import CMSContainer from '../../src/containers/CMSContainer';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="CMSContainer" component={CMSContainer} title="CIF" hideNavBar/>
  </Scene>
);

export default scenes;
