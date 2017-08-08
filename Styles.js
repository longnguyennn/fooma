import React from "react";
import {StyleSheet} from "react-native";

export const colors = {
  'colorAccent': '#F5F5F5',
};

export const values = {
  'navbarHeight': 56,
  'navbarElevation': 4,
};

export const global = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'stretch',
  },
  appbar: {
    flexDirection: 'row',
    // material design guideline - 56dp height, 4dp elevation for appbar
    height: values.navbarHeight,
    elevation: values.navbarElevation,
    // set layout property
    backgroundColor: colors.colorAccent,
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
    height: values.navbarHeight,
    elevation: values.navbarElevation,
    // alignSelf: 'stretch',
    // set layout property
    backgroundColor: colors.colorAccent,
    // justifyContent: 'space-between',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    color: '#424242',
    // color: colors.color_accent,
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
