import React from 'react';
import { StyleSheet } from 'react-native';
import constants from './constants.js';

export const styles = StyleSheet.create({
  navBar: {
    height: constants.navbarHeight,
    elevation: constants.navbarElevation,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: constants.colorPrimary,
  },
});
