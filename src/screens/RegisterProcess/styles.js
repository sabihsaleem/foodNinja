import {StyleSheet} from 'react-native';
import {Colors, FontSizes, globalStyles} from '../../common';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    marginHorizontal: wp('6.3'),
    marginTop: wp('16.5%'),
  },
  header: {
    ...FontSizes.BentonSansBoldBold,
    width: wp('68%'),
    lineHeight: 30,
  },
  subHeader: {
    ...FontSizes.RegularBook,
    width: wp('60.8%'),
    lineHeight: 25,
    marginVertical: wp('5%'),
  },
  button: {
    paddingHorizontal: wp('15.3%'),
  },
  customTextInputContainer: {
    marginBottom: wp('56%'),
    ...globalStyles.shadow,
  },
  mainViewStyle: {
    marginHorizontal: wp('3.6%'),
  },
});
