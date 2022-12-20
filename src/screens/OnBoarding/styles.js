import {StyleSheet} from 'react-native';
import {FontSizes} from '@common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  main: {
    flex: 1,
  },
  img: {
    resizeMode: 'cover',
    marginBottom: wp('12%'),
    width: wp('100%'),
    height: hp('50%'),
    marginTop: wp('6%'),
  },
  slide1: {
    marginTop: wp('8%'),
    flex: 1,
    alignItems: 'center',
  },
  header: {
    ...FontSizes.BoldXBold,
    textAlign: 'center',
  },
  title: {
    width: wp('60%'),
    ...FontSizes.Regular,
    textAlign: 'center',
    marginTop: wp('6%'),
    lineHeight: 20,
  },
});
