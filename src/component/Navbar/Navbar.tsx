import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/HomeScreen/Home.screen';
import {
  AccountIcon,
  CartIcon,
  HomeIcon,
  WhislistIcon,
} from '../AppIcon/Navbar.icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import WishlistScreen from '../../screen/wishlist/Wishlist.screen';
import CartScreen from '../../screen/cart/Cart.screen';
import AccountScreen from '../../screen/account/Account.screen';
const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: wp(15),
          display: 'flex',
        },
        tabBarLabelStyle: {color: 'grey', fontSize: wp('3.5%')},
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <HomeIcon fill="grey" height={hp('6%')} width={wp('6%')} />
          ),
        }}
      />
      <Tab.Screen
        name="Whislist"
        component={WishlistScreen}
        options={{
          tabBarIcon: () => (
            <WhislistIcon fill="grey" height={hp('6%')} width={wp('6%')} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            <CartIcon fill="grey" height={hp('6%')} width={wp('6%')} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: () => (
            <AccountIcon fill="grey" height={hp('6%')} width={wp('6%')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
