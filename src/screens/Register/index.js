/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, KeyboardAvoidingView} from 'react-native';
import {icons, images} from '@assets';
import {
  CustomTextInput,
  CustomText,
  CustomButton,
  CustomCheckBox,
} from '@components';
import styles from './styles';
import {Colors} from '@common';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      isChecked: false,
    };
  }

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
          title={'User Name'}
          backgroundColor={Colors.Snow}
          placeholderTextColor={Colors.LavanderBlosssomGrey}
          returnKeyType={'next'}
          isLeft={true}
          mainViewStyle={styles.mainViewStyle}
          styleTextInput={styles.customTextInput}
          leftIconSource={icons.Profile}
        />
        <CustomTextInput
          title={'Email'}
          backgroundColor={Colors.Snow}
          placeholderTextColor={Colors.LavanderBlosssomGrey}
          returnKeyType={'next'}
          isLeft={true}
          styleTextInput={styles.customTextInput}
          leftIconSource={icons.Message}
        />
        <CustomTextInput
          title={'Password'}
          backgroundColor={Colors.Snow}
          placeholderTextColor={Colors.LavanderBlosssomGrey}
          returnKeyType={'done'}
          isLeft={true}
          styleTextInput={styles.customTextInput}
          leftIconSource={icons.Lock}
          isRight={true}
        />
      </View>
    );
  };

  alreadyHaveAnAccount = () => {
    return (
      <CustomText
        title="already have an account?"
        customStyles={styles.alreadyHaveAnAccount}
      />
    );
  };

  button = () => {
    return <CustomButton title="Create Account" customStyles={styles.button} />;
  };

  confirm = () => {
    const {isChecked} = this.state;
    return (
      <View style={styles.confirmView}>
        <CustomCheckBox
          onPress={() => {
            this.setState({
              isChecked: !isChecked,
            });
          }}
          Checked={isChecked}
          title="Keep Me Signed In"
          titleColor={Colors.Black}
        />
        <View style={styles.seperator} />
        <CustomCheckBox
          onPress={() => {
            this.setState({
              isChecked: !isChecked,
            });
          }}
          Checked={isChecked}
          title="Email Me About Special Pricing"
          titleColor={Colors.Black}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.main}>
        {this.imagesContainer()}

        <View style={styles.container}>
          <Text style={styles.header}>Sign Up For Free</Text>
          {this.customTextInputContainer()}
          {this.confirm()}
          {this.button()}
          {this.alreadyHaveAnAccount()}
        </View>
      </View>
    );
  }
}

export default Register;
