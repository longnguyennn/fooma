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
  ScrollView,
} from 'react-native';

export default class fooma extends Component {
  render() {
    return (
      <View style={styles.container}>
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
        {/* <ScrollView style={styles.scrollView}>
          <Image style={{ tintColor: '#424242' }}
            source={require('./img/send-message.png')}/>
        </ScrollView> */}
        <View style={styles.btmNavbar}>
          <View style={styles.icon}>
            <Image style={{ tintColor: '#424242' }}
              source={require('./img/home.png')}/>
          </View>
          <View style={styles.icon}>
            <Image style={{ tintColor: '#424242' }}
              source={require('./img/search.png')}/>
          </View>
          <View style={styles.icon}>
            <Image style={{ tintColor: '#424242' }}
              source={require('./img/add.png')}/>
          </View>
          <View style={styles.icon}>
            <Image style={{ tintColor: '#424242' }}
              source={require('./img/favorite.png')}/>
          </View>
          <View style={styles.icon}>
            <Image style={{ tintColor: '#424242' }}
              source={require('./img/profile.png')}/>
          </View>

        </View>
      </View>
    );
  }face

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'stretch',
  },
  appbar: {
    flexDirection: 'row',
    // material design guideline - 56dp height, 4dp elevation for appbar
    height: 56,
    elevation: 4,
    // set layout property
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 16,
  },
  btmNavbar: {
    // set position at the btm of the screen
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    // material design guideline - 56dp height, 4dp elevation for appbar
    height: 56,
    elevation: 4,
    // alignSelf: 'stretch',
    // set layout property
    backgroundColor: '#F5F5F5',
    // justifyContent: 'space-between',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    color: '#424242',
    fontSize: 26,
  },
  icon: {
    padding: 16,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'red',
    // padding: 30,
  },
});

AppRegistry.registerComponent('fooma', () => fooma);
