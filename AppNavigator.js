import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './LoginPage';
import Home from './Home';

const { Navigator , Screen} = createNativeStackNavigator();

function appNavigator() {
  return (
    <NavigationContainer>
    <Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
      <Screen name='LoginPage' component={LoginPage} />
      <Screen name='Home' component={Home}/>
     
    </Navigator>
  </NavigationContainer>

  )
}

export default appNavigator;