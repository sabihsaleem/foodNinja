/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import {CustomTextInput, CustomButton, CustomHeader} from '@components';
import {Colors} from '@common';

const RegisterProcess = () => {
  const header = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Fill in your bio to get started</Text>
        <Text style={styles.subHeader}>
          This data will be displayed in your account profile for security
        </Text>
      </View>
    );
  };

  const customTextInputContainer = () => {
    return (
      <View style={styles.customTextInputContainer}>
        <CustomTextInput
          title={'First Name'}
          backgroundColor={Colors.Snow}
          placeholderTextColor={Colors.LavanderBlosssomGrey}
          returnKeyType={'next'}
          isLeft={false}
          mainViewStyle={styles.mainViewStyle}
        />
        <CustomTextInput
          title={'Last Name'}
          backgroundColor={Colors.Snow}
          placeholderTextColor={Colors.LavanderBlosssomGrey}
          returnKeyType={'next'}
          isLeft={false}
          mainViewStyle={styles.mainViewStyle}
        />
        <CustomTextInput
          title={'Mobile Number'}
          backgroundColor={Colors.Snow}
          placeholderTextColor={Colors.LavanderBlosssomGrey}
          returnKeyType={'done'}
          isLeft={false}
          mainViewStyle={styles.mainViewStyle}
        />
      </View>
    );
  };

  const button = () => {
    return <CustomButton title="Next" customStyles={styles.button} />;
  };

  return (
    <SafeAreaView style={styles.main}>
      <CustomHeader hasSafeArea={true} />
      {header()}
      {customTextInputContainer()}
      {button()}
    </SafeAreaView>
  );
};

export default RegisterProcess;
