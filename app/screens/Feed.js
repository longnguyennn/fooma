import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

export default class Feed extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft:
      <TouchableOpacity onPress={() => navigation.navigate('TakePicture')}>
        <Icon name='photo-camera' size={24}
              style={{padding:16}} color='#9E9E9E' />
      </TouchableOpacity>,
    headerRight:
      <TouchableOpacity>
        <Icon name='near-me' size={24}
              style={{padding: 16}} color='#9E9E9E'/>
      </TouchableOpacity>
  });

  render() {
    return (
      <Text>This is the feed</Text>
    );
  }
}
