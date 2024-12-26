import React from 'react';
import {Text, View} from 'react-native';
import Topbar from '../../component/Topbar/Topbar';

export default function CartScreen() {
  return (
    <View style={{flex: 1}}>
      <Topbar />
      <Text>This is my Cart component</Text>
    </View>
  );
}
