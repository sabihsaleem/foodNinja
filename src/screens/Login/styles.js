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
    // width: wp('50%'),
    // height: hp('25%'),
  },
  container: {
    backgroundColor: Colors.White,
    flex: 1,
    marginBottom: wp('10%'),
  },
  header: {
    ...FontSizes.ComicNeueMediumXXMedium,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: wp('10%'),
    marginTop: -wp('2%'),
  },
  contextText: {
    ...FontSizes.RegularRegular,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
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
  socialContainer: {
    justifyContent: 'space-between',
    marginHorizontal: wp('7%'),
    marginVertical: wp('5%'),
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
    ...globalStyles.shadow,
  },
  socailIcon: {
    width: wp('6.5%'),
    height: wp('6.5%'),
    resizeMode: 'cover',
    marginHorizontal: wp('3%'),
  },
  button: {
    paddingHorizontal: wp('12%'),
  },
});
