import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navbar from '../../component/Navbar/Navbar';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return <Navbar />;
}
