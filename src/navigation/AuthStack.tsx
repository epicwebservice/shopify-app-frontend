import React from 'react';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainContainer from '../screen/maincontainer/MainContainer.screen';

export default function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="MainContainer"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainContainer" component={MainContainer} />
    </Stack.Navigator>
  );
}
