/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {TouchableOpacity, Image, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import {images} from '../../assets';
import {Colors} from '../../common';

class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swipeIndex: 0,
      swipeItem: [
        {
          title:
            'Here You Can find a chef or dish for every taste and color. Enjoy!',
          header: 'Find your  Comfort Food here',
          swipeImg: images.onb,
        },
        {
          title: 'Enjoy a fast and smooth food delivery at your doorstep',
          header: 'Food Ninja is Where Your Comfort Food Lives',
          swipeImg: images.onb1,
        },
      ],
    };
  }

  onSwipe(swipeIndex) {
    this.setState({
      swipeIndex,
    });
  }

  swiper = () => {
    const {swipeItem, swipeIndex} = this.state;
    return (
      <Swiper
        showsButtons={false}
        showsPagination={false}
        index={swipeIndex}
        style={{backgroundColor: 'transparent'}}
        onIndexChanged={index => this.onSwipe(index)}
        loop={false}>
        {swipeItem?.map(item => {
          return (
            <View style={styles.slide1}>
              <Image style={styles.img} source={item?.swipeImg} />
              <Text style={styles.text}>{item?.header}</Text>
              <Text style={styles.text}>{item?.title}</Text>
            </View>
          );
        })}
      </Swiper>
    );
  };

  button = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          onNext(this.props);
        }}>
        <Text>Next</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.main}>
        {this.swiper()}
        {this.button()}
      </SafeAreaView>
    );
  }
}

export default OnBoarding;

export const onNext = props => {
  props?.navigation?.navigate('Home');
};
