/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '@common';
const CustomButton = ({title, onPress, customStyles}) => {
  return (
    <LinearGradient
      colors={[Colors.PrimaryGreenLight, Colors.PrimaryGreenDark]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[styles.linearGradient, customStyles]}>
      <TouchableOpacity style={styles.btnNext} onPress={onPress}>
        <Text style={styles.btnNextText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CustomButton;
