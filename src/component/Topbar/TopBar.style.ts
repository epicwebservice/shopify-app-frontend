import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
export const TopBarStyle = StyleSheet.create({
    topBarContainer: {
        backgroundColor: '#FFFFFF',
        paddingVertical: wp('2%')
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp('5%')
    },
    rightIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp("30%"),
    },
    cartItemCount: {
        position: 'absolute',
        backgroundColor: "#DC143C",
        padding: 1,
        width: wp(5),
        right: 0,
        left: '75%',
        borderRadius: 15,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
    },
    cartItemCountConatiner: {
        position: 'relative',
    },
    countTxt: {
        color: "#FFFFFF",
        fontSize: wp(4),
        marginLeft: wp(1)
    }
})