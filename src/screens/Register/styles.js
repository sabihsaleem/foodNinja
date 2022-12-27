import {StyleSheet} from 'react-native';
import {Colors, FontSizes, Fonts, globalStyles} from '../../common';
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
  },
  container: {
    backgroundColor: Colors.White,
    flex: 1,
    marginBottom: wp('8%'),
  },
  header: {
    ...FontSizes.ComicNeueMediumXXMedium,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: wp('10%'),
    marginTop: -wp('2%'),
  },
  customTextInputContainer: {
    marginVertical: wp('3%'),
    ...globalStyles.shadow,
  },
  mainViewStyle: {
    marginVertical: wp('0%'),
  },
  customTextInput: {
    ...FontSizes.Body,
    lineHeight: hp('1.65%'),
  },
  button: {
    paddingHorizontal: wp('8%'),
  },
  confirmView: {
    marginVertical: wp('4.83%'),
    marginHorizontal: wp('6.3%'),
  },
  seperator: {
    marginVertical: wp('3%'),
  },
});
