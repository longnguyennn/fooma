import React from 'react';
import {StyleSheet} from 'react-native';
import constants from './constants.js';

export const colors = {
  'activeTintColor': constants.colorAccent,
  'inactiveTintColor': '#9E9E9E',
  'rippleColor': constants.colorAccent,
};

export const styles = StyleSheet.create({
  bar: {
    height: constants.navbarHeight,
    elevation: constants.navbarElevation,
    justifyContent: 'center',
    backgroundColor: constants.colorPrimary,
  },
  indicator: {
    height: 0,
  }
});
