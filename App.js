
import React, { Component } from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';

import FirstPage from './src/component/FirstPage';
import SecondPage from './src/component/SecondPage';
//import all the screens we are going to switch

const RootStack = createStackNavigator({
    //Constant which holds all the screens like index of any book
    FirstPage: { screen: FirstPage },
    //First entry by default be our first screen if we do not define initialRouteName
    SecondPage: { screen: SecondPage },
  },
  {
    initialRouteName: 'FirstPage',
  }
);
const App = createAppContainer(RootStack);
export default App;
