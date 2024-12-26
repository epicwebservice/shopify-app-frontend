import React from 'react';
import {Text, View} from 'react-native';
import Topbar from '../../component/Topbar/Topbar';

export default function WishlistScreen() {
  return (
    <View style={{flex: 1}}>
      <Topbar />
      <Text>This is my home component</Text>
    </View>
  );
}
