import React, { Component } from 'react';
import { Text } from 'react-native';

export default class UserProfile extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <Text>User Profile</Text>
    );
  }
}
