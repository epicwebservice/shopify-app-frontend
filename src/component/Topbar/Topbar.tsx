import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TopBarStyle} from './TopBar.style';
import {MenuIcon, SearchIcon} from '../AppIcon/TopBar.icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {WhislistIcon, CartIcon} from '../AppIcon/Navbar.icon';

export default function Topbar(): React.JSX.Element {
  return (
    <View style={TopBarStyle.topBarContainer}>
      <View style={TopBarStyle.itemContainer}>
        <TouchableOpacity>
          <MenuIcon fill="grey" height={hp('5%')} width={wp('5%')} />
        </TouchableOpacity>
        <View>
          {/* <Text>Shopify</Text> */}
        </View>
        <View style={TopBarStyle.rightIconContainer}>
          <TouchableOpacity>
            <SearchIcon fill="grey" height={hp('6%')} width={wp('6%')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <WhislistIcon fill="grey" height={hp('6%')} width={wp('6%')} />
          </TouchableOpacity>
          <TouchableOpacity style={{position: 'relative'}}>
            <View style={TopBarStyle.cartItemCount}>
                <Text style={TopBarStyle.countTxt}>7</Text>
            </View>
            <CartIcon fill="grey" height={hp('6%')} width={wp('6%')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
