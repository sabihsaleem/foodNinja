/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import {images} from '../../assets';
import styles from './styles';

class Login extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Image source={images.pattern} style={styles.imageBackground} />
        <View style={styles.container}>
          <Text>Login</Text>
        </View>
      </View>
    );
  }
}

export default Login;
