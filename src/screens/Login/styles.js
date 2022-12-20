import {StyleSheet} from 'react-native';
import {Colors, FontSizes, Fonts} from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.Snow,
  },
  imageBackground: {
    resizeMode: 'cover',
    width: wp('100%'),
    height: hp('40%'),
  },
  container: {
    backgroundColor: Colors.White,
  },
});
