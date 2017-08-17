import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Camera from 'react-native-camera';
// import styles
import styles from '../styles/TakePicture';
import constants from '../styles/constants';

export default class TakePicture extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: null,
    headerRight:
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name='arrow-forward' size={24}
              style={{padding: 16}} color={constants.colorPrimary}/>
      </TouchableOpacity>,
    headerStyle: {  position: 'absolute',
                    backgroundColor: 'transparent',
                    zIndex: 100,
                    top: 0,
                    left: 0,
                    right: 0
                  },
  });

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}
