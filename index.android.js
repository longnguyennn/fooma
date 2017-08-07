/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class fooma extends Component {
  render() {
    return (
      <View style={styles.appbar}>
        <TouchableOpacity style={styles.icon}>
          <Image style={{ tintColor: '#424242' }}
            source={require('./img/take-picture.png')}/>
        </TouchableOpacity>
        <Text style={styles.title}>fooma</Text>
        <TouchableOpacity style={styles.icon}>
          <Image style={{ tintColor: '#424242' }}
            source={require('./img/send-message.png')}/>
        </TouchableOpacity>
      </View>
    );
  }face

}

const styles = StyleSheet.create({
  appbar: {
    flexDirection: 'row',
    // material design guideline - 56dp height, 4dp elevation for appbar
    height: 56,
    elevation: 4,
    // 'stretch' == 'match_parent' in android
    alignSelf: 'stretch',
    // set layout property
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 16,
  },
  title: {
    color: '#424242',
    fontSize: 26,
  },
  icon: {
    padding: 16,
  },

});

AppRegistry.registerComponent('fooma', () => fooma);
