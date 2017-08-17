import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Feed extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Text>Upload Photo</Text>
    );
  }
}
