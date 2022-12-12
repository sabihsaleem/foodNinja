/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View>
          <Text>Login</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
