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
import { Icon, Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
// put all styling components in styles.js
// import * as style from "./Styles";



import App from './app/index';

// export default class fooma extends Component {
export class fooma extends Component {
  static navigationOptions = {
    headerLeft:
      <TouchableOpacity>
        <Icon name="photo-camera"
          size={24}
          color="#424242"/>
      </TouchableOpacity>,
    headerRight:
      <TouchableOpacity>[]
        <Icon name="near-me"
          size={24}
          color="#424242"/>
      </TouchableOpacity>,
    title: "LOGO",
    headerStyle: {
      // backgroundColor: 'red',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      // alignItems: 'center',
     },
    headerTintColor: 'black',
  };

  render() {
    return ( <View/>
      // <View style={style.global.container}>
      //   <View style={style.global.appbar}>
      //     <TouchableOpacity style={style.global.icon}>
      //       <Icon name="photo-camera"
      //         size={24}
      //         color="#424242"/>
      //     </TouchableOpacity>
      //     <Text style={style.global.title}>fooma</Text>
      //     <TouchableOpacity style={style.global.icon}>
      //       <Icon name="near-me"
      //         size={24}
      //         color="#424242"/>
      //     </TouchableOpacity>
      //   </View>
      //   {/* <ScrollView style={styles.scrollView}>
      //     <Image style={{ tintColor: '#424242' }}
      //       source={require('./img/send-message.png')}/>
      //   </ScrollView> */}
      //   <View style={style.global.btmNavbar}>
      //   </View>
      // </View>
    );
  }face

}
//
// const SimpleApp = StackNavigator({
//   Home: { screen: fooma },
// });

AppRegistry.registerComponent('fooma', () => App);
