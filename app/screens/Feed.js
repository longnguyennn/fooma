import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import TakePicture from './TakePicture';
//  import style
import { styles } from '../styles/feedStyle';

export class Feed extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigate('TakePicture')}>
          <Icon name='photo-camera' size={24}
                style={{padding: 16}} color='#9E9E9E'/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='near-me' size={24}
                style={{padding: 16}} color='#9E9E9E'/>
        </TouchableOpacity>
      </View>
    );
  }
}


export default FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
  },
  TakePicture: {
    screen: TakePicture,
  },
},  {
  navigationOptions: {
    header: null
  }
})
