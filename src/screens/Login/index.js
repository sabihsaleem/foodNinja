/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {icons, images} from '@assets';
import {CustomTextInput, CustomText, CustomButton} from '@components';
import styles from './styles';
import {Colors} from '@common';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  socialContainer = (title, source) => {
    return (
      <TouchableOpacity style={[styles.socailIconBtn, styles.row]}>
        <Image source={source} style={styles.socailIcon} />
        <Text style={styles.socailIconBtnText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  imagesContainer = () => {
    return (
      <View style={styles.imagesContainer}>
        <Image source={images.pattern} style={styles.imageBackground} />
        <Image source={images.logo} style={styles.logo} />
      </View>
    );
  };

  customTextInputContainer = () => {
    return (
      <View style={styles.customTextInputContainer}>
        <CustomTextInput
          title={'Email'}
          backgroundColor={Colors.Snow}
          placeholderTextColor={Colors.LavanderBlosssomGrey}
          returnKeyType={'next'}
          isLeft={false}
          mainViewStyle={styles.mainViewStyle}
          styleTextInput={styles.customTextInput}
        />
        <CustomTextInput
          title={'Password'}
          backgroundColor={Colors.Snow}
          placeholderTextColor={Colors.LavanderBlosssomGrey}
          returnKeyType={'next'}
          isLeft={false}
          styleTextInput={styles.customTextInput}
        />
      </View>
    );
  };

  forgotPassword = () => {
    return (
      <CustomText
        title="Forgot Your Password?"
        customStyles={styles.forgotPasword}
      />
    );
  };

  button = () => {
    return <CustomButton title="Login" customStyles={styles.button} />;
  };

  render() {
    return (
      <View style={styles.main}>
        {this.imagesContainer()}

        <View style={styles.container}>
          <Text style={styles.header}>Login To Your Account</Text>
          {this.customTextInputContainer()}

          <Text style={styles.contextText}>Or Continue With</Text>
          <View style={[styles.socialContainer, styles.row]}>
            {this.socialContainer('Facebook', icons.facebook)}
            {this.socialContainer('Google', icons.google)}
          </View>
          {this.forgotPassword()}
          {this.button()}
        </View>
      </View>
    );
  }
}

export default Login;
