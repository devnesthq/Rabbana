/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {  createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
// pages
import Index from './page/index'

const AppNavigator = createStackNavigator({
  Index : { screen: Index },
},
  {
    initialRouteName: "Index",
    headerMode: "none"
  }
)

const AppContainer = createAppContainer(AppNavigator);


const App = () => {
  return (
    <AppContainer />
  );
};


export default App;
