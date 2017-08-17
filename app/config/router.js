import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
// import screens
import TakePicture from '../screens/TakePicture';
import Feed from '../screens/Feed';
import UploadPhoto from '../screens/UploadPhoto';
import UserProfile from '../screens/UserProfile';
//  import style
import * as bottomTabbar from '../styles/BottomTabbar';

export const FeedTab = TabNavigator( {
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon type='material-community' name='newspaper'
                                      color={tintColor} />,
    },
  },
  UploadPhoto: {
    screen: UploadPhoto,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon type='material-community' name='plus-box-outline'
                                      size={24}color={tintColor} />,
    },
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name='account-circle'
                                      color={tintColor} />,
    },
  },
},  {
  tabBarOptions: {
    activeTintColor: bottomTabbar.colors.activeTintColor,
    inactiveTintColor: bottomTabbar.colors.inactiveTintColor,
    showIcon: true,
    showLabel: false,
    style: bottomTabbar.styles.bar,
    indicatorStyle: bottomTabbar.styles.indicator,
    pressColor: bottomTabbar.colors.rippleColor,
  },
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
},
);

export const Root = StackNavigator({
  FeedTab: {
    screen: FeedTab,
  },
  TakePicture: {
    screen: TakePicture,
  },
},  {
  // ...
});
