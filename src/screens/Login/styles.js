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
  imagesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    resizeMode: 'cover',
    width: wp('100%'),
    height: hp('40%'),
  },
  logo: {
    resizeMode: 'cover',
    position: 'absolute',
    // width: wp('50%'),
    // height: hp('25%'),
  },
  container: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  header: {
    ...FontSizes.ComicNeueMediumXXMedium,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  contextText: {
    ...FontSizes.RegularRegular,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  socialContainer: {
    justifyContent: 'space-between',
    marginLeft: wp('7%'),
    marginRight: wp('7%'),
  },
  socailIconBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('6%'),
    backgroundColor: Colors.Snow,
    width: wp('38.5%'),
    borderRadius: wp('4%'),
    borderWidth: 1,
    borderColor: Colors.White,
  },
  socailIcon: {
    width: wp('6.5%'),
    height: wp('6.5%'),
    resizeMode: 'cover',
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
  },
  socailIconBtnText: {},
  forgotPasword: {},
});
